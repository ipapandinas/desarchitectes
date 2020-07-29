import React from 'react';

import { SEO } from '../components/1-Atoms';
import { Home } from '../components/4-Pages';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
  </Layout>
);
export default IndexPage;
