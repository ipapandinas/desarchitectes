import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StaticQuery, graphql } from 'gatsby';

import { setArticles } from '../../redux';

import { Alphabet, Content, Footer, Language, WelcomeCover } from '../3-Blocks';

import './App.scss';

class App extends React.PureComponent {
  render() {
    const { children, language, onSetArticles, preview } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query AppQuery {
            allStrapiArticle {
              nodes {
                published
                routeName
                title_FR
                title_ES
              }
            }
          }
        `}
        render={data => {
          onSetArticles(data.allStrapiArticle.nodes);
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
        }}
      />
    );
  }
}

App.defaultProps = {
  children: undefined,
  preview: false,
  language: undefined,
};

App.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
  onSetArticles: PropTypes.func.isRequired,
  preview: PropTypes.bool,
};

const mapStateToProps = state => {
  return { language: state.app.language, preview: state.app.preview };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSetArticles: setArticles,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
