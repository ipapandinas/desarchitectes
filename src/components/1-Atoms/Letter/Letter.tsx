import React, { forwardRef, useMemo } from 'react'
import classnames from 'classnames'

import { useAppContext } from 'hooks'

import styles from './Letter.module.scss'

interface Props {
  active: boolean
  handleLetter: (letter: string) => void
  isPreview: boolean
  letter: string
}

const Letter = forwardRef<HTMLButtonElement, Props>(
  ({ active, handleLetter, isPreview, letter }, ref) => {
    const { appData } = useAppContext() ?? {}
    const letters = appData?.letters
    const word = appData?.word

    const hasArticle = useMemo(() => letters?.includes(letter), [
      letter,
      letters
    ])
    const isActive = useMemo(
      () => (isPreview && active) || letter === word?.charAt(0).toUpperCase(),
      [active, isPreview, letter, word]
    )

    if (hasArticle === undefined || !hasArticle) {
      return <div className={styles.root} />
    }

    return (
      <button
        key={letter}
        className={classnames(styles.root, {
          [styles.active]: isActive
        })}
        type='button'
        onClick={() => handleLetter(letter)}
        onMouseEnter={() => handleLetter(letter)}
        ref={ref}
      >
        <span>{letter}</span>
      </button>
    )
  }
)

export default Letter
