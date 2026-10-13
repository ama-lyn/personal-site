import React from 'react';
import { Polaroid } from '../about/Polaroid';
import { SkillTag } from '../about/SkillTag';
import { LinedNoteCard } from './LinedNoteCard';

type Entry =
  | {
      type: 'note';
      title: string;
      titleColor: 'pink' | 'lavender';
      body: string;
      badge?: string;
      date?: string;
      rotation: string;
    }
  | {
      type: 'photo';
      src: string;
      caption: string;
      date: string;
      rotation: string;
    };

// Swap text/photos here to add more cards — odd entries land left, even land right.
const entries: Entry[] = [
  {
    type: 'note',
    title: 'Won Hackat-Home!',
    titleColor: 'pink',
    body: 'Built a tiny library app for plants. First prize out of 50 teams, i was so nervous but happy!',
    badge: '🏆 1st',
    date: 'June 2025',
    rotation: '-1.5deg',
  },
  {
    type: 'photo',
    src: '/bike.jpg',
    caption: 'Spoke at IndieWeb Meetup ✨',
    date: 'March 2025',
    rotation: '2deg',
  },
  {
    type: 'note',
    title: "Joined 'The Hive'",
    titleColor: 'lavender',
    body: 'Officially started as a junior dev. they gave me a desk and a very large coffee mug.',
    date: 'Jan 2025',
    rotation: '1deg',
  },
  {
    type: 'photo',
    src: '/side-quest.jpg',
    caption: 'Attended JS Conf! 🪩',
    date: 'August 2024',
    rotation: '-2deg',
  },
  {
    type: 'note',
    title: 'First open-source PR!',
    titleColor: 'lavender',
    body: 'fixed a typo, then a bug, then docs. maintainers are the kindest people 🌱',
    date: 'Oct 2024',
    rotation: '1.5deg',
  },
  {
    type: 'photo',
    src: '/avatar.jpg',
    caption: 'Hack night with friends 🌙',
    date: 'Nov 2024',
    rotation: '1.5deg',
  },
];

export function ScrapbookTimeline() {
  return (
    <section className="relative mt-10 w-full">
      {/* scatter set — page gutters around the timeline, NOT in the flow; desktop only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-6 top-[240px] w-[150px]" style={{ transform: 'rotate(-9deg)' }}>
          <Polaroid src="/ice_cream.jpg" caption="ice cream breaks 🍦" />
        </div>
        <div className="absolute right-2 top-[46%] scale-90" style={{ transform: 'rotate(5deg)' }}>
          <SkillTag label="rust 🦀" tapeColor="mint" rotation="5deg" />
        </div>
        <div className="absolute bottom-28 left-4" style={{ transform: 'rotate(-5deg)' }}>
          <SkillTag label="chai first ☕" tapeColor="lavender" rotation="-5deg" />
        </div>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="absolute bottom-16 left-6 size-8 text-pink-deep/70"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <path
            d="M16 4c1.2 4.8 3.2 6.8 8 8-4.8 1.2-6.8 3.2-8 8-1.2-4.8-3.2-6.8-8-8 4.8-1.2 6.8-3.2 8-8Z"
            fill="currentColor"
          />
          <circle cx="26" cy="24" r="1.6" fill="currentColor" />
        </svg>
        {/* tiny flower — upper-right gutter */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="absolute right-8 top-[180px] size-7 text-pink-deep/60"
          style={{ transform: 'rotate(12deg)' }}
        >
          <g fill="currentColor">
            <ellipse cx="16" cy="8" rx="4" ry="5" />
            <ellipse cx="23.5" cy="13.5" rx="4" ry="5" transform="rotate(72 23.5 13.5)" />
            <ellipse cx="20.7" cy="22.5" rx="4" ry="5" transform="rotate(144 20.7 22.5)" />
            <ellipse cx="11.3" cy="22.5" rx="4" ry="5" transform="rotate(216 11.3 22.5)" />
            <ellipse cx="8.5" cy="13.5" rx="4" ry="5" transform="rotate(288 8.5 13.5)" />
          </g>
          <circle cx="16" cy="16" r="3" fill="#FBF3EC" />
          <circle cx="16" cy="16" r="1.6" fill="currentColor" />
        </svg>
        {/* small heart — lower-mid-right gutter */}
        <span
          className="absolute bottom-56 right-16 text-xl text-ink/40"
          style={{ transform: 'rotate(-6deg)' }}
        >
          ♡
        </span>
      </div>

      <h1 className="text-center font-caveat text-4xl text-ink">
        my scrapbook <span aria-hidden="true">✧</span>
      </h1>
      <p className="mt-2 text-center font-caveat text-xl italic text-muted">
        little moments that made me, me — wins, talks &amp; new desks ✎
      </p>

      <div className="relative mt-12">
        {/* center spine — desktop only */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l-2 border-dashed border-ink/20 md:block"
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {entries.map((entry, i) => {
            const left = i % 2 === 0;
            return (
              <div key={i} className="relative">
                {/* spine marker pinned on the center line */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-deep shadow-card ring-4 ring-cream md:block"
                />
                {/* mobile: single stacked card */}
                <div className="flex justify-center md:hidden">
                  <Card entry={entry} />
                </div>
                {/* desktop: alternating two-column timeline */}
                <div className="hidden md:grid md:grid-cols-2 md:items-center">
                  <div className={`flex ${left ? 'justify-end pr-14' : ''}`}>
                    {left ? <Card entry={entry} /> : <span aria-hidden="true" />}
                  </div>
                  <div className={`flex ${left ? '' : 'justify-start pl-14'}`}>
                    {left ? <span aria-hidden="true" /> : <Card entry={entry} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-16 text-center font-caveat text-lg italic text-muted">
        that&apos;s all for now... more to come! ♡
      </p>
    </section>
  );
}

function Card({ entry }: { entry: Entry }) {
  if (entry.type === 'note') {
    return (
      <LinedNoteCard
        title={entry.title}
        titleColor={entry.titleColor}
        body={entry.body}
        badge={entry.badge}
        date={entry.date}
        rotation={entry.rotation}
      />
    );
  }
  return (
    <div className="w-full max-w-[280px]">
      <Polaroid src={entry.src} caption={entry.caption} date={entry.date} rotation={entry.rotation} />
    </div>
  );
}
