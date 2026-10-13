import React from 'react';
import { SkillTag } from './SkillTag';

const skills = [
  { label: 'React', tapeColor: 'mint' as const, rotation: '-1deg' },
  { label: 'Tailwind', tapeColor: 'lavender' as const, rotation: '1deg' },
  { label: 'Figma', tapeColor: 'pink' as const, rotation: '-2deg' },
  { label: 'TypeScript', tapeColor: 'mint' as const, rotation: '1deg' },
  { label: 'Node.js', tapeColor: 'lavender' as const, rotation: '-1deg' },
];

export function Toolbelt() {
  return (
     <div className="mt-8 w-full max-w-[880px] p-6  sm:p-7 rounded-[20px] border-2 border-dashed border-pink/80 bg-toolbelt-fill shadow-diffused">
      <h3 className="font-caveat text-2xl text-text-muted italic ">
        my toolbelt...
      </h3>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-4 items-center">
        {skills.map((skill) => (
          <SkillTag
            key={skill.label}
            label={skill.label}
            tapeColor={skill.tapeColor}
            rotation={skill.rotation}
          />
        ))}
      </div>
    </div>
  );
}
