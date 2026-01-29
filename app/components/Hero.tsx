'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-12 pt-32 pb-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 items-center w-full">
        {/* Left Column - Content */}
        <div className="opacity-0 animate-fade-in-up delay-300">
          <h1 className="font-cormorant text-[4.5rem] leading-[1.15] font-semibold mb-8 text-[var(--color-text)] tracking-tight">
            Building intelligent systems through computational curiosity
          </h1>
          <p className="text-xl text-[var(--color-muted)] mb-12 leading-relaxed max-w-[550px]">
            Computer science student at UW-Madison exploring the intersection of machine learning,
            computer vision, and autonomous systems.
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="#"
              className="px-8 py-3.5 rounded-sm bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)] font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-transparent hover:text-[var(--color-accent)] hover:-translate-y-0.5"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-gupta-003683329/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-sm bg-transparent text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] font-medium text-[0.95rem] tracking-wide transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative opacity-0 animate-fade-in-right delay-500">
          <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="w-full h-full flex items-center justify-center font-cormorant text-2xl text-white/30 text-center p-8">
              Your photo here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}