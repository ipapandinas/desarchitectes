import React, { forwardRef, useMemo } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { useAppContext } from 'hooks'

interface Props {
  active: boolean
  handleLetter: (letter: string) => void
  isPreview: boolean
  letter: string
}

interface ThemedProps {
  theme: DefaultTheme
  isActive: boolean
}

const StyledLetter = styled.button<ThemedProps>`
  width: 100%;
  position: relative;

  ${({ isActive, theme }) => `
    height: ${theme.sizes.letterSlot[0]};
    color: ${
      isActive ? theme.colors.invertedContrast : theme.colors.neutrals[1]
    };
    font-size: ${theme.fontSizes[3]};

    ${theme.mediaQueries.sm} {
      height: ${theme.sizes.letterSlot[1]};
      font-size: ${theme.fontSizes[5]};
    }
  `}

  ${({ isActive, theme }) =>
    isActive &&
    `
      &::before {
        content: '';
        position: absolute;
        top: 1.5rem;
        left: 0;
        border: 0.5rem solid transparent;
        border-left: 0.5rem solid ${theme.colors.invertedContrast};

        ${theme.mediaQueries.sm} {
          top: 2.2rem;
          border: ${theme.spacing[1]} solid transparent;
          border-left: ${theme.spacing[1]} solid #FFF;
        }
      }
    `}
`

const Letter = forwardRef<HTMLButtonElement, Props>(
  ({ active, handleLetter, isPreview, letter }, ref) => {
    const { appData } = useAppContext()
    const letters = appData.letters
    const word = appData.word

    const hasArticle = useMemo(() => letters.includes(letter), [
      letter,
      letters
    ])
    const isActive = useMemo(
      () =>
        (isPreview && active) ||
        (!isPreview && letter === word?.charAt(0).toUpperCase()),
      [active, isPreview, letter, word]
    )

    return (
      <StyledLetter
        key={letter}
        type='button'
        isActive={isActive}
        onClick={() => hasArticle && handleLetter(letter)}
        ref={ref}
      >
        {hasArticle && <span>{letter}</span>}
      </StyledLetter>
    )
  }
)

export default Letter
