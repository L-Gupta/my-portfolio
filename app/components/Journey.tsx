'use client';

import { useState, useEffect } from 'react';

type DomainType = 'cv' | 'ml' | 'robotics' | 'web' | null;

interface Project {
  title: string;
  description: string;
  techStack: string[];
  bullets?: string[];
}

interface Milestone {
  label: string;
  project: Project;
}

const domainData: Record<Exclude<DomainType, null>, { name: string; milestones: Milestone[] }> = {
  cv: {
    name: 'Computer Vision',
    milestones: [
      {
        label: 'Hackathon: MadData 2026',
        project: {
          title: ' Peak Physique Predictor',
          description:
            'Built a computer vision and agentic AI system that estimates realistic body potential and generates adaptive transformation plans.',
          bullets: [
            'Extracted 33 pose landmarks with MediaPipe and engineered structural ratios for frame-aware analysis.',
            'Predicted natural lean-mass ceiling and timeline confidence bands using FFMI constraints and regression modeling.',
            'Orchestrated tool-calling coaching agent to adapt workout and nutrition plans by user consistency.',
          ],
          techStack: ['Python','MediaPipe','FastAPI','XGBoost','Claude API','Next.js','SQLite'],
        },
      },
      {
        label: "Learning Project",
        project: {
          title: 'Dogs vs Cats Image Classifier',
          description: 
            'Built a CNN from scratch using PyTorch to classify dog and cat images, prioritizing deep understanding of CV fundamentals over leaderboard accuracy.',
          bullets: [
            'Designed a 3-layer CNN with conv, pooling, and fully connected layers trained on 128×128 RGB inputs.',
            'Implemented a custom PyTorch Dataset class for lazy loading across 25,000 images.',
            'Tracked train/val loss and accuracy per epoch using BCEWithLogitsLoss and Adam optimizer.',
          ],
          techStack: ['Python','PyTorch','torchvision','Pillow'],
        }
      },
      {
        label: "Hackathon Prototype",
        project: {
          title: 'OculusMed AI Medical Screener',
          description: 
            'End-to-end AI triage system for Diabetic Retinopathy and Tuberculosis detection with explainable Grad-CAM heatmaps and zero PHI storage.',
          bullets: [
            'Fine-tuned ResNet50 and EfficientNetB3 on NIH and Kaggle datasets for dual-condition classification.',
            'Projected Grad-CAM overlays onto infected regions for transparent, clinician-facing decision support.',
            'Processed all patient images entirely in-memory — no data saved to disk for HIPAA-like compliance.',
          ],
          techStack: ['Python','PyTorch','FastAPI','Grad-CAM','Next.js','Docker'],
        }
      },
    ],
  },
  ml: {
    name: 'Agentic AI & NLP',
    milestones: [
      {
        label: "Hackathon: CheeseHacks 2026",
        project: {
          title: 'Aura Health',
          description: 
            'AI-powered healthcare system that autonomously calls patients post-consultation, conducts structured health check-ins, and escalates urgent cases to doctors via SMS.',
          bullets: [
            'Streamed bidirectional audio over WebSocket using Twilio, Google STT, Gemini, and Google TTS in real-time.',
            'Augmented AI conversations with RAG retrieval from consultation PDFs chunked and indexed in Pinecone.',
            'Classified post-call urgency into low, medium, or high triage levels and triggered doctor SMS alerts automatically.',
          ],
          techStack: []
        }
      },
    ],
  },
  robotics: {
    name: 'Quantum Computing',
    milestones: [
      {
        label: "Hackathon: Qiskit Quantum Computing Fest 2025",
        project: {
          title: 'BB84 Quantum Key Distribution System',
          description: 
            'Full-stack implementation of the BB84 quantum cryptography protocol with eavesdropper simulation and automatic security detection via QBER threshold analysis.',
          bullets: [
            'Simulated qubit preparation across Z/X bases with configurable intercept-resend eavesdropper attacks.',
            'Implemented all 6 protocol steps: preparation, transmission, measurement, sifting, error estimation, and privacy amplification.',
            'Built 65+ unit tests; flags channel as compromised when QBER exceeds the 11% security threshold.'
          ],
          techStack: ['Python', 'FastAPI ', 'NumPy ', 'pytest', 'React', 'Recharts'],
        }
      },
    ],
  },
  web: {
    name: 'Web Development',
    milestones: [
      {
        label: 'Personal Project',
        project: {
          title: 'Library Management System',
          description:
            'Full-stack library management dashboard with MySQL backend, OOP architecture, fine calculation logic, and real-time analytics built with Streamlit and Plotly.',
          bullets: [
            'Designed 4-table normalized MySQL schema with foreign key constraints and parameterized queries to prevent SQL injection.',
            'Implemented automatic late-return penalty engine: flat ₹100 for 1–7 days, ₹20/day beyond that.',
            'Built a 5-page Streamlit dashboard with interactive Plotly charts for inventory, member, and transaction analytics.',
          ],
          techStack: ['Python', 'MySQL', 'Streamlit','Pandas','Plotly'],
        },
      },
    ],
  },
};

