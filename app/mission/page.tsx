import type { Metadata } from 'next';
import { Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'The AeThex Foundation exists to build open-source digital infrastructure and empower the next generation of creators through education and community.',
};

export default function MissionPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-surface-900 border-b border-surface-800">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-foundation-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-narrow mx-auto">
          <p className="text-foundation-400 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight uppercase tracking-wide mb-6">
            Building the infrastructure
            <br />
            everyone deserves.
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed max-w-2xl">
            Since 2017, AeThex has been on a mission to create the foundational
            technology layer for persistent digital civilization — and make it
            accessible to all.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Values ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="space-y-20">
            {[
              {
                icon: <Target size={32} />,
                label: 'Mission',
                heading: 'Democratize digital infrastructure',
                body: `We believe that the tools for building persistent digital worlds
                       — identity, communication, state synchronization, and developer
                       education — should be open, free, and community-governed. The
                       AeThex Foundation exists to build and maintain these tools as
                       public goods.`,
              },
              {
                icon: <Eye size={32} />,
                label: 'Vision',
                heading: 'A digital civilization that belongs to its citizens',
                body: `We envision a future where cross-platform identity is a right,
                       not a privilege. Where the infrastructure of digital life is
                       transparent, interoperable, and owned by the community. Where
                       every creator — regardless of background — has the tools to
                       build and the education to use them.`,
              },
              {
                icon: <Heart size={32} />,
                label: 'Values',
                heading: 'Open. Persistent. For everyone.',
                body: `Openness over gatekeeping. Persistence over disposability.
                       Community over corporation. Education over exclusion. We build
                       technology that lasts, share it freely, and teach others to do
                       the same.`,
              },
            ].map((block) => (
              <div key={block.label} className="flex gap-8 items-start">
                <div className="hidden md:flex shrink-0 w-14 h-14 rounded-2xl bg-foundation-50 text-foundation-500 items-center justify-center">
                  {block.icon}
                </div>
                <div>
                  <p className="text-foundation-500 font-display font-semibold text-xs uppercase tracking-widest mb-2">
                    {block.label}
                  </p>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-surface-900 mb-4">
                    {block.heading}
                  </h2>
                  <p className="text-surface-600 leading-relaxed text-lg whitespace-pre-line">
                    {block.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origin Story ──────────────────────────────────────── */}
      <section className="section-padding bg-surface-50 border-y border-surface-200">
        <div className="container-narrow mx-auto">
          <p className="text-foundation-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h2 className="font-display font-bold text-3xl text-surface-900 mb-8">
            From a dream to a foundation
          </h2>
          <div className="prose prose-lg text-surface-600 max-w-none space-y-6">
            <p>
              AeThex began in 2017 with a simple but ambitious idea: what if the
              infrastructure of digital worlds was as open and persistent as the
              physical world? Inspired by the vision of interconnected virtual
              spaces — and fueled by over a decade of experience building on
              platforms like Roblox — founder Anderson set out to create that
              reality.
            </p>
            <p>
              Over eight years of self-funded development, AeThex grew from a side
              project into a comprehensive platform: cross-platform identity
              (Passport), real-time communication (Connect), game development
              education (GameForge), and a community of thousands.
            </p>
            <p>
              The Foundation was established to ensure that the most critical
              pieces — the identity layer, the educational programs, the open-source
              tools — remain free, transparent, and community-governed. Forever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
