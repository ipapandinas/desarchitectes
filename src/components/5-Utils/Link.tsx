import React, { FC, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { usePageContext } from 'hooks'

interface Props {
  children: ReactNode
  className?: string
  hideArrow?: boolean
  lang?: string
  onClick?: () => void
  title?: string
  to?: string
}

const ExternalLink = styled.a`
  &:after {
    content: '↗';
    display: inline;
    margin: 0 0.6rem;
  }
`

const Link: FC<Props> = ({
  children,
  className,
  hideArrow = false,
  lang,
  onClick,
  to,
  title
}) => {
  const { pageData, updatePageData } = usePageContext()
  const currentLang = pageData.lang
  const newLang = lang ?? currentLang

  const isExternal = to?.includes('http') ?? to?.includes('mailto:')
  if (isExternal !== undefined && isExternal) {
    return hideArrow ? (
      <a
        className={className}
        href={to}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    ) : (
      <ExternalLink
        className={className}
        href={to}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </ExternalLink>
    )
  }

  const newRoute = to !== undefined ? `/${newLang}/${to}` : `/${newLang}`
  if (lang !== undefined) {
    return (
      <a
        className={className}
        href={newRoute}
        onClick={() =>
          updatePageData({
            lang
          })}
        target='_self'
      >
        {children}
      </a>
    )
  }

  const handleClick = (): void => {
    if (onClick !== undefined) {
      onClick()
    }
  }

  return (
    <GatsbyLink
      className={className}
      onClick={handleClick}
      title={title}
      to={newRoute}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
