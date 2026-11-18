import React from 'react';
import { motion } from 'motion/react';
import type { TeamMember } from '../../data/site';

export const TeamCard: React.FC<{ member: TeamMember; featured?: boolean }> = ({ member, featured }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    whileHover={member.placeholder ? undefined : { y: -6 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative h-full overflow-hidden rounded-2xl border p-5 transition-colors duration-300 ${
      member.placeholder
        ? 'border-dashed border-white/20 bg-white/5'
        : featured
          ? 'border-cyan-400/40 bg-gradient-to-b from-blue-600/20 to-transparent hover:border-cyan-300/60 hover:shadow-[0_18px_45px_-24px_rgba(34,211,238,0.5)]'
          : 'border-white/10 bg-black/30 hover:border-cyan-400/40 hover:shadow-[0_18px_45px_-24px_rgba(34,211,238,0.35)]'
    }`}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    <p className="relative text-[11px] uppercase tracking-[0.2em] text-cyan-300 font-semibold">{member.role}</p>
    <h3 className="relative text-xl font-bold mt-2">{member.name}</h3>
    <p className="relative text-sm text-white/70 mt-3 leading-relaxed">{member.description}</p>
  </motion.article>
);
