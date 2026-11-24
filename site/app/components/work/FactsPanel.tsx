import type { Project } from './projects'

/** The "my role / timeline / team / tools" box under the TL;DR. Empty rows are skipped. */
export function FactsPanel({ project }: { project: Project }) {
  const facts = [
    { label: 'My role', values: project.role ? [project.role] : [] },
    { label: 'Timeline', values: project.timeline ? [project.timeline] : [] },
    { label: 'Team', values: project.team ?? [] },
    { label: project.partners?.label ?? 'Partners', values: project.partners?.people ?? [] },
    { label: 'Tools', values: project.tools },
  ].filter((fact) => fact.values.length > 0)

  return (
    <dl className="mt-8 grid gap-x-10 gap-y-7 rounded-2xl bg-white/70 p-6 ring-1 ring-border-soft sm:grid-cols-2 md:p-7">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase">{fact.label}</dt>
          {fact.values.map((value, i) => (
            <dd key={`${value}-${i}`} className="mt-1 text-base text-ink">
              {value}
            </dd>
          ))}
        </div>
      ))}
    </dl>
  )
}
