import JsonInterface from 'types/intl'

import dataEs from '../intl/es.json'
import dataFr from '../intl/fr.json'

export const getLangLabel = (key: string, lang = 'fr'): string => {
  const data = {
    es: dataEs,
    fr: dataFr
  }
  const langLabels: JsonInterface = data[lang as keyof typeof data]
  const label = langLabels[key]
  if (label === undefined) {
    return ''
  }
  return label
}
