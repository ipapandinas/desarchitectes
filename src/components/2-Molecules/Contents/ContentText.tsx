import React, { FC } from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import Text from 'components/1-Atoms/Text'

interface Props {
  activeTextAnchor?: string
  id: number
  text: string
}

const StyledElement = styled(Element)`
  position: relative;

  &:nth-child(2) {
    margin-top: 0 !important;
  }
`

const StyledActiveTextAnchor = styled.div`
  height: 100%;
  width: 0.2rem;
  background: ${({ theme }) => theme.colors.contrast};
  position: absolute;
  top: 0;
  left: -2rem;
`

const ContentText: FC<Props> = ({ activeTextAnchor, id, text }) => (
  <StyledElement name={`text-anchor-${id}`} key={`text-${id}`}>
    {activeTextAnchor === `text-anchor-${id}` && text !== null && (
      <StyledActiveTextAnchor />
    )}
    <Text text={text} />
  </StyledElement>
)

export default ContentText
