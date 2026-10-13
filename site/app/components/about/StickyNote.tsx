import React from 'react';

interface StickyNoteProps {
  rotation?: string;
  children: React.ReactNode;
  variant?: 'pink' | 'white';
}

export function StickyNote({ rotation = '0deg', children, variant = 'pink' }: StickyNoteProps) {
  const bgClass = variant === 'white' ? 'bg-white shadow-soft' : 'bg-sticky-pink shadow-soft';
  return (
    <div
      className={`relative px-6 py-5 rounded-[3px] ${bgClass} text-text-muted w-full`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {variant === 'white' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-tape-lavender/80 rotate-[2deg] shadow-xs border-x border-white/40 opacity-90" />
      )}
      {children}
    </div>
  );
}
