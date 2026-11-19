import type React from 'react'
import { Footer } from '../footer/Footer'
import { Dock } from './Dock'
import { SiteHeader } from './SiteHeader'

type PageShellProps = {
  children: React.ReactNode
  /** 'envelope' = home dock, 'sticker' = inner-page dock, false = no header, dock or footer */
  nav?: 'envelope' | 'sticker' | false
  /** defaults to following `nav` */
  footer?: boolean
}

export function PageShell({ children, nav = 'sticker', footer }: PageShellProps) {
  const showFooter = footer ?? nav !== false

  return (
    <div
      className={`relative mx-auto flex min-h-screen w-full max-w-page flex-col px-6 pt-6 md:px-8 md:pt-8 ${
        nav ? 'pb-24 md:pb-28' : 'pb-8 md:pb-12'
      }`}
    >
      {nav && <SiteHeader />}
      <main className={`flex-1 ${nav ? 'mt-12 md:mt-16' : ''}`}>{children}</main>
      {showFooter && <Footer />}
      {nav && <Dock variant={nav} />}
    </div>
  )
}
