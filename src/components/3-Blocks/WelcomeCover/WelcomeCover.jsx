import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import logo from '../../../assets/images/desarchitectes.png';

import './WelcomeCover.scss';

export default function WelcomeCover() {
  useEffect(() => {
    document.title = 'desarchitectes.com';
  });

  return (
    <div className="WelcomeCover">
      {/* <Link to='/' title='Fermer la bannière accueil' className='WelcomeCover__closeButton'>×</Link> */}
      <img src={logo} alt="Logo desarchitectes" />
    </div>
  );
}
