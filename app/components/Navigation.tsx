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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 opacity-0 animate-fade-in-down ${
        isScrolled ? 'bg-[rgba(250,249,246,0.98)] shadow-sm' : 'bg-[rgba(250,249,246,0.95)]'
      } backdrop-blur-md border-b border-[var(--color-border)]`}
    >
      <div className="max-w-[1400px] mx-auto px-12 py-6 flex justify-between items-center">
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="font-cormorant text-2xl font-semibold text-[var(--color-text)] tracking-wide hover:text-[var(--color-accent)] transition-colors"
        >
          Lakshya Gupta
        </Link>

        <ul className="flex gap-10 list-none">
          {['Home', 'About', 'Journey', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-[var(--color-text)] text-[0.95rem] font-normal relative group transition-colors hover:text-[var(--color-accent)]"
              >
                {item}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}