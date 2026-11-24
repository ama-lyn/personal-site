'use client'

import { useState } from 'react'

/**
 * A YouTube video that only loads when you press play, so the page doesn't pull in YouTube's scripts
 * (or cookies) for people who never watch. With no video id yet it shows a placeholder tile.
 */
export function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (youtubeId && playing) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      disabled={!youtubeId}
      onClick={() => setPlaying(true)}
      className="group relative grid aspect-video w-full place-items-center rounded-2xl bg-ink text-cream outline-offset-4 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent disabled:cursor-default"
    >
      <span className="flex items-center gap-3 font-mono text-sm tracking-[0.12em] uppercase">
        <span className="grid size-12 place-items-center rounded-full bg-cream text-ink" aria-hidden="true">
          ▶
        </span>
        {youtubeId ? `Play: ${title}` : title}
      </span>
    </button>
  )
}
