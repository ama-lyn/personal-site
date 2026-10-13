import React from 'react';

interface LinedNoteCardProps {
  title: string;
  titleColor?: 'pink' | 'lavender';
  body: string;
  badge?: string;
  date?: string;
  rotation?: string;
}

const titleClasses = {
  pink: 'text-pink-deep',
  lavender: 'text-[#A79BDE]',
};

export function LinedNoteCard({
  title,
  titleColor = 'pink',
  body,
  badge,
  date,
  rotation = '-1.5deg',
}: LinedNoteCardProps) {
  return (
    <div
      className="relative w-full max-w-[300px] bg-white px-5 pt-6 pb-5 rounded-[3px] shadow-polaroid"
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* ruled lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[3px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, rgba(74,59,63,0.12) 23px, rgba(74,59,63,0.12) 24px)',
          backgroundPosition: '0 34px',
        }}
      />
      {/* badge */}
      {badge && (
        <span className="absolute -top-3 -left-4 rotate-[-8deg] rounded-full bg-pink px-3 py-1 font-caveat text-sm text-ink shadow-card">
          {badge}
        </span>
      )}
      {/* paperclip */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -top-2 right-4 size-6 rotate-[24deg] text-ink/50"
      >
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
      <h3 className={`relative font-caveat text-[22px] italic leading-tight ${titleClasses[titleColor]}`}>
        {title}
      </h3>
      <p className="relative mt-1 font-sans text-[13.5px] leading-[24px] text-ink/85">{body}</p>
      {date && (
        <p className="relative mt-1 text-right font-caveat text-[13px] italic text-muted/80">{date}</p>
      )}
    </div>
  );
}
