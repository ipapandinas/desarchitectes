import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'gatsby';

import { reset } from '../../../redux';

import { Image } from '../../1-Atoms';

import './Footer.scss';

function Footer(props) {
  const { language, onReset } = props;

  return (
    <div className="Footer">
      <button
        className="Footer__button"
        type="button"
        title={language === 'ES' ? 'Pagina de inició' : "Page d'accueil"}
        onClick={() => {
          onReset();
        }}
      >
        <Link className="Footer__link" title="Home" to="/">
          <Image
            className="Footer__logo"
            alt="Logo desarchitectes"
            filename="desarchitectes.png"
          />
        </Link>
      </button>
    </div>
  );
}

Footer.defaultProps = {
  language: undefined,
};

Footer.propTypes = {
  language: PropTypes.string,
  onReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { language: state.app.language };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onReset: reset,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
