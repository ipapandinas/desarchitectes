import React, { FC } from 'react'
import classnames from 'classnames'
import Img from 'gatsby-image'

import formatNewLine from 'services/textFormat'
import { MediaProps } from 'types/medias'

import styles from './Media.module.scss'
import tmStyles from './TextMedias.module.scss'

const Media: FC<MediaProps> = ({ alt, image, legend }) => (
  <div className={classnames(styles.root, tmStyles.media)}>
    <Img
      className={classnames(styles.image, tmStyles.image)}
      alt={alt}
      fluid={image.childImageSharp.fluid}
    />
    <div className={styles.legend}>{formatNewLine(legend)}</div>
  </div>
)
export default Media
