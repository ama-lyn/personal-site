import Link from 'next/link'

type NavLinkProps = {
  href: string
  label: string
  color: 'pink' | 'lavender' | 'mint'
  rotate?: string
}

const colorMap = {
  pink: 'bg-pink',
  lavender: 'bg-lavender',
  mint: 'bg-mint',
}

export function NavLink({ href, label, color, rotate = '0deg' }: NavLinkProps) {
  return (
    <Link
      href={href}
      style={{ transform: `rotate(${rotate})` }}
      className={`${colorMap[color]} rounded-lg px-6 py-3 font-caveat text-lg text-ink shadow-[0_4px_10px_rgba(74,59,63,0.12)] transition-all hover:shadow-[0_6px_16px_rgba(74,59,63,0.16)] hover:-translate-y-1`}
    >
      {label}
    </Link>
  )
}