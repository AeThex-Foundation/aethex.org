import type { Metadata } from 'next';
import { Heart, Code, Megaphone, PenTool, ArrowRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Support the AeThex Foundation — volunteer, contribute code, spread the word, or donate to help build open digital infrastructure for everyone.',
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-surface-900 border-b border-surface-800">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-foundation-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-narrow mx-auto">
          <p className="text-foundation-400 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6">
            Every contribution matters.
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed max-w-2xl">
            Whether you write code, create content, mentor others, or simply
            believe in the mission — there&apos;s a way for you to help build the
            future of open digital infrastructure.
          </p>
        </div>
      </section>

      {/* ── Ways to Help ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code size={28} />,
                title: 'Contribute Code',
                desc: 'Help build AeThex Passport, Connect, Engine Core, and more. We welcome contributions of all sizes — from documentation fixes to major features.',
                action: 'View GitHub',
                href: 'https://github.com/aethex',
                external: true,
              },
              {
                icon: <PenTool size={28} />,
                title: 'Create & Teach',
                desc: 'Write tutorials, record walkthroughs, mentor in GameForge jams, or help translate documentation. Your knowledge makes the community stronger.',
                action: 'Join Discord',
                href: 'https://discord.gg/aethex',
                external: true,
              },
              {
                icon: <Megaphone size={28} />,
                title: 'Spread the Word',
                desc: 'Share our projects, talk about the Foundation at events, or help us reach new communities. Awareness is one of the most valuable contributions.',
                action: 'Follow Us',
                href: 'https://x.com/aethex',
                external: true,
              },
              {
                icon: <Heart size={28} />,
                title: 'Donate',
                desc: 'Financial contributions directly fund development, educational programs, and community infrastructure. Every dollar helps keep our tools free and open.',
                action: 'Donate Now',
                href: '#donate',
                external: false,
              },
            ].map((card) => (
              <div key={card.title} className="card flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-surface-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-surface-600 leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="btn-primary self-start text-sm"
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {card.action} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate Section ────────────────────────────────────── */}
      <section id="donate" className="section-padding bg-foundation-500 text-white">
        <div className="container-narrow mx-auto text-center">
          <Heart size={40} className="mx-auto mb-6 opacity-80" />
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Support the Foundation
          </h2>
          <p className="text-foundation-100 text-lg max-w-xl mx-auto mb-10">
            The AeThex Foundation is a nonprofit organization. Your donation
            directly funds open-source development, educational programs, and
            community infrastructure that remains free for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://opencollective.com/aethex-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-foundation-600 px-8 py-3.5 rounded-lg
                         font-display font-semibold text-sm hover:bg-foundation-50 transition-colors"
            >
              Donate via Open Collective
            </a>
            <a
              href="https://github.com/sponsors/AeThex-Foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-lg
                         font-display font-medium text-sm hover:bg-white/10 transition-colors"
            >
              GitHub Sponsors
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact / Partnerships ────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <Mail size={32} className="mx-auto mb-6 text-foundation-500" />
          <h2 className="font-display font-bold text-2xl text-surface-900 mb-4">
            Partnerships &amp; Inquiries
          </h2>
          <p className="text-surface-600 text-lg max-w-xl mx-auto mb-8">
            Interested in partnering with the Foundation, sponsoring a program,
            or have a media inquiry? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@aethex.org"
            className="btn-secondary"
          >
            hello@aethex.org
          </a>
        </div>
      </section>
    </>
  );
}
