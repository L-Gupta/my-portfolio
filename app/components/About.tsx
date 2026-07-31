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

  const gitLog = [
    { hash: '3c88b71', age: 5, message: 'Became a cricket fanatic. Every format, every series, no exceptions — still true today.' },
    { hash: '7f3a9c2', age: 6, message: 'Learned to play chess. Immediately started losing on purpose just to see what happens.' },
    { hash: 'a91e0d4', age: 12, message: "Picked up a tennis racket. Still can't serve straight." },
    { hash: 'e04f6a8', age: 15, message: 'Started arguing with chess engines. Lose gracefully, still in beta.' },
  ];

  const traitPills = [
    { label: 'Full-Stack Dev', quirky: false },
    { label: 'Founder', quirky: false },
    { label: 'Michelin guide, but for street food', quirky: true },
    { label: 'Backhand > backend', quirky: true },
    { label: 'Rated higher in chess than in sleep schedule', quirky: true },
  ];

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
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 leading-snug">
              Still debugging <span className="text-[var(--color-accent)]">who I am</span>, but the tests are passing.
            </h3>
          </div>

          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              So, a little about me: I grew up in Delhi, India, which means I was raised on street food so good it should honestly require a permit. I have opinions on the subject and I will not be taking questions.
            </p>
            <p>
              Off the keyboard, cricket is basically a religion I practice — I follow every match, every format, no exceptions. Tennis and chess are the weekly hobbies, mostly so I can practice losing gracefully, a skill still very much in beta. I'd love to say I bring the same focus to all three that I bring to my code — but let's be honest, the code wins that one.
            </p>
          </div>

          {/* Git log timeline */}
          <div className="pt-4 border-t border-[var(--color-border)]">
            <div className="text-sm font-mono text-[var(--color-accent)] mb-5">// git log --personal</div>
            <div className="relative pl-[22px]">
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-[var(--color-border)]" />
              <div className="space-y-5">
                {gitLog.map((entry, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[22px] top-1 w-[9px] h-[9px] rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)]" />
                    <div className="text-xs font-mono text-[var(--color-accent)] mb-1">
                      {entry.hash} <span className="text-[var(--color-text-muted)]">(age {entry.age})</span>
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {entry.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {traitPills.map((pill) => (
              <span
                key={pill.label}
                className={`px-3 py-1.5 border rounded-full text-xs font-mono ${
                  pill.quirky
                    ? 'bg-[var(--color-bg-elevated)] border-[#1c3d2f] text-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}
              >
                {pill.label}
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