'use client'

import { useState } from 'react'
import type { Quest } from './quests'

/**
 * The "open quests" list, opened up. Things I've done are ticked and locked.
 * Visitors can tick the rest. Their ticks are saved in their own browser only
 * (nobody else sees them, and my list isn't changed).
 */
export function TodoChecklist({ quest }: { quest: Quest }) {
  const storageKey = `gwen-quest-todo:${quest.slug}`
  // This only ever renders after a click (never on the server), so reading storage here is safe.
  const [ticked, setTicked] = useState<number[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
      return Array.isArray(saved) ? saved.filter((n): n is number => typeof n === 'number') : []
    } catch {
      return []
    }
  })

  if (quest.preview.type !== 'todo') return null
  const items = quest.preview.items
  const open = items.filter((item) => !item.done).length
  const tickedOpen = items.filter((item, index) => !item.done && ticked.includes(index)).length

  function save(next: number[]) {
    setTicked(next)
    try {
      localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      /* private mode: the ticks just won't be remembered */
    }
  }

  function toggle(index: number) {
    save(ticked.includes(index) ? ticked.filter((n) => n !== index) : [...ticked, index])
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-cream p-6">
      <ul className="space-y-1">
        {items.map((item, index) => {
          const id = `${quest.slug}-${index}`
          const checked = item.done || ticked.includes(index)
          return (
            <li key={id}>
              <label
                htmlFor={id}
                className={`flex items-center gap-3.5 rounded-lg px-2 py-2.5 text-lg ${
                  item.done ? 'cursor-default' : 'cursor-pointer hover:bg-white/70'
                }`}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  disabled={item.done}
                  onChange={() => toggle(index)}
                  className="size-5 shrink-0 cursor-pointer accent-accent disabled:cursor-default"
                />
                <span className={checked ? 'text-ink-soft line-through' : 'text-ink'}>{item.text}</span>
                {item.done && (
                  <span className="ml-auto font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase">
                    done
                  </span>
                )}
              </label>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4 font-mono text-xs tracking-[0.08em] text-ink-soft">
        <p aria-live="polite">
          {tickedOpen === open && open > 0
            ? 'that’s every open quest. nice.'
            : `you’ve ticked ${tickedOpen} of ${open} open quests`}
        </p>
        {tickedOpen > 0 && (
          <button
            type="button"
            onClick={() => save([])}
            className="cursor-pointer uppercase hover:text-accent-deep"
          >
            clear
          </button>
        )}
      </div>
    </div>
  )
}
