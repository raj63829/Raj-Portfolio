import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-slate-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Raj Sharma
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                Software Engineer
              </h2>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Passionate Python Full-Stack Developer with 6+ months of hands-on experience building scalable web applications using Django, JavaScript, and modern development tools.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Get In Touch
              </a>
              <button
                className="px-8 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-cyan-500 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-cyan-400">6+</p>
                <p className="text-sm text-slate-400">Months Experience</p>
              </div>
              <div className="h-12 w-px bg-slate-700"></div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">15+</p>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <img
                  src="/Raj Sharma Straight face.jpg"
                  alt="Raj Sharma"
                  className="w-full h-full object-contain scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-colors">
          <ArrowDown size={24} className="text-cyan-400" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
