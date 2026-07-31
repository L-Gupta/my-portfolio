'use client';

import { useEffect, useRef, useState } from 'react';
import { Experience, ExperienceCard } from './ExperienceCard';

const researchExperienceData: Experience[] = [
  {
    company: 'University of Wisconsin–Madison',
    role: 'Independent Study, mentored by Prof. Manolis Vlatakis',
    duration: 'Jul 2026 - Present',
    location: 'Madison, WI',
    description: 'Conducting an independent study in computational complexity theory, focused on the difficulty of finding stationary points in non-convex optimization within TFNP (Total Function NP) — a complexity landscape for problems guaranteed to have a solution, where the challenge is how hard that solution is to find rather than verify.',
    achievements: [
      'Studying results showing that finding approximate stationary points — both first-order (near-zero gradient) and second-order (also excluding saddle points) — is PLS-complete, i.e. as computationally hard as local search itself',
      'Examining recent work showing that moving from first-order to second-order stationarity does not increase this complexity, resolving an open question in the field',
    ],
    techStack: ['Computational Complexity Theory', 'TFNP', 'PLS', 'Non-Convex Optimization'],
  },
  {
    company: 'Indian Institute of Technology Delhi',
    role: 'Research Intern, mentored by Prof. Ishaan Gupta',
    duration: 'May 2025 - Aug 2025',
    location: 'Delhi, India',
    description: 'Conducted research on computer vision classification and medical prediction systems using machine learning.',
    achievements: [
      'Reproduced baseline drosophila gender classification model and identified data leakage issue, applied 10% zoom preprocessing fix improving accuracy by ~5%',
      'Built clinical UTI prediction pipeline using real-world lab data, comparing unsupervised methods with tabular LLMs',
      'Benchmarked 15+ ML models (TabPFN, TAPEX, GraPPa, BERT, Gemini API, etc.) on tabular data, analyzing accuracy/latency trade-offs',
    ],
    techStack: ['Python', 'Keras/PyTorch', 'NumPy', 'Scikit-learn', 'Data Processing'],
    stats: [
      { value: '~85%', label: 'accuracy achieved' },
      { value: '15+', label: 'ML models tested and benchmarked' },
    ],
  },
];

export default function ResearchExperience() {
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
      id="research-experience"
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
            Research <span className="text-[var(--color-accent)]">Experience</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
      </div>

      {/* Research Experience Cards */}
      <div className="space-y-8 max-w-[1000px] mx-auto">
        {researchExperienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} isVisible={isVisible} />
        ))}
      </div>

    </section>
  );
}
