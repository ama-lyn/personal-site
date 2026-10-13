import React from 'react';

interface SkillTagProps {
  label: string;
  tapeColor?: 'mint' | 'lavender' | 'pink';
  rotation?: string;
}

const tapeClasses = {
  mint: 'bg-mint/80',
  lavender: 'bg-lavender/80',
  pink: 'bg-pink/80',
};

export function SkillTag({ label, tapeColor = 'mint', rotation = '0deg' }: SkillTagProps) {
  return (
    <div
      className="relative bg-white px-5 py-1.5 rounded-[3px] shadow-card transform hover:rotate-0 transition-transform"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3.5 ${tapeClasses[tapeColor]} opacity-90`} />
      <span className="font-sans text-text-muted font-normal text-[15px]">{label}</span>
    </div>
  );
}
