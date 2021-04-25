import React, { FC, memo } from 'react'
import { Link } from 'react-scroll'
import styled, { DefaultTheme } from 'styled-components'

import TextMedias from 'components/1-Atoms/Medias/TextMedias'

import { Media } from 'types/medias'

interface Props {
  activeTextAnchor?: string
  id: number
  medias?: Media[]
  setTextAnchor?: (textAnchor: string) => void
}

interface ThemedProps {
  theme: DefaultTheme
  isActive: boolean
}

const StyledScrollLink = styled(Link)<ThemedProps>`
  height: 100%;
  width: 100%;
  display: none;
  position: relative;
  flex-direction: column;
  margin-top: 0 !important;
  padding: 0 !important;

  ${({ isActive }) =>
    isActive &&
    `
      display: grid;
      place-items: center;
  `};
`

const ContentMedia: FC<Props> = memo(
  ({ activeTextAnchor, id, medias, setTextAnchor }) => {
    if (
      setTextAnchor === undefined ||
      !(medias instanceof Array) ||
      medias.length === 0
    ) {
      return null
    }

    return (
      <StyledScrollLink
        containerId='leftContent'
        duration={500}
        isActive={activeTextAnchor === `text-anchor-${id}`}
        offset={-190}
        onSetActive={() => setTextAnchor(`text-anchor-${id}`)}
        smooth
        spy
        to={`text-anchor-${id}`}
        key={`text-media-${id}`}
      >
        <TextMedias medias={medias} />
      </StyledScrollLink>
    )
  }
)

export default ContentMedia
