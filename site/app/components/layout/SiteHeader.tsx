import Image from 'next/image'
import Link from 'next/link'
import { contactLinks } from '../site/links'

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" aria-label="Home" className="flex items-center gap-3.5">
        <span className="relative block h-[46px] w-[46px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_4px_10px_rgba(74,59,63,0.2)]">
          <Image src="/avatar.jpg" alt="" fill sizes="46px" preload className="object-cover" />
        </span>
        <span className="hidden font-mono text-sm uppercase tracking-[0.12em] text-ink sm:inline">
          Gwen
        </span>
      </Link>

      <nav
        aria-label="Contact"
        className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft sm:gap-6 sm:text-[13px]"
      >
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
