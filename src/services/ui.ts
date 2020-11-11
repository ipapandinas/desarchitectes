import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  MEDIA_LG,
  MEDIA_MD,
  MEDIA_SM,
  MEDIA_XL,
  MEDIA_XS,
} from 'settings/ui';
import Device from 'types/ui';

export function getMedia(): string {
  if (window.matchMedia(`(max-width: ${BREAKPOINT_XS})`).matches) {
    return MEDIA_XS; // < 576
  }
  if (window.matchMedia(`(max-width: ${BREAKPOINT_SM})`).matches) {
    return MEDIA_SM; // < 768
  }
  if (window.matchMedia(`(max-width: ${BREAKPOINT_MD})`).matches) {
    return MEDIA_MD; // < 992
  }
  if (window.matchMedia(`(max-width: ${BREAKPOINT_LG})`).matches) {
    return MEDIA_LG; // < 1280
  }
  return MEDIA_XL; // >= 1280
}

export function getMediaInfo(media: string): Device {
  return {
    isAny: media !== MEDIA_XL,
    isDesktop: media === MEDIA_XL,
    isMobile: media === MEDIA_XS || media === MEDIA_SM,
    isMobileXs: media === MEDIA_XS,
    isMobileSm: media === MEDIA_SM,
    isTablet: media === MEDIA_MD || media === MEDIA_LG,
    isTabletPortrait: media === MEDIA_MD,
    isTabletLandscape: media === MEDIA_LG,
  };
}
