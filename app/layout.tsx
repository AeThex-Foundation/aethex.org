import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AeThex Foundation',
    template: '%s | AeThex Foundation',
  },
  description:
    'The AeThex Foundation builds open-source tools, educational programs, and community resources for the next generation of digital creators.',
  keywords: [
    'AeThex',
    'Foundation',
    'nonprofit',
    'open source',
    'game development',
    'education',
    'GameForge',
    'digital infrastructure',
  ],
  authors: [{ name: 'AeThex Foundation' }],
  creator: 'AeThex Foundation',
  publisher: 'AeThex Foundation',
  metadataBase: new URL('https://aethex.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aethex.org',
    siteName: 'AeThex Foundation',
    title: 'AeThex Foundation',
    description:
      'Building open-source infrastructure for digital civilization. Open. Persistent. For everyone.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aethex',
    creator: '@aethex',
    title: 'AeThex Foundation',
    description:
      'Building open-source infrastructure for digital civilization. Open. Persistent. For everyone.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
