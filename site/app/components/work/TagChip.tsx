export function TagChip({
  icon,
  dot,
  children,
}: {
  icon?: 'trophy'
  dot?: string // tailwind background class for a status dot
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3.5 py-1 font-mono text-xs tracking-[0.08em] text-ink-soft uppercase">
      {dot && <span className={`size-2 rounded-full ${dot}`} aria-hidden="true" />}
      {icon === 'trophy' && <span aria-hidden="true">🏆</span>}
      {children}
    </span>
  )
}
