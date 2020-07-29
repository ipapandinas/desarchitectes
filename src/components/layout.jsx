import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useApp } from '../hooks';
import { setArticles } from '../redux';
import { useArticlesQuery } from '../queries';

import { Alphabet, Content, Footer, Language, WelcomeCover } from './3-Blocks';

import '../assets/styles/main.scss';
import './layout.scss';

const Layout = props => {
  const { children } = props;
  const { articles: articlesStored, language, preview } = useApp();
  const articles = useArticlesQuery();
  const dispatch = useDispatch();

  if (Array.isArray(articlesStored) && articlesStored.length === 0) {
    dispatch(setArticles(articles));
  }

  return (
    <>
      {!language && <WelcomeCover />}
      {!language && <Language />}

      <main>
        <div className="App__main">
          <div className="App__content">
            <Content>{children}</Content>
          </div>
          <div
            className={classNames('App__alphabet', {
              'App__alphabet--display': preview,
            })}
          >
            <Alphabet />
          </div>
        </div>

        <div className="App__footer">
          <Footer />
        </div>
      </main>
    </>
  );
};

Layout.defaultProps = {
  children: undefined,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
