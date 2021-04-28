import React, { FC, memo, useCallback, useMemo } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import SuggestionsPreview from 'components/2-Molecules/Suggestions/SuggestionsPreview'
import { SuggestionsProps } from 'types/articles'

interface Props {
  isPreview: boolean
  resetLetter: () => void
  results: SuggestionsProps[]
  runLetterIdx: number
  runLetterRef: HTMLButtonElement | null
  setPreview: (value: boolean) => void
  sortAsc: boolean
}

const PreviewWrapper = styled(animated.div)`
  width: calc(300vw - 5rem);
  grid-row: 1;
`

const PreviewGrid = styled.div<SpaceProps>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradients.prewiewWhite};
  border: 0;
  display: grid;
  grid-template-columns: 1fr 15%;
  text-align: right;
  ${space}
`

const StyledCloseButton = styled.button`
  outline: none;
`

const Preview: FC<Props> = memo(
  ({
    isPreview,
    resetLetter,
    results,
    runLetterIdx: idx,
    runLetterRef: ref,
    setPreview,
    sortAsc
  }) => {
    const clientHeight = useMemo(() => ref?.clientHeight ?? 0, [ref])
    const offsetTop = useMemo(() => ref?.offsetTop ?? 0, [ref])
    const triggerAnimation = useMemo(() => isPreview, [isPreview])

    const previewAnimation = useSpring({
      from: {
        opacity: 0,
        transform: 'translateX(100%)'
      },
      to: {
        opacity: 1,
        transform: 'translateX(0)'
      },
      delay: triggerAnimation ? 0 : 100,
      config: {
        tension: 460,
        friction: 60
      },
      reset: !triggerAnimation,
      reverse: !triggerAnimation,
      onRest: () => {
        if (!triggerAnimation) {
          resetLetter()
        }
      }
    })

    const handlePreviewOut = useCallback(() => {
      setPreview(false)
    }, [resetLetter, setPreview])

    if (idx === -1) {
      return null
    }

    return (
      <PreviewWrapper style={previewAnimation}>
        <PreviewGrid pr={['2rem', '4.8rem', '6.4rem']}>
          <StyledCloseButton
            type='button'
            aria-label='Close preview'
            onClick={handlePreviewOut}
          />
          <SuggestionsPreview
            handlePreviewOut={handlePreviewOut}
            idx={idx}
            positionData={{ clientHeight, offsetTop }}
            results={results}
            sortAsc={sortAsc}
          />
        </PreviewGrid>
      </PreviewWrapper>
    )
  }
)

export default Preview
