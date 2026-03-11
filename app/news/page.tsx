import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest updates, announcements, and stories from the AeThex Foundation.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative overflow-hidden section-padding bg-surface-900 border-b border-surface-800">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-foundation-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-narrow mx-auto">
          <p className="text-foundation-400 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            News
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6">
            Updates &amp; Announcements
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed max-w-2xl">
            The latest from the AeThex Foundation — program launches,
            engineering updates, and community stories.
          </p>
        </div>
      </section>

      {/* ── Posts ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="space-y-0 divide-y divide-surface-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 first:pt-0 last:pb-0 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-foundation-500 bg-foundation-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-surface-400">{formatDate(post.date)}</span>
                </div>
                <h2 className="font-display font-bold text-xl md:text-2xl text-surface-900 mb-3 group-hover:text-foundation-500 transition-colors">
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-surface-600 leading-relaxed mb-4 max-w-2xl">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="text-sm font-medium text-foundation-500 hover:text-foundation-600 inline-flex items-center gap-1 transition-colors"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          {/* Empty state for when there are no posts */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-surface-400 text-lg">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
