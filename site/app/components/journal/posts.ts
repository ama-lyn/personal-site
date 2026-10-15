export type StampColor = 'pink' | 'lavender' | 'mint';

export type Post = {
  slug: string;
  emoji: string;
  title: string;
  excerpt: string;
  body: string[];
  month: string;
  day: string;
  year: string;
  stamp: StampColor;
  rotation: string;
};

export const posts: Post[] = [
  {
    slug: 'finding-magic-in-small-things',
    emoji: '✨',
    title: 'finding magic in small things',
    excerpt:
      'Today i finally figured out that bug that was keeping me up for three days. it was a tiny typo, as always. but the feeling of relief when the code finally ran... it felt like actual magic.',
    body: [
      'Today i finally figured out that bug that was keeping me up for three days. it was a tiny typo, as always. but the feeling of relief when the code finally ran... it felt like actual magic.',
      'i keep a little list of these tiny wins now. a passing test, a clean refactor, a kind code review. they add up faster than the big milestones ever do.',
      'so here is to the small things — the typos fixed, the chai refilled, the console with zero errors. magic, honestly.',
    ],
    month: 'APR',
    day: '12',
    year: '2026',
    stamp: 'pink',
    rotation: '-0.6deg',
  },
  {
    slug: 'the-quiet-of-early-mornings',
    emoji: '☁️',
    title: 'the quiet of early mornings',
    excerpt:
      'there is something so peaceful about the world at 6am. just me, a very hot cup of coffee, and my journal. no notifications, no pings. just thoughts drifting like clouds.',
    body: [
      'there is something so peaceful about the world at 6am. just me, a very hot cup of coffee, and my journal. no notifications, no pings. just thoughts drifting like clouds.',
      'i get my best thinking done before the world wakes up. no performance, no pressure — just pages and steam and quiet.',
      'if you have never tried it: tomorrow, wake up one hour early. bring something warm. see what your brain does when nobody is watching.',
    ],
    month: 'MAR',
    day: '28',
    year: '2026',
    stamp: 'lavender',
    rotation: '0.5deg',
  },
  {
    slug: 'learning-to-be-okay-with-messy',
    emoji: '🌱',
    title: 'learning to be okay with messy',
    excerpt:
      "i spent all day trying to make this portfolio perfect. then i realized: life isn't perfectly aligned, so why should my site be? imperfection is where the charm lives. so i added more tilted notes.",
    body: [
      "i spent all day trying to make this portfolio perfect. then i realized: life isn't perfectly aligned, so why should my site be? imperfection is where the charm lives. so i added more tilted notes.",
      'every crooked card on this site is a decision, not an accident. straight lines are for spreadsheets. this is a scrapbook.',
      'so if something here is slightly tilted — good. it means a human made it, probably while drinking chai.',
    ],
    month: 'MAR',
    day: '05',
    year: '2026',
    stamp: 'mint',
    rotation: '-0.4deg',
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
