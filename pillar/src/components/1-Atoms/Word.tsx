import React, { useCallback, FC } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import Link from 'components/5-Utils/Link'

import { usePageContext } from 'hooks'

interface Props {
  isActive: boolean
  label: string
  route: string
}

interface ThemedProps {
  theme: DefaultTheme
  isActive: boolean
}

const StyledWord = styled(Link)<ThemedProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ isActive, theme }) => `
    height: ${theme.sizes.letterSlot[0]};
    color: ${isActive ? theme.colors.contrast : theme.colors.neutrals[0]};
    font-family: ${isActive ? theme.fonts.bold : 'inherit'};
    font-size: ${theme.fontSizes[2]};

    ${theme.mediaQueries.sm} {
      height: ${theme.sizes.letterSlot[1]};
      font-size: ${theme.fontSizes[4]};
    }
  `}
`

const Word: FC<Props> = ({ isActive, label, route }) => {
  const { setPreview, setWord } = usePageContext()

  const handleClick = useCallback(() => {
    setPreview(false)
    setWord(label)
  }, [label])

  return (
    <StyledWord
      isActive={isActive}
      onClick={handleClick}
      to={route}
      title={route}
    >
      {label}
    </StyledWord>
  )
}

export default Word
