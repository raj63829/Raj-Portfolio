import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'E-Code Learning Software Services (ECLS)',
      role: 'Software Developer',
      period: '09/2024 – Present',
      location: 'Hyderabad, India',
      achievements: [
        'Developing scalable and secure web applications using Django, JavaScript, and Bootstrap',
        'Improving maintainability by performing bug fixing, code reviews, and enforcing Git-based best practices',
        'Collaborating with teams to enhance performance and deploy production-grade applications',
      ],
      current: true,
    },
    {
      company: 'SJ Soft Solutions',
      role: 'Python Full-Stack Developer',
      period: '06/2024 – 08/2024',
      location: 'Hyderabad, India',
      achievements: [
        'Built and maintained dynamic web applications using Django and Tkinter',
        'Implemented new features, optimized UI, and improved application stability',
        'Contributed to full-stack tasks including backend logic, frontend pages, and API integrations',
        'Ensured application scalability, efficiency, and seamless user experience',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:mr-0 md:ml-auto md:pl-8'
                } md:w-1/2 pl-12 md:pl-0`}
              >
                <div className="absolute left-4 md:left-auto md:right-[-2rem] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-4 border border-green-500/30">
                      Current Position
                    </span>
                  )}

                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-300">
                        <span className="text-cyan-400 mt-1.5">▹</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
