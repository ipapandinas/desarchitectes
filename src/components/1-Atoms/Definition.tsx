import React, { FC } from 'react'
import styled from 'styled-components'

import formatNewLine from 'services/textFormat'
import { DefinitionProps as Props } from 'types/articles'

const Name = styled.div`
  background-color: ${({ theme }) => theme.colors.contrast};
  border-radius: ${({ theme }) => theme.radii.block};
  color: ${({ theme }) => theme.colors.invertedContrast};
  display: inline-block;
  line-height: 1.7;
  margin: ${({ theme }) => `0 0 ${theme.spacing[0]}`};
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[1]}`};
`

const Type = styled.div`
  font-family: ${({ theme }) => theme.fonts.italic};
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.italic};
`

const Definition: FC<Props> = ({ link, name, text, type }) => (
  <div>
    {name !== '' && <Name>{name}</Name>}
    {type !== '' && <Type>{type}</Type>}
    {text !== '' && formatNewLine(text)}
    {link !== undefined && link !== null && (
      <Link
        href={link}
        title={`Référence vers ${link}`}
        rel='noopener noreferrer'
      >
        {`Ref: (${link})`}
      </Link>
    )}
  </div>
)

export default Definition
