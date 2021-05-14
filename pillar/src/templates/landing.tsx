import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Seo from 'components/1-Atoms/SEO'
import Home from 'components/4-Pages/Home'

interface Props {
  data: {
    strapiLanding: {
      content: string
    }
  }
}

const LandingTemplate: FC<Props> = ({ data }) => {
  const { content } = data?.strapiLanding ?? {}

  if (content === undefined) {
    return null
  }

  return (
    <>
      <Seo />
      {content !== undefined && <Home content={content} />}
    </>
  )
}

export default LandingTemplate

export const query = graphql`
  query LandingTemplate($locale: String!) {
    strapiLanding(locale: { eq: $locale }) {
      content
    }
  }
`
