import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from 'components/1-Atoms/SEO/SEO';
import Home from 'components/4-Pages/Home/Home';
import Layout from 'components/5-Utils/Layout/Layout';

const LandingTemplateFR = ({ data }) => {
  if (!data || !data.strapiLanding) {
    return null;
  }

  const { content } = data.strapiLanding;

  return (
    <Layout>
      <SEO />
      <Home content={content} />
    </Layout>
  );
};

LandingTemplateFR.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingTemplateFR;

export const query = graphql`
  query LandingTemplateFR {
    strapiLanding {
      content: content_FR
    }
  }
`;
