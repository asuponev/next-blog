import { PropsWithChildren } from 'react'
import Head from 'next/head'

import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'

interface ILayoutProps {
  title?: string
  description?: string
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'Blog',
  description = 'Blog'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
      </Head>
      <Header />
      <Menu />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout