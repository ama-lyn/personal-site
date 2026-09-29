import Link from 'next/link'

type NookTeaserProps = {
  onClick?: () => void
}

export function NookTeaser({ onClick }: NookTeaserProps) {
  return (
    <Link
      href="/nook"
      onClick={onClick}
      className="ml-2 font-caveat text-lg text-muted -rotate-8 underline decoration-dashed decoration-1 underline-offset-4 hover:text-pink-deep transition-colors"
    >
      psst...
    </Link>
  )
}
