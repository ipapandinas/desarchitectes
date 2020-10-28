import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

import { PageContext } from 'contexts';

export default function Link({ children, lang, route, ...rest }) {
  const { updatePageData } = useContext(PageContext);
  if (!route) {
    return (
      <button
        type="button"
        onClick={() => {
          updatePageData({ lang });
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <GatsbyLink
      to={`/${lang}/${route}`}
      onClick={() => {
        updatePageData({ lang });
      }}
      {...rest}
    >
      {children}
    </GatsbyLink>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string.isRequired,
  route: PropTypes.string,
};

Link.defaultProps = {
  children: undefined,
  route: undefined,
};
