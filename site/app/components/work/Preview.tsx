import Image from 'next/image'
import { toneClass, type Project } from './projects'

export function Preview({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[20px] ${toneClass[project.tone].soft} ${className}`}>
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-[62%] w-[60%] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-[0_8px_20px_rgba(74,59,63,0.12)]"
          >
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-[#E6DED8]" />
              <span className="size-2 rounded-full bg-[#E6DED8]" />
            </div>
            <div className="mt-4 h-2.5 w-[55%] rounded-full bg-[#EAE3DD]" />
            <div className="mt-2.5 h-2 w-[80%] rounded-full bg-[#F1ECE7]" />
            <div className="mt-2 h-2 w-[68%] rounded-full bg-[#F1ECE7]" />
            <div className="absolute right-4 bottom-4 left-4 flex gap-3">
              <div className="h-12 flex-[35] rounded-lg bg-pink/60" />
              <div className="h-12 flex-[48] rounded-lg bg-lavender/60" />
            </div>
          </div>
          <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase">
            [screenshot]
          </span>
        </>
      )}
    </div>
  )
}
