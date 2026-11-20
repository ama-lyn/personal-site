import { PageShell } from '../components/layout/PageShell'
import { WorkCard } from '../components/work/WorkCard'
import { projects } from '../components/work/projects'

const SUBTITLE = 'I build things that feel human. Currently curious about the spaces between design and code.' 

export default function WorkPage() {
  return (
    <PageShell nav="sticker">
      <h1 className="font-display text-4xl leading-[1.05] text-ink italic md:text-[52px]">
        Everything I&rsquo;ve made,
        <br />
        shipped or not.
      </h1>
      <p className="mt-4 text-[17px] leading-[1.7] text-ink-soft">{SUBTITLE}</p>

      <div className="mt-heading grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </PageShell>
  )
}
