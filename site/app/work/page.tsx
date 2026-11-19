import { PageShell } from '../components/layout/PageShell'

// Placeholder: the real Work page arrives in a later patch.
export default function WorkPage() {
  return (
    <PageShell nav="sticker">
      <h1 className="font-display text-5xl italic leading-[1.05] text-ink md:text-6xl">
        Everything I&rsquo;ve made,
        <br />
        shipped or not.
      </h1>
      <p className="mt-4 text-lg text-ink-soft">[projects coming soon]</p>
    </PageShell>
  )
}
