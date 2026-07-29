'use client';

import { useEffect, useRef, useState } from 'react';
import { Experience, ExperienceCard } from './ExperienceCard';

const startUpsData: Experience[] = [
  {
    company: 'Lawind AI',
    role: 'CTO & Co-Founder',
    duration: 'Mar 2026 - Present',
    location: 'Remote',
    description: 'Building an AI-powered legal intelligence platform for the Indian legal ecosystem, aiming to unify legal research, AI drafting, contract review, and matter management into a single platform for Indian legal professionals.',
    achievements: [
      'Shipped a Next.js 15 marketing site (landing page, ROI calculator, blog, resources, dashboard shell) live at lawind.ai, deployed on Vercel',
      'Built a FastAPI authentication backend with JWT-based signup/login, async SQLAlchemy (SQLite locally, Postgres in production), and a founder-access allowlist gating early access',
      'Set up a CI/CD pipeline with GitHub Actions, deploying the frontend to Vercel and backend to Railway, with Docker Compose for local Postgres + Qdrant',
      'Defined the product roadmap and target architecture for a RAG-based legal research engine, AI drafting studio, and contract review pipeline, guided by citation accuracy and human-auditable outputs',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
  },
  {
    company: 'TAM',
    role: 'CTO & Co-Founder',
    duration: 'Oct 2025 - Present',
    location: 'Madison, WI',
    description: 'Leading technical development for a financial document automation platform using microservices architecture.',
    achievements: [
      'Designed microservices architecture using FastAPI, Celery, Redis, and PostgreSQL for automated financial document processing at scale',
      'Led team of 3 developers implementing async pipelines with retry logic and rate limiting, achieving ~35% faster document review throughput',
      'Integrated third-party APIs (Tesseract OCR, OpenAI GPT, spaCy NLP) with fallback strategies and structured data extraction for 100+ page packages',
    ],
    techStack: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Python', 'Microservices'],
  },
];

export default function StartUps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="startups"
      ref={sectionRef}
      className="py-4 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Start <span className="text-[var(--color-accent)]">Ups</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
      </div>

      {/* Start Up Cards */}
      <div className="space-y-8 max-w-[1000px] mx-auto">
        {startUpsData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} isVisible={isVisible} />
        ))}
      </div>

    </section>
  );
}
