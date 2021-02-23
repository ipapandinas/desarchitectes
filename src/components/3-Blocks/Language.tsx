import React, { FC, useCallback } from 'react'
import styled from 'styled-components'

import Separator from 'components/1-Atoms/Separator'

import { usePageContext } from 'hooks'

const StyledLanguage = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.invertedContrast};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5000;

  ${({ theme }) =>
    `
      ${theme.mediaQueries.lg} {
        flex-direction: row;
      }
  `}
`

const StyledLanguageLink = styled.a`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.contrast};
  font-size: 2.5rem;
  padding-bottom: 0;
  text-decoration: none;

  ${({ theme }) =>
    `
      ${theme.mediaQueries.lg} {
        margin: 0;
        height: 100%;
        width: 50%;
        display: grid;
        place-content: center;

        &:hover {
          background: ${theme.colors.contrast};
          color: ${theme.colors.invertedContrast};
          z-index: 10;
          transition: background 0.25s ease-in-out;
        }
      }
  `}
`

const ESLanguageLink = styled(StyledLanguageLink)`
  font-family: 'AveriaSerif-Regular';
  margin-left: 7rem;

  ${({ theme }) =>
    `
      ${theme.mediaQueries.lg} {
        padding-top: 5rem;
        margin-bottom: 0;
        margin-left: 0;
  `}
`

const FRLanguageLink = styled(StyledLanguageLink)`
  font-family: 'TimesNewRoman';
  margin-bottom: 1rem;
  margin-left: -7rem;

  ${({ theme }) =>
    `
      ${theme.mediaQueries.lg} {
        padding-bottom: 5rem;
        margin-bottom: 0;
        margin-left: 0;
      }
  `}
`

const Language: FC = () => {
  const { pageData } = usePageContext() ?? {}
  const routeName = pageData?.routeName

  const getUri = useCallback(
    (lang: string) => {
      if (routeName === undefined) {
        return `/${lang}`
      }

      return `/${lang}/${routeName}`
    },
    [routeName]
  )

  return (
    <StyledLanguage className='fade-in'>
      <FRLanguageLink href={getUri('fr')}>français</FRLanguageLink>
      <Separator />
      <ESLanguageLink href={getUri('es')}>español</ESLanguageLink>
    </StyledLanguage>
  )
}

export default Language
