import React from 'react';

const stamps = [
  { label: 'Email', href: 'mailto:hello@gwen.dev', icon: 'email' as const, iconClass: 'text-pink-deep' },
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' as const, iconClass: 'text-ink' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' as const, iconClass: 'text-lavender' },
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' as const, iconClass: 'text-ink' },
];

function StampIcon({ icon }: { icon: 'email' | 'github' | 'linkedin' | 'instagram' }) {
  if (icon === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7L5 7v10h14V7l-7 5Z" />
      </svg>
    );
  }
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (icon === 'linkedin') {
    return (
      <span aria-hidden="true" className="font-sans text-lg font-bold leading-none">in</span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ContactCard() {
  return (
    <section className="mt-24 w-full flex justify-end">
      <div className="relative w-full max-w-[420px] bg-white rounded-[20px] p-7 pt-9 shadow-soft" style={{ transform: 'rotate(1deg)' }}>
        <a
          href="/resume.pdf"
          className="group absolute -top-10 -left-6 sm:-left-10 bg-white shadow-card rounded-md p-3 min-w-[140px] transition-transform hover:-rotate-[10deg] hover:scale-105"
          style={{ transform: 'rotate(-6deg)' }}
        >
          <p className="font-caveat text-lg text-ink px-1">take one! ↓</p>
          <span className="mt-1.5 inline-block bg-pink-deep/80 text-white font-sans text-[15px] font-semibold rounded-[8px] px-4 py-1.5 group-hover:bg-pink-deep transition-colors">
            Resume.pdf
          </span>
        </a>
        <h2 className="font-caveat text-[32px] font-normal italic text-ink flex items-center gap-2">let&apos;s be pen pals <span aria-hidden="true" className="bg-lavender/60 rounded-md px-1.5 text-2xl not-italic">✉️</span></h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          i&apos;m always down to chat about design, math, or the best places to get ice cream.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {stamps.map((stamp) => (
            <a
              key={stamp.label}
              href={stamp.href}
              aria-label={stamp.label}
              target={stamp.href.startsWith('http') ? '_blank' : undefined}
              rel={stamp.href.startsWith('http') ? 'noreferrer' : undefined}
              className="bg-paper border border-dashed border-[#E5D5C5] rounded-[4px] p-1 transition-transform hover:-translate-y-0.5"
            >
              <span className="bg-white shadow-xs rounded-[2px] size-12 grid place-items-center">
                <span className={stamp.iconClass}>
                  <StampIcon icon={stamp.icon} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
