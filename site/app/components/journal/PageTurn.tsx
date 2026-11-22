'use client'

import Link from 'next/link'
import { createContext, useCallback, useContext, useRef, ViewTransition } from 'react'

/*
 * The page turn between journal entries.
 * "Previous" / "next" links carry a transition type. React's <ViewTransition> hands the old entry
 * to the browser, which turns it away (CSS in globals.css) while the new entry is already in place
 * underneath. Navigation waits until the next entry is ready, so there is no blank gap, and nothing
 * animates when you arrive any other way (list, direct link, back button) or prefer reduced motion.
 */

type Direction = 'next' | 'prev'

const PrepareContext = createContext<(() => void) | null>(null)

export function PageTurn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  // Remember where the middle of the screen sits on this page, so the turn looks right from any scroll depth.
  const prepare = useCallback(() => {
    const element = ref.current
    if (!element) return
    const y = window.innerHeight / 2 - element.getBoundingClientRect().top
    document.documentElement.style.setProperty('--turn-y', `${Math.round(y)}px`)
  }, [])

  return (
    <PrepareContext.Provider value={prepare}>
      <ViewTransition
        enter={{ 'page-turn-next': 'page-in', 'page-turn-prev': 'page-in', default: 'none' }}
        exit={{ 'page-turn-next': 'page-out-next', 'page-turn-prev': 'page-out-prev', default: 'none' }}
        default="none"
      >
        <div ref={ref}>{children}</div>
      </ViewTransition>
    </PrepareContext.Provider>
  )
}

export function TurnLink({
  href,
  direction,
  className,
  children,
}: {
  href: string
  direction: Direction
  className?: string
  children: React.ReactNode
}) {
  const prepare = useContext(PrepareContext)
  return (
    <Link
      href={href}
      className={className}
      transitionTypes={[`page-turn-${direction}`]}
      onClick={() => prepare?.()}
    >
      {children}
    </Link>
  )
}
