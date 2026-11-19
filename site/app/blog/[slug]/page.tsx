import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '../../components/layout/PageShell';
import { Polaroid } from '../../components/about/Polaroid';
import { ReadingProgress } from '../../components/journal/ReadingProgress';
import { StickerReactions } from '../../components/journal/StickerReactions';
import { ArticleFooter } from '../../components/journal/ArticleFooter';
import { getPost, posts } from '../../components/journal/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateLong = post.dateLong ?? `${post.month} ${post.day}, ${post.year}`;

  return (
    <PageShell nav={false}>
      <ReadingProgress />
      <div className="w-full">
        <Link
          href="/blog"
          className="inline-block font-caveat text-lg text-muted transition-colors hover:text-pink-deep"
        >
          &larr; back to all entries
        </Link>

        <article className="relative mt-4 bg-paper rounded-[6px] shadow-soft px-7 py-10 md:px-14 md:py-12 pt-16 md:pt-[72px]">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-[-2deg] rounded-[2px] bg-lavender/70 shadow-card"
          />

          <div className="grid items-start gap-8 md:grid-cols-[1fr_220px]">
            <div>
              <p className="font-caveat text-xl italic text-pink-deep">
                {dateLong}
                {post.readMinutes ? ` · ${post.readMinutes} min read` : ''}
              </p>
              <h1 className="mt-2 font-serif-journal text-4xl leading-[1.1] text-ink md:text-5xl">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="mt-4 text-lg italic leading-relaxed text-muted">
                  {post.subtitle}
                </p>
              )}
            </div>
            <div className="mx-auto w-full max-w-[220px]">
              <Polaroid
                src={post.moodImage ?? '/ice_cream.jpg'}
                caption={post.moodCaption ?? 'todays mood'}
                rotation="2deg"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_220px]">
            <div className="min-w-0">
              <div className="flex flex-col gap-5 leading-[1.85] text-ink/90">
                {post.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {post.sections?.map((section, si) => (
                <div key={si} className="mt-8">
                  {section.heading && (
                    <h2 className="font-serif-journal text-3xl text-ink">
                      {section.heading}
                    </h2>
                  )}
                  <div className="mt-4 flex flex-col gap-5 leading-[1.85] text-ink/90">
                    {section.paras.map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                  {section.pullQuote && (
                    <blockquote className="mt-6 border-l-4 border-pink-deep/60 pl-6 font-serif-journal text-2xl italic leading-snug text-muted">
                      &ldquo;{section.pullQuote}&rdquo;
                    </blockquote>
                  )}
                </div>
              ))}
              {post.inlineImage && (
                <figure className="mt-10">
                  <span className="block overflow-hidden rounded-xl shadow-card">
                    <span className="relative block aspect-[16/10] w-full">
                      <Image
                        src={post.inlineImage}
                        alt={post.inlineCaption ?? post.title}
                        fill
                        sizes="(max-width: 880px) 100vw, 640px"
                        className="object-cover"
                      />
                    </span>
                  </span>
                  {post.inlineCaption && (
                    <figcaption className="mt-3 text-center font-caveat text-lg italic text-muted">
                      {post.inlineCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-8 flex flex-col gap-6">
                {post.marginNotes && post.marginNotes.length > 0 && (
                  <div className="rounded-xl border border-lavender/60 bg-lavender/20 px-5 py-5">
                    <p className="font-caveat text-xl italic text-[#7C6BB0]">
                      margin notes...
                    </p>
                    <ul className="mt-3 flex flex-col gap-3 font-caveat text-lg leading-snug text-muted">
                      {post.marginNotes.map((note, i) => (
                        <li key={i} className="flex gap-2">
                          <span aria-hidden="true">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <StickerReactions />
              </div>
            </aside>
          </div>
          <div className="mt-10 lg:hidden">
            <StickerReactions />
          </div>
          <hr
            aria-hidden="true"
            className="mt-12 border-0 border-t-2 border-dashed border-pink-deep/30"
          />
          <ArticleFooter slug={post.slug} />
        </article>

        <p className="mt-16 text-center font-caveat text-2xl italic text-ink">
          thanks for stopping by ♡
        </p>
      </div>
    </PageShell>
  );
}

function PlaceholderBody({ slug }: { slug: string }) {
  return (
    <p className="mt-10 text-muted">
      body sections render here — next edit ({slug}).
    </p>
  );
}

