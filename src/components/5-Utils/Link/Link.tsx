import React, { FC, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { useAppContext, usePageContext } from 'hooks'

interface Props {
  children: ReactNode
  className?: string
  lang?: string
  route?: string
  title?: string
  word?: string
}

const Link: FC<Props> = ({ children, className, lang, route, title, word }) => {
  const { setWord } = useAppContext() ?? {}
  const { updatePageData } = usePageContext() ?? {}

  if (children === undefined || lang === undefined) {
    return null
  }

  const newRoute = route !== undefined ? `/${lang}/${route}` : `/${lang}`

  return (
    <GatsbyLink
      className={className}
      onClick={() => {
        if (setWord === undefined || updatePageData === undefined) {
          return
        }

        setWord(word)
        updatePageData({
          lang
        })
      }}
      title={title}
      to={newRoute}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
