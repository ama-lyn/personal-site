'use client'

import Image from 'next/image'
import { useRef, useState, useSyncExternalStore } from 'react'

/*
 * Two photos, like the inspiration:
 *  - a tall portrait in front (tilted right) with the paperclip on its top-right
 *  - a shorter photo behind it, mostly hidden, poking out on the right
 * Hovering the back photo brings it to the front. The paperclip stays exactly where it is
 * and keeps holding the stack together while the photos swap underneath it.
 * Moving the mouse away puts everything back. Sizes and positions never change,
 * only the stacking order and a slight tilt.
 * Touch screens: tap the back photo to bring it forward, tap again (or the other photo) to reset.
 */

const SOUND_COOLDOWN_MS = 400

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

/* One fixed clip: it never moves or fades, whichever photo is in front. */
function Paperclip() {
  return (
    <svg
      viewBox="0 0 60 160"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute top-[-4.5%] left-[70%] z-30 h-auto w-[8.7%] -translate-x-1/2 rotate-[5deg]"
    >
      <path
        d="M24 52V118a13 13 0 0 0 26 0V58a8 8 0 0 0-16 0V108"
        stroke="#9AA0A6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="35,12 38.8,22.7 50.2,23.1 41.2,30 44.4,40.9 35,34.5 25.6,40.9 28.8,30 19.8,23.1 31.2,22.7"
        fill="#C9CED3"
        stroke="#8E959C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PhotoSwap() {
  const [swapped, setSwapped] = useState(false) // true = the back photo is in front
  const muted = useSyncExternalStore(subscribe, readMuted, () => false)
  const audio = useRef<HTMLAudioElement | null>(null)
  const lastSound = useRef(0)
  const lastPointer = useRef('mouse')

  function playWhoosh() {
    const now = Date.now()
    if (muted || now - lastSound.current < SOUND_COOLDOWN_MS) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lastSound.current = now
    audio.current ??= new Audio('/sounds/whoosh.mp3')
    audio.current.volume = 0.35
    audio.current.currentTime = 0
    // Browsers block sound until the visitor has interacted with the page; ignore that.
    audio.current.play().catch(() => {})
  }

  function bringBackPhotoForward() {
    if (!swapped) playWhoosh()
    setSwapped(true)
  }

  const portraitFront = !swapped

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div className="relative aspect-[620/600] w-full">
        {/* Tall portrait: in front by default */}
        <div
          onClick={() => swapped && setSwapped(false)}
          className={`absolute top-[2%] left-0 w-[74%] rotate-[8deg] transition-[rotate] duration-500 ease-out motion-reduce:transition-none ${
            portraitFront ? 'z-20 hover:rotate-[10deg]' : 'z-10'
          }`}
        >
          <div
            className={`relative aspect-[4/5] w-full overflow-hidden rounded-[2px] transition-shadow duration-500 ${
              portraitFront
                ? 'shadow-[0_18px_40px_rgba(74,59,63,0.3)]'
                : 'shadow-[0_10px_24px_rgba(74,59,63,0.2)]'
            }`}
          >
            <Image
              src="/avatar.jpg"
              alt="Gwen, smiling at the camera"
              fill
              sizes="(min-width: 1024px) 420px, 80vw"
              preload
              className="object-cover"
            />
          </div>
        </div>

        {/* Shorter photo: behind by default, the one you hover */}
        <div
          className={`absolute top-[9%] right-0 w-[71%] transition-[rotate] duration-500 ease-out motion-reduce:transition-none ${
            swapped ? 'z-20 rotate-[1.5deg]' : 'z-10 -rotate-[2deg]'
          }`}
        >
          <button
            type="button"
            aria-pressed={swapped}
            aria-label="Bring the second photo to the front"
            onPointerDown={(event) => {
              lastPointer.current = event.pointerType
            }}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') bringBackPhotoForward()
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') setSwapped(false)
            }}
            onClick={() => {
              // mouse users already got the swap from hovering; touch users tap to toggle
              if (lastPointer.current === 'mouse') return
              if (swapped) setSwapped(false)
              else bringBackPhotoForward()
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) bringBackPhotoForward()
            }}
            onBlur={() => setSwapped(false)}
            className={`relative block aspect-[44/43] w-full cursor-pointer overflow-hidden rounded-[2px] transition-shadow duration-500 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-4 focus-visible:outline-accent ${
              swapped
                ? 'shadow-[0_18px_40px_rgba(74,59,63,0.3)]'
                : 'shadow-[0_10px_24px_rgba(74,59,63,0.2)]'
            }`}
          >
            <Image
              src="/ice_cream.jpg"
              alt="A cup of pistachio ice cream"
              fill
              sizes="(min-width: 1024px) 400px, 75vw"
              className="object-cover"
            />
          </button>
        </div>

        <Paperclip />
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
