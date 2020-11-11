import React, { FC } from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/1-Atoms/SEO/SEO';
import Home from 'components/4-Pages/Home/Home';
import Layout from 'components/5-Utils/Layout/Layout';

interface Props {
  data: {
    strapiLanding: {
      content: string;
    };
  };
}

const LandingTemplateFR: FC<Props> = ({ data }: Props) => {
  const { content } = data?.strapiLanding;

  return (
    <Layout>
      <SEO />
      {content && <Home content={content} />}
    </Layout>
  );
};

export default LandingTemplateFR;

export const query = graphql`
  query LandingTemplateFR {
    strapiLanding {
      content: content_FR
    }
  }
`;
