'use client'

import Image from 'next/image'
import { useRef, useState, useSyncExternalStore } from 'react'

type Which = 'avatar' | 'ice'

const photos: Record<Which, { src: string; alt: string }> = {
  avatar: { src: '/avatar.jpg', alt: 'Gwen, smiling at the camera' },
  ice: { src: '/ice_cream.jpg', alt: 'A cup of pistachio ice cream' },
}

// One photo is big and in front, the other is small and behind. Hovering (or tapping)
// the one behind swaps them. Hovering the one in front only tilts it.
const FRONT = 'top-[9%] left-0 z-20 h-[82%] w-[68%] -rotate-[5deg] hover:-rotate-[7deg]'
const BACK = 'top-0 left-[38%] z-10 h-[64%] w-[52%] rotate-[5deg]'
const COOLDOWN_MS = 700

/* ---- "sound on/off", remembered in localStorage ---- */
const MUTE_KEY = 'gwen-sound-muted'
const listeners = new Set<() => void>()

function subscribe(callback: () => void) {
  listeners.add(callback)
  window.addEventListener('storage', callback)
  return () => {
    listeners.delete(callback)
    window.removeEventListener('storage', callback)
  }
}
function readMuted() {
  try {
    return localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    return false
  }
}
function writeMuted(value: boolean) {
  try {
    localStorage.setItem(MUTE_KEY, value ? '1' : '0')
  } catch {
    /* private mode: just keep going */
  }
  listeners.forEach((callback) => callback())
}

export function PhotoSwap() {
  const [front, setFront] = useState<Which>('avatar')
  const muted = useSyncExternalStore(subscribe, readMuted, () => false)
  const audio = useRef<HTMLAudioElement | null>(null)
  const lastSwap = useRef(0)

  function playWhoosh() {
    if (muted || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    audio.current ??= new Audio('/sounds/whoosh.mp3')
    audio.current.volume = 0.35
    audio.current.currentTime = 0
    // Browsers block sound until the visitor has interacted with the page; ignore that.
    audio.current.play().catch(() => {})
  }

  function swap() {
    const now = Date.now()
    if (now - lastSwap.current < COOLDOWN_MS) return // stops flip-flopping under the cursor
    lastSwap.current = now
    setFront((current) => (current === 'avatar' ? 'ice' : 'avatar'))
    playWhoosh()
  }

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="relative aspect-[6/6.4] w-full">
        {(Object.keys(photos) as Which[]).map((key) => {
          const isFront = front === key
          return (
            <div
              key={key}
              className={`absolute transition-all duration-500 ease-out motion-reduce:transition-none ${
                isFront ? FRONT : BACK
              }`}
            >
              <button
                type="button"
                disabled={isFront}
                aria-label={isFront ? undefined : `Bring this photo to the front: ${photos[key].alt}`}
                onPointerEnter={(event) => {
                  if (!isFront && event.pointerType === 'mouse') swap()
                }}
                onClick={() => {
                  if (!isFront) swap()
                }}
                className="relative block h-full w-full cursor-pointer overflow-hidden rounded shadow-[0_14px_30px_rgba(74,59,63,0.28)] disabled:cursor-default"
              >
                <Image
                  src={photos[key].src}
                  alt={photos[key].alt}
                  fill
                  sizes="(min-width: 1024px) 380px, 70vw"
                  preload={key === 'avatar'}
                  className="object-cover"
                />
              </button>

              {/* paperclip on whichever photo is in front */}
              <svg
                width="34"
                height="76"
                viewBox="0 0 34 76"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
                className={`pointer-events-none absolute -top-8 left-12 stroke-[#9AA0A6] transition-opacity duration-300 ${
                  isFront ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <path d="M12 60V16a9 9 0 0 1 18 0v46a14 14 0 0 1-28 0V22" />
              </svg>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        aria-pressed={!muted}
        onClick={() => writeMuted(!muted)}
        className="mt-4 inline-flex items-center gap-2 rounded-md px-2 py-1 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-accent"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          {muted ? <path d="m22 9-6 6m0-6 6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />}
        </svg>
        {muted ? 'sound off' : 'sound on'}
      </button>
    </div>
  )
}
