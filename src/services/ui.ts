/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MEDIA_LG, MEDIA_MD, MEDIA_SM, MEDIA_XL, MEDIA_XS } from 'settings/ui'
import { Device } from 'types/ui'

export function getMedia (): string {
  if (window.matchMedia('(max-width: 575px)').matches) {
    return MEDIA_XS // < 576
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    return MEDIA_SM // < 768
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    return MEDIA_MD // < 992
  }
  if (window.matchMedia('(max-width: 1279px)').matches) {
    return MEDIA_LG // < 1280
  }
  return MEDIA_XL // >= 1280
}

export function getMediaInfo (media: string): Device {
  return {
    isDesktop: media === MEDIA_XL,
    isLaptop: media === MEDIA_XL || media === MEDIA_LG,
    isMobile: media === MEDIA_XS || media === MEDIA_SM,
    isResponsive:
      media === MEDIA_XS || media === MEDIA_SM || media === MEDIA_MD,
    isTablet: media === MEDIA_MD || media === MEDIA_LG,
    isTabletPortrait: media === MEDIA_MD,
    isTabletLandscape: media === MEDIA_LG
  }
}
