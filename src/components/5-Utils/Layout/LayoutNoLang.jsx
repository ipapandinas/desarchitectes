import React from 'react';

import Resize from 'components/1-Atoms/Resize/Resize';
import Language from 'components/3-Blocks/Language/Language';
import WelcomeCover from 'components/3-Blocks/WelcomeCover/WelcomeCover';

import 'assets/styles/main.scss';

const LayoutNoLang = () => (
  <>
    <WelcomeCover />
    <Language />
    <Resize />
  </>
);

export default LayoutNoLang;
