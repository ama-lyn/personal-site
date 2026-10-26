import React from 'react';
import { StickyNote } from './StickyNote';
import { Polaroid } from './Polaroid';
import { Toolbelt } from './Toolbelt';

export function AboutMe() {
  return (
    <section className="mt-10 w-full">
      <div className="max-w-[520px]">
        <div className="flex items-center gap-2">
          <h1 className="font-caveat text-5xl leading-none">hii, i&rsquo;m gwen</h1>
         <span aria-hidden="true" className="text-5xl shrink-0 text-ink leading-none">❀</span>

        </div>
      
        <p className="mt-3 text-[17px] leading-relaxed text-text-muted">i build things, break things, and occasionally win a hackathon or two. welcome to my little corner of the internet, take a look around! I care about creating meaningful experiences </p>
        <a href="mailto:hello@gwen.dev" className="mt-5 inline-block font-caveat text-2xl font-bold italic text-pink-deep" style={{ transform: 'rotate(-1.5deg)' }}>say hi →</a>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
        {/* Left Column: Sticky Notes */}
        <div className="flex max-w-[360px] flex-col gap-8 pt-1">
          <StickyNote rotation="-1.5deg">
            <h3 className="font-caveat text-xl font-normal underline decoration-pink-deep/70 decoration-2 underline-offset-4">
              currently:
            </h3>
            <p className="mt-2 font-caveat text-[19px] italic leading-snug">
              building a chrome extension, learning reverse engineering, and eating way too much ice cream 🍦
            </p>
          </StickyNote>

          <StickyNote rotation="1deg" variant="white">
            <p className="flex items-center gap-2 font-sans text-[13px] text-muted">
              currently reading 📖
            </p>
            <p className="mt-1 font-caveat text-[19px] italic leading-snug text-ink">
              &ldquo;The Design of Everyday Things&rdquo;
            </p>
          </StickyNote>
        </div>

        {/* Right Column: About Me, Polaroids, Toolbelt */}
        <div className="flex min-w-0 flex-col">
          <h2 className="font-caveat text-4xl font-normal">
            a lil about me ♡
          </h2>

          <div className="mt-6 grid max-w-[600px] grid-cols-3 gap-4 sm:gap-5">
            <Polaroid
              src="/ice_cream.jpg"
              caption="ice cream breaks 🍦"
              rotation="-3deg"
            />
            <Polaroid
              src="/bike.jpg"
              caption="side questing 🚲"
              rotation="2deg"
            />
            <Polaroid
              src="/side-quest.jpg"
              caption="touching grass 🌿"
              rotation="-1deg"
            />
          </div>

          <Toolbelt />
        </div>
      </div>
    </section>
  );
}

