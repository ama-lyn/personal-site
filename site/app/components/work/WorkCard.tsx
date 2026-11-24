import Link from 'next/link'
import { OrgMark } from './OrgMark'
import { Preview } from './Preview'
import { TagChip } from './TagChip'
import { statusLabel, toneClass, type Project } from './projects'

export function WorkCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const status = statusLabel[project.status]
  const previewHeight = compact ? 'h-[200px] sm:h-[220px]' : 'h-[260px] sm:h-[300px]'
  const cardClass = 'block rounded-[26px] bg-white p-2.5 shadow-[0_8px_24px_rgba(74,59,63,0.1)]'

  const text = (
    <>
      <div className="flex items-center justify-between gap-3 px-3.5 pt-4">
        <span className="flex min-w-0 items-center gap-2.5 text-base text-ink">
          <OrgMark project={project} />
          <span className="truncate">{project.context}</span>
        </span>
        {project.comingSoon ? null : project.tag ? (
          <TagChip icon={project.tag.icon}>{project.tag.label}</TagChip>
        ) : (
          <TagChip dot={status.dot}>{status.text}</TagChip>
        )}
      </div>
      <h2
        className={`px-3.5 pt-1.5 pb-3 font-display leading-[1.1] text-ink italic ${compact ? 'text-3xl' : 'text-4xl'}`}
      >
        {project.title}
      </h2>
      <p className="sr-only">{project.summary}</p>
    </>
  )

  if (project.comingSoon) {
    return (
      <div className={`${cardClass} opacity-90`}>
        <div
          className={`grid place-items-center rounded-[20px] border-2 border-dashed border-ink/15 ${toneClass[project.tone].soft} ${previewHeight}`}
        >
          <span className="font-mono text-sm tracking-[0.12em] text-ink-soft uppercase">coming soon</span>
        </div>
        {text}
      </div>
    )
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group ${cardClass} transition-transform duration-300 outline-offset-4 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent motion-reduce:transition-none`}
    >
      <Preview project={project} className={previewHeight} />
      {text}
    </Link>
  )
}
