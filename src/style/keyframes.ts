import { keyframes, Keyframes } from 'styled-components'

export const footerSlideIn = (isMobile: boolean): Keyframes => {
  if (isMobile) {
    return keyframes`
      0% {
        bottom: -8.6rem;
      }
      100% {
        bottom: 0;
      }
    `
  }

  return keyframes`
    0% {
      bottom: -15rem;
    }
    100% {
      bottom: 0;
    }
  `
}

export const footerSlideOut = (isMobile: boolean): Keyframes => {
  if (isMobile) {
    return keyframes`
      0% {
        bottom: 0;
      }
      100% {
        bottom: -8.6rem;
        padding: 0;
      }
    `
  }

  return keyframes`
    0% {
      bottom: 0;
    }
    100% {
      bottom: -15rem;
      padding: 0;
    }
  `
}

export const previewSlideIn = keyframes`
0% {
  opacity: 0;
  width: auto;
}
100% {
  opacity: 1;
  width: calc(100vw - 5rem);
}
`

export const previewSlideOut = keyframes`
0% {
  opacity: 1;
  width: calc(100vw - 5rem);
}
100% {
  opacity: 0;
  width: auto;
}
`
