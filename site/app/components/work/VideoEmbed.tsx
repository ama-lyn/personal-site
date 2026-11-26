/**
 * A normal YouTube embed. It uses the privacy-friendly youtube-nocookie.com address and loads lazily,
 * so the player only loads once the video is near the screen. With no video id yet it shows a plain
 * placeholder tile.
 */
export function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  if (!youtubeId) {
    return (
      <div className="grid aspect-video w-full place-items-center rounded-2xl bg-white ring-1 ring-border-soft">
        <span className="font-mono text-sm tracking-[0.12em] text-ink-soft uppercase">{title}</span>
      </div>
    )
  }

  return (
    <iframe
      className="aspect-video w-full rounded-2xl bg-white shadow-card"
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
