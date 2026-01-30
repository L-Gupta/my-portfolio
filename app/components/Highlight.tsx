'use client';

export default function Highlight() {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="glass-strong rounded-2xl p-8 md:p-12 border-l-4 border-[var(--color-accent)] relative overflow-hidden">
          {/* Code-style decoration */}
          <div className="absolute top-4 right-4 text-[var(--color-text-muted)] text-xs font-mono opacity-50">
            // philosophy.ts
          </div>
          
          <div className="relative z-10">
            <div className="text-sm font-mono text-[var(--color-accent)] mb-4">
              <span className="text-[var(--color-purple)]">const</span> philosophy <span className="text-[var(--color-text-muted)]">=</span> {'{'}
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text)] leading-relaxed font-medium pl-8 italic">
              "Learning is not about memorizing solutions—it's about building frameworks to solve 
              problems that don't exist yet."
            </p>
            <div className="text-sm font-mono text-[var(--color-accent)] mt-4">
              {'}'};
            </div>
          </div>

          {/* Glowing accent corner */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--color-accent)] rounded-full blur-[100px] opacity-20"></div>
        </div>
      </div>
    </section>
  );
}