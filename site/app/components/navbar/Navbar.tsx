"use client";

import { ProfileAvatar } from './ProfileAvatar'
import { NavLink } from './NavLink'
import { NookTeaser } from './NookTeaser'

export function Navbar() {
  return (
    <nav className="flex items-start gap-4 overflow-visible">
      <ProfileAvatar src="/avatar.jpg" />
      <NavLink href="/about" label="About" color="pink" rotate="-2deg" />
      <NavLink href="/projects" label="Projects" color="lavender" rotate="1deg" />
      <NavLink href="/blog" label="Blog" color="mint" rotate="-1deg" />
      <NookTeaser />
    </nav>
  )
}