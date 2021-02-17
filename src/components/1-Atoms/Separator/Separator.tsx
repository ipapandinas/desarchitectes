import React, { FC, memo } from 'react'

import styles from './Separator.module.scss'

const Separator: FC = memo(() => (
  <div className={styles.root}>
    <div className={styles.separatorLeft}>
      <div className={styles.dots} />
      <div className={styles.dots} />
    </div>
    <div className={styles.line} />
    <div className={styles.separatorRight}>
      <div className={styles.dots} />
      <div className={styles.dots} />
    </div>
  </div>
))

export default Separator
