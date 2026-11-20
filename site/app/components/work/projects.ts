export type Tone = 'pink' | 'lavender' | 'mint' | 'yellow'
export type Status = 'shipped' | 'in-progress' | 'prototype'

export type Section = {
  id: string // used in the URL hash and the section list
  label: string // e.g. 'TL;DR', 'Background', 'Problem', 'Process', 'Final product', 'Impact', 'Reflections'
  heading: string
  body: string[] // one string per paragraph
}

export type Project = {
  slug: string
  title: string
  summary: string
  tone: Tone
  status: Status 
  context: string // e.g. 'personal project', 'hackathon', a company name
  role: string
  tools: string[]
  timeline: string
  image?: { src: string; alt: string }
  sections: Section[]
}

export const projects: Project[] = [
  {
    slug: 'bloom-planner',
    title: 'Bloom Planner',
    summary: 'a gentle habit tracker made with vanilla JS.',
    tone: 'pink',
    status: 'shipped',
    context: 'personal project',
    role: 'solo builder',
    tools: ['Vanilla JS'],
    timeline: '2024–2025',
    image: { src: '/placeholder-image1.jpg', alt: 'Bloom Planner habit tracker screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'A gentle habit tracker made with vanilla JS.',
        body: [
          'Bloom Planner is a minimal habit tracker built entirely with vanilla JavaScript. The goal was simple: help people build sustainable routines without the pressure, streaks, or gamification that makes most habit apps feel like a second job.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'The case for a habit tracker',
        body: [
          'I have always been fascinated by the psychology of habits — how small, repeated actions compound into meaningful change over time. But every habit app I tried felt overwhelming: constant notifications, aggressive streaks, badges for everything. I wanted something quiet and encouraging instead, a tool that felt like a gentle nudge rather than a demanding coach.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'The trouble with habit apps',
        body: [
          'Most habit trackers optimize for engagement, not for actual habit formation. They bombard you with reminders, punish you for missing a day, and turn self-improvement into a game you can lose. That creates anxiety around the very behaviors you are trying to encourage. I needed a tool that respected my attention and let me miss a day without guilt.',
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'The build',
        body: [
          'I started with a plain markup structure — no framework, no build step — just semantic tags and a single stylesheet. State management was handled with vanilla JavaScript, keeping the logic in one file so I could see the whole picture at once. Styling stayed minimal on purpose: soft colors, plenty of whitespace, and large tap targets so the app feels calm to use.',
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'Bloom Planner in use',
        body: [
          'A single-page habit tracker where you can add habits, check them off daily, and view your progress over time. There are no accounts, no notifications, and no streak counters — just your habits and a simple way to mark them complete. Everything lives in localStorage, so your data stays on your device.',
          'It is deliberately small. The entire app fits in a single file, loads instantly, and works entirely offline once you have opened it. No signup, no email, no algorithm deciding what you should focus on.',
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'Because it stays out of the way, Bloom Planner is actually usable. Friends who have tried it say it is the first habit app they have stuck with for more than a week. Removing features turned out to be the most important design decision I made.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [
          'This project taught me that constraints breed clarity. By stripping away gamification and notifications, I ended up with a tool that felt more human, not less. It also reinforced my belief that the best software often does fewer things, but does them with intention.',
        ],
      },
    ],
  },
  {
    slug: 'dear-diary',
    title: 'Dear Diary',
    summary: 'a private journaling app, encrypted & calm.',
    tone: 'lavender',
    status: 'shipped',
    context: 'personal project',
    role: 'solo builder',
    tools: ['React', 'localStorage'],
    timeline: '2024–2025',
    image: { src: '/placeholder-image2.jpg', alt: 'Dear Diary journaling app screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'A private journaling app, encrypted & calm.',
        body: [
          'Dear Diary is a journaling app that encrypts every entry locally before saving it to your browser. Your thoughts never leave your device — there is no account, no cloud, and no server that could read them.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Private by design',
        body: [
          'I have kept journals on and off for years, but I never felt fully comfortable writing in apps that store everything on their servers. I wanted a place where I could be completely honest without wondering who else might read it. That led me to local-first encryption: if the data never leaves your device in readable form, it cannot be leaked, scanned, or sold.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'The privacy problem',
        body: [
          'Most journaling apps are built around cloud sync and social features. They want you to create an account, back up to their servers, and sometimes share excerpts with friends. That model works for some people, but it means your most private thoughts are sitting on someone else\'s computer. I needed something where privacy was not an option — it was the architecture.',
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Building it',
        body: [
          'I built Dear Diary with React for the UI and localStorage for persistence. The key piece was integrating the Web Crypto API so that entries are encrypted client-side before they are ever written to storage. I spent a fair amount of time thinking about key management — since there is no server, the encryption key is derived from a password you set, and there is no password reset. If you lose it, your entries are gone, which is exactly the point.',
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'Dear Diary in use',
        body: [
          'A minimal journaling app where you write entries, lock them with a password, and know that nothing is ever stored in plain text. The interface is intentionally sparse: a text area, a list of past entries, and a lock icon that reminds you everything is encrypted. It ships as a static site you can host anywhere or run locally.',
          'Everything is encrypted client-side before it ever touches storage. There is no server to subpoena, no database to leak, and no company that can read your entries. If you forget your password, the entries are gone — by design.',
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'For anyone who has hesitated to journal because they were worried about privacy, Dear Diary removes that barrier. It is a small thing, but having a truly private place to write changes how you show up on the page.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [
          'Building this changed how I think about data ownership. When the user holds the keys, the developer cannot access the data — and that is a feature, not a bug. It also taught me that encryption adds real complexity to even simple apps, from key derivation to handling lost passwords gracefully.',
        ],
      },
    ],
  },
  {
    slug: 'little-sprout',
    title: 'Little Sprout',
    summary: 'a plant shop built on markup and stylesheets.',
    tone: 'mint',
    status: 'shipped',
    context: 'personal project',
    role: 'solo builder',
    tools: ['markup', 'stylesheets'],
    timeline: '2024–2025',
    image: { src: '/placeholder-image3.jpg', alt: 'Little Sprout plant shop screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'A plant shop built on markup and stylesheets.',
        body: [
          'Little Sprout is a tiny plant shop built with nothing but markup and stylesheets. No JavaScript, no framework, no build step — just semantic tags and styles.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Back to basics',
        body: [
          'I have spent years working with complex frontend frameworks, and I wanted to remember what it felt like to build something with the most basic tools available. Could I make a working storefront — product pages, cart, checkout — without a single line of JavaScript? The challenge appealed to me.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'The bloat problem',
        body: [
          'Modern e-commerce sites are heavy. They ship megabytes of JavaScript, bundle dozens of dependencies, and often require a backend just to display products and take an order. I wondered whether all of that complexity was actually necessary, or if we had simply forgotten how much markup and stylesheets can do on their own.',
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Building it',
        body: [
          'I designed the layout with grid and flexbox, styled product cards with plain stylesheets, and used native form submissions for the checkout flow. Every interactive element — filtering, adding to cart, submitting an order — works through standard form controls and server-style POST semantics. It was an exercise in restraint: if I could not do it with markup or stylesheets, it did not go in.',
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'Little Sprout in use',
        body: [
          'A working plant shop where you can browse plants, add them to a cart, and check out — all without JavaScript. The site loads instantly, works without JavaScript enabled, and is trivially easy to host since it is just static files. It is a complete shopping experience built on the most boring, reliable technology stack there is.',
          'Every interaction goes through native form submissions and standard POST semantics. There is no build step, no bundler, and no client-side router — just markup and stylesheets doing what they were made to do.',
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'Little Sprout proved that simple tools can still build complete, usable experiences. It also loads faster than almost any modern e-commerce site, simply because there is nothing to parse or execute beyond the markup itself.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [
          'Working within constraints forced me to think more carefully about markup semantics and stylesheet capabilities. I learned that the platform is more capable than we give it credit for, and that choosing the simplest tool for the job often leads to a better, more resilient product.',
        ],
      },
    ],
  },
  {
    slug: 'chrome-extension',
    title: 'Reverse Engineering Toolkit',
    summary: 'A Chrome extension for inspecting and modifying web pages.',
    tone: 'yellow',
    status: 'in-progress',
    context: 'personal project',
    role: 'solo builder',
    tools: ['JavaScript', 'Chrome Extension APIs'],
    timeline: '2025–2026',
    image: { src: '/placeholder-image4.jpg', alt: 'Reverse Engineering Toolkit extension screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'A Chrome extension for inspecting and modifying web pages.',
        body: [
          'Reverse Engineering Toolkit is a browser extension that helps you peek under the hood of any website. It brings inspection, modification, and debugging tools together in one place so you can see how pages are built and experiment with them in real time.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Curiosity about how the web works',
        body: [
          'I have always been curious about what happens behind the scenes on the pages I visit every day. When I open DevTools, I see a snapshot of the DOM and network requests, but I wanted something more hands-on — a way to modify a page, inject scripts, and watch how a site responds, all without leaving the browser.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'The DevTools problem',
        body: [
          'DevTools are powerful, but they are scattered across panels and optimized for inspection rather than experimentation. Copying a selector, switching to the Console, pasting it, modifying the page, then switching back to Elements to check the result — it is a lot of context switching. I wanted a single extension that brings those tools together so reverse engineering feels fluid instead of fragmented.',
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Building it',
        body: [
          'I started with a Manifest V3 extension, which set the foundation for permissions, content scripts, and a popup UI. Content scripts handle page injection and DOM inspection, while the popup provides quick actions for common tasks like editing elements or viewing stored state. I have been iterating on the feature set as I run into limitations of the extension APIs.',
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'The extension in action',
        body: [
          'An in-progress Chrome extension for inspecting elements, modifying pages, and exploring how websites are built. It is not finished yet — I am still refining the UI and adding inspection tools — but the core of seeing and changing a page live is already there.',
          'The popup gives you quick actions for common tasks, while content scripts handle page injection and DOM inspection directly on the page you are viewing. Everything runs in the browser, so there is nothing to install beyond the extension itself.',
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'Even in its early state, the extension has become my go-to tool for learning how specific sites are built. It turns passive browsing into an active way to understand the web, one page at a time.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [
          'Building this has taught me more about browser internals than any tutorial ever could. From content script isolation to messaging between extension components, every feature revealed something new about how browsers sandbox and extend the web.',
        ],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const toneClass: Record<Tone, { soft: string; solid: string }> = {
  pink: { soft: 'bg-pink-soft', solid: 'bg-pink' },
  lavender: { soft: 'bg-lavender-soft', solid: 'bg-lavender' },
  mint: { soft: 'bg-mint-soft', solid: 'bg-mint' },
  yellow: { soft: 'bg-yellow-soft', solid: 'bg-yellow' },
}

export const statusLabel: Record<Status, { text: string; dot: string }> = {
  shipped: { text: 'SHIPPED', dot: 'bg-[#3DBE6F]' },
  'in-progress': { text: 'IN PROGRESS', dot: 'bg-[#F5B94B]' },
  prototype: { text: 'PROTOTYPE', dot: 'bg-lavender' },
}
