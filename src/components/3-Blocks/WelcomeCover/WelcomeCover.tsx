import React, { FC } from 'react';

import logo from 'assets/images/desarchitectes.png';

import './WelcomeCover.scss';

const WelcomeCover: FC = () => (
  <div className="WelcomeCover">
    <img src={logo} alt="Logo desarchitectes" />
  </div>
);

export default WelcomeCover;
