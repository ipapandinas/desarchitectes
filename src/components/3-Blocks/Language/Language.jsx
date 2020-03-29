import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLanguage } from '../../../redux';

import './Language.scss';

function Language(props) {
  const { onSetLanguage } = props;
  return (
    <div className="Language fade-in">
      <button
        className="Language__fr"
        type="button"
        onClick={() => {
          onSetLanguage('FR');
        }}
      >
        Français
      </button>

      <button
        className="Language__es"
        type="button"
        onClick={() => {
          onSetLanguage('ES');
        }}
      >
        Español
      </button>
    </div>
  );
}

Language.defaultProps = {
  onSetLanguage: undefined,
};

Language.propTypes = {
  onSetLanguage: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSetLanguage: setLanguage,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Language);
