import React, { FC } from 'react'
import styled from 'styled-components'

import { useDevice } from 'hooks'
import formatNewLine from 'services/textFormat'

interface Props {
  text: string
}

const EmptyWrapper = styled.div`
  display: block;
  height: 6rem;
`

const StyledText = styled.div`
  text-align: justify;
`

const Text: FC<Props> = ({ text }) => {
  const { isLaptop } = useDevice()

  if (text === null) {
    if (isLaptop) {
      return <EmptyWrapper />
    }
    return null
  }

  return <StyledText>{formatNewLine(text)}</StyledText>
}

export default Text
