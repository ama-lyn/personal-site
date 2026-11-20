import { PhotoSwap } from './PhotoSwap'
import { TxtNote } from './TxtNote'

const INTRO =
  'I’m Gwen. I build things, break things, and occasionally win a hackathon or two. I care about creating meaningful experiences.' +
  'I believe the best things are built with curiosity and a bit of mischief.' +
  'Welcome to my little corner of the internet.'

const BACKGROUND =
  'I grew up curious about how things work, spending more time taking them apart than putting them back together. That instinct to look under the hood still shapes the way I build today.' +
  'Some of my favorite memories involve a soldering iron and a stack of old textbooks.' +
  'Feel free to reach out if you’d like to chat or collaborate.' +
  'Thanks for stopping by.'

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
    >
      <PhotoSwap />

      <div className="max-w-[34rem]">
        <h1
          id="about-title"
          className="font-display text-4xl leading-none text-ink italic md:text-[52px]"
        >
          About me
        </h1>
        <p className="mt-5 text-[17px] leading-[1.7] text-ink">{INTRO}</p>
        <p className="mt-3 text-[17px] leading-[1.7] text-ink-soft">{BACKGROUND}</p>

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
