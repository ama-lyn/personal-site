import { PhotoSwap } from './PhotoSwap'
import { TxtNote } from './TxtNote'

const INTRO =
  'I’m Gwen. I build things, break things, and occasionally win a hackathon or two. I care about creating meaningful experiences.'
const BACKGROUND =
  'I graduated from [YOUR SCHOOL] with a degree in [YOUR DEGREE]. [PLACEHOLDER: one or two lines on where you grew up and how it shaped the way you build.]'

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
    >
      <PhotoSwap />

      <div>
        <h1
          id="about-title"
          className="font-display text-5xl leading-none text-ink italic md:text-[68px]"
        >
          About me
        </h1>
        <p className="mt-6 text-lg leading-[1.65] text-ink">{INTRO}</p>
        <p className="mt-3 text-lg leading-[1.65] text-ink-soft">{BACKGROUND}</p>

        <div className="mt-8 flex flex-col gap-4">
          <TxtNote file="currently">building a chrome extension and learning reverse engineering.</TxtNote>
          <TxtNote file="after-hours">
            eating way too much ice cream, touching grass and side-questing.
          </TxtNote>
        </div>
      </div>
    </section>
  )
}
