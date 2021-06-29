import React, { FC, ReactNode, useRef } from 'react'
import { useGesture } from 'react-use-gesture'
import styled, { DefaultTheme } from 'styled-components'

export enum Direction {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL'
}

export type SliderProps = {
  className?: string
  direction: Direction
  onIntent?: (value: number) => void
  onIntentStart?: (value: number) => void
  onIntentEnd?: () => void
  onChange?: (value: number) => void
  onChangeStart?: (value: number) => void
  onChangeEnd?: (value: number) => void
  onClick: (value: number) => void
  children?: ReactNode
  overlayZIndex?: number
}

interface ThemedProps {
  theme: DefaultTheme
  overlayZIndex: number
}

export const StyledSlider = styled.div`
  position: relative;
`

const StyledGestures = styled.div<ThemedProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ overlayZIndex }) => `z-index: ${overlayZIndex}`};
`

function noop() {}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getRectFromBounds(bounds: any): ClientRect {
  return typeof bounds === 'function' ? bounds() : bounds
}

function getHorizontalValue(rect: ClientRect, x: number) {
  const scrollX =
    window.pageXOffset !== undefined
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollLeft
  const pageX = scrollX + x
  const dLeft = clamp(pageX - (rect.left + scrollX), 0, rect.width)
  return dLeft / rect.width
}

function getVerticalValue(rect: ClientRect, y: number) {
  const scrollY =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop
  const pageY = scrollY + y
  const dTop = clamp(pageY - (rect.top + scrollY), 0, rect.height)
  return 1 - dTop / rect.height
}

function getSliderValue(
  bounds: any,
  direction: Direction,
  xy: number[]
): number {
  const rect = getRectFromBounds(bounds)
  return direction === Direction.HORIZONTAL
    ? getHorizontalValue(rect, xy[0])
    : getVerticalValue(rect, xy[1])
}

const Slider: FC<{ lastIntent: number } & SliderProps> = ({
  className,
  direction = Direction.HORIZONTAL,
  lastIntent,
  onIntent = noop,
  onIntentStart = noop,
  onIntentEnd = noop,
  onChange = noop,
  onChangeStart = noop,
  onChangeEnd = noop,
  onClick,
  children = null,
  overlayZIndex = 10
}) => {
  const sliderRef = useRef<HTMLInputElement>(null)
  const bounds = () => sliderRef?.current?.getBoundingClientRect()

  const bind = useGesture(
    {
      onMoveStart: ({ dragging, xy }) =>
        !dragging && onIntentStart(getSliderValue(bounds, direction, xy)),
      onMove: ({ dragging, xy }) =>
        !dragging && onIntent(getSliderValue(bounds, direction, xy)),
      onMoveEnd: ({ dragging }) => !dragging && onIntentEnd(),
      onDragStart: ({ xy }) =>
        onChangeStart(getSliderValue(bounds, direction, xy)),
      onDrag: ({ xy }) => onChange(getSliderValue(bounds, direction, xy)),
      onDragEnd: ({ xy }) => onChangeEnd(getSliderValue(bounds, direction, xy)),
      onClick: () => onClick(lastIntent)
    },
    {
      drag: {
        axis: direction === Direction.HORIZONTAL ? 'x' : 'y',
        delay: 1000,
        filterTaps: true
      }
    }
  )

  return (
    <StyledSlider className={className} ref={sliderRef}>
      {children}
      <StyledGestures {...bind()} overlayZIndex={overlayZIndex} />
    </StyledSlider>
  )
}

export default Slider
