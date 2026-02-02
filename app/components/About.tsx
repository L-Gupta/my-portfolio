'use client';

import { useState, useEffect, useRef } from 'react';

type TabType = 'skills' | 'certificates';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('skills');
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

  const skills = {
    Languages: ['Python', 'Java', 'JavaScript', 'SQL/MySQL', 'R'],
    'Data Science & ML': [
      'pandas',
      'NumPy',
      'Matplotlib',
      'Scikit-learn',
      'Keras/PyTorch',
      'Deep Learning',
    ],
    'Backend & Systems': ['FastAPI', 'REST APIs', 'Microservices', 'WebSockets', 'Async/Await', 'Celery'],
    'Frontend & Tools': [
      'React.js',
      'HTML/CSS',
      'Git/GitHub',
      'Docker',
      'PostgreSQL',
      'Redis',
    ],
  };

  return (
    <section
      id="about"
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
            About <span className="text-[var(--color-accent)]">Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] max-w-[100px]"></div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Main intro card - spans 2 columns */}
        <div className="lg:col-span-2 bento-card rounded-2xl p-8 space-y-6 accent-bar">
          <div>
            <div className="text-sm font-mono text-[var(--color-text-muted)] mb-2">// whoami</div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Triple Major @ UW-Madison</h3>
          </div>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I'm pursuing a triple major in Computer Science, Data Science, and Mathematics at UW-Madison. 
              My passion lies in building scalable systems and leveraging machine learning to solve real-world problems.
            </p>
            <p>
              From co-founding TAM and building microservices architectures to conducting research at IIT Delhi 
              on computer vision and medical prediction models, I love working at the intersection of backend 
              engineering, data science, and AI.
            </p>
            <p>
              Whether it's optimizing distributed task queues, implementing quantum cryptography protocols, or 
              building full-stack applications, I approach each project with a focus on robust engineering and 
              measurable impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {['Full-Stack Dev', 'ML Engineer', 'System Architect', 'Founder'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-text-muted)] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Education card */}
        <div className="bento-card rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="text-sm font-mono text-[var(--color-text-muted)] mb-4">// education</div>
            <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">University of Wisconsin-Madison</h4>
            <p className="text-sm text-[var(--color-accent)] font-mono mb-4">B.S. Computer Science, Data Science, Mathematics</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <span className="text-sm text-[var(--color-text-muted)]">CGPA: 3.51</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                <span className="text-sm text-[var(--color-text-muted)]">Expected: May 2028</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className="text-xs font-mono text-[var(--color-text-muted)] mb-2">Relevant Coursework:</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Statistical Modeling, Data Science Programming, Probability Theory, Linear Algebra, 
                Data Structures & Algorithms, OOP, Backend Systems, Database Systems, Operating Systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section with Tabs */}
      <div className="glass-strong rounded-2xl p-8 border border-[var(--color-border)]">
        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 border-b border-[var(--color-border)] pb-4 overflow-x-auto justify-center">
          {(['skills', 'certificates'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-mono text-sm capitalize cursor-pointer relative transition-all duration-300 rounded-lg whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]'
              }`}
            >
              <span className="text-[var(--color-text-muted)]">//</span> {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-bold text-[var(--color-accent)] font-mono">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm group"
                      >
                        <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                        <span className="group-hover:text-[var(--color-text)] transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Meta Data Analyst Professional Certificate',
                  issuer: 'Meta',
                  desc: 'Comprehensive data analysis training covering statistical methods, visualization, and analytics.',
                },
                {
                  title: 'IBM Generative AI Engineering Professional Certificate',
                  issuer: 'IBM',
                  desc: 'Advanced training in generative AI systems, LLM engineering, and AI application development.',
                },
                {
                  title: 'Getting Started with Microsoft Excel',
                  issuer: 'Microsoft',
                  desc: 'Professional certification in advanced Excel techniques and data manipulation.',
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-[var(--color-bg-elevated)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center text-[var(--color-accent)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-[var(--color-accent)] font-mono mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}