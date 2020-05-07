import { useMediaQuery } from 'react-responsive';

import styles from '../assets/styles/_export.scss';

export const {
  ALPHABET_HEIGHT,
  ALPHABET_HEIGHT_MD,
  ALPHABET_HEIGHT_LG,
  ALPHABET_HEIGHT_XL,
  BK_SM_MAX,
  BK_SM_MIN,
  BK_MD_MAX,
  BK_MD_MIN,
  BK_LG_MAX,
  BK_LG_MIN,
  BK_XL_MIN,
  LETTER_HEIGHT,
  LETTER_HEIGHT_LG,
  LETTER_HEIGHT_MD,
  LETTER_HEIGHT_XL,
  LETTER_HEIGHT__ES,
  LETTER_HEIGHT_LG__ES,
  LETTER_HEIGHT_MD__ES,
  LETTER_HEIGHT_XL__ES,
} = styles;

export const IsDesktopLG = () => {
  const query = useMediaQuery({
    query: `(min-device-width: ${BK_LG_MIN})`,
  });
  return query;
};

export const IsDesktopXL = () => {
  const query = useMediaQuery({
    query: `(min-device-width: ${BK_XL_MIN})`,
  });
  return query;
};

export const IsMobile = () => {
  const query = useMediaQuery({
    query: `(min-device-width: ${BK_SM_MIN})`,
  });
  return query;
};

export const IsTablet = () => {
  const query = useMediaQuery({
    query: `(min-device-width: ${BK_MD_MIN})`,
  });
  return query;
};
