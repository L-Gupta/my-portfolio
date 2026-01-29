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
    'Machine Learning & AI': [
      'TensorFlow / PyTorch',
      'Scikit-learn',
      'OpenCV',
      'YOLO / Object Detection',
      'Neural Networks',
    ],
    'Frameworks & Tools': ['React / Next.js', 'Node.js', 'Git / GitHub', 'Docker', 'ROS (Robot Operating System)'],
    'Core Concepts': [
      'Data Structures & Algorithms',
      'Computer Vision',
      'Robotics & Automation',
      'System Design',
      'Software Engineering',
    ],
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-12 max-w-[1400px] mx-auto"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Header */}
      <div className="mb-24">
        <h2 className="font-cormorant text-[3.5rem] font-semibold mb-4 text-[var(--color-text)]">
          About Me
        </h2>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-20 mb-24 items-start">
        {/* Image */}
        <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] rounded-sm overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
          <div className="w-full h-full flex items-center justify-center font-cormorant text-xl text-white/30 text-center p-8">
            Your photo here
          </div>
        </div>

        {/* Text */}
        <div className="pt-8">
          <p className="text-[1.15rem] leading-[1.9] text-[var(--color-muted)] mb-6">
            I'm a computer science student at the University of Wisconsin-Madison, driven by a deep
            curiosity about how machines can perceive, learn, and interact with the world. My
            academic journey has been shaped by hands-on exploration across machine learning,
            computer vision, and robotics.
          </p>
          <p className="text-[1.15rem] leading-[1.9] text-[var(--color-muted)] mb-6">
            What excites me most is the challenge of building systems that bridge theoretical
            concepts with real-world applications. Whether it's developing computer vision pipelines
            or experimenting with autonomous navigation, I approach each project as an opportunity to
            understand the underlying principles deeply.
          </p>
          <p className="text-[1.15rem] leading-[1.9] text-[var(--color-muted)]">
            I believe in learning through building, iterating through failure, and maintaining a
            systematic approach to complex problems. My technical interests span from low-level image
            processing to high-level system architecture, always with an emphasis on creating
            solutions that are both elegant and practical.
          </p>
        </div>
      </div>

      {/* Tabbed Info Section */}
      <div className="mt-16">
        {/* Tab Buttons */}
        <div className="flex gap-0 border-b-2 border-[var(--color-border)] mb-12">
          {(['skills', 'education', 'certificates'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 font-work-sans text-[1.1rem] font-medium capitalize cursor-pointer relative transition-all duration-300 ${
                activeTab === tab ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)]'
              } hover:text-[var(--color-text)]`}
            >
              {tab}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[2px] bg-[var(--color-accent)] transition-transform duration-300 ${
                  activeTab === tab ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in-up">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-cormorant text-2xl mb-4 text-[var(--color-text)]">
                    {category}
                  </h4>
                  <ul className="list-none">
                    {items.map((skill, index) => (
                      <li
                        key={index}
                        className="py-2.5 text-[var(--color-muted)] text-base border-b border-[var(--color-border)] last:border-b-0"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="animate-fade-in-up">
              <div className="py-8 border-b border-[var(--color-border)]">
                <h4 className="font-cormorant text-[1.8rem] mb-2 text-[var(--color-text)]">
                  University of Wisconsin-Madison
                </h4>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  <strong>Bachelor of Science in Computer Science</strong>
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  GPA: 3.9/4.0
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  Relevant Coursework: Machine Learning, Computer Vision, Artificial Intelligence,
                  Data Structures & Algorithms, Software Engineering, Operating Systems, Database
                  Systems
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  Expected Graduation: May 2026
                </p>
              </div>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="animate-fade-in-up">
              <div className="py-8 border-b border-[var(--color-border)]">
                <h4 className="font-cormorant text-[1.8rem] mb-2 text-[var(--color-text)]">
                  Machine Learning Specialization
                </h4>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  Stanford University & DeepLearning.AI (Coursera)
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  Completed comprehensive study of supervised learning, unsupervised learning, and
                  best practices in machine learning.
                </p>
              </div>
              <div className="py-8 border-b border-[var(--color-border)]">
                <h4 className="font-cormorant text-[1.8rem] mb-2 text-[var(--color-text)]">
                  Deep Learning Specialization
                </h4>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  DeepLearning.AI (Coursera)
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  Mastered neural networks, CNNs, RNNs, and deployment strategies for deep learning
                  models.
                </p>
              </div>
              <div className="py-8">
                <h4 className="font-cormorant text-[1.8rem] mb-2 text-[var(--color-text)]">
                  AWS Certified Cloud Practitioner
                </h4>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-2">
                  Amazon Web Services
                </p>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  Demonstrated foundational knowledge of AWS cloud services and architecture.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}