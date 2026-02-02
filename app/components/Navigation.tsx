'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong' : 'glass'
      } border-b border-[var(--color-border)]`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-xl font-bold text-[var(--color-text)] tracking-tight hover:text-[var(--color-accent)] transition-colors font-mono flex items-center gap-2"
        >
          <span className="text-[var(--color-accent)]">&lt;</span>
          Lakshya Gupta
          <span className="text-[var(--color-accent)]">/&gt;</span>
        </Link>

        <ul className="flex gap-8 list-none">
          {['Home', 'About', 'Journey', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-[var(--color-text-muted)] text-sm font-bold relative group transition-colors hover:text-[var(--color-accent)] font-mono"
              >
                <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">//</span> {item}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}