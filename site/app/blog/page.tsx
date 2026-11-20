import { PageShell } from '../components/layout/PageShell';
import { JournalCard } from '../components/journal/JournalCard';
import { posts } from '../components/journal/posts';

export default function BlogPage() {
  return (
    <PageShell nav="sticker">
      <div className="mx-auto w-full max-w-reading">
        <h1 className="font-display text-4xl leading-[1.05] text-ink italic md:text-[52px]">My journal</h1>

        <div className="mt-heading flex flex-col gap-10">
          {posts.map((post) => (
            <JournalCard key={post.slug} post={post} />
          ))}
        </div>

        <figure className="mt-12 rotate-[0.4deg] border border-dashed border-border-soft bg-paper px-9 py-10 text-center">
          <blockquote className="font-caveat text-[26px] italic text-ink">
            &ldquo;your head is a house, your heart is a home. keep them both cozy.&rdquo;
          </blockquote>
          <figcaption className="mt-2 font-caveat text-lg text-ink-soft">
            &ndash; a reminder to myself
          </figcaption>
        </figure>

        <p className="mt-16 text-center font-caveat text-xl text-ink-soft">
          thanks for reading my thoughts ♡
        </p>
      </div>
    </PageShell>
  );
}
