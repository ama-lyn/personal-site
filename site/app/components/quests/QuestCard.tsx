import { QuestPreview } from './QuestPreview'
import type { Quest } from './quests'

export function QuestCard({ quest, onOpen }: { quest: Quest; onOpen: (slug: string) => void }) {
  return (
    <article className="group relative mb-8 break-inside-avoid transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none">
      <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_24px_rgba(74,59,63,0.1)]">
        {/* window title bar: only the quests have these */}
        <div className="relative flex h-8 items-center gap-1.5 bg-[#F1EEEA] px-3.5" aria-hidden="true">
          <span className="size-[9px] rounded-full bg-[#D9D2CB]" />
          <span className="size-[9px] rounded-full bg-[#D9D2CB]" />
          <span className="size-[9px] rounded-full bg-[#D9D2CB]" />
          <span className="absolute inset-x-0 text-center font-mono text-xs tracking-[0.08em] text-ink-soft">
            {quest.filename}
          </span>
        </div>

        <div className={`relative ${quest.preview.aspect}`}>
          <QuestPreview quest={quest} sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw" />
        </div>
      </div>

      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`Open quest: ${quest.title}`}
        onClick={() => onOpen(quest.slug)}
        className="absolute inset-0 z-10 cursor-pointer rounded-[18px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent"
      />
    </article>
  )
}
