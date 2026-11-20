'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useRef } from 'react'

/*
 * The page turn between journal entries.
 * Clicking "next" or "previous" turns the current page away, then opens the other entry,
 * which turns in. Nothing animates for visitors who prefer reduced motion, or when you
 * arrive at an entry any other way (from the list, a link, or the back button).
 */

type Direction = 'next' | 'prev'
const STORAGE_KEY = 'gwen-journal-turn'
const TurnContext = createContext<((href: string, direction: Direction) => void) | null>(null)

export function PageTurn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Arriving from a page turn: turn this page in.
  useEffect(() => {
    const element = ref.current
    if (!element) return

    let direction: string | null = null
    try {
      direction = sessionStorage.getItem(STORAGE_KEY)
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* storage unavailable: no animation */
    }

    if (direction !== 'next' && direction !== 'prev') {
      if (!element.classList.contains('turn-in')) document.documentElement.classList.remove('turn-lock')
      return
    }
    element.dataset.direction = direction
    element.classList.add('turn-in')
    document.documentElement.classList.add('turn-lock')
    element.addEventListener(
      'animationend',
      () => {
        element.classList.remove('turn-in')
        document.documentElement.classList.remove('turn-lock')
      },
      { once: true },
    )
  }, [])

  const turn = useCallback(
    (href: string, direction: Direction) => {
      const element = ref.current
      if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href)
        return
      }
      try {
        sessionStorage.setItem(STORAGE_KEY, direction)
      } catch {
        /* storage unavailable: the next page just won't animate in */
      }
      element.dataset.direction = direction
      element.classList.add('turn-out')
      document.documentElement.classList.add('turn-lock')

      let navigated = false
      const go = () => {
        if (navigated) return
        navigated = true
        router.push(href)
      }
      element.addEventListener('animationend', go, { once: true })
      window.setTimeout(go, 700) // safety net if the animation event never fires
    },
    [router],
  )

  return (
    <TurnContext.Provider value={turn}>
      <div ref={ref} className="turn-card">
        {children}
      </div>
    </TurnContext.Provider>
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
  const turn = useContext(TurnContext)
  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        // let ctrl/cmd/shift-click, middle-click etc. behave like normal links
        if (!turn || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
        event.preventDefault()
        turn(href, direction)
      }}
    >
      {children}
    </Link>
  )
}
