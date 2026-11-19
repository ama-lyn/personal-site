import { PageShell } from './components/layout/PageShell'
import { HomeLetter } from './components/home/HomeLetter'

export default function Home() {
  return (
    <PageShell nav="envelope">
      <HomeLetter />
    </PageShell>
  )
}
