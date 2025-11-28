import { Code2, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Java', level: 70 },
        { name: 'C', level: 60 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tkinter', level: 75 },
        { name: 'scikit-learn', level: 80 },
        { name: 'Pandas & NumPy', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'SQL Databases', level: 75 },
        { name: 'Linux/Unix', level: 70 },
        { name: 'Docker (Basics)', level: 60 },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Prompt Engineering', level: 75 },
        { name: 'OpenCV', level: 70 },
        { name: 'Payment Integration', level: 80 },
      ],
    },
  ];

  const certifications = [
    {
      title: 'Data Analytics Workshop',
      issuer: 'Jobaaj Learnings',
      date: 'December 2022',
    },
    {
      title: 'National-Level Technical Quiz on Software Engineering',
      issuer: 'Chirala Engineering College',
      date: '2020',
    },
    {
      title: 'Raspberry Pi with Python (OpenCV & ML)',
      issuer: '3-Day Workshop',
      date: '2022',
    },
    {
      title: 'International Conference - ICRTCSE',
      issuer: 'Participation Certificate',
      date: 'December 2022',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
