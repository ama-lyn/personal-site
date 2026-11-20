import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '../../components/layout/PageShell'
import { Preview } from '../../components/work/Preview'
import { SectionNav } from '../../components/work/SectionNav'
import { getProject, projects, statusLabel } from '../../components/work/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return { title: project ? `${project.title} | Gwendolyn Amanda` : 'Project' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Tools', value: project.tools.join(', ') },
    { label: 'Timeline', value: project.timeline },
    { label: 'Status', value: statusLabel[project.status].text.toLowerCase() },
  ]

  return (
    <PageShell nav="header">
      <div className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <Link
            href="/work"
            className="inline-block rounded-full border-[1.5px] border-ink px-5 py-2.5 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent"
          >
            &lsaquo; Back
          </Link>
          <SectionNav sections={project.sections} />
        </aside>

        <article className="min-w-0">
          <h1 className="font-display text-4xl leading-none text-ink italic md:text-[52px]">
            {project.title}
          </h1>

          <dl className="mt-6 flex flex-wrap gap-x-11 gap-y-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase">{item.label}</dt>
                <dd className="mt-1 text-base text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <Preview project={project} className="mt-8 h-[260px] sm:h-[360px] lg:h-[410px]" />

          {project.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-16 scroll-mt-8">
              <p className="font-mono text-sm font-bold tracking-[0.12em] text-accent-deep uppercase">
                {section.label}
              </p>
              <h2 className="mt-3.5 text-[28px] leading-[1.2] font-extrabold text-ink md:text-4xl">
                {section.heading}
              </h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="mt-4 text-[17px] leading-[1.7] text-ink">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  )
}
