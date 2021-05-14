import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'

import IgIcon from 'assets/svg/ig.svg'
import MailIcon from 'assets/svg/mail.svg'
import TelmoIcon from 'assets/svg/telmo.svg'

import Link from 'components/5-Utils/Link'
import formatNewLine from 'services/textFormat'

interface Props {
  content: string
}

const Home: FC<Props> = ({ content }) => {
  const { messages } = useIntl()

  const creditsLabel = `© ${new Date().getFullYear()} desarchitectes`

  return (
    <div className='fade-in'>
      {content !== '' && <div>{formatNewLine(content)}</div>}

      <div>
        <Link
          to='https://www.instagram.com/desarchitectes/'
          hideArrow
          title={String(messages.instagram)}
        >
          <IgIcon />
        </Link>

        <Link
          to='mailto:abcdesarchitectes@gmail.com'
          hideArrow
          title={String(messages.contact)}
        >
          <MailIcon />
        </Link>
      </div>

      <footer>
        <span>{creditsLabel}</span>
        <a
          href='https://www.mrtelmo.com'
          title='Mister Telmo Website'
          rel='noopener noreferrer'
        >
          <TelmoIcon />
          <div>
            <span>mr. telmo</span>
            <span>code some more</span>
          </div>
        </a>
      </footer>
    </div>
  )
}

export default Home
