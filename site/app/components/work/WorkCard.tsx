import Link from 'next/link'
import { Preview } from './Preview'
import { statusLabel, toneClass, type Project } from './projects'

export function WorkCard({ project }: { project: Project }) {
  const status = statusLabel[project.status]
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-[26px] bg-white p-2.5 shadow-[0_8px_24px_rgba(74,59,63,0.1)] transition-transform duration-300 outline-offset-4 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent motion-reduce:transition-none"
    >
      <Preview project={project} className="h-[260px] sm:h-[300px]" />
      <div className="flex items-center justify-between gap-3 px-3.5 pt-4">
        <span className="flex items-center gap-2.5 text-base text-ink">
          <span className={`size-5 rounded-md ring-1 ring-ink/10 ${toneClass[project.tone].solid}`} aria-hidden="true" />
          {project.context}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3.5 py-1 font-mono text-xs tracking-[0.08em] text-ink-soft">
          <span className={`size-2 rounded-full ${status.dot}`} aria-hidden="true" />
          {status.text}
        </span>
      </div>
      <h2 className="px-3.5 pt-1.5 pb-3 font-display text-4xl leading-[1.1] text-ink italic">
        {project.title}
      </h2>
      <p className="sr-only">{project.summary}</p>
    </Link>
  )
}
