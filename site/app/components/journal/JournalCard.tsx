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
      className="group relative bg-paper rounded-[4px] shadow-soft p-7 md:p-8 pt-9 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1"
      style={{ transform: `rotate(${post.rotation})` }}
    >
      {/* torn washi edge along the top */}
      <span
        aria-hidden="true"
        className="absolute inset-x-3 top-1.5 h-2 opacity-70"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--color-border-soft) 0 6px, transparent 6px 10px)',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      {/* circular date stamp */}
      <div
        aria-hidden="true"
        className={`absolute right-6 top-5 grid size-20 rotate-6 place-items-center rounded-full border-2 ${stampMap[post.stamp]}`}
      >
        <span className="absolute inset-1 rounded-full border border-current opacity-40" />
        <span className="flex flex-col items-center font-caveat leading-none">
          <span className="text-[11px] tracking-widest">{post.month}</span>
          <span className="text-2xl font-bold">{post.day}</span>
          <span className="text-[11px] tracking-widest">{post.year}</span>
        </span>
      </div>

      <h2 className="flex items-start gap-2 pr-24 font-caveat text-3xl text-ink">
        <span aria-hidden="true" className="text-2xl leading-snug">
          {post.emoji}
        </span>
        {post.title}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-block font-caveat text-xl italic text-pink-deep underline decoration-dashed underline-offset-8 transition-transform hover:-rotate-2"
      >
        keep reading...
      </Link>
    </article>
  );
}
