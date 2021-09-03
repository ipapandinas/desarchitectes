import React, { FC, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as IntlLink, useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import { usePageContext } from 'hooks'
import useSiteMetadata from 'queries/seo'

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
  const { locale } = useIntl()
  const { updateLang } = usePageContext()
  const { metaDefault } = useSiteMetadata()
  const newLang = lang ?? locale

  const isExternal = to?.includes('http') ?? to?.includes('mailto:')
  if (isExternal !== undefined && isExternal) {
    return hideArrow ? (
      <a
        className={className}
        href={to}
        target='_blank'
        title={title}
        rel='noopener noreferrer'
      >
        {children}
      </a>
    ) : (
      <ExternalLink
        className={className}
        href={to}
        target='_blank'
        title={title}
        rel='noopener noreferrer'
      >
        {children}
      </ExternalLink>
    )
  }

  const newRoute = to !== undefined ? `/${newLang}/${to}` : `/${newLang}/`
  if (
    lang !== undefined &&
    metaDefault?.siteMetadata?.supportedLanguages?.includes(lang)
  ) {
    return (
      <IntlLink
        className={className}
        to={newRoute}
        onClick={() => updateLang(lang)}
        target='_self'
      >
        {children}
      </IntlLink>
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
