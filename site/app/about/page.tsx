import { PageShell } from '../components/layout/PageShell';
import { ScrapbookTimeline } from '../components/scrapbook/ScrapbookTimeline';

export default function AboutPage() {
  return (
    <PageShell nav="sticker">
      <ScrapbookTimeline />
    </PageShell>
  );
}
