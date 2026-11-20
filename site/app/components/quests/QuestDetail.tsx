'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { QuestPreview } from './QuestPreview'
import { QuestVideo } from './QuestVideo'
import { TodoChecklist } from './TodoChecklist'
import type { Media, Quest } from './quests'

function Stage({ item, quest }: { item: Media | undefined; quest: Quest }) {
  if (!item) return <QuestPreview quest={quest} sizes="560px" />
  if (item.type === 'video') {
    return <QuestVideo src={item.src} poster={item.poster} label={item.alt} controls className="bg-[#1E1A1C] object-contain" />
  }
  return (
    <Image
      key={item.src}
      src={item.src}
      alt={item.alt}
      fill
      sizes="(min-width: 768px) 520px, 92vw"
      className="object-cover"
    />
  )
}

function Thumb({ item }: { item: Media }) {
  if (item.type === 'video') {
    return item.poster ? (
      <Image src={item.poster} alt="" fill sizes="56px" className="object-cover" />
    ) : (
      <span className="absolute inset-0 bg-[#1E1A1C]" />
    )
  }
  return <Image src={item.src} alt="" fill sizes="56px" className="object-cover" />
}

/**
 * The opened quest. Photos and videos show in a big square with a row of thumbnails underneath
 * when there is more than one (a small carousel). The checklist quest shows a list you can tick.
 */
export function QuestDetail({ quest, onClose }: { quest: Quest; onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const media = quest.gallery
  const isTodo = quest.preview.type === 'todo'
  const count = media.length

  function onKeyDown(event: React.KeyboardEvent) {
    if (count < 2) return
    if (event.key === 'ArrowRight') setIndex((current) => (current + 1) % count)
    if (event.key === 'ArrowLeft') setIndex((current) => (current - 1 + count) % count)
  }

  return (
    <div className="w-[min(960px,92vw)] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(30,20,25,0.35)]">
      {/* title bar: the red dot closes the window, like a real one */}
      <div className="relative flex h-10 items-center gap-2 border-b border-ink/10 bg-[#F1EEEA] px-4">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="-m-1.5 grid size-6 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent"
        >
          <span className="size-3 rounded-full bg-[#FF5F57]" />
        </button>
        <span className="size-3 rounded-full bg-[#D9D2CB]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#D9D2CB]" aria-hidden="true" />
        <span className="pointer-events-none absolute inset-x-0 text-center font-mono text-xs tracking-[0.08em] text-ink">
          {quest.filename}
        </span>
      </div>

      <div className="grid max-h-[calc(88vh-2.5rem)] overflow-y-auto md:grid-cols-[1.6fr_1fr]">
        {/* media (arrow keys move between items when there are several) */}
        <div className="flex flex-col md:border-r md:border-ink/10" onKeyDown={onKeyDown}>
          <div className="p-5 md:p-6">
            {isTodo ? (
              <TodoChecklist quest={quest} />
            ) : (
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-md bg-cream">
                <Stage item={media[index]} quest={quest} />
              </div>
            )}
          </div>

          {count > 1 && (
            <div className="flex justify-center gap-3 border-t border-ink/10 py-4">
              {media.map((item, itemIndex) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Show ${item.type === 'video' ? 'video' : 'photo'} ${itemIndex + 1} of ${count}`}
                  aria-current={itemIndex === index}
                  onClick={() => setIndex(itemIndex)}
                  className={`relative size-14 cursor-pointer overflow-hidden rounded outline-offset-2 transition-opacity focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent ${
                    itemIndex === index ? 'outline-[3px] outline-accent' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Thumb item={item} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-5 md:p-6">
          <h2 id="quest-dialog-title" className="font-display text-[32px] leading-[1.1] text-ink italic">
            {quest.title}
          </h2>

          <dl className="mt-5 space-y-2.5 text-[15px]">
            {quest.meta.map((item) => (
              <div key={item.label} className="flex justify-between gap-4">
                <dt className="text-ink-soft">{item.label}</dt>
                <dd className="text-right text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-4 text-base leading-[1.7] text-ink">
            {quest.description.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>

          {quest.projectSlug && (
            <Link
              href={`/work/${quest.projectSlug}`}
              className="mt-6 inline-block font-mono text-sm tracking-[0.08em] text-accent-deep uppercase hover:underline"
            >
              See the project &rarr;
            </Link>
          )}

          <button
            type="button"
            onClick={onClose}
            className="mt-8 block cursor-pointer font-mono text-sm tracking-[0.12em] text-ink-soft uppercase hover:text-accent-deep md:hidden"
          >
            &lsaquo; Close
          </button>
        </div>
      </div>
    </div>
  )
}
