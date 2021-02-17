import React, { FC, ReactNode, useMemo, useRef, useState } from 'react'
import classnames from 'classnames'

import Resize from 'components/1-Atoms/Resize/Resize'
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet'
import Footer from 'components/3-Blocks/Footer/Footer'

import { useDevice, usePageContext } from 'hooks'

import 'assets/styles/main.scss'
import styles from './Layout.module.scss'

interface Props {
  children: ReactNode
}

const offsetDeltaMobile = 200
const offsetDeltaOther = 400
const offsetTrigger = 500

const Layout: FC<Props> = ({ children }) => {
  const device = useDevice()
  const { pageData } = usePageContext() ?? {}
  const lang = pageData?.lang

  const [isFooterVisible, setFooterVisible] = useState(true)
  const [, setOffsetTop] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const offsetDelta = useMemo(
    () => (device?.isMobile ? offsetDeltaMobile : offsetDeltaOther),
    [device?.isMobile]
  )
  const rootStyles = useMemo(() => {
    if (lang === undefined) {
      return null
    }
    return styles[`root${lang?.toLocaleUpperCase()}`]
  }, [lang])

  const handleScroll = (): void => {
    const element = contentRef?.current
    if (element !== null) {
      const { scrollTop } = element
      if (scrollTop > offsetTrigger) {
        setOffsetTop((prevOffset) => {
          if (prevOffset > scrollTop + offsetDelta) {
            setFooterVisible(true)
            return scrollTop
          }
          if (prevOffset > scrollTop) {
            return prevOffset
          }
          if (isFooterVisible) {
            setFooterVisible(false)
          }
          return scrollTop
        })
      } else {
        setFooterVisible(true)
      }
    }
  }

  const content = useMemo(
    () => (
      <div className={styles.content} onScroll={handleScroll} ref={contentRef}>
        {children}
      </div>
    ),
    [children]
  )

  return (
    <>
      <main className={classnames(styles.root, rootStyles)}>
        <div className={styles.app}>
          {content}
          <Alphabet />
        </div>

        <Footer isVisible={isFooterVisible} />
      </main>

      <Resize />
    </>
  )
}

export default Layout
