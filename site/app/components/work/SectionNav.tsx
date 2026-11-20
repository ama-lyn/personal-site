'use client'

import { useEffect, useState } from 'react'
import type { Section } from './projects'

/** The "TL;DR / Background / …" list. Highlights the section you're reading. */
export function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-15% 0px -65% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-4">
      {sections.map((section) => {
        const isActive = active === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? 'location' : undefined}
            className={`font-mono text-sm tracking-[0.12em] uppercase transition-colors hover:text-accent-deep ${
              isActive ? 'font-bold text-accent-deep' : 'text-ink-soft'
            }`}
          >
            {isActive && <span aria-hidden="true">— </span>}
            {section.label}
          </a>
        )
      })}
    </nav>
  )
}
