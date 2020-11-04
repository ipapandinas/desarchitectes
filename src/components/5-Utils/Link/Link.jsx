import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

import { PageContext } from 'contexts';

export default function Link({ children, lang, route, ...rest }) {
  const { updatePageData } = useContext(PageContext);
  const newRoute = route ? `/${lang}/${route}` : `/${lang}`;

  return (
    <GatsbyLink
      to={newRoute}
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
