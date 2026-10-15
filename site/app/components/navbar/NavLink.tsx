import Link from 'next/link'

type NavLinkProps = {
  href: string
  label: string
  color: 'pink' | 'lavender' | 'mint'
  rotate?: string
  active?: boolean
  onClick?: () => void
}

const colorMap = {
  pink: 'bg-pink',
  lavender: 'bg-lavender',
  mint: 'bg-mint',
}

const activeColorMap = {
  pink: 'bg-pink-deep text-white',
  lavender: 'bg-[#C3B4E8] text-ink',
  mint: 'bg-[#A9DCC5] text-ink',
}

export function NavLink({ href, label, color, rotate = '0deg', active = false, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      style={{ transform: `rotate(${rotate})` }}
      className={`${active ? activeColorMap[color] : colorMap[color]} relative rounded-lg px-6 py-3 font-caveat text-lg shadow-[0_4px_10px_rgba(74,59,63,0.12)] transition-all hover:shadow-[0_6px_16px_rgba(74,59,63,0.16)] ${active ? '' : 'hover:-translate-y-1'}`}
    >
      {label}
      {active && (
        <span aria-hidden="true" className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm leading-none text-pink-deep">
          ♡
        </span>
      )}
    </Link>
  )
}
