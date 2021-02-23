import React, { FC, useCallback, useMemo } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import SuggestionsPreview from 'components/2-Molecules/Suggestions/SuggestionsPreview'

import { previewSlideIn, previewSlideOut } from 'style/keyframes'
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

interface ThemedProps {
  theme: DefaultTheme
  isPreview: boolean
}

const previewHideStyle = css`
  animation: ${previewSlideOut} 0.5s cubic-bezier(0.96, 0, 1, 1) forwards;
`

const previewVisileStyle = css`
  animation: ${previewSlideIn} 0.5s cubic-bezier(0, 0.52, 0, 1) forwards;
`

const PreviewWrapper = styled.div<ThemedProps>`
  width: auto;
  grid-row: 1;
  ${({ isPreview }) => (isPreview ? previewVisileStyle : previewHideStyle)}
`

const PreviewGrid = styled.div<SpaceProps>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradients.prewiewWhite};
  border: 0;
  display: grid;
  grid-template-columns: 1fr 40%;
  text-align: right;
  ${space}
`

const StyledCloseButton = styled.button`
  outline: none;
`

const Preview: FC<Props> = ({
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

  const handlePreviewOut = useCallback(() => {
    setPreview(false)
    setTimeout(() => resetLetter(), 500)
  }, [resetLetter, setPreview])

  return (
    <PreviewWrapper isPreview={isPreview}>
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

export default Preview
