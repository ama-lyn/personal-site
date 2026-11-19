import { PageShell } from '../components/layout/PageShell'

// Placeholder: the real Side Quests page arrives in a later patch.
export default function QuestsPage() {
  return (
    <PageShell nav="sticker">
      <h1 className="font-display text-5xl italic leading-[1.05] text-ink md:text-6xl">
        Side quests
      </h1>
      <p className="mt-4 text-lg text-ink-soft">[quests coming soon]</p>
    </PageShell>
  )
}
