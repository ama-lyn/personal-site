import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found | Gwendolyn Amanda',
};

const PEEL = 52; // size of the curled corner, in px

function PeeledSticker() {
  return (
    <div aria-hidden="true" className="relative h-[250px] w-[300px] max-w-full">
      {/* the spot where it used to be */}
      <div className="absolute bottom-0 left-0 size-[210px] rounded-[34px] border-2 border-dashed border-ink/10 bg-[#F1E5DA] shadow-[inset_0_3px_8px_rgba(74,59,63,0.12)]" />

      {/* the sticker, fallen off to one side */}
      <div className="absolute top-0 right-0 size-[210px] rotate-[7deg] drop-shadow-[0_8px_14px_rgba(74,59,63,0.22)]">
        <div
          className="size-full rounded-[34px] bg-white p-2.5"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${PEEL}px), calc(100% - ${PEEL}px) 100%, 0 100%)`,
          }}
        >
          <div className="grid size-full place-items-center rounded-[26px] bg-pink">
            <div className="text-center">
              <p className="font-display text-[76px] leading-none text-ink italic">404</p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-ink uppercase">page not found</p>
            </div>
          </div>
        </div>

        {/* the curled-up corner (the back of the sticker) */}
        <div
          className="absolute right-0 bottom-0 drop-shadow-[-2px_-2px_4px_rgba(74,59,63,0.18)]"
          style={{ width: PEEL, height: PEEL }}
        >
          <div
            className="size-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              background: 'linear-gradient(135deg, #ffffff 0%, #E4D9D0 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

const linkBase =
  'group rounded-full bg-white p-1 shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent';
const linkFace = 'block rounded-full px-6 py-2.5 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-colors';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-reading flex-col items-center justify-center px-6 py-16 text-center md:px-8">
      <PeeledSticker />

      <h1 className="mt-10 font-display text-4xl leading-[1.1] text-ink italic md:text-[52px]">
        <span className="sr-only">404: </span>This page peeled off
      </h1>
      <p className="mt-4 max-w-[28rem] text-base leading-[1.7] text-ink-soft md:text-[17px]">
        It wasn&rsquo;t stuck on very well. Everything else is still right where you left it.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-pink px-6 py-3 font-mono text-sm tracking-[0.12em] text-ink uppercase shadow-card transition-colors hover:bg-pink-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent"
        >
          &larr; Back home
        </Link>
        <Link
          href="/blog"
          className="rounded-full border-[1.5px] border-ink px-6 py-3 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent"
        >
          Read the journal
        </Link>
      </div>
    </main>
  );
}
