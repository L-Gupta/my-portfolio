import type { Metadata } from 'next';
import { Cormorant_Garamond, Work_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Lakshya Gupta - Portfolio',
  description: 'Computer science student at UW-Madison exploring the intersection of machine learning, computer vision, and autonomous systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${workSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}