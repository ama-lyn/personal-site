"use client";

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ProfileAvatar } from './ProfileAvatar'
import { NavLink } from './NavLink'
import { NookTeaser } from './NookTeaser'

const links = [
  { href: '/about', label: 'About', color: 'pink' as const, rotate: '-2deg' },
  { href: '/projects', label: 'Projects', color: 'lavender' as const, rotate: '1deg' },
  { href: '/blog', label: 'Blog', color: 'mint' as const, rotate: '-1deg' },
]

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  // Close on outside click / tap and on Escape
  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={navRef} className="relative">
      <nav className="flex items-center gap-4 overflow-visible">
        <ProfileAvatar src="/avatar.jpg" />

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          {links.map(link => (
            <NavLink key={link.href} {...link} active={isActivePath(pathname, link.href)} />
          ))}
          <NookTeaser />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-paper bg-paper text-ink shadow-soft transition-transform hover:scale-105 active:scale-95"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`sm:hidden absolute inset-x-0 top-full z-20 mt-2 origin-top overflow-hidden rounded-2xl border border-white/50 bg-white/40 shadow-[0_8px_32px_rgba(74,59,63,0.1)] backdrop-blur-md transition-all duration-300 ease-out ${
          open
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'pointer-events-none max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col items-start gap-3 px-4 py-5">
          {links.map(link => (
            <NavLink
              key={link.href}
              {...link}
              active={isActivePath(pathname, link.href)}
              onClick={() => setOpen(false)}
            />
          ))}
          <NookTeaser onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>
  )
}
