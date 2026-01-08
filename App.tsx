
import React, { useState, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Code, Cpu, Zap, Layout, Sparkles, ArrowDown } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import ChatBot from './components/ChatBot';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import CustomCursor from './components/CustomCursor';
import { PROJECTS, SKILLS, PERSONAL_INFO, ProjectExtended } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectExtended | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const allTags = useMemo(() => {
    const tags = new Set<string>(['All']);
    PROJECTS.forEach(project => project.tech.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tech.includes(activeFilter));
  }, [activeFilter]);

  // Text Reveal Logic
  const titleLetters = "WILDAN MILADJI".split("");

  return (
    <div className="relative min-h-screen cursor-none">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      <ChatBot />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[100]" style={{ scaleX }} />

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">
        
        {/* HERO: Kinetic Typography Reveal */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center mb-40 relative">
          <motion.div className="absolute right-0 top-0 hidden lg:block opacity-20 pointer-events-none">
             <div className="text-[20rem] font-black text-white/5 leading-none select-none">WM</div>
          </motion.div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 mb-8"
            >
               <span className="w-12 h-px bg-indigo-500"></span>
               <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.4em]">Creative Director & Tech Lead</span>
            </motion.div>

            <h1 className="font-heading text-6xl md:text-[11rem] font-bold leading-[0.8] mb-12 tracking-tighter flex flex-wrap">
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: i * 0.05, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 10 
                  }}
                  className={letter === " " ? "mr-8" : "inline-block"}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="text-indigo-600"
              >.</motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid md:grid-cols-2 gap-12 items-end"
            >
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
                Redefining the digital landscape through <span className="text-white border-b-2 border-indigo-500/30">spatial interfaces</span> and cognitive engineering.
              </p>
              <div className="flex gap-4 justify-start md:justify-end items-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-gray-500 hidden md:block"
                >
                  <ArrowDown size={20} />
                </motion.div>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:scale-110 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] interactive-card"
                >
                  Explore Folio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID: Interactive Tilt Elements */}
        <section className="grid md:grid-cols-4 grid-rows-2 gap-6 mb-48 h-auto md:min-h-[600px]">
           <motion.div 
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-2 md:row-span-2 glass-card p-12 rounded-[3rem] flex flex-col justify-between interactive-card group"
           >
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-600/40 group-hover:rotate-12 transition-transform">
                <Layout size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-5xl font-bold font-heading mb-6 tracking-tight">Elegance in <br/>Complexity.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">We don't just build websites; we craft digital legacies that stand the test of time through rigorous architectural standards.</p>
              </div>
           </motion.div>

           <motion.div 
            whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
            className="md:col-span-2 glass-card p-10 rounded-[3rem] flex items-center gap-8 interactive-card group"
           >
              <div className="p-5 rounded-2xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Immersive Motion</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Physics-based animations that guide users through a seamless narrative journey.</p>
              </div>
           </motion.div>

           <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-8 rounded-[3rem] flex flex-col justify-center text-center interactive-card"
           >
              <Zap className="mx-auto mb-4 text-amber-400" size={32} />
              <div className="text-4xl font-bold font-heading">0.4s</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Initial Paint</div>
           </motion.div>

           <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-8 rounded-[3rem] flex flex-col justify-center text-center interactive-card"
           >
              <Cpu className="mx-auto mb-4 text-cyan-400" size={32} />
              <div className="text-4xl font-bold font-heading">2k+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Coffee Cups</div>
           </motion.div>
        </section>

        {/* ABOUT: With Entrance Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutSection />
        </motion.div>

        {/* PROJECTS: Refined Selection */}
        <section id="projects" className="mb-48 scroll-mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-heading text-7xl md:text-9xl font-bold tracking-tighter"
            >
              CRAFT<span className="text-indigo-600">.</span>
            </motion.h2>
            
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all interactive-card border ${
                    activeFilter === tag 
                      ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                      : 'bg-white/5 text-gray-500 hover:text-white border-white/5 hover:bg-white/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} onClick={setSelectedProject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA: Final Impact */}
        <section id="contact" className="mb-32">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="glass-card rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center group interactive-card"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <h2 className="font-heading text-6xl md:text-[9rem] font-bold leading-[0.8] mb-12 tracking-tighter">
                BUILD <br/><span className="text-gradient">BEYOND.</span>
             </h2>
             <p className="text-2xl text-gray-400 mb-20 max-w-2xl mx-auto leading-relaxed">
                Empowering visionary brands through superior frontend engineering and tactical design.
             </p>
             <motion.a 
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-16 py-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-2xl tracking-widest transition-all shadow-[0_20px_50px_rgba(79,70,229,0.4)] group"
             >
                START A PROJECT
                <Mail className="group-hover:rotate-12 transition-transform" size={28} />
             </motion.a>
          </motion.div>
        </section>

      </main>

      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-gray-600 font-bold text-[11px] uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white">W</div>
           <div>© {new Date().getFullYear()} WILDAN MILADJI</div>
        </div>
        <div className="flex gap-12">
           <a href={PERSONAL_INFO.socials.github} className="hover:text-white transition-colors interactive-card">GitHub</a>
           <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-white transition-colors interactive-card">LinkedIn</a>
           <a href={PERSONAL_INFO.socials.twitter} className="hover:text-white transition-colors interactive-card">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
