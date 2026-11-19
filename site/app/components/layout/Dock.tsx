'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type Variant = 'envelope' | 'sticker'
type Tone = 'pink' | 'lavender' | 'mint' | 'yellow'
type Icon = 'work' | 'quests' | 'blog'

const items: { href: string; label: string; tone: Tone; icon: Icon | null }[] = [
  { href: '/about', label: 'profile', tone: 'pink', icon: null },
  { href: '/work', label: 'work', tone: 'lavender', icon: 'work' },
  { href: '/quests', label: 'quests', tone: 'mint', icon: 'quests' },
  { href: '/blog', label: 'blog', tone: 'yellow', icon: 'blog' },
]

const tones: Record<Tone, { label: string; body: string; flap: string; sticker: string }> = {
  pink: { label: 'bg-pink', body: 'fill-pink', flap: 'fill-[#E7A1B4]', sticker: 'bg-pink' },
  lavender: { label: 'bg-lavender', body: 'fill-lavender', flap: 'fill-[#CFC3EA]', sticker: 'bg-lavender' },
  mint: { label: 'bg-mint', body: 'fill-mint', flap: 'fill-[#A9D6C4]', sticker: 'bg-mint' },
  yellow: { label: 'bg-yellow', body: 'fill-yellow', flap: 'fill-[#F2CF7A]', sticker: 'bg-yellow' },
}

const iconPaths: Record<Icon, React.ReactNode> = {
  work: <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />,
  quests: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </>
  ),
  blog: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
}

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

/** Hide while scrolling down, show again on scroll up (and always near the top). */
function useHiddenOnScrollDown() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - last
        if (y < 80 || delta < -8) setHidden(false)
        else if (delta > 8) setHidden(true)
        last = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

function Envelope({ tone, open }: { tone: Tone; open: boolean }) {
  const t = tones[tone]
  if (open) {
    return (
      <svg width="52" height="47" viewBox="0 0 56 52" aria-hidden="true">
        <path d="M2 20 28 2l26 18Z" className={`${t.flap} stroke-ink/40`} strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="9" y="8" width="38" height="26" rx="2" className="fill-white stroke-ink/25" />
        <path d="M15 16h26M15 22h20" className="stroke-accent/50" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="1" y="20" width="54" height="30" rx="4" className={`${t.body} stroke-ink/40`} strokeWidth="1.5" />
        <path d="M2 22l26 16 26-16" fill="none" className="stroke-ink/40" strokeWidth="1.5" />
      </svg>
    )
  }
  return (
    <svg width="52" height="47" viewBox="0 0 56 52" aria-hidden="true">
      <rect x="1" y="10" width="54" height="38" rx="5" className={`${t.body} stroke-ink/35`} strokeWidth="1.5" />
      <path d="M2 14l26 20 26-20" fill="none" className="stroke-ink/45" strokeWidth="1.5" />
    </svg>
  )
}

function StickerGlyph({ tone, icon, active }: { tone: Tone; icon: Icon | null; active: boolean }) {
  const motion = active
    ? '-rotate-[8deg] -translate-y-1.5 shadow-[0_8px_16px_rgba(74,59,63,0.3)]'
    : 'shadow-[0_3px_8px_rgba(74,59,63,0.2)] group-hover:-rotate-3 group-hover:-translate-y-1'
  const base = `h-[46px] w-[46px] border-[3px] border-white transition-transform duration-200 motion-reduce:transition-none ${motion}`

  if (!icon) {
    return (
      <span className={`block overflow-hidden rounded-full ${base}`}>
        <Image src="/avatar.jpg" alt="" width={46} height={46} className="h-full w-full object-cover" />
      </span>
    )
  }
  return (
    <span
      className={`grid place-items-center ${icon === 'work' ? 'rounded-2xl' : 'rounded-full'} ${tones[tone].sticker} ${base}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-ink"
        aria-hidden="true"
      >
        {iconPaths[icon]}
      </svg>
    </span>
  )
}

export function Dock({ variant }: { variant: Variant }) {
  const pathname = usePathname()
  const hidden = useHiddenOnScrollDown()

  return (
    <nav
      aria-label="Pages"
      className={`pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 transition-transform duration-300 motion-reduce:transition-none ${
        hidden ? 'translate-y-[160%] focus-within:translate-y-0' : ''
      }`}
    >
      <ul className="pointer-events-auto flex items-start gap-3 rounded-3xl bg-white/90 px-4 py-2.5 shadow-[0_8px_24px_rgba(74,59,63,0.14)] backdrop-blur sm:gap-6 sm:px-6">
        {items.map((item) => {
          const active = isActive(pathname, item.href)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="group flex flex-col items-center gap-1 rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent"
              >
                {variant === 'envelope' ? (
                  <span className="block transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none">
                    <Envelope tone={item.tone} open={active} />
                  </span>
                ) : (
                  <StickerGlyph tone={item.tone} icon={item.icon} active={active} />
                )}
                <span
                  className={`rounded-md px-1.5 py-0.5 font-mono text-[11px] tracking-wide text-ink ${
                    active ? tones[item.tone].label : ''
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
