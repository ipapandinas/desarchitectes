import React, { FC } from 'react'
import styled from 'styled-components'

import DesarchitectesLogo from 'assets/svg/desarchitectes.svg'

const StyledWelcomeCover = styled.div`
  position: absolute;
  z-index: 50000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  padding: 0 10rem;
  -moz-animation: WelcomeCoverAnimation 0.5s ease-in 1.8s forwards;

  /* Firefox */
  -webkit-animation: WelcomeCoverAnimation 0.5s ease-in 1.8s forwards;

  /* Safari and Chrome */
  -o-animation: WelcomeCoverAnimation 0.5s ease-in 1.8s forwards;

  /* Opera */
  animation: WelcomeCoverAnimation 0.5s ease-in 1.8s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  @keyframes WelcomeCoverAnimation {
    from {
      visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }
  }
  @-webkit-keyframes WelcomeCoverAnimation {
    from {
      visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }
  }
`

const Logo = styled(DesarchitectesLogo)`
  width: auto;
  height: 8rem;
`

const WelcomeCover: FC = () => (
  <StyledWelcomeCover>
    <Logo />
  </StyledWelcomeCover>
)

export default WelcomeCover
