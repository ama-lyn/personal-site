import Image from 'next/image';
import { TurnLink } from './PageTurn';
import { getAdjacentPosts } from './posts';

export function ArticleFooter({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-3">
          <span className="relative block size-11 shrink-0 overflow-hidden rounded-full bg-cream">
            <Image src="/avatar.jpg" alt="Gwen" fill sizes="44px" className="object-cover" />
          </span>
          <p className="font-caveat text-xl leading-tight text-ink">
            penned with love by,
            <br />
            <span className="font-bold text-accent">Gwen</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-start justify-between gap-6">
        <div className="min-w-0">
          {prev && (
            <TurnLink href={`/blog/${prev.slug}`} direction="prev" className="group block">
              <span className="font-mono text-xs tracking-[0.1em] text-ink-soft uppercase">
                &larr; previous entry
              </span>
              <span className="block truncate text-[15px] font-bold text-ink group-hover:text-accent-deep">
                {prev.title}
              </span>
            </TurnLink>
          )}
        </div>
        <div className="min-w-0 text-right">
          {next && (
            <TurnLink href={`/blog/${next.slug}`} direction="next" className="group block">
              <span className="font-mono text-xs tracking-[0.1em] text-ink-soft uppercase">
                next entry &rarr;
              </span>
              <span className="block truncate text-[15px] font-bold text-ink group-hover:text-accent-deep">
                {next.title}
              </span>
            </TurnLink>
          )}
        </div>
      </div>
    </>
  );
}
