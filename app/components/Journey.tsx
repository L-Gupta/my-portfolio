'use client';

import { useState, useEffect } from 'react';

type DomainType = 'cv' | 'ml' | 'robotics' | 'web' | null;

interface Project {
  title: string;
  description: string;
  techStack: string[];
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
        label: 'Concepts & Foundations',
        project: {
          title: 'Image Processing Fundamentals',
          description:
            'Built foundational understanding of image filters, edge detection, and basic transformations using OpenCV.',
          techStack: ['Python', 'OpenCV', 'NumPy'],
        },
      },
      {
        label: 'Applied Implementation',
        project: {
          title: 'Real-time Object Detection',
          description:
            'Developed a real-time object detection system using YOLO for tracking multiple objects in video streams.',
          techStack: ['YOLO', 'OpenCV', 'TensorFlow'],
        },
      },
      {
        label: 'Systems & Integration',
        project: {
          title: 'Autonomous Navigation Vision System',
          description:
            'Integrated computer vision pipeline with robotics platform for autonomous navigation using depth sensing and object recognition.',
          techStack: ['ROS', 'OpenCV', 'Point Cloud'],
        },
      },
      {
        label: 'Research & Scale',
        project: {
          title: 'Custom CNN Architecture Research',
          description:
            'Designed and trained custom convolutional neural network architectures for specialized image classification tasks with performance optimization.',
          techStack: ['PyTorch', 'CUDA', 'Model Optimization'],
        },
      },
    ],
  },
  ml: {
    name: 'Machine Learning',
    milestones: [
      {
        label: 'Concepts & Foundations',
        project: {
          title: 'Supervised Learning Algorithms',
          description:
            'Implemented core ML algorithms from scratch including linear regression, logistic regression, and decision trees to understand underlying mathematics.',
          techStack: ['Python', 'NumPy', 'Matplotlib'],
        },
      },
      {
        label: 'Applied Implementation',
        project: {
          title: 'Predictive Analytics System',
          description:
            'Developed end-to-end ML pipeline for predictive modeling including data preprocessing, feature engineering, and model evaluation.',
          techStack: ['Scikit-learn', 'Pandas', 'XGBoost'],
        },
      },
      {
        label: 'Systems & Integration',
        project: {
          title: 'ML Model Deployment Platform',
          description:
            'Built production-ready ML model serving infrastructure with API endpoints, monitoring, and automated retraining pipelines.',
          techStack: ['Flask', 'Docker', 'AWS'],
        },
      },
    ],
  },
  robotics: {
    name: 'Robotics',
    milestones: [
      {
        label: 'Concepts & Foundations',
        project: {
          title: 'Kinematics & Motion Planning',
          description:
            'Studied robot kinematics, path planning algorithms, and control systems fundamentals through simulation environments.',
          techStack: ['ROS', 'Gazebo', 'Python'],
        },
      },
      {
        label: 'Applied Implementation',
        project: {
          title: 'Line Following Robot',
          description:
            'Programmed autonomous line-following robot using sensor fusion and PID control for smooth trajectory tracking.',
          techStack: ['Arduino', 'C++', 'PID Control'],
        },
      },
      {
        label: 'Systems & Integration',
        project: {
          title: 'Autonomous Navigation System',
          description:
            'Integrated SLAM, path planning, and obstacle avoidance for fully autonomous mobile robot navigation in unknown environments.',
          techStack: ['ROS', 'SLAM', 'LiDAR'],
        },
      },
    ],
  },
  web: {
    name: 'Web Development',
    milestones: [
      {
        label: 'Concepts & Foundations',
        project: {
          title: 'Full-Stack Fundamentals',
          description:
            'Learned modern web development fundamentals including HTML, CSS, JavaScript, and RESTful API design principles.',
          techStack: ['HTML/CSS', 'JavaScript', 'Node.js'],
        },
      },
      {
        label: 'Applied Implementation',
        project: {
          title: 'Interactive Data Visualization Dashboard',
          description:
            'Built responsive web application for visualizing complex datasets with interactive charts and real-time updates.',
          techStack: ['React', 'D3.js', 'Express'],
        },
      },
      {
        label: 'Systems & Integration',
        project: {
          title: 'Full-Stack ML Application',
          description:
            'Developed complete web application integrating machine learning models with modern frontend, backend API, and database systems.',
          techStack: ['Next.js', 'PostgreSQL', 'TensorFlow.js'],
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
                <div key={index} className="relative py-12 mb-8">
                  {/* Milestone Marker */}
                  <div className="absolute left-1/2 top-12 w-5 h-5 bg-[var(--color-accent)] border-4 border-[var(--color-bg)] rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_var(--color-accent-glow)]" />

                  {/* Milestone Content */}
                  <div
                    className={`relative ${
                      index % 2 === 0
                        ? 'pl-[calc(50%+3rem)] pr-0'
                        : 'pr-[calc(50%+3rem)] pl-0 text-right'
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