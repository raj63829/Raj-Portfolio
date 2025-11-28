import { ExternalLink, FolderGit2 } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Optimizing Shared E-Scooter Operations',
      category: 'ml',
      description: 'Django-based platform to optimize fleet relocation using ML models. Integrated full ML pipeline with Admin Dashboard for dataset upload, model training, and visualization.',
      tech: ['Django', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Chart.js', 'Bootstrap'],
      featured: true,
    },
    {
      title: 'Nushka – Natural Skincare Rituals',
      category: 'web',
      description: 'Custom Django e-commerce platform for a skincare brand with luxury UI/UX, product pages, filters, wishlist, bundles, and secure payment gateway integration.',
      tech: ['Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Payment API'],
      featured: true,
    },
    {
      title: 'Sign Language Interpreter',
      category: 'ml',
      description: 'ML/DL model to identify hand gestures and convert them into text. Improved accuracy through data preprocessing and augmentation.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      featured: false,
    },
    {
      title: 'AIMed Prognosis',
      category: 'ml',
      description: 'AI-based medical prognosis system predicting diseases using ML models with integrated dashboards for healthcare professionals.',
      tech: ['Python', 'Machine Learning', 'Django', 'Data Visualization'],
      featured: false,
    },
    {
      title: 'CloudGuard AI',
      category: 'ml',
      description: 'ML-powered cybersecurity tool to detect cloud infrastructure threats and anomalous activities using advanced algorithms.',
      tech: ['Python', 'Machine Learning', 'Cloud Security', 'API Integration'],
      featured: false,
    },
    {
      title: 'DrugNet Hunter',
      category: 'ml',
      description: 'AI-assisted tool for detecting drug-related content using NLP and classification models with high accuracy.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Classification'],
      featured: false,
    },
    {
      title: 'Air Quality Monitoring System',
      category: 'web',
      description: 'Real-time pollution monitoring platform using sensor data analytics and alert systems for environmental awareness.',
      tech: ['Django', 'IoT', 'Data Analytics', 'Real-time Processing'],
      featured: false,
    },
    {
      title: 'MediGuard',
      category: 'web',
      description: 'Healthcare risk monitoring application for early risk detection and patient safety alerts with comprehensive dashboards.',
      tech: ['Django', 'Healthcare Analytics', 'Alert Systems'],
      featured: false,
    },
    {
      title: 'IoT Suspicious URL Detection',
      category: 'ml',
      description: 'Threat intelligence model to flag malicious URLs using ML and feature evaluation for cybersecurity.',
      tech: ['Python', 'Machine Learning', 'Threat Intelligence', 'Feature Engineering'],
      featured: false,
    },
    {
      title: 'PreciseRisk AI',
      category: 'ml',
      description: 'AI-driven financial or operational risk prediction platform with visualization analytics and real-time monitoring.',
      tech: ['Python', 'Machine Learning', 'Data Visualization', 'Risk Analytics'],
      featured: false,
    },
    {
      title: 'Road Damage Detection App',
      category: 'ml',
      description: 'Mobile/desktop solution to detect road cracks and potholes using deep learning and image processing.',
      tech: ['Python', 'Deep Learning', 'Computer Vision', 'Image Processing'],
      featured: false,
    },
    {
      title: 'Patient Sickness Prediction',
      category: 'ml',
      description: 'Disease prediction model using patient records and ML classifiers for early awareness and intervention.',
      tech: ['Python', 'Machine Learning', 'Healthcare', 'Data Analysis'],
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'ml', label: 'Machine Learning' },
              { value: 'web', label: 'Web Development' },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === item.value
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <FolderGit2 size={24} className="text-white" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-slate-700">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
