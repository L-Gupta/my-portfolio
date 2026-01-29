'use client';

import { useState } from 'react';

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
  const [activeDomain, setActiveDomain] = useState<DomainType>(null);

  const handleDomainClick = (domain: Exclude<DomainType, null>) => {
    setActiveDomain(domain);
    setTimeout(() => {
      const ribbonElement = document.getElementById(`ribbon-${domain}`);
      if (ribbonElement) {
        ribbonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section id="journey" className="py-32 px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="font-cormorant text-[3.5rem] font-semibold mb-4 text-[var(--color-text)]">
          My Journey
        </h2>
        <p className="text-center text-[var(--color-muted)] text-[1.1rem] max-w-[700px] mx-auto mt-4">
          Explore my learning progression across different technical domains
        </p>
      </div>

      {/* Domain Islands */}
      <div className="flex justify-center gap-8 mb-16 flex-wrap">
        {(Object.keys(domainData) as Exclude<DomainType, null>[]).map((domain) => (
          <button
            key={domain}
            onClick={() => handleDomainClick(domain)}
            className={`px-10 py-5 bg-white border-2 rounded-sm cursor-pointer transition-all duration-300 font-medium text-base ${
              activeDomain === domain
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
            }`}
          >
            {domainData[domain].name}
          </button>
        ))}
      </div>

      {/* Ribbons */}
      {activeDomain &&
        (Object.keys(domainData) as Exclude<DomainType, null>[]).map((domain) => (
          <div
            key={domain}
            id={`ribbon-${domain}`}
            className={`relative max-w-[900px] mx-auto transition-all duration-600 ${
              activeDomain === domain ? 'block opacity-100 animate-fade-in' : 'hidden opacity-0'
            }`}
          >
            {/* Ribbon Path */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-secondary)] -translate-x-1/2 rounded-sm" />

            {/* Milestones */}
            {domainData[domain].milestones.map((milestone, index) => (
              <div key={index} className="relative py-12 mb-8">
                {/* Milestone Marker */}
                <div className="absolute left-1/2 top-12 w-5 h-5 bg-[var(--color-accent)] border-4 border-[var(--color-bg)] rounded-full -translate-x-1/2 z-10" />

                {/* Milestone Content */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? 'pl-[calc(50%+3rem)] pr-0'
                      : 'pr-[calc(50%+3rem)] pl-0 text-right'
                  }`}
                >
                  <div className="text-[var(--color-accent)] font-cormorant text-[1.3rem] font-semibold mb-2">
                    {milestone.label}
                  </div>

                  {/* Project Card */}
                  <div className="bg-white p-8 rounded-sm border border-[var(--color-border)] mt-4 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                    <h4 className="font-cormorant text-2xl mb-3 text-[var(--color-text)]">
                      {milestone.project.title}
                    </h4>
                    <p className="text-[var(--color-muted)] leading-[1.7] mb-4">
                      {milestone.project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {milestone.project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-sm text-[0.85rem] text-[var(--color-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </section>
  );
}