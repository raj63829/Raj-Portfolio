import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Experienced in building end-to-end web applications with Django and modern JavaScript',
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Strong analytical skills with a track record of delivering efficient solutions',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent at working with cross-functional teams and following best practices',
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Focused on code quality, maintainability, and user-centric design',
    },
  ];

  const languages = [
    { name: 'English', level: 80 },
    { name: 'Hindi', level: 80 },
    { name: 'Telugu', level: 80 },
    { name: 'Khortha', level: 80 },
    { name: 'Maithili', level: 60 },
    { name: 'Bhojpuri', level: 60 },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20"></div>
              <img
                src="/RAJ SHARMA full body.png"
                alt="Raj Sharma"
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a passionate Software Engineer with over 6 months of hands-on experience in Python Full-Stack Development. Currently working at E-Code Learning Software Services, I specialize in building scalable web applications using Django, JavaScript, and Bootstrap.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My expertise lies in implementing machine learning pipelines, optimizing application performance, and delivering user-centric solutions. I have a proven track record of working on diverse projects ranging from e-commerce platforms to AI-powered applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Hyderabad, India</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-medium">9618113710</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-cyan-400 font-medium">rajsharma63820@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Availability</p>
                <p className="text-green-400 font-medium">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">{lang.name}</span>
                  <span className="text-cyan-400 text-sm">{lang.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {['Fitness & Outdoor Activities', 'Travel & Cultural Exploration', 'Chess', 'Exploring Technology', 'Learning New Tools & Concepts'].map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
