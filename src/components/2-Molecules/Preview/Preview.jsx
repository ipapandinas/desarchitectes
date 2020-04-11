import React from 'react';
import PropTypes, { string } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { togglePreview } from '../../../redux';

import { Word } from '../../1-Atoms';

import './Preview.scss';

function Preview(props) {
  const {
    alphabet,
    index,
    language,
    onTogglePreview,
    preview,
    sortAsc,
    suggestionsPrev,
    suggestions,
    suggestionsNext,
  } = props;

  const nbWordsPreview = index < 6 ? index : 5;
  const nbWordsNext = index > 20 ? 25 - index : 5;
  const nbSuggestionsPrev =
    suggestionsPrev.length <= 5 ? suggestionsPrev.length : 5;
  const nbSuggestionsNext =
    suggestionsNext.length <= 5 ? suggestionsNext.length : 5;

  return (
    <div
      className={classNames(
        'Preview',
        preview ? 'Preview--visible' : 'Preview--hide'
      )}
      role="button"
      tabIndex={0}
      onClick={() => {
        onTogglePreview();
      }}
      onKeyPress={() => {
        onTogglePreview();
      }}
    >
      <div
        className={classNames(
          'Preview__list',
          sortAsc ? 'Preview__list--start' : 'Preview__list-end'
        )}
        style={
          sortAsc
            ? {
                paddingTop: `calc( (calc(100rem / 26))*${index -
                  nbSuggestionsPrev} )`,
              }
            : {
                paddingBottom: `calc( (calc(100rem / 26))*${alphabet.length -
                  1 -
                  index -
                  nbSuggestionsNext} )`,
              }
        }
      >
        <div
          className={classNames(
            'Suggestions__prev',
            language === 'ES'
              ? 'Suggestions__prev--ES'
              : 'Suggestions__prev--FR'
          )}
        >
          {suggestionsPrev
            .map(({ route, word }) => (
              <Word label={word} key={word} route={route} />
            ))
            .slice(0, nbWordsPreview)}
        </div>
        <div
          className={classNames(
            'Suggestions',
            language === 'ES' ? 'Suggestions--ES' : 'Suggestions--FR'
          )}
        >
          {suggestions.map(({ route, word }) => (
            <Word active label={word} key={word} route={route} />
          ))}
        </div>
        <div
          className={classNames(
            'Suggestions__next',
            language === 'ES'
              ? 'Suggestions__next--ES'
              : 'Suggestions__next--FR'
          )}
        >
          {suggestionsNext
            .map(({ route, word }) => (
              <Word label={word} key={word} route={route} />
            ))
            .slice(0, nbWordsNext)}
        </div>
      </div>
    </div>
  );
}

Preview.defaultProps = {
  alphabet: [],
  index: null,
  language: undefined,
  onTogglePreview: undefined,
  preview: false,
  sortAsc: true,
  suggestionsPrev: undefined,
  suggestions: undefined,
  suggestionsNext: undefined,
};

Preview.propTypes = {
  alphabet: PropTypes.arrayOf(string),
  index: PropTypes.number,
  language: PropTypes.string,
  onTogglePreview: PropTypes.func,
  preview: PropTypes.bool,
  sortAsc: PropTypes.bool,
  suggestionsPrev: PropTypes.array,
  suggestions: PropTypes.array,
  suggestionsNext: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    alphabet: state.app.alphabet,
    index: state.app.index,
    language: state.app.language,
    preview: state.app.preview,
    sortAsc: state.app.sortAsc,
    suggestionsPrev: state.app.suggestionsPrev,
    suggestions: state.app.suggestions,
    suggestionsNext: state.app.suggestionsNext,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onTogglePreview: togglePreview,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
