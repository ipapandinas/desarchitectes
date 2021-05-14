import JsonInterface from 'types/intl'

import dataEs from '../intl/es.json'
import dataFr from '../intl/fr.json'

const LANG_DATA = {
  es: dataEs,
  fr: dataFr
}

export const getDefaultMessage = (key: string, lang = 'fr'): string => {
  const langLabels: JsonInterface = LANG_DATA[lang as keyof typeof LANG_DATA]
  const label = langLabels[key]
  if (label === undefined) {
    return ''
  }
  return label
}

// same function from 'gatsby-plugin-react-intl'
export const getMessages = (path: string, language: string): JsonInterface => {
  try {
    const messages: JsonInterface =
      LANG_DATA[language as keyof typeof LANG_DATA]

    return messages
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      process.env.NODE_ENV !== 'test' &&
        console.error(
          `[gatsby-plugin-react-intl] couldn't find file "${path}/${language}.json"`
        )
    }

    throw error
  }
}
