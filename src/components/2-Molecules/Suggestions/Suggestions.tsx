import React, { FC } from 'react'
import styled from 'styled-components'

import Word from 'components/1-Atoms/Word'

import { SuggestionsProps } from 'types/articles'

interface Props {
  isActive: boolean
  limit?: number
  list: SuggestionsProps
}

const SuggestionsList = styled.div`
  width: fit-content;
  margin: 0 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Suggestions: FC<Props> = ({ isActive, limit, list }) => (
  <SuggestionsList>
    {list.slice(0, limit).map(({ routeName, title }) => (
      <Word isActive={isActive} label={title} key={title} route={routeName} />
    ))}
  </SuggestionsList>
)

export default Suggestions