export default function Journey() {
  const [activeDomain, setActiveDomain] = useState<DomainType>('cv'); // Start with first tab open

  const handleDomainClick = (domain: Exclude<DomainType, null>) => {
    // Toggle: if clicking active tab, collapse it
    if (activeDomain === domain) {
      setActiveDomain(null);
      return;
    }
    
    setActiveDomain(domain);
    setTimeout(() => {
      const ribbonElement = document.getElementById(`ribbon-${domain}`);
      if (ribbonElement) {
        const offset = 200; // Offset for sticky header + sticky tabs
        const elementPosition = ribbonElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <section id="journey" className="py-4 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            My <span className="text-[var(--color-accent)]">Journey</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
        <p className="text-[var(--color-text-muted)] text-lg font-mono">
          // Explore my learning progression across technical domains
        </p>
      </div>

      {/* Domain Tabs */}
      <div className="relative mb-12">
        <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
          {(Object.keys(domainData) as Exclude<DomainType, null>[]).map((domain) => (
            <button
              key={domain}
              onClick={() => handleDomainClick(domain)}
              className={`px-6 py-3 rounded-lg font-mono text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                activeDomain === domain
                  ? 'bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_0_20px_var(--color-accent-glow)]'
                  : 'glass border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]'
              }`}
            >
              {activeDomain === domain && <span className="mr-2">▸</span>}
              {domainData[domain].name}
            </button>
          ))}
        </div>
      </div>

      {/* Ribbons */}
      <div className="mt-12">
        <div className="mt-12">
          {(Object.keys(domainData) as Exclude<DomainType, null>[]).map((domain) => (
            <div
              key={domain}
              id={`ribbon-${domain}`}
              className={`relative max-w-[1000px] mx-auto transition-all duration-600 ${
                activeDomain === domain ? 'block opacity-100 animate-fade-in' : 'hidden opacity-0'
              }`}
            >
              {/* Ribbon Path */}
              <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-purple)] -translate-x-1/2 rounded-full opacity-30" />

              {/* Milestones */}
              {domainData[domain].milestones.map((milestone, index) => (
                <div key={index} className="relative py-6 mb-4">
                  {/* Milestone Marker */}
                  <div className="absolute left-1/2 top-12 w-5 h-5 bg-[var(--color-accent)] border-4 border-[var(--color-bg)] rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_var(--color-accent-glow)]" />

                  {/* Milestone Content */}
                  <div
                    className={`relative ${
                      index % 2 === 0
                        ? 'pl-[calc(50%+3rem)] pr-0'
                        : 'pr-[calc(50%+3rem)] pl-0'
                    }`}
                  >
                    <div className="text-[var(--color-accent)] font-mono text-sm font-bold mb-3 flex items-center gap-2">
                      {index % 2 === 0 ? (
                        <>
                          <span className="text-[var(--color-text-muted)]">//</span>
                          {milestone.label}
                        </>
                      ) : (
                        <>
                          {milestone.label}
                          <span className="text-[var(--color-text-muted)]">//</span>
                        </>
                      )}
                    </div>
                    {/* Project Card */}
                    <div className="bento-card p-6 rounded-xl group">
                      <h4 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                        {milestone.project.title}
                      </h4>
                      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 text-sm">
                        {milestone.project.description}
                      </p>
                      {milestone.project.bullets && milestone.project.bullets.length > 0 && (
                        <ul className="mb-4 text-[var(--color-text-muted)] text-sm space-y-2">
                          {milestone.project.bullets.map((point, pointIndex) => (
                            <li key={pointIndex} className="leading-relaxed">
                              - {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        {milestone.project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-xs text-[var(--color-text-muted)] font-mono hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* End marker */}
              <div className="relative flex justify-center py-8">
                <div className="w-12 h-12 rounded-full glass border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold shadow-[0_0_30px_var(--color-accent-glow)]">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
