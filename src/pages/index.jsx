import React from 'react';

import { SEO } from '../components/1-Atoms';
import { Home } from '../components/4-Pages';
import App from '../components/App/App';

const IndexPage = () => (
  <>
    <SEO />
    <App>
      <Home />
    </App>
  </>
);
export default IndexPage;
