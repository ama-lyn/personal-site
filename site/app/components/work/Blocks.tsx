import Image from 'next/image'
import { VideoEmbed } from './VideoEmbed'
import type { Block, FigureData } from './projects'

const body = 'text-base leading-[1.7] text-ink md:text-[17px]'

function Figure({ src, alt, caption }: FigureData) {
  return (
    <figure className="mt-8">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white ring-1 ring-border-soft">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-contain" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-sm text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  )
}

/** A grid of 100 dots with some lit, for "x out of 100" numbers. The lit ones are spread in a fixed pattern. */
function DotStat({ value, text, highlight }: { value: string; text: string; highlight: number }) {
  const lit = new Set(Array.from({ length: Math.min(highlight, 100) }, (_, i) => (i * 37 + 11) % 100))
  return (
    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
      <div
        role="img"
        aria-label={`${highlight} out of 100 dots highlighted`}
        className="grid shrink-0 grid-cols-10 gap-1.5"
      >
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i} className={`size-2 rounded-full ${lit.has(i) ? 'bg-accent' : 'bg-ink/15'}`} />
        ))}
      </div>
      <p className={body}>
        <strong className="font-extrabold">{value}</strong> {text}
      </p>
    </div>
  )
}

/** Numbered steps. Each number stays in view while its step is on screen, then the next one takes over. */
function Steps({ items }: { items: Extract<Block, { type: 'steps' }>['items'] }) {
  return (
    <ol className="mt-10 flex flex-col gap-14">
      {items.map((item, i) => (
        <li key={`${i}-${item.title}`} className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[4.5rem_minmax(0,1fr)]">
          <div>
            <span aria-hidden="true" className="sticky top-8 block text-3xl font-bold text-accent-deep sm:text-[32px]">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-ink md:text-2xl">{item.title}</h3>
            <p className={`mt-3 ${body}`}>{item.body}</p>
            {item.figure && <Figure {...item.figure} />}
          </div>
        </li>
      ))}
    </ol>
  )
}

const icons = {
  screen: <path d="M4 5h16v11H4zM9 20h6M12 16v4" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  spark: <path d="M12 3l2.2 6.3L20.5 12l-6.3 2.7L12 21l-2.2-6.3L3.5 12l6.3-2.7z" />,
}

function Reflections({ items }: { items: Extract<Block, { type: 'reflections' }>['items'] }) {
  return (
    <div className="mt-10 flex flex-col gap-12">
      {items.map((item, i) => (
        // icon on top, then the title and the text side by side on one baseline
        <div
          key={`${i}-${item.title}`}
          className="grid gap-y-3 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:items-baseline md:gap-x-10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-6 text-accent-deep md:col-start-1 md:row-start-1"
          >
            {icons[item.icon]}
          </svg>
          <h3 className="text-xl leading-[1.25] font-extrabold text-ink md:col-start-1 md:row-start-2">
            {item.title}
          </h3>
          <p className={`${body} md:col-start-2 md:row-start-2`}>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'callout':
      return (
        <aside className="mt-8 rounded-2xl border border-lavender bg-lavender-soft p-6">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-ink-soft uppercase">
            <span aria-hidden="true">☆</span>
            {block.label}
          </p>
          <p className="mt-3 text-lg leading-[1.6] text-ink">{block.text}</p>
        </aside>
      )
    case 'quote':
      return (
        <blockquote className="mt-8 border-l-2 border-accent/40 pl-5 md:pl-6">
          <p className="font-display text-xl leading-snug text-ink-soft italic md:text-2xl">“{block.text}”</p>
          {block.by && (
            <footer className="mt-2 font-mono text-xs tracking-[0.1em] text-ink-soft uppercase">{block.by}</footer>
          )}
        </blockquote>
      )
    case 'figure':
      return <Figure src={block.src} alt={block.alt} caption={block.caption} />
    case 'stat':
      return <DotStat value={block.value} text={block.text} highlight={block.highlight} />
    case 'list':
      return (
        <ul className={`mt-6 flex flex-col gap-2.5 ${body}`}>
          {block.items.map((item, i) => (
            <li key={`${i}-${item}`} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'steps':
      return <Steps items={block.items} />
    case 'video':
      return (
        <figure className="mt-8">
          <VideoEmbed youtubeId={block.youtubeId} title={block.title} />
          {block.caption && (
            <figcaption className="mt-3 text-center font-mono text-sm text-ink-soft">{block.caption}</figcaption>
          )}
        </figure>
      )
    case 'reflections':
      return <Reflections items={block.items} />
  }
}

export function SectionBlocks({ blocks }: { blocks?: Block[] }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </>
  )
}
