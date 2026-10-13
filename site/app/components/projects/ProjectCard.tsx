import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tint: string;
  rotation?: string;
  pinColor: string;
}

export function ProjectCard({ title, description, tint, rotation = '0deg', pinColor }: ProjectCardProps) {
  return (
    <article
      className="relative bg-white rounded-[20px] p-4 pb-6 shadow-soft transition-transform hover:rotate-0 hover:scale-[1.02]"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className={`absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-white shadow-xs ${pinColor}`} />
      <div className={`aspect-[4/5] rounded-[14px] overflow-hidden ${tint}`} />
      <h3 className="mt-4 px-1 font-caveat text-[26px] italic leading-none text-ink">{title}</h3>
      <p className="mt-1.5 px-1 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
