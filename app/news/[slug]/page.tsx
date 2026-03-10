import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display font-bold text-2xl text-surface-900 mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display font-semibold text-xl text-surface-900 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-surface-600 leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-surface-600 mb-6 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-surface-600 mb-6 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-foundation-500 hover:text-foundation-600 underline underline-offset-2" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-surface-800" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-foundation-200 pl-6 italic text-surface-500 my-6" {...props} />
  ),
  hr: () => <hr className="border-surface-200 my-10" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm text-surface-600" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left py-2 px-4 bg-surface-50 font-semibold text-surface-800 border-b border-surface-200" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-2 px-4 border-b border-surface-100" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-surface-100 text-surface-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-surface-900 text-surface-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm" {...props} />
  ),
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-surface-50 border-b border-surface-200">
        <div className="container-narrow mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-foundation-500 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-foundation-500 bg-foundation-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-surface-400">{formatDate(post.date)}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-surface-900 leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-surface-600 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          {post.author && (
            <p className="mt-6 text-sm text-surface-500">
              By <span className="font-medium text-surface-700">{post.author}</span>
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-narrow mx-auto prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </>
  );
}
