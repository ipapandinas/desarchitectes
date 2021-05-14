import React, { FC } from 'react'
import styled from 'styled-components'

import Separator from 'components/1-Atoms/Separator'
import Link from 'components/5-Utils/Link'

const StyledLanguage = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme?.colors?.invertedContrast ?? '#FFF'};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5000;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

const StyledLanguageLink = styled(Link)`
  background: none;
  border: 0;
  color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
  font-size: 2.5rem;
  padding-bottom: 0;
  text-decoration: none;

  @media screen and (min-width: 992px) {
    margin: 0;
    height: 100%;
    width: 50%;
    display: grid;
    place-content: center;

    &:hover {
      background: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
      color: ${({ theme }) => theme?.colors?.invertedContrast ?? '#FFF'};
      z-index: 10;
      transition: background 0.25s ease-in-out;
    }
  }
`

const ESLanguageLink = styled(StyledLanguageLink)`
  font-family: 'AveriaSerif-Regular';
  margin-left: 7rem;

  @media screen and (min-width: 992px) {
    padding-top: 5rem;
    margin-bottom: 0;
    margin-left: 0;
  }
`

const FRLanguageLink = styled(StyledLanguageLink)`
  font-family: 'TimesNewRoman';
  margin-bottom: 1rem;
  margin-left: -7rem;

  @media screen and (min-width: 992px) {
    padding-bottom: 5rem;
    margin-bottom: 0;
    margin-left: 0;
  }
`

const Language: FC = () => (
  <StyledLanguage className='fade-in'>
    <FRLanguageLink lang='fr'>français</FRLanguageLink>
    <Separator />
    <ESLanguageLink lang='es'>español</ESLanguageLink>
  </StyledLanguage>
)

export default Language
