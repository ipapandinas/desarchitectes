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

const LandingTemplateES: FC<Props> = ({ data }) => {
  const { content } = data?.strapiLanding

  return (
    <>
      <Seo />
      {content !== undefined && <Home content={content} />}
    </>
  )
}

export default LandingTemplateES

export const query = graphql`
  query LandingTemplateES {
    strapiLanding {
      content: content_ES
    }
  }
`
