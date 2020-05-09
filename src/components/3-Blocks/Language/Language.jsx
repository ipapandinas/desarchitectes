import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLanguage } from '../../../redux';

import { Separator } from '../../1-Atoms';

import './Language.scss';

function Language(props) {
  const { onSetLanguage } = props;
  return (
    <div className="Language fade-in">
      <button
        className="Language__button Language__button--fr"
        type="button"
        onClick={() => {
          onSetLanguage('FR');
        }}
      >
        français
      </button>

      <Separator />

      <button
        className="Language__button Language__button--es"
        type="button"
        onClick={() => {
          onSetLanguage('ES');
        }}
      >
        español
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
