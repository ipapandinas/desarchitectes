import React, { FC, memo } from 'react'
import styled from 'styled-components'

const StyledDots = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  background-color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
  border-radius: ${({ theme }) => theme?.radii?.circle ?? '50%'};
  margin: 10rem 0;
`

const Dots: FC = memo(() => <StyledDots />)

export default Dots
