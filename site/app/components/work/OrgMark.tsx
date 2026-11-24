import Image from 'next/image'
import { toneClass, type Project } from './projects'

/** The logo of the hackathon or company. Without a logo file, a small letter tile stands in. */
export function OrgMark({ project, size = 20 }: { project: Project; size?: number }) {
  if (project.logo) {
    return <Image src={project.logo} alt="" width={size} height={size} className="rounded-md object-contain" />
  }
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`grid place-items-center rounded-md font-mono text-[11px] font-bold text-ink ring-1 ring-ink/10 ${toneClass[project.tone].solid}`}
    >
      {project.title.charAt(0)}
    </span>
  )
}
