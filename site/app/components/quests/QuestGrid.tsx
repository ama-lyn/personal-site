'use client'

import { useEffect, useRef, useState } from 'react'
import { QuestCard } from './QuestCard'
import { QuestDetail } from './QuestDetail'
import type { Quest } from './quests'

/**
 * The scattered grid of quests, plus the opened-quest dialog.
 * Uses the browser's own <dialog>, which gives: Esc to close, focus kept inside,
 * focus returned to the card afterwards, and a ::backdrop we blur.
 */
export function QuestGrid({ quests }: { quests: Quest[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = quests.find((quest) => quest.slug === activeSlug) ?? null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active && !dialog.open) dialog.showModal()
    if (!active && dialog.open) dialog.close()

    // keep the page behind from scrolling while a quest is open
    document.documentElement.style.overflow = active ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
        {quests.map((quest) => (
          <QuestCard key={quest.slug} quest={quest} onOpen={setActiveSlug} />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="quest-dialog-title"
        onClose={() => setActiveSlug(null)} // fires on Esc and on dialog.close()
        onClick={(event) => {
          // a click on the blurred backdrop lands on the dialog element itself
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[#cbc1ba]/55 backdrop:backdrop-blur-md"
      >
        {active && <QuestDetail key={active.slug} quest={active} onClose={() => dialogRef.current?.close()} />}
      </dialog>
    </>
  )
}
