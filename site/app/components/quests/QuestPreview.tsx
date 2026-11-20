import Image from 'next/image'
import { QuestVideo } from './QuestVideo'
import type { Quest } from './quests'

/** What a quest looks like inside its window: a photo, a terminal, a list or a checklist. */
export function QuestPreview({ quest, sizes }: { quest: Quest; sizes: string }) {
  const preview = quest.preview

  switch (preview.type) {
    case 'photo':
      return <Image src={preview.src} alt={preview.alt} fill sizes={sizes} className="object-cover" />

    case 'video':
      return <QuestVideo src={preview.src} poster={preview.poster} label={quest.title} />

    case 'terminal':
      return (
        <div className="h-full w-full overflow-hidden bg-[#1E1A1C] p-5 font-mono text-[13px] leading-[1.8] text-mint">
          {preview.lines.map((line, index) => (
            <div key={index} className={line.startsWith('>') ? 'text-pink' : undefined}>
              {line}
            </div>
          ))}
        </div>
      )

    case 'list':
      return (
        <div className="h-full w-full overflow-hidden bg-yellow-soft p-5">
          <p className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase">{preview.heading}</p>
          <ol className="mt-2 list-decimal pl-5 text-base leading-[1.9] text-ink">
            {preview.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )

    case 'todo':
      return (
        <div className="h-full w-full overflow-hidden bg-white p-5 text-base leading-[2.1] text-ink">
          {preview.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className={`size-4 shrink-0 rounded border-2 border-accent ${item.done ? 'bg-pink' : 'bg-white'}`}
              />
              <span className={item.done ? 'text-ink-soft line-through' : undefined}>{item.text}</span>
            </div>
          ))}
        </div>
      )
  }
}
