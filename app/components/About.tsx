'use client';

import { useState, useEffect, useRef } from 'react';

type TabType = 'skills' | 'education' | 'certificates';

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
    Languages: ['Python', 'Java', 'C/C++', 'JavaScript/TypeScript', 'SQL'],
    'ML & AI': [
      'TensorFlow / PyTorch',
      'Scikit-learn',
      'OpenCV',
      'YOLO',
      'Neural Networks',
    ],
    'Frameworks': ['React / Next.js', 'Node.js', 'Git', 'Docker', 'ROS'],
    'Concepts': [
      'Data Structures',
      'Computer Vision',
      'Robotics',
      'System Design',
      'Software Engineering',
    ],
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[var(--color-accent)] font-mono text-sm">01.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            About <span className="text-[var(--color-accent)]">Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Main intro card - spans 2 columns */}
        <div className="lg:col-span-2 bento-card rounded-2xl p-8 space-y-6 accent-bar">
          <div>
            <div className="text-sm font-mono text-[var(--color-text-muted)] mb-2">// whoami</div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Computer Science @ UW-Madison</h3>
          </div>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I'm a computer science student driven by curiosity about how machines can perceive, learn, 
              and interact with the world. My journey spans machine learning, computer vision, and robotics.
            </p>
            <p>
              What excites me most is building systems that bridge theoretical concepts with real-world 
              applications—whether it's developing computer vision pipelines or experimenting with autonomous navigation.
            </p>
            <p>
              I believe in learning through building, iterating through failure, and maintaining a systematic 
              approach to complex problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {['Problem Solver', 'Fast Learner', 'Team Player', 'Open Source'].map((tag) => (
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
            <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">UW-Madison</h4>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">BS Computer Science</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-text-muted)]">GPA: 3.9/4.0</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                <span className="text-[var(--color-text-muted)]">Grad: May 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section with Tabs */}
      <div className="glass-strong rounded-2xl p-8 border border-[var(--color-border)]">
        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 border-b border-[var(--color-border)] pb-4 overflow-x-auto">
          {(['skills', 'education', 'certificates'] as TabType[]).map((tab) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
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

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="animate-fade-in-up space-y-6">
              <div className="p-6 bg-[var(--color-bg-elevated)] rounded-xl border border-[var(--color-border)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text)] mb-1">
                      University of Wisconsin-Madison
                    </h4>
                    <p className="text-[var(--color-accent)] font-mono text-sm">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-accent)]">3.9</div>
                    <div className="text-xs text-[var(--color-text-muted)]">GPA</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <p><strong className="text-[var(--color-text)]">Expected Graduation:</strong> May 2026</p>
                  <p>
                    <strong className="text-[var(--color-text)]">Relevant Coursework:</strong> 
                    Machine Learning, Computer Vision, Artificial Intelligence, Data Structures & Algorithms, 
                    Software Engineering, Operating Systems, Database Systems
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="animate-fade-in-up space-y-4">
              {[
                {
                  title: 'Machine Learning Specialization',
                  issuer: 'Stanford University & DeepLearning.AI',
                  desc: 'Comprehensive study of supervised/unsupervised learning and ML best practices.',
                },
                {
                  title: 'Deep Learning Specialization',
                  issuer: 'DeepLearning.AI',
                  desc: 'Mastered neural networks, CNNs, RNNs, and deployment strategies.',
                },
                {
                  title: 'AWS Certified Cloud Practitioner',
                  issuer: 'Amazon Web Services',
                  desc: 'Foundational knowledge of AWS cloud services and architecture.',
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