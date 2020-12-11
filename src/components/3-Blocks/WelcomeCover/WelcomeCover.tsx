import React, { FC } from 'react';

import DesarchitectesLogo from 'assets/svg/desarchitectes.svg';

import styles from './WelcomeCover.module.scss';

const WelcomeCover: FC = () => (
  <div className={styles.root}>
    <DesarchitectesLogo className={styles.image} />
  </div>
);

export default WelcomeCover;
