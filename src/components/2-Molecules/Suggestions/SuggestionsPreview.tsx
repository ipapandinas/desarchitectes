import React, { FC, useMemo } from 'react'

import Suggestions from 'components/2-Molecules/Suggestions/Suggestions'

import { useAppContext } from 'hooks'
import { SuggestionsProps } from 'types/articles'

const MAX_SUGGESTIONS = 5

interface Props {
  handlePreviewOut: () => void
  idx: number
  positionData: {
    clientHeight: number
    offsetTop: number
  }
  results: SuggestionsProps[]
  sortAsc: boolean
}

const SuggestionsPreview: FC<Props> = ({
  handlePreviewOut,
  idx,
  positionData,
  results,
  sortAsc
}) => {
  const { appData } = useAppContext() ?? {}
  const alphabet = appData?.alphabet ?? []

  const [suggestionsPrev, suggestions, suggestionsNext] = results
  const LAST_IDX = useMemo(() => alphabet.length - 1, [alphabet.length])

  const sPrevLimit = useMemo(
    () => (idx < MAX_SUGGESTIONS ? idx : MAX_SUGGESTIONS),
    [idx]
  )
  const sNextLimit = useMemo(
    () => (idx > LAST_IDX - MAX_SUGGESTIONS ? LAST_IDX - idx : MAX_SUGGESTIONS),
    [LAST_IDX, idx]
  )

  const nbS = useMemo(() => suggestions.length, [suggestions.length])
  const nbSPrev = useMemo(
    () => suggestionsPrev.slice(0, MAX_SUGGESTIONS).length,
    [suggestionsPrev]
  )
  const nbSNext = useMemo(
    () => suggestionsNext.slice(0, MAX_SUGGESTIONS).length,
    [suggestionsNext]
  )

  const { clientHeight, offsetTop } = positionData
  const paddingTop = useMemo(() => {
    if (sortAsc) {
      return offsetTop - nbSPrev * clientHeight
    }
    return offsetTop - (nbS - 1 + nbSPrev) * clientHeight
  }, [clientHeight, nbS, nbSPrev, offsetTop, sortAsc])

  return (
    <div
      onMouseLeave={handlePreviewOut}
      style={{
        paddingTop
      }}
    >
      {nbSPrev > 0 && (
        <Suggestions
          isActive={false}
          list={suggestionsPrev}
          limit={sPrevLimit}
        />
      )}
      <Suggestions isActive list={suggestions} />
      {nbSNext > 0 && (
        <Suggestions
          isActive={false}
          list={suggestionsNext}
          limit={sNextLimit}
        />
      )}
    </div>
  )
}

export default SuggestionsPreview
