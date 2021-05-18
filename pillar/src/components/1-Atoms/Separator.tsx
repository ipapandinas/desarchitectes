import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import Dots from 'components/1-Atoms/Dots'

import { useDevice } from 'hooks'

interface Props {
  className?: string
}

const Side = styled.div<SpaceProps>`
  ${space}
`

const Line = styled.div`
  height: 100%;
  width: 0.1rem;
  background: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
`

const StyledSeparator = styled.div`
  height: 100%;
  background: ${({ theme }) => theme?.colors?.invertedContrast ?? '#FFF'};
  display: flex;
  align-items: center;
  position: absolute;
`

const Separator: FC<Props> = memo(({ className }) => {
  const { isLaptop } = useDevice()

  if (!isLaptop) {
    return null
  }

  return (
    <StyledSeparator className={className}>
      <Side mr='2rem'>
        <Dots />
        <Dots />
      </Side>
      <Line />
      <Side ml='2rem'>
        <Dots />
        <Dots />
      </Side>
    </StyledSeparator>
  )
})

export default Separator
