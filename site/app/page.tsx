import { PageShell } from './components/layout/PageShell'
import { AboutMe } from './components/about/About'
import { FeaturedProjects } from './components/projects/FeaturedProjects'
import { ContactCard } from './components/contact/ContactCard'

export default function Home() {
  return (
    <PageShell nav="envelope">
      <AboutMe />
      <FeaturedProjects />
      <ContactCard />
    </PageShell>
  )
}
