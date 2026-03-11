import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, BookOpen, Globe, Users, ArrowRight, Clock, Trophy, Code } from 'lucide-react';
import DiscordWidget from '@/components/DiscordWidget';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'GameForge, developer education, open-source tools, and a thriving creator community — explore the AeThex Foundation\'s programs.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-surface-900 border-b border-surface-800">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-foundation-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-narrow mx-auto">
          <p className="text-foundation-400 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Programs
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6">
            Learn. Build. Ship.
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed max-w-2xl">
            From your first game jam to contributing to open-source infrastructure,
            our programs meet creators wherever they are.
          </p>
        </div>
      </section>

      {/* ── GameForge ─────────────────────────────────────────── */}
      <section id="gameforge" className="section-padding bg-white border-b border-surface-100">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-6">
                <Gamepad2 size={28} />
              </div>
              <h2 className="font-display font-bold text-3xl text-surface-900 mb-4">
                GameForge
              </h2>
              <p className="text-surface-600 text-lg leading-relaxed mb-8">
                A 48-hour game jam program designed to teach real-world development
                skills through hands-on building. Participants go from concept to
                playable prototype in a weekend — learning game design, programming,
                and teamwork along the way.
              </p>
              <Link href="/get-involved" className="btn-primary">
                Join the Next Jam <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Clock size={20} />, label: '48 Hours', desc: 'Concept to playable build' },
                { icon: <Trophy size={20} />, label: 'Mentorship', desc: 'Guided by experienced devs' },
                { icon: <Code size={20} />, label: 'Real Skills', desc: 'Ship something real, fast' },
                { icon: <Users size={20} />, label: 'Community', desc: 'Build alongside peers' },
              ].map((item) => (
                <div key={item.label} className="card py-6 px-6">
                  <div className="text-foundation-500 mb-3">{item.icon}</div>
                  <p className="font-display font-semibold text-surface-900 text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-surface-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────── */}
      <section id="education" className="section-padding bg-surface-50 border-b border-surface-200">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-6">
              <BookOpen size={28} />
            </div>
            <h2 className="font-display font-bold text-3xl text-surface-900 mb-4">
              Education &amp; Learning
            </h2>
            <p className="text-surface-600 text-lg leading-relaxed">
              Comprehensive tutorials, documentation, and mentorship programs for
              aspiring game developers and platform engineers. From Roblox Studio
              basics to building with the AeThex Engine — we make advanced
              development accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tutorials & Guides', desc: 'Step-by-step walkthroughs for every skill level, from your first script to advanced systems design.' },
              { title: 'Documentation', desc: 'Complete references for AeThex tools: Passport, Connect, Engine Core, and more.' },
              { title: 'Mentorship', desc: 'Connect with experienced developers in the community for 1:1 guidance and project reviews.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-display font-semibold text-lg text-surface-900 mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ────────────────────────────────────────── */}
      <section id="open-source" className="section-padding bg-white border-b border-surface-100">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-6">
              <Globe size={28} />
            </div>
            <h2 className="font-display font-bold text-3xl text-surface-900 mb-4">
              Open Source
            </h2>
            <p className="text-surface-600 text-lg leading-relaxed">
              The Foundation stewards AeThex&apos;s core open-source projects — the
              infrastructure layer that anyone can build on, inspect, and
              contribute to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'AeThex Passport', desc: 'Cross-platform identity and authentication. One account, every world.', tech: 'Node.js · Supabase' },
              { name: 'AeThex Connect', desc: 'Real-time communication infrastructure for communities and platforms.', tech: 'Full-stack · Supabase' },
              { name: 'AeThex Engine Core', desc: 'Godot-based game engine with persistent state and cross-platform sync.', tech: 'Godot · AGPL v3' },
              { name: 'Nexus Engine', desc: 'State synchronization layer for persistent digital environments.', tech: 'Coming Soon' },
            ].map((project) => (
              <div key={project.name} className="card flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-semibold text-lg text-surface-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed mb-4">{project.desc}</p>
                </div>
                <span className="text-xs font-medium text-surface-400 bg-surface-100 px-3 py-1 rounded-full self-start">
                  {project.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community ─────────────────────────────────────────── */}
      <section id="community" className="section-padding bg-surface-50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Users size={28} />
              </div>
              <h2 className="font-display font-bold text-3xl text-surface-900 mb-4">
                Community
              </h2>
              <p className="text-surface-600 text-lg max-w-2xl mb-8">
                Over 6,700 members strong and growing. The AeThex federation spans
                Discord, GitHub, and beyond — a home for creators who want to build
                the future of digital worlds together.
              </p>
              <a
                href="https://discord.gg/aethex"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join the Discord <ArrowRight size={16} />
              </a>
            </div>
            <div>
              {/* Replace with your actual Discord server ID */}
              <DiscordWidget
                serverId="YOUR_DISCORD_SERVER_ID"
                inviteLink="https://discord.gg/aethex"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
