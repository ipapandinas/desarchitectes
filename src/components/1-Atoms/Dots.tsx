import React, { FC, memo } from 'react'
import styled from 'styled-components'

const StyledDots = styled.div`
  height: ${({ theme }) => theme.spacing[3]};
  width: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.contrast};
  border-radius: ${({ theme }) => theme.radii.circle};
  margin: 10rem 0;
`

const Dots: FC = memo(() => <StyledDots />)

export default Dots
