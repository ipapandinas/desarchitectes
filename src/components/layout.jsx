import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Content from 'components/3-Blocks/Content/Content';
import Footer from 'components/3-Blocks/Footer/Footer';
import Language from 'components/3-Blocks/Language/Language';
import WelcomeCover from 'components/3-Blocks/WelcomeCover/WelcomeCover';

import { useApp, usePageContext } from 'hooks';
import { setArticles } from 'reduxApp';
import { useArticlesQuery } from 'queries';

import 'assets/styles/main.scss';
import './layout.scss';

const Layout = props => {
  const { children } = props;
  const { articles: articlesStored, preview } = useApp();
  const dispatch = useDispatch();
  const { pageData } = usePageContext();
  const { lang } = pageData;
  const articles = useArticlesQuery(lang);

  console.log({ articles });

  if (Array.isArray(articlesStored) && articlesStored.length === 0) {
    dispatch(setArticles(articles));
  }

  if (!lang) {
    return (
      <>
        <WelcomeCover />
        <Language />
        <Resize />
      </>
    );
  }

  return (
    <>
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

      <Resize />
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
