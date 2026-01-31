'use client';

import { useEffect, useState } from 'react';

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
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 max-w-[1400px] mx-auto relative z-10">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[var(--color-text)]">Building</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-purple)] animate-gradient">
                scalable
              </span>
              <br />
              <span className="text-[var(--color-text)]">systems</span>
            </h1>
            
            <div className="flex items-center gap-3 text-[var(--color-text-muted)] font-mono text-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></div>
              <span>CS • DS • Math @ UW-Madison</span>
              <span className="text-[var(--color-border-bright)]">|</span>
              <span>CTO @ TAM</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-[600px]">
            Triple major student and founder building microservices architectures, AI systems, and 
            data-driven solutions. From backend engineering to machine learning research.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="#"
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
              <span>Get in touch</span>
              <span className="text-[var(--color-accent)]">→</span>
            </a>
          </div>

          {/* Social links - inline */}
          <div className="flex gap-4 pt-6">
            {[
              { icon: 'GH', label: 'GitHub', href: 'https://github.com/L-Gupta' },
              { icon: 'LI', label: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: '@', label: 'Email', href: 'mailto:lgupta22@wisc.edu' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-lg flex items-center justify-center text-[var(--color-text-muted)] font-bold transition-all duration-300 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-accent-glow)] hover:scale-110"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative opacity-0 animate-fade-in-right delay-500">
          {/* Bento-style card grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[180px]">
            {/* Large card - spans 2 rows */}
            <div className="bento-card col-span-2 row-span-2 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="text-sm text-[var(--color-text-muted)] mb-2 font-mono">// Currently building</div>
                <h3 className="text-xl font-bold text-[var(--color-text)]">Financial Document Automation @ TAM</h3>
              </div>
              <div className="flex items-end gap-2">
                <div className="h-16 w-2 bg-[var(--color-accent)] rounded-full opacity-70"></div>
                <div className="h-24 w-2 bg-[var(--color-secondary)] rounded-full opacity-70"></div>
                <div className="h-20 w-2 bg-[var(--color-purple)] rounded-full opacity-70"></div>
                <div className="h-28 w-2 bg-[var(--color-accent)] rounded-full opacity-70"></div>
              </div>
            </div>

            {/* Stats card */}
            <div className="bento-card rounded-2xl p-6 flex flex-col justify-between">
              <div className="text-4xl font-bold text-[var(--color-accent)]">3</div>
              <div className="text-sm text-[var(--color-text-muted)]">Majors at UW-Madison</div>
            </div>

            {/* Tech stack preview */}
            <div className="bento-card rounded-2xl p-6 flex flex-col justify-between">
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">$ tech --list</div>
              <div className="flex flex-wrap gap-1">
                {['Python', 'FastAPI', 'React'].map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-1 bg-[var(--color-border)] rounded text-[var(--color-text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}