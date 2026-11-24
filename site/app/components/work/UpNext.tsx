import { WorkCard } from './WorkCard'
import { projects, type Project } from './projects'

/** Two more projects at the end of a project page, so nobody has to scroll back up. */
export function UpNext({ current }: { current: Project }) {
  const list = projects.filter((project) => !project.comingSoon)
  const index = list.findIndex((project) => project.slug === current.slug)
  const next = [1, 2]
    .map((step) => list[(index + step) % list.length])
    .filter((project, i, all) => project.slug !== current.slug && all.indexOf(project) === i)

  if (next.length === 0) return null
  return (
    <section aria-labelledby="up-next" className="mt-24">
      <p className="text-center font-caveat text-2xl text-ink-soft">thanks for reading ♡</p>
      <div className="mt-10 border-t border-border-soft pt-10">
        <h2 id="up-next" className="font-mono text-sm tracking-[0.18em] text-ink-soft uppercase">
          Up next
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {next.map((project) => (
            <WorkCard key={project.slug} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
