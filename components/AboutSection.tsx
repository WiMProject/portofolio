
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const AboutSection: React.FC = () => {
  useEffect(() => {
    // Dynamically update page title
    document.title = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard description
    updateMetaTag('meta[name="description"]', 'name', 'description', `${PERSONAL_INFO.name}: ${PERSONAL_INFO.role}. ${PERSONAL_INFO.bio}`);

    // Update OpenGraph tags for better social sharing
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', PERSONAL_INFO.bio);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', PERSONAL_INFO.photoUrl);

    // Cleanup isn't strictly necessary here as these are global tags, 
    // but in a multi-page app, you'd reset them on unmount.
  }, []);

  return (
    <section id="about" className="mb-40 scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Professional Image with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={PERSONAL_INFO.photoUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-4">
                 {[
                  { icon: <Github size={18} />, link: PERSONAL_INFO.socials.github },
                  { icon: <Linkedin size={18} />, link: PERSONAL_INFO.socials.linkedin },
                  { icon: <Twitter size={18} />, link: PERSONAL_INFO.socials.twitter }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5, backgroundColor: 'rgba(99, 102, 241, 1)' }}
                    className="w-10 h-10 rounded-xl bg-gray-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all shadow-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 p-6 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hidden md:block"
          >
            <div className="text-indigo-400 font-bold text-2xl mb-1">8+</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Years Experience</div>
          </motion.div>
        </motion.div>

        {/* Right: Detailed Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Engineer Behind the Code</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
            I build digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">masterpieces.</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {PERSONAL_INFO.longBio}
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-12">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl font-bold text-white mb-1 font-heading">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href={PERSONAL_INFO.resumeUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-indigo-600/20"
            >
              <FileText size={20} />
              Download Resume
            </motion.a>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/10 hover:border-white/20 text-white rounded-2xl font-bold flex items-center gap-3 transition-all"
            >
              Contact Directly
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
