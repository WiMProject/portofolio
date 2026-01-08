
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ProjectExtended } from '../constants';

interface ProjectModalProps {
  project: ProjectExtended | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
          >
            <X size={24} />
          </button>

          <div className="flex-1 overflow-y-auto">
            {/* Header Image */}
            <div className="w-full aspect-[21/9] overflow-hidden">
              <img 
                src={project.images[0] || project.imageUrl} 
                className="w-full h-full object-cover" 
                alt={project.title} 
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{project.title}</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {project.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <CheckCircle2 size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <a 
                      href={project.link} 
                      className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                      Launch Live Demo <ExternalLink size={18} />
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        View Source <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Secondary Images */}
              {project.images.length > 1 && (
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((img, idx) => (
                    <div key={idx} className="rounded-3xl overflow-hidden aspect-video border border-white/10">
                      <img src={img} className="w-full h-full object-cover" alt={`${project.title} showcase ${idx}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
