import type { Metadata } from 'next';
import { JetBrains_Mono, Fira_Code } from 'next/font/google';
import './globals.css';

const jetbrains = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Lakshya Gupta - Software Engineer',
  description: 'Computer science student and software engineer building intelligent systems with machine learning, computer vision, and autonomous robotics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${firaCode.variable}`}>
      <body style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
        {children}
      </body>
    </html>
  );
}