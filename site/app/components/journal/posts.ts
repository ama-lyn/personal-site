export type StampColor = 'pink' | 'lavender' | 'mint';

export type PostSection = {
  heading?: string;
  paras: string[];
  pullQuote?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  month: string;
  day: string;
  year: string;
  stamp: StampColor;
  rotation: string;
  subtitle?: string;
  dateLong?: string;
  readMinutes?: number;
  moodImage?: string;
  moodCaption?: string;
  marginNotes?: string[];
  sections?: PostSection[];
  inlineImage?: string;
  inlineCaption?: string;
};

export const posts: Post[] = [
  {
    slug: 'the-art-of-slow-coding-in-a-fast-world',
    title: 'the art of slow coding in a fast world',
    excerpt:
      'We often treat code as a means to an end, a sprint toward a deployment. But lately, I have been experimenting with the idea of "slow coding." It is about the process as much as the product.',
    body: [
      'We often treat code as a means to an end, a sprint toward a deployment, a rush to fix a bug, or a race to finish a feature. But lately, I have been experimenting with the idea of "slow coding." It is the digital equivalent of slow-cooking a stew or hand-writing a letter. It is about the process as much as the product.',
      'So, the next time you find yourself rushing to close a ticket, maybe try taking a breath. Sip some tea. Listen to the click of your keys. You might find that the best solutions are not the fastest ones, they are the ones that were crafted with the most peace.',
    ],
    month: 'OCT',
    day: '24',
    year: '2024',
    stamp: 'mint',
    rotation: '0.4deg',
    subtitle: 'Finding tranquility in the semicolons and the spaces between the lines.',
    dateLong: 'October 24, 2024',
    readMinutes: 5,
    moodImage: '/ice_cream.jpg',
    moodCaption: 'todays mood ☕',
    marginNotes: [
      'Listening to: Lofi Fruits Radio 🍓',
      'Current Tea: Jasmine Green 🍵',
      'Thinking about: CSS Grid vs Flex for the Nook layout',
    ],
    sections: [
      {
        heading: 'the rhythm of the keys',
        paras: [
          'I started by silencing my notifications. No Slack, no Discord, no email. Just me, a warm cup of jasmine tea, and the soft rhythmic click-clack of my mechanical keyboard (the one with the creamy switches, if you are curious). When the pressure to "go fast" is removed, the code starts to feel different. It feels more intentional.',
          'In this state of flow, I find myself paying more attention to naming variables. Instead of btnClick, I think about initiateMagicSequence. I spend an extra ten minutes refactoring a function not because it is broken, but because the structure feels more "musical" when I read it back.',
        ],
        pullQuote:
          "Code is not just logic; it's a series of decisions made with care. Slowing down lets you hear the 'why' behind each 'how'.",
      },
      {
        heading: 'scrapbook inspiration',
        paras: [
          "I've also been bringing my physical hobbies into my digital space. I keep a physical scrapbook next to me while I build. If I'm stuck on a layout, I look at how I've taped down a ticket stub or arranged a pressed leaf. There's a human imperfection in scrapbooking that we often try to erase in web design. Why not embrace the taped-on look? Why not let things be a little tilted?",
        ],
      },
    ],
    inlineImage: '/side-quest.jpg',
    inlineCaption: 'my physical journal for this month...',
  },
  {
    slug: 'finding-magic-in-small-things',
    title: 'finding magic in small things',
    excerpt:
      'Today i finally figured out that bug that was keeping me up for three days. it was a tiny typo, as always. but the feeling of relief when the code finally ran... it felt like actual magic.',
    body: [
      'Today i finally figured out that bug that was keeping me up for three days. it was a tiny typo, as always. but the feeling of relief when the code finally ran... it felt like actual magic.',
      'i keep a little list of these tiny wins now. a passing test, a clean refactor, a kind code review. they add up faster than the big milestones ever do.',
      'so here is to the small things, the typos fixed, the ice cream refilled, the console with zero errors. magic, honestly.',
    ],
    month: 'APR',
    day: '12',
    year: '2026',
    stamp: 'pink',
    rotation: '-0.6deg',
    subtitle: 'Finding tranquility in the semicolons and the spaces between the lines.',
    dateLong: 'April 12, 2026',
    readMinutes: 5,
    moodImage: '/ice_cream.jpg',
    moodCaption: 'todays mood ☕',
    marginNotes: [
      'Listening to: Lofi Fruits Radio 🍓',
      'Current Tea: Jasmine Green 🍵',
      'Thinking about: CSS Grid vs Flex for the Nook layout',
    ],
    sections: [
      {
        heading: 'the rhythm of the keys',
        paras: [
          'I started by silencing my notifications. No Slack, no Discord, no email. Just me, a warm cup of jasmine tea, and the soft rhythmic click-clack of my mechanical keyboard (the one with the creamy switches, if you are curious). When the pressure to "go fast" is removed, the code starts to feel different. It feels more intentional.',
        ],
        pullQuote:
          "Code is not just logic; it's a series of decisions made with care. Slowing down lets you hear the 'why' behind each 'how'.",
      },
      {
        heading: 'scrapbook inspiration',
        paras: [
          "I've also been bringing my physical hobbies into my digital space. I keep a physical scrapbook next to me while I build. If I'm stuck on a layout, I look at how I've taped down a ticket stub or arranged a pressed leaf. There's a human imperfection in scrapbooking that we often try to erase in web design. Why not embrace the taped-on look? Why not let things be a little tilted?",
        ],
      },
    ],
    inlineImage: '/side-quest.jpg',
    inlineCaption: 'my physical journal for this month...',
  },
  {
    slug: 'the-quiet-of-early-mornings',
    title: 'the quiet of early mornings',
    excerpt:
      'there is something so peaceful about the world at 6am. just me, a very hot cup of coffee, and my journal. no notifications, no pings. just thoughts drifting like clouds.',
    body: [
      'there is something so peaceful about the world at 6am. just me, a very hot cup of coffee, and my journal. no notifications, no pings. just thoughts drifting like clouds.',
      'i get my best thinking done before the world wakes up. no performance, no pressure,  just pages and steam and quiet.',
      'if you have never tried it: tomorrow, wake up one hour early. bring something warm. see what your brain does when nobody is watching.',
    ],
    month: 'MAR',
    day: '28',
    year: '2026',
    stamp: 'lavender',
    rotation: '0.5deg',
    subtitle: 'Notes on waking up before the world does.',
    dateLong: 'March 28, 2026',
    readMinutes: 4,
    moodImage: '/bike.jpg',
    moodCaption: 'todays mood 🌅',
    marginNotes: [
      'Listening to: Morning birdsong 🐦',
      'Current Tea: Chamomile ☕',
      'Thinking about: journaling before screens',
    ],
    sections: [
      {
        heading: 'the first quiet hour',
        paras: [
          'The house is still. The kettle takes its time. I write whatever is in my head without editing, without an audience. Most of it is nonsense. Some of it turns out to be the truest thing I write all day.',
        ],
        pullQuote:
          'The morning does not ask anything of you. That is exactly why it gives so much.',
      },
      {
        heading: 'keeping it small',
        paras: [
          'No big routines, no five-step system. Just: wake, warm drink, pages. Small enough to keep, quiet enough to love.',
        ],
      },
    ],
    inlineImage: '/avatar.jpg',
    inlineCaption: 'the corner where the mornings happen...',
  },
  {
    slug: 'learning-to-be-okay-with-messy',
    title: 'learning to be okay with messy',
    excerpt:
      "i spent all day trying to make this portfolio perfect. then i realized: life isn't perfectly aligned, so why should my site be? imperfection is where the charm lives. so i added more tilted notes.",
    body: [
      "i spent all day trying to make this portfolio perfect. then i realized: life isn't perfectly aligned, so why should my site be? imperfection is where the charm lives. so i added more tilted notes.",
      'every crooked card on this site is a decision, not an accident. straight lines are for spreadsheets. this is a scrapbook.',
      'so if something here is slightly tilted, good. it means a human made it, probably while eating ice cream.',
    ],
    month: 'MAR',
    day: '05',
    year: '2026',
    stamp: 'mint',
    rotation: '-0.4deg',
    subtitle: 'Straight lines are for spreadsheets. This is a scrapbook.',
    dateLong: 'March 05, 2026',
    readMinutes: 3,
    moodImage: '/side-quest.jpg',
    moodCaption: 'todays mood ✂️',
    marginNotes: [
      'Listening to: Glue sticks & playlists 🎶',
      'Current Tea: Whatever is closest 🍵',
      'Thinking about: tilt everything 2 degrees',
    ],
    sections: [
      {
        heading: 'perfect is boring',
        paras: [
          'I spent hours nudging pixels by one. Then I tilted a card two degrees and the whole page came alive. The lesson keeps repeating: charm lives in the crooked bits.',
        ],
        pullQuote:
          'If something here is slightly tilted, good. It means a human made it.',
      },
      {
        heading: 'more tilted notes',
        paras: [
          'So the rule now: when in doubt, rotate it a little. Add tape. Let the edges show. The site feels like me again.',
        ],
      },
    ],
    inlineImage: '/ice_cream.jpg',
    inlineCaption: 'celebrating the messy middle...',
  },
];

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function timestamp(post: Post) {
  return new Date(Number(post.year), MONTHS.indexOf(post.month.toUpperCase()), Number(post.day)).getTime();
}

// Newest first, whatever order the posts are written in above.
posts.sort((a, b) => timestamp(b) - timestamp(a));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    // posts are newest first: "previous" is the older entry, "next" is the newer one
    prev: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
