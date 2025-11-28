import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'NRI Institute of Technology',
      location: 'Guntur, India',
      period: '2019 – 2023',
      grade: '',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      location: 'India',
      period: '2017 – 2019',
      grade: 'CGPA: 7.94',
      icon: GraduationCap,
    },
    {
      degree: 'High School',
      institution: 'Ravindra Bharathi High School',
      location: 'India',
      period: '2016 – 2017',
      grade: 'GPA: 8.5',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="relative md:ml-20">
                  <div className="absolute -left-12 top-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-slate-900 hidden md:flex">
                    <Icon size={28} className="text-white" />
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-cyan-400 font-medium text-lg mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-2">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                        {edu.grade && (
                          <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                            <span className="text-green-400 font-semibold">{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Academic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">B.Tech</p>
              <p className="text-slate-300">Computer Science Engineering</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">4+</p>
              <p className="text-slate-300">Certifications Earned</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">2022</p>
              <p className="text-slate-300">Conference Participation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
