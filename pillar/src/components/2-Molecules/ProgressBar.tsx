import React, { FC, useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import Slider, { Direction, SliderProps } from 'components/1-Atoms/Slider'

type SliderHandlersProps = {
  direction: Direction
  style: React.CSSProperties
  value: number
}

interface ProgressBarProps extends SliderProps {
  handleChange: (value: number) => void
  isEnabled: boolean
  value: number
}

interface SliderThemedProps {
  theme: DefaultTheme
  direction: Direction
  isEnabled: boolean
}

const StyledSlider = styled(Slider)<SliderThemedProps>`
  width: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? '100%' : '0.8rem'};
  height: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? '0.8rem' : '100%'};
  border-radius: 0.4rem;
  background: ${({ theme }) => `${theme.colors.neutrals[2]}`};
  transition: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s'};
  cursor: ${({ isEnabled }) => (isEnabled === true ? 'pointer' : 'default')};

  ${({ direction, theme }) =>
    `
      ${theme.mediaQueries.xl} {
        max-width: ${direction === Direction.HORIZONTAL ? '32rem' : '0.8rem'};
        max-height: ${direction === Direction.HORIZONTAL ? '0.8rem' : '13rem'};
      }
  `}
`

// A colored bar that will represent the current value
const SliderBar: FC<SliderHandlersProps> = ({ direction, value, style }) => (
  <div
    style={Object.assign(
      {},
      {
        position: 'absolute',
        bottom: 0,
        left: 0,
        background: '#888',
        borderRadius: '0.4rem'
      },
      direction === Direction.HORIZONTAL
        ? {
            top: 0,
            width: `${value * 100}%`
          }
        : {
            right: 0,
            height: `${value * 100}%`
          },
      style
    )}
  />
)

// A handle to indicate the current value
const SliderHandle: FC<SliderHandlersProps> = ({ direction, value, style }) => (
  <div
    style={Object.assign(
      {},
      {
        position: 'absolute',
        width: '1.6rem',
        height: '1.6rem',
        background: '#cf6767',
        borderRadius: '100%',
        transform: 'scale(1)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.3)'
        }
      },
      direction === Direction.HORIZONTAL
        ? {
            top: 0,
            left: `${value * 100}%`,
            marginTop: '-0.4rem',
            marginLeft: '-0.8rem'
          }
        : {
            left: 0,
            bottom: `${value * 100}%`,
            marginBottom: '-0.8rem',
            marginLeft: '-0.4rem'
          },
      style
    )}
  />
)

const ProgressBar: FC<ProgressBarProps> = ({
  className,
  direction,
  handleChange,
  isEnabled = false,
  value,
  ...props
}) => {
  const defaultValue = isNaN(value) ? 0 : value
  const [draggingValue, setDraggingValue] = useState<number>(defaultValue)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [lastIntent, setLastIntent] = useState<number>(0)

  const handleChangeStart = () => {
    setIsDragging(true)
  }

  const handleChangeEnd = (value: number) => {
    handleChange(value)
    setIsDragging(false)
  }

  return (
    <StyledSlider
      className={className}
      direction={direction}
      isEnabled={isEnabled}
      lastIntent={lastIntent}
      onChange={setDraggingValue}
      onChangeEnd={handleChangeEnd}
      onChangeStart={handleChangeStart}
      onIntent={setLastIntent}
      {...props}
    >
      <SliderBar
        direction={direction}
        value={1}
        style={{ background: '#eee' }}
      />
      <SliderBar
        direction={direction}
        value={isDragging ? draggingValue : isNaN(value) ? 0 : value}
        style={{ background: isEnabled ? '#000' : '#878c88' }}
      />
      <SliderBar
        direction={direction}
        value={lastIntent}
        style={{ background: 'rgba(0, 0, 0, 0.05)' }}
      />
      <SliderHandle
        direction={direction}
        value={isDragging ? draggingValue : isNaN(value) ? 0 : value}
        style={{ background: isEnabled ? '#000' : '#878c88' }}
      />
    </StyledSlider>
  )
}

export default ProgressBar
