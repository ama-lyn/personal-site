import { Navbar } from './components/navbar/Navbar'
import { AboutMe } from './components/about/About'
import { FeaturedProjects } from './components/projects/FeaturedProjects'
import { ContactCard } from './components/contact/ContactCard'
import { Footer } from './components/footer/Footer'

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8 pt-6 md:pt-8 pb-16">
      <Navbar />

      <AboutMe/>

      <FeaturedProjects />

      <ContactCard />

      <Footer />

    </div>
 );
}
