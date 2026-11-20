import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '../../components/layout/PageShell';
import { Polaroid } from '../../components/about/Polaroid';
import { ReadingProgress } from '../../components/journal/ReadingProgress';
import { StickerReactions } from '../../components/journal/StickerReactions';
import { ArticleFooter } from '../../components/journal/ArticleFooter';
import { PageTurn } from '../../components/journal/PageTurn';
import { getPost, posts } from '../../components/journal/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

function MarginNotes({ notes }: { notes: string[] }) {
  return (
    <div className="rounded-[14px] border-[1.5px] border-ink/15 bg-white px-5 pt-3 pb-4 shadow-[0_6px_16px_rgba(74,59,63,0.08)]">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-[9px] rounded-full bg-pink" />
        <span className="size-[9px] rounded-full bg-yellow" />
        <span className="size-[9px] rounded-full bg-mint" />
        <span className="ml-2 font-mono text-[11px] text-ink-soft">margin-notes.txt</span>
      </div>
      <ul className="mt-2.5 flex flex-col gap-2.5 text-[15px] leading-snug text-ink">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-ink-soft">
              &middot;
            </span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
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
          className="inline-block rounded-full border-[1.5px] border-ink px-5 py-2.5 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent"
        >
          &lsaquo; Back to journal
        </Link>

        {/* keyed by slug so each entry gets its own fresh page (and its own page turn) */}
        <PageTurn key={post.slug}>
          <article className="relative mt-6 rounded-[6px] bg-paper px-7 py-10 pt-16 shadow-soft md:px-14 md:py-12 md:pt-[72px]">
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-[-2deg] rounded-[2px] bg-lavender/70 shadow-card"
            />

            <div className="grid items-start gap-8 md:grid-cols-[1fr_220px]">
              <div>
                <p className="font-mono text-sm tracking-[0.1em] text-accent-deep uppercase">
                  {dateLong}
                  {post.readMinutes ? ` · ${post.readMinutes} min read` : ''}
                </p>
                <h1 className="mt-3 font-display text-4xl leading-[1.1] text-ink italic md:text-[52px]">
                  {post.title}
                </h1>
                {post.subtitle && (
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft italic">{post.subtitle}</p>
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
                <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-ink">
                  {post.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {post.sections?.map((section, si) => (
                  <div key={si} className="mt-8">
                    {section.heading && (
                      <h2 className="font-display text-3xl text-ink italic">{section.heading}</h2>
                    )}
                    <div className="mt-4 flex flex-col gap-5 text-[17px] leading-[1.75] text-ink">
                      {section.paras.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                    {section.pullQuote && (
                      <blockquote className="mt-6 border-l-4 border-pink-deep/60 pl-6 font-display text-2xl leading-snug text-ink-soft italic">
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
                      <figcaption className="mt-3 text-center font-caveat text-lg text-ink-soft italic">
                        {post.inlineCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
              <aside className="hidden lg:block">
                <div className="sticky top-8 flex flex-col gap-6">
                  {post.marginNotes && post.marginNotes.length > 0 && <MarginNotes notes={post.marginNotes} />}
                  <StickerReactions />
                </div>
              </aside>
            </div>
            <div className="mt-10 lg:hidden">
              <StickerReactions />
            </div>
            <hr aria-hidden="true" className="mt-12 border-0 border-t-2 border-dashed border-pink-deep/30" />
            <ArticleFooter slug={post.slug} />
          </article>
        </PageTurn>

        <p className="mt-16 text-center font-caveat text-2xl text-ink italic">thanks for stopping by ♡</p>
      </div>
    </PageShell>
  );
}
