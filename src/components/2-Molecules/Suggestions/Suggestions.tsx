import React, { FC } from 'react';

import Word from 'components/1-Atoms/Word/Word';

import { SuggestionsProps } from 'types/articles';

import styles from './Suggestions.module.scss';

interface Props {
  active?: boolean;
  limit?: number;
  list: SuggestionsProps;
}

const Suggestions: FC<Props> = ({ active, limit, list }: Props) => (
  <div className={styles.root}>
    {list.slice(0, limit).map(({ routeName, title }) => (
      <Word active={active} label={title} key={title} route={routeName} />
    ))}
  </div>
);

export default Suggestions;
