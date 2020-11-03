import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Content from 'components/3-Blocks/Content/Content';
import Footer from 'components/3-Blocks/Footer/Footer';

import { useAppContext } from 'hooks';

import 'assets/styles/main.scss';
import './Layout.scss';

const Layout = props => {
  const { children } = props;
  const { appData } = useAppContext();
  const { preview } = appData;

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
