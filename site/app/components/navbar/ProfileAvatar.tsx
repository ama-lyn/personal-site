import Image from 'next/image'
import Link from 'next/link'

type ProfileAvatarProps = {
  src: string
  alt?: string
}

export function ProfileAvatar({ src, alt = 'home' }: ProfileAvatarProps) {
  return (
    <Link
      href="/"
      className="relative h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] shrink-0 rounded-full border-4 border-paper bg-paper shadow-soft overflow-hidden transition-transform hover:scale-105"
    >
      <Image src={src} alt={alt} fill sizes="120px" loading="eager" className="object-cover" />
    </Link>
  )
}