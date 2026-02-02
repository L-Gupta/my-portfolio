'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'lakshya.build()';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-2 max-w-[1400px] mx-auto relative z-10">
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div className="opacity-0 animate-fade-in-up delay-300 space-y-8">
          {/* Terminal-style header */}
          <div className="terminal px-6 py-4 rounded-lg font-mono text-sm mb-6 inline-block">
            <span className="text-[var(--color-text-muted)]">~/portfolio</span>
            <span className="text-[var(--color-accent)] ml-2">❯</span>
            <span className="text-[var(--color-text)] ml-2">{text}</span>
            {showCursor && text.length === fullText.length && <span className="code-cursor"></span>}
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              <span className="text-[var(--color-text)]">Hey, I'm Lakshya!</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-purple)] animate-gradient">
                AI x Full Stack
              </span>
              <br />
              <span className="text-[var(--color-text)]">Engineer</span>
            </h1>
            
            <div className="flex items-center gap-3 text-[var(--color-text-muted)] font-mono text-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></div>
              <span className="text-lg md:text-xl font-bold">CS • DS • Math @ UW-Madison</span>
              <span className="text-[var(--color-border-bright)]">|</span>
              <span className="text-lg md:text-xl font-bold">CTO @ TAM</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-[600px]">
            Delivering clean APIs, reliable pipelines, and AI that ships.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="/LakshyaGupta.pdf"
              download
              className="group px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_var(--color-accent-glow)] hover:scale-105 flex items-center gap-2"
            >
              <span>View Resume</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 glass rounded-lg font-semibold text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-accent-glow)] flex items-center gap-2"
            >
              <span>Let's meet!</span>
              <span className="text-[var(--color-accent)]">→</span>
            </a>
          </div>

          {/* Social links - inline */}
          <div className="flex gap-4 pt-6">
            {[
              { label: 'GitHub', href: 'https://github.com/L-Gupta', Icon: FaGithub, newTab: true, color: 'text-green-500', hover: 'hover:border-green-500 hover:text-green-500' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshya-gupta-003683329/', Icon: FaLinkedin, newTab: true, color: 'text-blue-500', hover: 'hover:border-blue-500 hover:text-blue-500' },
              { label: 'Email', href: 'mailto:lgupta22@wisc.edu', Icon: HiOutlineMail, newTab: false, color: 'text-purple-500', hover: 'hover:border-purple-500 hover:text-purple-500' },
            ].map(({ label, href, Icon, newTab, color, hover }) => (
              <a
                key={label}
                href={href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                className={`w-12 h-12 glass rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_var(--color-accent-glow)] hover:scale-110 ${color} ${hover}`}
                title={label}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative opacity-0 animate-fade-in-right delay-500">
          {/* Big cardholder for future 3D model */}
          <div className="bento-card rounded-2xl p-16 flex items-center justify-center text-center text-2xl font-bold text-[var(--color-text-muted)] border-2 border-dashed border-[var(--color-accent)] min-h-[400px]">
            Add 3D model later
          </div>
        </div>
      </div>
    </section>
  );
}