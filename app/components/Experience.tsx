'use client';

import { useEffect, useRef, useState } from 'react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

const experienceData: Experience[] = [
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
  {
    company: 'Webuters Technology',
    role: 'AI Intern',
    duration: 'Apr 2025 - Aug 2025',
    location: 'Delhi, India',
    description: 'Built full-stack AI-powered mock interview platform with real-time analysis and automated reporting.',
    achievements: [
      'Built full-stack platform with React frontend and FastAPI backend, implementing WebRTC for real-time audio/video capture',
      'Designed REST API architecture integrating 4 third-party services (Deepgram, facial recognition, LLM validation, vector search)',
      'Implemented automated PDF report generation with ReportLab, optimizing memory through batched processing and streaming',
    ],
    techStack: ['React', 'FastAPI', 'WebRTC', 'Deepgram', 'OpenAI', 'ReportLab'],
  },
  {
    company: 'Indian Institute of Technology Delhi',
    role: 'Research Intern',
    duration: 'May 2025 - Aug 2025',
    location: 'Delhi, India',
    description: 'Conducted research on computer vision classification and medical prediction systems using machine learning.',
    achievements: [
      'Reproduced baseline drosophila gender classification model and identified data leakage issue, applied 10% zoom preprocessing fix improving accuracy by ~5%',
      'Built clinical UTI prediction pipeline using real-world lab data, comparing unsupervised methods with tabular LLMs',
      'Benchmarked 5 ML models (TabPFN, TAPEX, GraPPa, BERT, Gemini API) on tabular data, analyzing accuracy/latency trade-offs',
    ],
    techStack: ['Python', 'Keras/PyTorch', 'NumPy', 'Scikit-learn', 'Data Processing'],
  },
];

export default function Experience() {
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
      id="experience"
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
            Work <span className="text-[var(--color-accent)]">Experience</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8 max-w-[1000px] mx-auto">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bento-card rounded-2xl p-8 accent-bar group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
            }}
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {exp.company}
                  </h3>
                </div>
                <p className="text-lg text-[var(--color-accent)] font-mono mb-1">
                  {exp.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)] font-mono">
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--color-accent)]">📅</span> {exp.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--color-accent)]">📍</span> {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-mono text-[var(--color-accent)] mb-3">
                // Key achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm"
                  >
                    <span className="text-[var(--color-accent)] mt-1 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-mono text-[var(--color-text-muted)] mb-3">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-xs text-[var(--color-text-muted)] font-mono hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}