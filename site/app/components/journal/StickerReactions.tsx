"use client";

import { useCallback, useRef, useState } from 'react';

type Floater = {
  id: number;
  shape: string;
  fill: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
};

const STICKERS = [
  {
    shape: 'heart',
    label: 'heart sticker',
    fill: '#E893A9',
    path: 'M12 21c-5.5-3.5-9-6.8-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.2-3.5 7.5-9 11Z',
  },
  {
    shape: 'star',
    label: 'star sticker',
    fill: '#C3B4E8',
    path: 'M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6Z',
  },
  {
    shape: 'flower',
    label: 'flower sticker',
    fill: '#A9DCC5',
    path: 'M12 2a3 3 0 0 1 3 3 3 3 0 0 1 5 1 3 3 0 0 1 1 5 3 3 0 0 1-2.6 4.4A3 3 0 0 1 15 20a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3.4-4.6A3 3 0 0 1 3 11a3 3 0 0 1 1-5 3 3 0 0 1 5-1 3 3 0 0 1 3-3Z',
  },
  {
    shape: 'sparkle',
    label: 'sparkle sticker',
    fill: '#F3C9D4',
    path: 'M12 2c.9 5.5 2.6 7.2 8.1 8.1-5.5.9-7.2 2.6-8.1 8.1-.9-5.5-2.6-7.2-8.1-8.1 5.5-.9 7.2-2.6 8.1-8.1ZM19.5 2.5c.4 2.3 1.1 3 3.4 3.4-2.3.4-3 1.1-3.4 3.4-.4-2.3-1.1-3-3.4-3.4 2.3-.4 3-1.1 3.4-3.4Z',
  },
  {
    shape: 'moon',
    label: 'moon sticker',
    fill: '#9A86C8',
    path: 'M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z',
  },
] as const;

export function StickerReactions() {
  const [floaters, setFloaters] = useState<Floater[]>([]);
  const [bump, setBump] = useState<string | null>(null);
  const idRef = useRef(0);

  const react = useCallback((shape: string, fill: string) => {
    const id = ++idRef.current;
    const floater: Floater = {
      id,
      shape,
      fill,
      x: Math.round((Math.random() - 0.5) * 560),
      y: Math.round(-40 - Math.random() * 320),
      size: Math.round(22 + Math.random() * 22),
      rotate: Math.round((Math.random() - 0.5) * 70),
    };
    setFloaters((f) => [...f.slice(-11), floater]);
    setBump(shape);
    window.setTimeout(() => {
      setFloaters((f) => f.filter((x) => x.id !== id));
    }, 1650);
    window.setTimeout(() => {
      setBump((b) => (b === shape ? null : b));
    }, 220);
  }, []);

  return (
    <div className="relative overflow-visible rounded-2xl border border-dashed border-pink-deep/40 bg-paper px-6 py-6 text-center">
      <p className="font-caveat text-xl italic text-ink-soft">
        leave a sticker if you enjoyed this...
      </p>
      <div className="relative mt-4 flex flex-wrap items-center justify-center gap-4">
        {STICKERS.map((s) => (
          <button
            key={s.shape}
            type="button"
            onClick={() => react(s.shape, s.fill)}
            aria-label={`Leave a ${s.label}`}
            className={`relative grid size-12 place-items-center rounded-full bg-cream transition-transform duration-150 hover:-translate-y-0.5 active:scale-90 ${
              bump === s.shape ? 'scale-125' : ''
            }`}
          >
            <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
              <path d={s.path} fill={s.fill} />
            </svg>
          </button>
        ))}
        {floaters.map((f) => {
          const sticker = STICKERS.find((s) => s.shape === f.shape);
          if (!sticker) return null;
          return (
            <span
              key={f.id}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10"
              style={
                {
                  '--sticker-rotate': `${f.rotate}deg`,
                  marginLeft: f.x,
                  marginTop: f.y,
                  animation: 'sticker-pop-float 1.6s ease-out forwards',
                } as React.CSSProperties
              }
            >
              <svg viewBox="0 0 24 24" style={{ width: f.size, height: f.size }} className="drop-shadow-sm">
                <path d={sticker.path} fill={f.fill} />
              </svg>
            </span>
          );
        })}
      </div>
    </div>
  );
}
