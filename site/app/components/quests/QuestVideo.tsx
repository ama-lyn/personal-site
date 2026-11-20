'use client'

import { useEffect, useRef } from 'react'

/** A quiet looping clip. On the card it autoplays (muted); in the opened view it has controls. */
export function QuestVideo({
  src,
  poster,
  label,
  controls = false,
  className = '',
}: {
  src: string
  poster?: string
  label: string
  controls?: boolean
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // visitors who prefer reduced motion get a still frame instead of a moving clip
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) ref.current?.pause()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      controls={controls}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
