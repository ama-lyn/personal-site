import { Navbar } from '../components/navbar/Navbar';
import { JournalCard } from '../components/journal/JournalCard';
import { posts } from '../components/journal/posts';

export default function BlogPage() {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8 pt-6 md:pt-8 pb-16">
      <Navbar />
      <main className="mx-auto mt-10 w-full max-w-[720px]">
        <h1 className="text-center font-caveat text-4xl text-ink">
          my journal <span aria-hidden="true">✧</span>
        </h1>

        <div className="mt-10 flex flex-col gap-10">
          {posts.map((post) => (
            <JournalCard key={post.slug} post={post} />
          ))}
        </div>

        <figure className="mt-12 rotate-[0.4deg] border border-dashed border-border-soft bg-paper px-9 py-10 text-center">
          <blockquote className="font-caveat text-[26px] italic text-ink">
            &ldquo;your head is a house, your heart is a home. keep them both cozy.&rdquo;
          </blockquote>
          <figcaption className="mt-2 font-caveat text-lg text-muted">
            &ndash; a reminder to myself
          </figcaption>
        </figure>

        <p className="mt-16 text-center font-caveat text-lg italic text-muted">
          thanks for reading my thoughts ♡
        </p>
      </main>
    </div>
  );
}
