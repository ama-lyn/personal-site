import Link from 'next/link';
import { Polaroid } from './components/about/Polaroid';
import { SkillTag } from './components/about/SkillTag';

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center justify-center overflow-hidden px-6 md:px-8 py-16 text-center">
      {/* scatter garnish — desktop gutters only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-10 top-32" style={{ transform: 'rotate(-7deg)' }}>
          <SkillTag label="lost 🧭" tapeColor="lavender" rotation="-7deg" />
        </div>
        <div className="absolute right-12 top-[38%]" style={{ transform: 'rotate(6deg)' }}>
          <SkillTag label="side quest 🗺️" tapeColor="pink" rotation="6deg" />
        </div>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="absolute bottom-32 left-16 size-8 text-pink-deep/70"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <path
            d="M16 4c1.2 4.8 3.2 6.8 8 8-4.8 1.2-6.8 3.2-8 8-1.2-4.8-3.2-6.8-8-8 4.8-1.2 6.8-3.2 8-8Z"
            fill="currentColor"
          />
          <circle cx="26" cy="24" r="1.6" fill="currentColor" />
        </svg>
        <span
          className="absolute bottom-40 right-20 text-2xl text-ink/40"
          style={{ transform: 'rotate(8deg)' }}
        >
          ♡
        </span>
      </div>

      <div className="w-full max-w-[240px]">
        <Polaroid
          src="/side-quest.jpg"
          caption="this page wandered off..."
          rotation="-4deg"
        />
      </div>

      <h1 className="mt-8 font-caveat text-7xl leading-none text-ink md:text-8xl">
        oops! <span className="text-pink-deep">404</span>
      </h1>
      <p className="mt-4 max-w-[420px] font-caveat text-2xl italic leading-snug text-muted">
        this page took a side quest and never came back. no worries — the good
        stuff is all still here.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-pink px-6 py-3 font-caveat text-lg text-ink shadow-[0_4px_10px_rgba(74,59,63,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(74,59,63,0.16)]"
        >
          &larr; back home
        </Link>
        <Link
          href="/blog"
          className="rounded-lg bg-mint px-6 py-3 font-caveat text-lg text-ink shadow-[0_4px_10px_rgba(74,59,63,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(74,59,63,0.16)]"
        >
          read the journal
        </Link>
      </div>
    </div>
  );
}
