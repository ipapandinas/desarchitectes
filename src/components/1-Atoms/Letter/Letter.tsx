import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { useAppContext } from 'hooks';

import styles from './Letter.module.scss';

interface Props {
  active?: boolean;
  letter: string;
}

const Letter = forwardRef<HTMLButtonElement, Props>(
  ({ active, letter }, ref) => {
    const { appData, setLetter } = useAppContext()!;
    const { letters, preview, word } = appData;

    const hasArticle = letters && letters.includes(letter);
    const isActive =
      (preview && active) ||
      (!preview && word && letter === word.charAt(0).toUpperCase());

    if (!hasArticle) {
      return <div className={styles.root} />;
    }

    return (
      <button
        key={letter}
        className={classnames(styles.root, {
          [styles.active]: isActive,
        })}
        type="button"
        onClick={() => setLetter(letter)}
        onMouseEnter={() => setLetter(letter)}
        ref={ref}
      >
        <span>{letter}</span>
      </button>
    );
  }
);

export default Letter;
