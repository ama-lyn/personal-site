import { PageShell } from '../components/layout/PageShell'
import { About } from '../components/profile/About'
import { ScrapbookTimeline } from '../components/scrapbook/ScrapbookTimeline'

export default function AboutPage() {
  return (
    <PageShell nav="sticker">
      <About />
      <div className="mt-section-sm md:mt-section">
        <ScrapbookTimeline />
      </div>
    </PageShell>
  )
}
