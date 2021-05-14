import React, { FC, ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { layout, space, LayoutProps, SpaceProps } from 'styled-system'

export interface ContainerProps {
  children?: ReactNode
  isNoVerticalGutter?: boolean
  isNoVerticalPadding?: boolean
  isWidthContainer?: boolean
  styles?: string
}

interface ThemedProps {
  theme: DefaultTheme
  isNoVerticalGutter: boolean
  isNoVerticalPadding: boolean
}

const StyledContainer = styled.div<ThemedProps>`
  overflow: hidden;
  ${layout}
  ${space}

  ${({ theme }) =>
    `
      padding: 4.8rem 3.2rem;

      ${theme.mediaQueries.sm} {
        padding: 5.6rem 6.4rem;
      }

      ${theme.mediaQueries.lg} {
        padding: 3.8rem 10rem;
      }
  `}

${({ isNoVerticalPadding }) =>
    isNoVerticalPadding &&
    `
      padding-top: 0 !important;
      padding-bottom: 0 !important;
  `}

  ${({ isNoVerticalGutter, theme }) =>
    !isNoVerticalGutter &&
    `
    > :not(:first-child) {
      margin-top: ${theme.spacing[7]};
    }
  `}
`

const Container: FC<ContainerProps & LayoutProps & SpaceProps> = (props) => {
  const {
    children,
    isNoVerticalGutter = false,
    isNoVerticalPadding = false,
    isWidthContainer = false
  } = props

  if (isWidthContainer) {
    return (
      <StyledContainer
        isNoVerticalGutter={isNoVerticalGutter}
        isNoVerticalPadding={isNoVerticalPadding}
        maxWidth='54rem'
        mx='auto'
        {...props}
      >
        {children}
      </StyledContainer>
    )
  }

  return (
    <StyledContainer
      isNoVerticalGutter={isNoVerticalGutter}
      isNoVerticalPadding={isNoVerticalPadding}
      {...props}
    >
      {children}
    </StyledContainer>
  )
}
export default Container
