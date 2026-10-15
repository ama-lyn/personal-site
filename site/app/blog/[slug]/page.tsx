import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '../../components/navbar/Navbar';
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

  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8 pt-6 md:pt-8 pb-16">
      <Navbar />
      <main className="mx-auto mt-10 w-full max-w-[680px]">
        <Link
          href="/blog"
          className="inline-block -rotate-2 font-caveat text-xl italic text-pink-deep"
        >
          &larr; back to journal
        </Link>
        <article className="mt-6 bg-paper rounded-[4px] shadow-soft p-7 md:p-10">
          <h1 className="flex items-start gap-2 font-caveat text-4xl text-ink">
            <span aria-hidden="true" className="text-3xl leading-snug">
              {post.emoji}
            </span>
            {post.title}
          </h1>
          <p className="mt-2 font-caveat text-lg italic text-muted">
            {post.month} {post.day}, {post.year}
          </p>
          <div className="mt-6 flex flex-col gap-5 leading-relaxed text-ink/90">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
        <p className="mt-12 text-center font-caveat text-lg italic text-muted">
          thanks for reading my thoughts ♡
        </p>
      </main>
    </div>
  );
}
