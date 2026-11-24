export type Tone = 'pink' | 'lavender' | 'mint' | 'yellow'
export type Status = 'shipped' | 'in-progress' | 'prototype'

export type FigureData = { src: string; alt: string; caption?: string }

/** Extra building blocks a section can show after its paragraphs. */
export type Block =
  | { type: 'callout'; label: string; text: string } // e.g. "Our north star"
  | { type: 'quote'; text: string; by?: string }
  | ({ type: 'figure' } & FigureData) // image with a small caption
  | { type: 'stat'; value: string; text: string; highlight: number } // highlight = dots lit out of 100
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { title: string; body: string; figure?: FigureData }[] } // numbered, numbers stay in view
  | { type: 'video'; youtubeId: string; title: string; caption?: string } // empty youtubeId = placeholder
  | { type: 'reflections'; items: { icon: 'screen' | 'heart' | 'spark'; title: string; body: string }[] }

export type Section = {
  id: string // used in the URL hash and the section list
  label: string // e.g. 'TL;DR', 'Background', 'Problem', 'Process', 'Final product', 'Impact', 'Reflections'
  heading: string
  body: string[] // one string per paragraph
  blocks?: Block[] // optional extras shown after the paragraphs
}

export type Project = {
  slug: string
  title: string
  summary: string
  tone: Tone
  status: Status
  context: string // e.g. 'personal project',a company name
  /** logo of the hackathon / company, e.g. '/logos/girl-code.svg'. Without one, a letter tile is shown. */
  logo?: string
  /** the headline chip on the card and page, e.g. { label: '3RD PLACE', icon: 'trophy' }. Without one the status is shown. */
  tag?: { label: string; icon?: 'trophy' }
  /** small topic chips under the title */
  topics?: string[]
  role: string
  tools: string[]
  timeline: string
  team?: string[]
  partners?: { label: string; people: string[] }
  image?: { src: string; alt: string }
  /** shows as a card that is not clickable yet */
  comingSoon?: boolean
  sections: Section[]
}

