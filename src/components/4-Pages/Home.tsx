import React, { FC } from 'react'

import IgIcon from 'assets/svg/ig.svg'
import MailIcon from 'assets/svg/mail.svg'
import TelmoIcon from 'assets/svg/telmo.svg'

import Link from 'components/5-Utils/Link'
import { usePageContext } from 'hooks'
import formatNewLine from 'services/textFormat'
import { getLangLabel } from 'services/translations'

interface Props {
  content: string
}

const Home: FC<Props> = ({ content }) => {
  const { pageData } = usePageContext()
  const lang = pageData.lang

  const creditsLabel = `© ${new Date().getFullYear()} desarchitectes`

  return (
    <div className='fade-in'>
      {content !== '' && <div>{formatNewLine(content)}</div>}

      <div>
        <Link
          to='https://www.instagram.com/desarchitectes/'
          hideArrow
          title={getLangLabel('instagram', lang)}
        >
          <IgIcon />
        </Link>

        <Link
          to='mailto:abcdesarchitectes@gmail.com'
          hideArrow
          title={getLangLabel('contact', lang)}
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
