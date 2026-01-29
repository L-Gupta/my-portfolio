'use client';

export default function Highlight() {
  return (
    <section className="py-16 px-12 bg-[var(--color-secondary)] text-white text-center opacity-0 animate-fade-in delay-800">
      <div className="max-w-[900px] mx-auto">
        <p className="font-cormorant text-[2rem] leading-relaxed italic font-normal">
          "Learning is not about memorizing solutions—it's about building frameworks to solve
          problems that don't exist yet."
        </p>
      </div>
    </section>
  );
}