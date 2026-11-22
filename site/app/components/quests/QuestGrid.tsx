'use client'

import { useEffect, useRef, useState } from 'react'
import { QuestCard } from './QuestCard'
import { QuestDetail } from './QuestDetail'
import type { Quest } from './quests'

/* --- layout --------------------------------------------------------------------------------
 * Three independent columns, like stacked windows. One quest can be "wide": it spans the first two
 * columns, the cards under it stack separately in each of those two columns, and the third column
 * flows on its own beside it. Cards always keep their natural height.
 * Cards are dealt to whichever column is currently shortest, so the bottoms stay roughly level.
 * On smaller screens it falls back to one or two flowing columns (the wide card spans both).
 */
function ratioOf(aspect: string) {
  if (aspect === 'aspect-square') return 1
  if (aspect === 'aspect-video') return 16 / 9
  const match = aspect.match(/\[(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\]/)
  return match ? Number(match[1]) / Number(match[2]) : 1
}

const CHROME = 0.18 // window title bar + gap, in column widths
const WIDE_RATIO = 16 / 10 // must match the aspect used in QuestCard

function arrange(quests: Quest[]) {
  const wide = quests.find((quest) => quest.wide)
  if (!wide) return null

  const rest = quests.filter((quest) => quest !== wide)
  const columns: Quest[][] = [[], [], []] // left and middle (both under the wide card), then right
  const wideHeight = 2.1 / WIDE_RATIO + CHROME
  const heights = [wideHeight, wideHeight, 0]

  for (const quest of rest) {
    const shortest = heights.indexOf(Math.min(...heights))
    columns[shortest].push(quest)
    heights[shortest] += 1 / ratioOf(quest.preview.aspect) + CHROME
  }
  return { wide, left: columns[0], middle: columns[1], right: columns[2] }
}

/**
 * The scattered grid of quests, plus the opened-quest dialog.
 * Uses the browser's own <dialog>, which gives: Esc to close, focus kept inside,
 * focus returned to the card afterwards, and a ::backdrop we blur.
 */
export function QuestGrid({ quests }: { quests: Quest[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = quests.find((quest) => quest.slug === activeSlug) ?? null
  const layout = arrange(quests)
  const renderCards = (list: Quest[]) =>
    list.map((quest) => <QuestCard key={quest.slug} quest={quest} onOpen={setActiveSlug} />)

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
      <div className="columns-1 gap-8 md:columns-2 lg:columns-auto lg:grid lg:grid-cols-3 lg:items-start">
        {layout ? (
          <>
            <div className="contents lg:col-span-2 lg:block">
              {renderCards([layout.wide])}
              <div className="contents lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                <div className="contents lg:block">{renderCards(layout.left)}</div>
                <div className="contents lg:block">{renderCards(layout.middle)}</div>
              </div>
            </div>
            <div className="contents lg:block">{renderCards(layout.right)}</div>
          </>
        ) : (
          renderCards(quests)
        )}
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
