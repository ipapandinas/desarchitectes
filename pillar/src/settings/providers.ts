import JsonInterface from 'types/intl'
import frMessages from '../intl/fr.json'

const defaultMessages: JsonInterface = frMessages

export const initialAppData = {
  alphabet: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  articles: [],
  isPreview: false,
  letters: [],
  word: ''
}

export const initialPageData = {
  pageData: {
    appData: initialAppData,
    intl: {
      language: 'fr',
      defaultLanguage: 'fr',
      languages: ['es', 'fr'],
      messages: defaultMessages,
      routed: true,
      originalPath: '/',
      redirect: false
    }
  },
  setPreview: () => {},
  setWord: () => {},
  updateLang: () => {},
  updatePageData: () => {}
}

export const initialUiData = {
  device: {
    isAny: false,
    isDesktop: false,
    isLaptop: false,
    isMobile: false,
    isResponsive: false,
    isTablet: false,
    isTabletPortrait: false,
    isTabletLandscape: false
  }
}
