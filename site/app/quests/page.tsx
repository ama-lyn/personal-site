import { PageShell } from '../components/layout/PageShell'
import { QuestGrid } from '../components/quests/QuestGrid'
import { quests } from '../components/quests/quests'

const SUBTITLE = 'Little adventures, on and off the keyboard.' // TODO: your own line

export default function QuestsPage() {
  return (
    <PageShell nav="sticker">
      <h1 className="font-display text-4xl leading-[1.05] text-ink italic md:text-[52px]">Side quests</h1>
      <p className="mt-4 text-[17px] leading-[1.7] text-ink-soft">{SUBTITLE}</p>

      <div className="mt-heading">
        <QuestGrid quests={quests} />
      </div>
    </PageShell>
  )
}
