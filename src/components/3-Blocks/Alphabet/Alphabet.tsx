import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'

import Letter from 'components/1-Atoms/Letter/Letter'
import Preview from 'components/2-Molecules/Preview/Preview'

import { useAppContext } from 'hooks'
import { SuggestionsProps } from 'types/articles'

import styles from './Alphabet.module.scss'

const Alphabet: FC = memo(() => {
  const { appData } = useAppContext() ?? {}
  const alphabet = appData?.alphabet ?? []
  const articles = appData?.articles ?? []

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
    <div className={styles.root}>
      <div className={styles.letters}>
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
      </div>
      <Preview
        isPreview={isPreview}
        resetLetter={resetLetter}
        results={suggestions}
        runLetterIdx={runLetterIdx}
        runLetterRef={runLetterRef}
        setPreview={setPreview}
        sortAsc={sortAsc}
      />
    </div>
  )
})

export default Alphabet
