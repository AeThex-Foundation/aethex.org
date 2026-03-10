import Link from 'next/link';
import { ArrowRight, Users, Gamepad2, BookOpen, Globe } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-50">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Red accent glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-foundation-500/5 rounded-full blur-3xl" />

        <div className="relative section-padding container-wide mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-foundation-50 text-foundation-600 rounded-full px-4 py-1.5 text-xs font-medium mb-8 border border-foundation-100">
              <span className="w-1.5 h-1.5 bg-foundation-500 rounded-full animate-pulse" />
              Nonprofit &middot; Open Source &middot; Community-Driven
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-surface-900 leading-[1.08] tracking-tight mb-6">
              Infrastructure for
              <span className="text-foundation-500"> digital</span>
              <br />
              <span className="text-foundation-500">civilization</span>.
            </h1>

            <p className="text-lg md:text-xl text-surface-600 leading-relaxed max-w-2xl mb-10">
              The AeThex Foundation builds the open-source tools, educational
              programs, and community resources that power the next generation of
              digital creators — freely and for everyone.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/programs" className="btn-primary">
                Explore Programs <ArrowRight size={16} />
              </Link>
              <Link href="/mission" className="btn-secondary">
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers ────────────────────────────────────── */}
      <section className="border-y border-surface-200 bg-white">
        <div className="container-wide mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: '8+', label: 'Years Building' },
            { value: '6,700+', label: 'Community Members' },
            { value: '29+', label: 'Platform Domains' },
            { value: '100%', label: 'Open Source' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-10 text-center ${i < 3 ? 'border-r border-surface-200' : ''}`}
            >
              <p className="font-display font-bold text-3xl md:text-4xl text-foundation-500 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-surface-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-surface-900 mb-4">
              What the Foundation does
            </h2>
            <p className="text-surface-600 text-lg leading-relaxed">
              We create the building blocks so developers, educators, and
              communities can build without barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Gamepad2 size={28} />,
                title: 'GameForge',
                desc: '48-hour game jam program teaching real-world development skills through hands-on building.',
                href: '/programs#gameforge',
              },
              {
                icon: <BookOpen size={28} />,
                title: 'Education',
                desc: 'Tutorials, documentation, and mentorship for aspiring game and platform developers.',
                href: '/programs#education',
              },
              {
                icon: <Globe size={28} />,
                title: 'Open Source',
                desc: 'Foundational infrastructure — identity, communication, state sync — open and free for all.',
                href: '/programs#open-source',
              },
              {
                icon: <Users size={28} />,
                title: 'Community',
                desc: 'A 6,700+ member federation of creators, developers, and dreamers across platforms.',
                href: '/programs#community',
              },
            ].map((card) => (
              <Link key={card.title} href={card.href} className="card group">
                <div className="w-12 h-12 rounded-xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-5
                                group-hover:bg-foundation-500 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-surface-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Teaser ──────────────────────────────────── */}
      <section className="section-padding bg-surface-50 border-y border-surface-200">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-surface-900 mb-4">
            Part of a larger ecosystem
          </h2>
          <p className="text-surface-600 text-lg max-w-2xl mx-auto mb-12">
            The Foundation is one pillar of the AeThex Trinity — working alongside
            the Corporation and Labs to build persistent digital infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'Foundation',
                color: 'bg-foundation-500',
                desc: 'Nonprofit. Education, community, and open-source stewardship.',
                tag: 'You are here',
              },
              {
                name: 'Corporation',
                color: 'bg-blue-600',
                desc: 'Commercial products and enterprise infrastructure.',
                tag: 'aethex.com',
              },
              {
                name: 'Labs',
                color: 'bg-amber-500',
                desc: 'Research & development. Experimental technology.',
                tag: 'aethex.dev',
              },
            ].map((pillar) => (
              <div key={pillar.name} className="card text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${pillar.color}`} />
                  <h3 className="font-display font-semibold text-surface-900">
                    {pillar.name}
                  </h3>
                </div>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">{pillar.desc}</p>
                <span className="text-xs font-medium text-surface-400 bg-surface-100 px-3 py-1 rounded-full">
                  {pillar.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-padding bg-surface-900 text-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to build the future with us?
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto mb-10">
            Whether you code, create, teach, or just believe in the mission — there&apos;s a
            place for you in the AeThex community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved" className="btn-primary bg-foundation-500 hover:bg-foundation-400">
              Get Involved <ArrowRight size={16} />
            </Link>
            <a
              href="https://discord.gg/aethex"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-surface-600 text-surface-300 hover:bg-surface-700 hover:text-white"
            >
              Join the Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
