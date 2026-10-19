import Image from 'next/image';
import Link from 'next/link';
import { posts } from './posts';

export function ArticleFooter({ slug }: { slug: string }) {
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;

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
            <span className="font-bold text-pink-deep">Gwen</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-start justify-between gap-6">
        <div className="min-w-0">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group block">
              <span className="font-caveat text-lg italic text-muted">
                &larr; previous entry
              </span>
              <span className="block truncate font-nunito text-[15px] font-bold text-ink group-hover:text-pink-deep">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="min-w-0 text-right">
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group block">
              <span className="font-caveat text-lg italic text-muted">
                next entry &rarr;
              </span>
              <span className="block truncate font-nunito text-[15px] font-bold text-ink group-hover:text-pink-deep">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}
