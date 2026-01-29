'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Milestone {
  id: string;
  label: string;
  projects: Project[];
}

interface Domain {
  id: string;
  name: string;
  milestones: Milestone[];
}

const domains: Domain[] = [
  {
    id: 'opencv',
    name: 'OpenCV',
    milestones: [
      {
        id: 'concepts',
        label: 'Concepts',
        projects: [
          { id: 1, title: 'Face Detection', description: 'Real-time face detection using Haar Cascades', image: '/placeholder1.jpg' },
        ],
      },
      {
        id: 'pipelines',
        label: 'Pipelines',
        projects: [
          { id: 2, title: 'Object Tracking', description: 'Multi-object tracking with advanced algorithms', image: '/placeholder2.jpg' },
        ],
      },
      {
        id: 'systems',
        label: 'Systems',
        projects: [
          { id: 3, title: 'Image Segmentation', description: 'Semantic segmentation using deep learning', image: '/placeholder3.jpg' },
        ],
      },
      {
        id: 'research',
        label: 'Research / Scale',
        projects: [
          { id: 4, title: 'Gesture Recognition', description: 'Hand gesture recognition system', image: '/placeholder4.jpg' },
        ],
      },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    milestones: [
      {
        id: 'concepts',
        label: 'Concepts',
        projects: [
          { id: 5, title: 'Sentiment Analysis', description: 'NLP-based sentiment classifier', image: '/placeholder5.jpg' },
        ],
      },
      {
        id: 'pipelines',
        label: 'Pipelines',
        projects: [
          { id: 6, title: 'Recommendation System', description: 'Collaborative filtering engine', image: '/placeholder6.jpg' },
        ],
      },
      {
        id: 'systems',
        label: 'Systems',
        projects: [
          { id: 7, title: 'Neural Network', description: 'Custom neural network from scratch', image: '/placeholder7.jpg' },
        ],
      },
      {
        id: 'research',
        label: 'Research / Scale',
        projects: [],
      },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    milestones: [
      {
        id: 'concepts',
        label: 'Concepts',
        projects: [
          { id: 8, title: 'E-commerce Platform', description: 'Full-stack online store', image: '/placeholder8.jpg' },
        ],
      },
      {
        id: 'pipelines',
        label: 'Pipelines',
        projects: [
          { id: 9, title: 'Social Media App', description: 'Real-time chat and posts', image: '/placeholder9.jpg' },
        ],
      },
      {
        id: 'systems',
        label: 'Systems',
        projects: [
          { id: 10, title: 'Analytics Dashboard', description: 'Data visualization platform', image: '/placeholder10.jpg' },
        ],
      },
      {
        id: 'research',
        label: 'Research / Scale',
        projects: [],
      },
    ],
  },
  {
    id: 'robotics',
    name: 'Robotics',
    milestones: [
      {
        id: 'concepts',
        label: 'Concepts',
        projects: [
          { id: 11, title: 'Line Follower Bot', description: 'Autonomous line following robot', image: '/placeholder11.jpg' },
        ],
      },
      {
        id: 'pipelines',
        label: 'Pipelines',
        projects: [
          { id: 12, title: 'Obstacle Avoidance', description: 'Ultrasonic sensor-based navigation', image: '/placeholder12.jpg' },
        ],
      },
      {
        id: 'systems',
        label: 'Systems',
        projects: [],
      },
      {
        id: 'research',
        label: 'Research / Scale',
        projects: [],
      },
    ],
  },
];

export default function JourneyFlow() {
  // Accessibility: detect reduced motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const handleDomainClick = (domainId: string) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId);
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <div className="relative">
      {/* Domain Islands */}
      <div className="flex flex-row justify-center gap-8 mb-12">
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => handleDomainClick(domain.id)}
            className={`px-6 py-4 rounded-full shadow-lg font-bold text-lg transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c5050c] ${
              selectedDomain === domain.id
                ? 'bg-black text-white'
                : 'bg-[#c5050c] text-white hover:bg-red-700'
            }`}
            aria-pressed={selectedDomain === domain.id}
          >
            {domain.name}
          </button>
        ))}
      </div>

      {/* Animated Ribbon and Milestones */}
      <AnimatePresence>
        {selectedDomain && (
          reducedMotion ? (
            <div className="flex flex-col items-center">
              <svg width="8" height="400" className="mb-2" aria-hidden="true">
                <path d="M4 0 Q8 100 4 200 Q0 300 4 400" stroke="#c5050c" strokeWidth="8" fill="none" />
              </svg>
              <div className="flex flex-col items-center w-full max-w-2xl">
                {domains
                  .find((d) => d.id === selectedDomain)
                  ?.milestones.map((milestone, idx) => (
                    <div key={milestone.id} className="flex flex-row items-center w-full mb-8">
                      <div className="flex flex-col items-center mr-6">
                        <div className="w-8 h-8 bg-[#c5050c] rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                          {idx + 1}
                        </div>
                        <span className="text-xs text-gray-700 font-mono">{milestone.label}</span>
                      </div>
                      <div className="flex-1 flex flex-row gap-4">
                        {milestone.projects.length === 0 ? (
                          <div className="p-4 bg-gray-100 border border-gray-300 rounded w-full text-center text-gray-400 italic">
                            No project yet
                          </div>
                        ) : (
                          milestone.projects.map((project) => (
                            <div
                              key={project.id}
                              tabIndex={0}
                              onClick={() => handleProjectClick(project)}
                              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' && handleProjectClick(project)}
                              className={`p-4 bg-white border-2 border-[#c5050c] rounded shadow cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#c5050c] w-64 ${
                                selectedProject?.id === project.id ? 'ring-2 ring-[#c5050c]' : ''
                              }`}
                              aria-expanded={selectedProject?.id === project.id}
                            >
                              <div className="w-full h-24 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-400">
                                <span>Image</span>
                              </div>
                              <h4 className="font-bold text-lg text-black mb-1">{project.title}</h4>
                              {selectedProject?.id === project.id && (
                                <p className="text-gray-700 text-sm mt-1">{project.description}</p>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Animated SVG Ribbon */}
              <motion.svg
                width="8"
                height="400"
                className="mb-2"
                aria-hidden="true"
                initial={{ strokeDasharray: 800, strokeDashoffset: 800 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <path d="M4 0 Q8 100 4 200 Q0 300 4 400" stroke="#c5050c" strokeWidth="8" fill="none" />
              </motion.svg>
              <div className="flex flex-col items-center w-full max-w-2xl">
                {domains
                  .find((d) => d.id === selectedDomain)
                  ?.milestones.map((milestone, idx) => (
                    <motion.div
                      key={milestone.id}
                      className="flex flex-row items-center w-full mb-8"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ delay: 0.2 + idx * 0.15, duration: 0.5, ease: 'easeInOut' }}
                    >
                      {/* Milestone Node */}
                      <div className="flex flex-col items-center mr-6">
                        <div className="w-8 h-8 bg-[#c5050c] rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                          {idx + 1}
                        </div>
                        <span className="text-xs text-gray-700 font-mono">{milestone.label}</span>
                      </div>
                      {/* Project Cards */}
                      <div className="flex-1 flex flex-row gap-4">
                        {milestone.projects.length === 0 ? (
                          <div className="p-4 bg-gray-100 border border-gray-300 rounded w-full text-center text-gray-400 italic">
                            No project yet
                          </div>
                        ) : (
                          milestone.projects.map((project) => (
                            <motion.div
                              key={project.id}
                              tabIndex={0}
                              onClick={() => handleProjectClick(project)}
                              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project)}
                              className={`p-4 bg-white border-2 border-[#c5050c] rounded shadow cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#c5050c] w-64 ${
                                selectedProject?.id === project.id ? 'ring-2 ring-[#c5050c]' : ''
                              }`}
                              aria-expanded={selectedProject?.id === project.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ delay: 0.4 + idx * 0.15, duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="w-full h-24 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-400">
                                <span>Image</span>
                              </div>
                              <h4 className="font-bold text-lg text-black mb-1">{project.title}</h4>
                              {selectedProject?.id === project.id && (
                                <p className="text-gray-700 text-sm mt-1">{project.description}</p>
                              )}
                            </motion.div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}