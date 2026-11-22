// Side quests. Everything on the page comes from this list.
// Photos live in /public. A quest with several photos in `gallery` gets a row of thumbnails.

export type QuestKind = 'life' | 'tech'

export type Media =
  | { type?: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string; alt: string }

export type QuestPreview =
  | { type: 'photo'; src: string; alt: string; aspect: string }
  | { type: 'video'; src: string; poster?: string; aspect: string }
  | { type: 'terminal'; lines: string[]; aspect: string } // lines starting with ">" are shown in pink
  | { type: 'list'; heading: string; items: string[]; aspect: string }
  | { type: 'todo'; items: { text: string; done: boolean }[]; aspect: string }

export type Quest = {
  slug: string
  title: string
  filename: string // shown in the little window title bar
  kind: QuestKind
  preview: QuestPreview // what shows on the card
  gallery: Media[]
  meta: { label: string; value: string }[]
  description: string[] // one string per paragraph
  projectSlug?: string // links to /work/<slug>
  wide?: boolean // takes two of the three columns, like a featured window (only the first one is used)
}

export const quests: Quest[] = [
  {
    slug: 'ice-cream-breaks',
    title: 'Ice cream breaks',
    filename: 'ice-cream-breaks.jpg',
    kind: 'life',
    preview: { type: 'photo', src: '/ice_cream.jpg', alt: 'A cup of pistachio ice cream', aspect: 'aspect-[4/5]' },
    gallery: [{ src: '/ice_cream.jpg', alt: 'A cup of pistachio ice cream' }],
    meta: [
      { label: 'Where', value: 'Neighborhood scoop shops' },
      { label: 'When', value: 'Weekend afternoons' },
    ],
    description: [
      'A running quest to find the best scoop in town. Pistachio is the benchmark everything else gets measured against.',
    ],
  },
  {
    slug: 'reverse-engineering-toolkit',
    title: 'Reverse Engineering Toolkit',
    filename: 'reverse-engineering-toolkit.dev',
    kind: 'tech',
    preview: {
      type: 'photo',
      src: '/placeholder-image4.jpg',
      alt: 'Reverse Engineering Toolkit extension screenshot',
      aspect: 'aspect-square',
    },
    gallery: [{ src: '/placeholder-image4.jpg', alt: 'Reverse Engineering Toolkit extension screenshot' }],
    meta: [
      { label: 'Tools', value: 'JavaScript, Chrome Extension APIs' },
      { label: 'Timeline', value: '2025–2026' },
    ],
    description: [
      'A Chrome extension for peeking under the hood of any website. It started as a side quest and turned into a project.',
    ],
    projectSlug: 'chrome-extension',
  },
  {
    slug: 'learning-reverse-engineering',
    title: 'Learning reverse engineering',
    filename: 'reverse-eng.log',
    kind: 'tech',
    preview: {
      type: 'terminal',
      lines: ['$ strings app.bin', '> found: secret_menu', '$ ghidra --open', '> 0x4012af  call  check_key', '$ _'],
      aspect: 'aspect-[4/3]',
    },
    gallery: [],
    meta: [
      { label: 'Tools', value: 'Ghidra, strings, Wireshark' },
      { label: 'Status', value: 'ongoing' },
    ],
    description: ['Taking things apart to see how they work, one small binary at a time. I’ve learned to read assembly like a second language, and every reversed function feels like solving a puzzle.'],
  },
  {
    slug: 'hackathon-weekend',
    wide: true,
    title: 'Hackathon weekend',
    filename: 'hackathon-recap.md',
    kind: 'tech',
    preview: { type: 'video', src: '/quests/placeholder-video.mp4', poster: '/quests/placeholder-video-poster.jpg', aspect: 'aspect-[4/3]' },
    gallery: [
      {
        type: 'video',
        src: '/quests/placeholder-video.mp4',
        poster: '/quests/placeholder-video-poster.jpg',
        alt: 'Placeholder clip from the hackathon weekend',
      },
    ],
    meta: [
      { label: 'Result', value: 'First prize' },
      { label: 'When', value: 'June 2025' },
    ],
    description: [
      'Built a tiny library app for plants in a weekend. First prize out of 50 teams, and I was so nervous but happy.',
    ],
  },
  {
    slug: 'side-questing',
    title: 'Side questing',
    filename: 'side-questing.jpg',
    kind: 'life',
    preview: { type: 'photo', src: '/bike.jpg', alt: 'A bicycle on dry ground', aspect: 'aspect-square' },
    gallery: [{ src: '/bike.jpg', alt: 'A bicycle on dry ground' }],
    meta: [
      { label: 'Where', value: 'The long way home' },
      { label: 'When', value: 'Sunday mornings' },
    ],
    description: ['Bike, no plan, see where it goes. The best detours are the ones you never saw coming.'],
  },
  {
    slug: 'touching-grass',
    title: 'Touching grass',
    filename: 'touching-grass.jpg',
    kind: 'life',
    preview: { type: 'photo', src: '/side-quest.jpg', alt: 'A hand holding a "doing sidequests" sticker', aspect: 'aspect-[4/5]' },
    // PLACEHOLDER photos: these three stand in for “the day’s photos”
    gallery: [
      { src: '/side-quest.jpg', alt: 'A hand holding a "doing sidequests" sticker' },
      { src: '/bike.jpg', alt: 'A bicycle on dry ground' },
      { src: '/ice_cream.jpg', alt: 'A cup of pistachio ice cream' },
    ],
    meta: [
      { label: 'Where', value: 'Lake trail' },
      { label: 'When', value: 'Golden hour' },
    ],
    description: [
      'Offline on purpose. Lake trail, just me and the path. I’d go earlier next time to catch the light.',
    ],
  },
  {
    slug: 'ice-cream-index',
    title: 'The ice cream index',
    filename: 'ice-cream-index.md',
    kind: 'life',
    preview: {
      type: 'list',
      heading: 'ranked, so far',
      items: ['pistachio', 'blueberry', 'kulfi', 'salted caramel'],
      aspect: 'aspect-[4/3]',
    },
    gallery: [],
    meta: [{ label: 'Status', value: 'always updating' }],
    description: ['A completely unscientific ranking. Pistachio sets the bar, blueberry brings the tart, kulfi is the creamy wildcard, and salted caramel ties it all together.'],
  },
  {
    slug: 'open-quests',
    title: 'Open quests',
    filename: 'quest.todo',
    kind: 'life',
    preview: {
      type: 'todo',
      items: [
        { text: 'ship the extension', done: true },
        { text: 'win another hackathon', done: false },
        { text: 'learn to bake sourdough', done: false },
        { text: 'visit a new city', done: false },
      ],
      aspect: 'aspect-[4/3]',
    },
    gallery: [],
    meta: [{ label: 'Status', value: 'always growing' }],
    description: [
      'The list of things I haven’t done yet. Tick off the ones you’ve done too. Your ticks stay on this device.',
    ],
  },
]
