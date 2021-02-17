import React, { FC, memo } from 'react'
import { Element } from 'react-scroll'

import Text from 'components/1-Atoms/Text/Text'

import styles from './Contents.module.scss'

interface Props {
  activeTextAnchor?: string
  id: number
  text: string
}

const ContentText: FC<Props> = memo(({ activeTextAnchor, id, text }) => (
  <Element
    className={styles.textAnchor}
    name={`text-anchor-${id}`}
    key={`text-${id}`}
  >
    {activeTextAnchor === `text-anchor-${id}` && (
      <div className={styles.activeTextAnchor} />
    )}
    <Text text={text} />
  </Element>
))

export default ContentText
