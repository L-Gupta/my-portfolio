'use client';

import { useEffect, useRef, useState } from 'react';
import type { Experience as ExperienceItem } from './ExperienceCard';
import { ExperienceCard } from './ExperienceCard';

const experienceData: ExperienceItem[] = [
  {
    company: 'Proclink',
    role: 'AI Intern',
    duration: 'Jun 2026 - Present',
    location: 'Hyderabad, India (Remote)',
    description: 'Working within the Microsoft Foundry repository to build conversational AI skills and lead the migration of the existing Copilot SDK-based architecture to Microsoft Azure AI Foundry.',
    achievements: [
      'Studying and mapping the Microsoft Foundry repository structure to understand its existing Copilot SDK integration and conversational architecture',
      'Designing and generating AI skills for conversational use cases within the Foundry framework',
      'Leading the conversion of the existing Copilot SDK-based implementation over to Microsoft Azure AI Foundry services',
    ],
    techStack: ['Microsoft Azure', 'Azure AI Foundry', 'Copilot SDK', 'Python', 'Conversational AI'],
  },
  {
    company: 'Adopt AI — NoUI (Open Source)',
    role: 'Open Source Contributor',
    duration: 'Apr 2026 - Present',
    location: 'San Francisco, USA (Remote)',
    description: 'Contributed a reliability and developer-experience pass over NoUI\'s compiler/export path and Tabby CLI setup path across 3 merged PRs, tightening validation, improving failure messages, and aligning CLI environment loading with backend behavior.',
    achievements: [
      'Introduced HarValidationError at the compiler boundary, converting invalid or non-API HAR captures into clear HTTP 422 errors and preventing failed exports from silently writing empty MCP or Skill artifacts',
      'Translated Tabby transport failures into actionable runtime errors, surfaced the last polling error from `noui login validate`, and fixed `noui login register` to print the correct profile slug under "Tabby profile ID"',
      'Built `cli/env.py` as the CLI\'s source of truth for loading repo-root `.env` and resolving `TABBY_API_HOST`, including scheme normalization and trailing-slash cleanup to match backend configuration',
      'Backed each change with scoped test coverage (25+ new tests across `test_cli_tabby.py` and `test_cli_env.py`) and validated locally with ruff, ruff format, mypy, and the affected pytest suites',
    ],
    techStack: ['Python', 'FastAPI', 'CLI Tooling', 'pytest', 'mypy', 'ruff'],
    stats: [
      { value: '3', label: 'PRs merged' },
      { value: '25+', label: 'tests added' },
      { value: '12', label: 'files changed' },
    ],
    diffStat: { insertions: 775, deletions: 18, label: '3 PRs merged' },
  },
  {
    company: 'Webuters Technology',
    role: 'AI Intern',
    duration: 'Apr 2025 - Aug 2025',
    location: 'Delhi, India',
    description: 'Built a full-stack AI-powered mock interview platform with real-time analysis and automated performance reporting.',
    achievements: [
      'Developed intelligent interview system analyzing facial expressions (OpenCV + FER, 7 emotions, 85% accuracy), vocal tone (Librosa MFCC/pitch), and answer validation using RAG with Pinecone + Gemini LLM.',
      'Architected FastAPI backend processing 100+ concurrent sessions with async pipelines, implementing LangChain agentic AI for autonomous error recovery, improving reliability from 85% to 95%.',
      'Engineered ML pipelines for real-time transcription (Deepgram), emotion detection, tone classification, and LLM-based resume validation, processing 1,000+ practice interviews',
      'Built React frontend with WebRTC for video/audio capture and automated PDF report generation with ReportLab, reducing candidate prep time by 40%'
    ],
    techStack: ['FastAPI', 'Python', 'Gemini', 'Pinecone', 'Deepgram', 'OpenCV','FER','Librosa','React', 'WebRTC', 'ReportLab', 'LangChain'],
    stats: [
      { value: '100+', label: 'interviews processed' },
      { value: '90%', label: 'pipeline reliability' },
      { value: '40%', label: 'faster candidate prep' },
    ],
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
          <ExperienceCard key={index} exp={exp} index={index} isVisible={isVisible} />
        ))}
      </div>

    </section>
  );
}
