import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import Letter from 'components/1-Atoms/Letter'
import Preview from 'components/2-Molecules/Preview'

import { useAppContext } from 'hooks'
import { SuggestionsProps } from 'types/articles'

const StyledAlphabet = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden scroll;
  -webkit-overflow-scrolling: touch;
  width: auto;
  display: grid;
  grid-template-columns: 1fr auto;
`

const Letters = styled.div`
  background: ${({ theme }) => theme.colors.contrast};
  z-index: 100;

  ${({ theme }) =>
    `
      padding-bottom: 8.5rem;
      width: 5rem;

      ${theme.mediaQueries.sm} {
        padding-bottom: 8rem;
        width: 8rem;
      }

      ${theme.mediaQueries.lg} {
        padding-bottom: 0;
        width: 8rem;
      }
  `}
`

const Alphabet: FC = memo(() => {
  const { appData } = useAppContext()
  const { alphabet, articles } = appData

  const [isPreview, setPreview] = useState(false)
  const [runLetter, setLetter] = useState('')

  const defaultRef = useRef<HTMLButtonElement>(null)
  const refs = useRef<Array<HTMLButtonElement | null>>(
    Array(alphabet.length).fill(defaultRef)
  )

  const runLetterIdx = useMemo(() => alphabet.indexOf(runLetter), [
    alphabet,
    runLetter
  ])
  const runLetterRef = useMemo(() => refs.current[runLetterIdx], [runLetterIdx])
  const sortAsc = useMemo(() => runLetterIdx < 13, [runLetterIdx])

  const suggestions: SuggestionsProps[] = useMemo(() => {
    const sPrev: SuggestionsProps = []
    const s: SuggestionsProps = []
    const sNext: SuggestionsProps = []

    if (runLetterIdx !== -1) {
      articles.forEach((article) => {
        const { title } = article
        const firstLetter = title.charAt(0).toUpperCase()

        const runLetterPrev = alphabet[runLetterIdx - 1]
        const runLetterNext = alphabet[runLetterIdx + 1]

        if (firstLetter === runLetterPrev) {
          sPrev.push(article)
        } else if (firstLetter === runLetter) {
          s.push(article)
        } else if (firstLetter === runLetterNext) {
          sNext.push(article)
        }
      })
    }

    return [sPrev, s, sNext]
  }, [alphabet, articles, runLetter, runLetterIdx])

  const handleLetter = useCallback((letter) => {
    setLetter(letter)
    setPreview(true)
  }, [])
  const resetLetter = useCallback(() => setLetter(''), [])

  return (
    <StyledAlphabet>
      <Letters>
        {alphabet.map((letter, idx) => (
          <Letter
            key={letter}
            active={letter === runLetter}
            handleLetter={handleLetter}
            isPreview={runLetterIdx > 0}
            letter={letter}
            ref={(ref) => {
              refs.current[idx] = ref
            }}
          />
        ))}
      </Letters>
      <Preview
        isPreview={isPreview}
        resetLetter={resetLetter}
        results={suggestions}
        runLetterIdx={runLetterIdx}
        runLetterRef={runLetterRef}
        setPreview={setPreview}
        sortAsc={sortAsc}
      />
    </StyledAlphabet>
  )
})

export default Alphabet
