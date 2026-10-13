import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Bloom Planner',
    description: 'a gentle habit tracker made with vanilla JS.',
    tint: 'bg-[#FBE4E6]',
    rotation: '-1.2deg',
    pinColor: 'bg-pink-deep',
  },
  {
    title: 'Dear Diary',
    description: 'a private journaling app, encrypted & calm.',
    tint: 'bg-[#E8EEF0]',
    rotation: '0.6deg',
    pinColor: 'bg-lavender',
  },
  {
    title: 'Little Sprout',
    description: 'a plant shop built on static HTML + CSS.',
    tint: 'bg-[#F2EFE8]',
    rotation: '1deg',
    pinColor: 'bg-mint',
  },
];

export function FeaturedProjects() {
  return (
    <section className="mt-16 w-full">
      <h2 className="font-caveat text-4xl font-normal">featured projects ♡</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
