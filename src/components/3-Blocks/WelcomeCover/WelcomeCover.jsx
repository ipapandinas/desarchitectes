import React, { useEffect } from 'react';

import logo from '../../../assets/images/desarchitectes.png';

import './WelcomeCover.scss';

export default function WelcomeCover() {
  useEffect(() => {
    document.title = 'desarchitectes.com';
  });

  return (
    <div className="WelcomeCover">
      <img src={logo} alt="Logo desarchitectes" />
    </div>
  );
}
