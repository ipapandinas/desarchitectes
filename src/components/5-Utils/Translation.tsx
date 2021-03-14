import React, { FC } from 'react'

import { usePageContext } from 'hooks'
import { getLangLabel } from 'services/translations'

const Translation: FC<{ id: string }> = ({ id }) => {
  const { pageData } = usePageContext()
  const lang = pageData.lang
  return <>{getLangLabel(id, lang)}</>
}

export default Translation
