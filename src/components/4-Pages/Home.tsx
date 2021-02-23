import React, { FC } from 'react'

import IgIcon from 'assets/svg/ig.svg'
import MailIcon from 'assets/svg/mail.svg'
import TelmoIcon from 'assets/svg/telmo.svg'

import { usePageContext } from 'hooks'
import formatNewLine from 'services/textFormat'

interface Props {
  content: string
}

const Home: FC<Props> = ({ content }) => {
  const { pageData } = usePageContext() ?? {}
  const lang = pageData?.lang

  const creditsLabel = `© ${new Date().getFullYear()} desarchitectes`

  return (
    <div className='fade-in'>
      {content !== '' && <div>{formatNewLine(content)}</div>}

      <div>
        <a
          href='https://www.instagram.com/desarchitectes/'
          title={
            lang === 'es'
              ? 'desarchitectes en Instagram'
              : 'desarchitectes sur Instagram'
          }
          target='_blank'
          rel='noopener noreferrer'
        >
          <IgIcon />
        </a>

        <a
          href='mailto:abcdesarchitectes@gmail.com'
          title={lang === 'es' ? 'Contacto' : 'Contact'}
        >
          <MailIcon />
        </a>
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
