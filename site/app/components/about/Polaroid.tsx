import React from 'react';
import Image from 'next/image';

interface PolaroidProps {
  src: string;
  caption: string;
  rotation?: string;
}

export function Polaroid({ src, caption, rotation = '0deg' }: PolaroidProps) {
  return (
    <div
      className="bg-white p-2 pb-2 rounded-[4px] shadow-polaroid w-full transition-transform hover:rotate-0 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="aspect-square rounded-[2px] overflow-hidden relative bg-cream">
        <Image src={src} alt={caption} fill sizes="(max-width: 640px) 30vw, 180px" className="object-cover" />
      </div>
      <p className="font-caveat text-center text-[15px] leading-tight text-muted mt-2 pb-0.5">
        {caption}
      </p>
    </div>
  );
}