export const projects: Project[] = [
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
  {
    slug: 'sygn',
    title: 'Sygn',
    summary:
      'A location-aware attendance system that uses GPS geofencing and biometric verification to confirm real classroom presence.',
    tone: 'mint',
    status: 'in-progress',
    context: 'JKUAT',
    // logo: '/logos/sygn.svg', // add a file to public/logos and uncomment
    topics: ['Geofencing', 'Biometrics', 'EdTech'],
    role: 'Full-stack developer',
    tools: ['React Native (Expo)', 'FastAPI', 'PostgreSQL (Supabase)', 'Next.js'],
    timeline: '2025–2026',
    image: { src: '/placeholder-image2.jpg', alt: 'Sygn mobile check-in and geofence verification screen' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'Proof that you were actually in the room',
        body: [
          'Sygn is a location-aware attendance system. Unlike traditional roll-calls, it uses high-precision GPS geofencing and biometric verification to confirm that a student’s physical presence is real and logs attendance in real time.',
          'I designed and built the tri-factor verification flow across a React Native student app, an asynchronous FastAPI backend, and a Next.js lecturer dashboard.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'The trouble with paper sign-in sheets',
        body: [
          'At JKUAT, tracking lecture attendance still relies heavily on physical sign-in sheets passed from desk to desk. By the time a sheet reaches the front of a crowded hall, absent classmates have been signed in and lecturers are left with stacks of paper to manually reconcile into spreadsheets.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'A signature on paper is not proof of presence',
        body: [
          'Manual roll calls fail on three fronts: buddy punching lets students sign in for absent peers, administrative data entry wastes hours on Excel reconciliation, and lecturers have no live visibility into attendance trends during or immediately after a lecture.',
        ],
        blocks: [
          {
            type: 'callout',
            label: 'Our north star',
            text: 'How can we verify that a student is genuinely inside the classroom at the right time, without slowing down a lecture?',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Designing a zero-trust verification handshake',
        body: [
          'To eliminate proxy attendance without adding friction, I built a tri-factor validation pipeline checking when, where, and who before recording a check-in.',
        ],
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Temporal & spatial validation',
                body: 'Attendance windows only open during a registered unit’s scheduled timetable slot. The app captures GPS coordinates and uses the Haversine formula against Supabase geospatial boundaries—granting access only within a 30-meter classroom radius.',
              },
              {
                title: 'Device binding & biometric handshake',
                body: 'To prevent students from logging into a friend’s account on a spare phone, each account binds to a unique hardware ID (IMEI/UUID) and requires FaceID or fingerprint verification before any GPS packet is transmitted.',
              },
              {
                title: 'One-tap HCI & lecturer tooling',
                body: 'Built a minimalist React Native check-in flow with haptic feedback and red/green geofence indicators, paired with an asynchronous FastAPI backend and a Next.js dashboard for lecturers to monitor attendance in real time.',
              },
            ],
          },
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'Real-time attendance for students and lecturers',
        body: [
          'Students open Sygn to view their smart daily timetable alongside a dynamic red-or-green geofence status showing whether they are inside the valid classroom zone. Once authenticated via biometrics, a single tap logs attendance—or they can submit excused absences with supporting documents through the Apology Portal.',
          'Lecturers get a dedicated Next.js dashboard backed by FastAPI endpoints designed to handle concurrent check-in spikes at the start of every lecture.',
        ],
        blocks: [
          {
            type: 'figure',
            src: '/placeholder-image2.jpg',
            alt: 'Sygn student check-in screen and geofence status indicator',
            caption: 'One-tap check-in UI with live geofence status and biometric handshake',
          },
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [],
        blocks: [
          {
            type: 'reflections',
            items: [
              {
                icon: 'spark',
                title: 'Security cannot feel like friction',
                body: 'Three layers of validation sound heavy on paper, but pairing hardware binding with native biometrics and a one-tap interface keeps check-in down to a few seconds.',
              },
              {
                icon: 'heart',
                title: 'Design for legitimate edge cases',
                body: 'Building the Apology Portal alongside core check-in showed that strict verification systems still need clear, humane workflows for excused absences.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'stabilisha',
    title: 'Stabilisha',
    summary:
      'A platform for gig workers in Kenya that brings a wallet, credit score, SACCO savings, insurance and AI insights into one place.',
    tone: 'pink',
    status: 'shipped',
    context: 'Girl Code x Absa Hackathon',
    // logo: '/logos/girl-code.svg', // add a file to public/logos and uncomment
    tag: { label: '3RD PLACE', icon: 'trophy' },
    topics: ['Fintech', 'Gig economy'],
    role: 'Full-stack & product developer',
    tools: ['Next.js', 'TypeScript', 'AI APIs', 'Blockchain'],
    timeline: 'Hackathon sprint · 2025',
    team: ['Teammate 1', 'Teammate 2'],
    image: { src: '/placeholder-image1.jpg', alt: 'Stabilisha gig worker financial dashboard screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'Financial services built around gig work',
        body: [
          'Stabilisha (GigWise) is a platform for gig workers in Kenya. It combines a wallet, a credit score, SACCO savings, insurance and AI-powered insights, so people with irregular income can use financial services that usually expect a payslip.',
          'We placed third at the Girl Code x Absa Hackathon. I worked across product architecture and building the core dashboard, credit-passport logic, and AI guidance flows.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Why gig workers are left out',
        body: [
          'Kenya has a thriving workforce of freelancers, virtual assistants, designers, developers, and photographers earning across digital and local contracts. Yet banks and insurers still anchor eligibility to predictable monthly payslips—shutting reliable earners out of credit, structured savings, and equipment protection.',
        ],
        blocks: [
          {
            type: 'stat',
            value: '84%',
            text: 'of Kenya’s workforce is in informal or off-payroll work without traditional payslip records.',
            highlight: 84,
          },
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'Irregular income should not mean invisible financial history',
        body: [
          'Without a formal employment letter, a skilled freelancer who completes dozens of paid gigs a year still looks unbankable to traditional lenders, while having no safety net when work slows down or tools break.',
        ],
        blocks: [
          {
            type: 'callout',
            label: 'Our north star',
            text: 'How can we turn everyday gig consistency into a trusted financial passport for credit, savings, and cover?',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Connecting work, savings, and credit in one loop',
        body: [
          'Rather than bolting finance onto a job board, we designed Stabilisha so every completed gig strengthens the worker’s financial standing.',
        ],
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Credit scoring from gig activity',
                body: 'Built a 300–850 financial passport scored from gig consistency, verified payment history, and savings habits instead of payslips.',
              },
              {
                title: 'Multi-currency wallet & SACCO savings',
                body: 'Paired a KES/USD wallet with blockchain-verified records and familiar SACCO rotating savings groups offering 2x to 3x loan eligibility.',
              },
              {
                title: 'Protection & AI income guidance',
                body: 'Added equipment and income-protection insurance with geotagged claim verification, plus an AI assistant for personalized forecasts and financial advice.',
              },
            ],
          },
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'What the platform does',
        body: [
          'It is built for two kinds of users: gig workers (freelancers, virtual assistants, designers, developers, photographers and more) and the clients who post gigs.',
        ],
        blocks: [
          {
            type: 'list',
            items: [
              'Integrated wallet in KES and USD, with blockchain-verified transactions.',
              'Gig marketplace to browse and post gigs across categories.',
              'Credit scoring: a financial passport from 300 to 850, based on gig consistency, payment history and financial health.',
              'AI income insights: predictions, recommendations and market opportunities.',
              'SACCO integration: a rotating savings and credit cooperative, with 2 to 3 times loan eligibility.',
              'Insurance for income protection and equipment, with geotagged claim verification.',
              'AI chatbot for financial advice and guidance.',
            ],
          },
          {
            type: 'figure',
            src: '/placeholder-image1.jpg',
            alt: 'Stabilisha wallet, credit passport, and gig marketplace interface',
            caption: 'Gig worker dashboard combining wallet balances, credit score, and SACCO progress',
          },
          {
            type: 'video',
            youtubeId: '',
            title: 'Stabilisha Hackathon Demo',
            caption: 'Walkthrough of our Girl Code x Absa Hackathon submission',
          },
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'Placing third at the Girl Code x Absa Hackathon validated how urgent alternative financial rails are for Kenya’s gig economy. Judges highlighted the bridge between local SACCO culture and dynamic credit scoring as a practical path toward financial inclusion.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [],
        blocks: [
          {
            type: 'reflections',
            items: [
              {
                icon: 'spark',
                title: 'Build on familiar financial habits',
                body: 'Integrating SACCOs resonated immediately because it digitized a trust model Kenyan workers already use rather than forcing an unfamiliar product.',
              },
              {
                icon: 'heart',
                title: 'Scope tightly for hackathon storytelling',
                body: 'With a broad feature set spanning wallets, insurance, and AI, grounding the demo around one freelancer’s journey made the value instantly clear.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'wastelink-ai',
    title: 'WasteLink AI',
    summary:
      'A circular-economy marketplace where African producers and buyers trade waste, with a scanner workflow and impact metrics.',
    tone: 'mint',
    status: 'prototype',
    context: 'Kytabu | AfCEN hackathon',
    // logo: '/logos/afcen.svg', // add a file to public/logos and uncomment (Kytabu or AfCEN)
    tag: { label: '1ST PLACE', icon: 'trophy' },
    topics: ['Circular economy', 'Marketplace'],
    role: 'Full-stack developer',
    tools: ['Next.js', 'Express', 'MongoDB'],
    timeline: 'Hackathon sprint · 2025',
    team: ['Teammate 1', 'Teammate 2'],
    image: { src: '/placeholder-image3.jpg', alt: 'WasteLink AI marketplace and waste scanner screenshot' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'A marketplace for waste',
        body: [
          'WasteLink AI is a circular-economy waste trading platform for African producers and buyers. It combines a marketplace, a waste-scanner workflow, listing management, environmental impact metrics, SMS integration and payment demonstrations, on a Next.js frontend with an Express and MongoDB backend.',
          'We placed first at the AfCEN hackathon. I helped build the full-stack marketplace workflows, listing management, and impact dashboard.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Why waste is worth trading',
        body: [
          'Across African cities and industrial hubs, businesses and aggregators discard valuable recyclable materials every day, while recyclers and manufacturers struggle to source consistent feedstock. The material has value—what is missing is a structured, transparent way to connect both sides.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'Valuable feedstock stays trapped in fragmented channels',
        body: [
          'Waste producers rarely know what their materials are worth or how to categorize them, while buyers have no reliable visibility into available supply, quality, or environmental impact.',
        ],
        blocks: [
          {
            type: 'callout',
            label: 'Our north star',
            text: 'How can we make listing, verifying, and trading recyclable waste as simple as snapping a photo and sending a text?',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Building an end-to-end circular trade flow',
        body: [
          'We structured the prototype around reducing friction at listing time while proving both digital and offline accessibility.',
        ],
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Guided waste-scanner workflow',
                body: 'Designed a scanner-to-listing flow so producers can identify waste streams quickly and publish structured, searchable inventory with minimal manual typing.',
              },
              {
                title: 'Marketplace & environmental impact metrics',
                body: 'Connected a Next.js frontend to an Express and MongoDB backend to power listing management, buyer discovery, and live calculations of waste diverted and emissions saved.',
              },
              {
                title: 'SMS alerts & payment demonstrations',
                body: 'Integrated SMS notifications so deals do not depend on constant smartphone data, alongside simulated payment flows to demonstrate end-to-end settlement.',
              },
            ],
          },
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'What it does today',
        body: [
          'Producers can scan and publish waste listings, track quantities, and monitor environmental impact metrics, while buyers browse categorized supply, coordinate trades via SMS-backed updates, and step through demonstrated payment settlements.',
        ],
        blocks: [
          {
            type: 'figure',
            src: '/placeholder-image3.jpg',
            alt: 'WasteLink AI marketplace listings and impact metrics view',
            caption: 'Marketplace catalog paired with waste-scanner flow and impact tracking',
          },
          {
            type: 'video',
            youtubeId: '',
            title: 'WasteLink AI Pitch & Walkthrough',
            caption: 'Our winning Kytabu | AfCEN hackathon demo',
          },
        ],
      },
      {
        id: 'impact',
        label: 'Impact',
        heading: 'The payoff',
        body: [
          'Winning first place at the Kytabu | AfCEN hackathon showed the strength of combining AI-assisted waste classification with practical SMS reach and measurable sustainability metrics.',
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [],
        blocks: [
          {
            type: 'reflections',
            items: [
              {
                icon: 'screen',
                title: 'Design for low-connectivity realities',
                body: 'Pairing a modern Next.js web app with SMS integration ensured the marketplace could reach real-world waste aggregators outside reliable Wi-Fi zones.',
              },
              {
                icon: 'heart',
                title: 'Quantify impact alongside revenue',
                body: 'Showing environmental metrics next to trade value helped both buyers and judges see the platform as climate infrastructure, not just classifieds.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'intellect-clasher',
    title: 'Intellect Clasher',
    summary: 'A Kahoot-style quiz game built as hardware, for students in remote areas without laptops.',
    tone: 'lavender',
    status: 'prototype',
    context: 'IoT & Hardware Project',
    // logo: '/logos/intellect-clasher.svg', // add a file to public/logos and uncomment
    topics: ['IoT', 'Education'],
    role: 'Hardware & embedded systems builder',
    tools: ['Embedded C++', 'IoT Hardware', 'Wireless Networking'],
    timeline: '2025',
    image: { src: '/placeholder-image4.jpg', alt: 'Intellect Clasher hardware quiz console prototype' },
    sections: [
      {
        id: 'tldr',
        label: 'TL;DR',
        heading: 'Kahoot, without the laptops',
        body: [
          'Intellect Clasher is a Kahoot-style quiz game built as hardware, for students in remote areas who do not have access to laptops or other devices.',
          'I built the hardware prototype to bring live, competitive classroom quizzing off personal screens and onto dedicated, low-cost physical units.',
        ],
      },
      {
        id: 'background',
        label: 'Background',
        heading: 'Why this matters in remote classrooms',
        body: [
          'Interactive quiz platforms transform passive review sessions into energetic classroom competitions. However, tools like Kahoot assume every student holds a smartphone, tablet, or laptop on reliable Wi-Fi—leaving classrooms in under-resourced and remote areas completely locked out.',
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        heading: 'Interactive learning should not require a laptop per student',
        body: [
          'Without personal devices or broadband internet, teachers struggle to run timed, multiplayer knowledge checks that give instant feedback to the whole class at once.',
        ],
        blocks: [
          {
            type: 'callout',
            label: 'Our north star',
            text: 'How can we deliver the speed and excitement of a live multiplayer quiz game using standalone, affordable classroom hardware?',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Translating a web game into physical hardware',
        body: [
          'Moving from browser UI to microcontrollers meant stripping the quiz experience down to speed, tactile clarity, and zero-internet reliability.',
        ],
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Tactile answer inputs',
                body: 'Replaced touchscreen choices with physical color-coded push buttons and immediate LED/buzzer feedback so multiple students can respond quickly without needing a screen.',
              },
              {
                title: 'Offline local communication',
                body: 'Set up local device-to-host communication so quiz rounds, answer submissions, and timing run smoothly inside the classroom with no external internet required.',
              },
              {
                title: 'Live scoring & game pacing',
                body: 'Implemented real-time answer validation and score tracking on the host unit to preserve the fast-paced, competitive feel of a live quiz show.',
              },
            ],
          },
        ],
      },
      {
        id: 'final-product',
        label: 'Final product',
        heading: 'A plug-and-play classroom quiz kit',
        body: [
          'The prototype pairs compact student responder units with a central host controller. Teachers trigger questions, students race to lock in answers on physical buttons, and scores update immediately—bringing game-based learning to classrooms without a single laptop.',
        ],
        blocks: [
          {
            type: 'figure',
            src: '/placeholder-image4.jpg',
            alt: 'Intellect Clasher hardware responder prototype',
            caption: 'Hardware quiz prototype built for offline, device-free classrooms',
          },
        ],
      },
      {
        id: 'reflections',
        label: 'Reflections',
        heading: 'Looking back',
        body: [],
        blocks: [
          {
            type: 'reflections',
            items: [
              {
                icon: 'spark',
                title: 'Constraints sharpen product focus',
                body: 'Designing without full screens or internet forced every interaction down to essentials—making the game faster to learn and easier to set up.',
              },
              {
                icon: 'screen',
                title: 'Hardware UX is physical',
                body: 'Button responsiveness, clear visual feedback, and durability matter just as much in embedded EdTech as layout and typography do in web apps.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'coming-soon',
    title: 'Coming soon',
    summary: 'Another project is on its way.',
    tone: 'yellow',
    status: 'in-progress',
    context: 'next up',
    comingSoon: true,
    role: '',
    tools: [],
    timeline: '',
    sections: [],
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