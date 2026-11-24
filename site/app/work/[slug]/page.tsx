import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '../../components/layout/PageShell'
import { FactsPanel } from '../../components/work/FactsPanel'
import { SectionBlocks } from '../../components/work/Blocks'
import { OrgMark } from '../../components/work/OrgMark'
import { Preview } from '../../components/work/Preview'
import { SectionNav } from '../../components/work/SectionNav'
import { TagChip } from '../../components/work/TagChip'
import { UpNext } from '../../components/work/UpNext'
import { getProject, projects, statusLabel } from '../../components/work/projects'

export function generateStaticParams() {
  return projects.filter((project) => !project.comingSoon).map((project) => ({ slug: project.slug }))
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
  if (!project || project.comingSoon) notFound()

  const status = statusLabel[project.status]

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
          <Preview project={project} className="h-[260px] sm:h-[360px] lg:h-[410px]" />

          <p className="mt-8 flex items-center gap-2.5 text-base text-ink">
            <OrgMark project={project} size={24} />
            {project.context}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-none text-ink italic md:text-[52px]">{project.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.tag && <TagChip icon={project.tag.icon}>{project.tag.label}</TagChip>}
            <TagChip dot={status.dot}>{status.text}</TagChip>
            {project.topics?.map((topic, i) => (
              <TagChip key={`${topic}-${i}`}>{topic}</TagChip>
            ))}
          </div>

          {project.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="mt-16 scroll-mt-8">
              <p className="font-mono text-sm font-bold tracking-[0.12em] text-accent-deep uppercase">
                {section.label}
              </p>
              <h2 className="mt-3.5 text-[24px] leading-[1.2] font-extrabold text-ink md:text-4xl">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-4 text-base leading-[1.7] text-ink md:text-[17px]">
                  {paragraph}
                </p>
              ))}
              <SectionBlocks blocks={section.blocks} />
              {index === 0 && <FactsPanel project={project} />}
            </section>
          ))}

          <UpNext current={project} />
        </article>
      </div>
    </PageShell>
  )
}
