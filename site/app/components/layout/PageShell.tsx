import type React from 'react'
import { Footer } from '../footer/Footer'
import { Dock } from './Dock'
import { SiteHeader } from './SiteHeader'

type PageShellProps = {
  children: React.ReactNode
  /**
   * 'envelope' = home dock, 'sticker' = inner-page dock,
   * 'header' = header and footer but no dock (project pages),
   * false = nothing (blog posts)
   */
  nav?: 'envelope' | 'sticker' | 'header' | false
  /** defaults to following `nav` */
  footer?: boolean
  /** less space between the header and the content (used by the About page) */
  tight?: boolean
}

export function PageShell({ children, nav = 'sticker', footer, tight }: PageShellProps) {
  const showFooter = footer ?? nav !== false
  const showDock = nav === 'envelope' || nav === 'sticker'

  return (
    <div
      className={`relative mx-auto flex min-h-screen w-full max-w-page flex-col px-6 pt-6 md:px-8 md:pt-8 ${
        showDock ? 'pb-24 md:pb-28' : 'pb-8 md:pb-12'
      }`}
    >
      {nav && <SiteHeader />}
      <main className={`flex-1 ${nav ? (tight ? 'mt-6 md:mt-9' : 'mt-12 md:mt-16') : ''}`}>{children}</main>
      {showFooter && <Footer />}
      {(nav === 'envelope' || nav === 'sticker') && <Dock variant={nav} />}
    </div>
  )
}
