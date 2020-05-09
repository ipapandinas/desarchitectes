import React from 'react';

import './Separator.scss';

function Separator() {
  return (
    <div className="Separator">
      <div className="separator--left">
        <div className="dots" />
        <div className="dots" />
      </div>
      <div className="line" />
      <div className="separator--right">
        <div className="dots" />
        <div className="dots" />
      </div>
    </div>
  );
}

export default Separator;
