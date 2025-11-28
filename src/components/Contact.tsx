import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajsharma63820@gmail.com',
      link: 'mailto:rajsharma63820@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9618113710',
      link: 'tel:+919618113710',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/raj63829',
      username: '@raj63829',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/raj-sharma9989',
      username: 'Raj Sharma',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white font-medium hover:text-cyan-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-slate-400 text-sm">{item.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20"></div>
              <img
                src="/Raj Sharma Side face.jpg"
                alt="Raj Sharma"
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
