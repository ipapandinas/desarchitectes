import React, { FC } from 'react'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

import { getDefaultMessage } from 'services/translations'

const Translation: FC<{ id: string }> = ({ id }) => (
  <FormattedMessage id={id} defaultMessage={getDefaultMessage(id)} />
)

export default Translation
