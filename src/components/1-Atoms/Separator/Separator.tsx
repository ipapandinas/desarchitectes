import React, { FC } from 'react';

import './Separator.scss';

const Separator: FC = () => (
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

export default Separator;
