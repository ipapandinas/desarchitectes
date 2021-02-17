import React, { FC, useMemo } from 'react'
import classnames from 'classnames'

import { usePageContext } from 'hooks'
import { PdfProps } from 'types/articles'

import layoutStyles from 'components/5-Utils/Layout/Layout.module.scss'
import styles from './ArticleHeader.module.scss'

interface Props {
  pdf: PdfProps
  title: string
}

const ArticleHeader: FC<Props> = ({ pdf, title }) => {
  const { pageData } = usePageContext() ?? {}
  const lang = pageData?.lang

  const letter = useMemo(() => title?.charAt(0), [title])
  const likeLabel = useMemo(() => (lang === 'es' ? ' cómo' : ' comme'), [lang])
  const pdfLabel = useMemo(
    () => (lang === 'es' ? 'Versión PDF' : 'Version PDF'),
    [lang]
  )

  return (
    <div className={styles.root}>
      <span className={classnames(styles.letter, layoutStyles.italic)}>
        {letter.toLowerCase()}
        {likeLabel}
      </span>
      <span className={classnames(styles.title, layoutStyles.bold)}>
        {title.toUpperCase()}
      </span>
      {pdf?.publicURL !== undefined && (
        <a className={styles.pdf} href={pdf.publicURL}>
          {pdfLabel}
        </a>
      )}
    </div>
  )
}

export default ArticleHeader
