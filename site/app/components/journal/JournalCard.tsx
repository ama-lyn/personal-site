import Link from 'next/link';
import type { Post } from './posts';

const stampMap = {
  pink: 'border-pink-deep/50 text-pink-deep',
  lavender: 'border-[#B9A8E3]/60 text-[#9A86C8]',
  mint: 'border-[#8FCDB2]/60 text-[#5FA98A]',
} as const;

export function JournalCard({ post }: { post: Post }) {
  return (
    <article
      className="group relative rotate-(--tilt) rounded-[4px] bg-paper p-6 pt-9 shadow-soft transition-[rotate,translate] duration-300 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none md:p-10 md:pt-10"
      style={{ '--tilt': post.rotation } as React.CSSProperties}
    >
      {/* perforated tear-off edge along the top */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[9px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 5px 4.5px, var(--color-cream) 3px, transparent 3.5px)',
          backgroundSize: '12px 9px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'top center',
        }}
      />
      {/* circular date stamp */}
      <div
        aria-hidden="true"
        className={`absolute right-5 top-5 grid size-[68px] md:right-6 md:size-20 rotate-6 place-items-center rounded-full border-2 ${stampMap[post.stamp]}`}
      >
        <span className="absolute inset-1 rounded-full border border-current opacity-40" />
        <span className="flex flex-col items-center font-mono leading-none">
          <span className="text-[10px] tracking-[0.15em]">{post.month}</span>
          <span className="my-0.5 text-xl font-medium">{post.day}</span>
          <span className="text-[10px] tracking-[0.15em]">{post.year}</span>
        </span>
      </div>

      <h2 className="flex items-start gap-2 pr-20 font-display text-[21px] leading-[1.2] text-ink italic md:pr-24 md:text-[30px]">
        <span aria-hidden="true" className="text-xl leading-snug not-italic md:text-2xl">
          {post.emoji}
        </span>
        {post.title}
      </h2>
      <p className="mt-4 text-base leading-[1.7] text-ink-soft md:text-[17px]">{post.excerpt}</p>
      {/* the whole card is clickable through this link */}
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-block font-mono text-sm tracking-[0.1em] text-accent-deep uppercase underline decoration-dashed underline-offset-8 after:absolute after:inset-0 focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-dashed focus-visible:after:outline-accent"
      >
        Keep reading &rarr;
      </Link>
    </article>
  );
}
