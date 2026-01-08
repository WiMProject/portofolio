
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectExtended } from '../constants';

interface ProjectCardProps {
  project: ProjectExtended;
  onClick: (project: ProjectExtended) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onClick={() => onClick(project)}
      className="group relative rounded-[2.5rem] p-px overflow-hidden bg-white/5 border border-white/10 cursor-pointer h-full transition-all duration-500 hover:border-indigo-500/50 interactive-card shadow-2xl"
    >
      {/* Dynamic Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.2), transparent 80%)`
          ),
        }}
      />

      <div className="relative bg-[#030610]/95 rounded-[2.45rem] overflow-hidden h-full flex flex-col">
        <div className="aspect-[16/11] overflow-hidden relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent opacity-80" />
          <div className="absolute top-6 right-6">
            <motion.div 
              whileHover={{ rotate: 45, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center border border-white/10 shadow-xl"
            >
              <ArrowUpRight size={24} className="text-white" />
            </motion.div>
          </div>
        </div>

        <div className="p-10 flex-1 flex flex-col">
          <div className="flex gap-2 mb-6">
            {project.tech.slice(0, 2).map(t => (
              <span key={t} className="text-[10px] font-black px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 uppercase tracking-widest text-indigo-300">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4 font-heading group-hover:text-indigo-400 transition-colors tracking-tight">{project.title}</h3>
          <p className="text-gray-400 text-base mb-8 leading-relaxed line-clamp-2 font-medium">
            {project.description}
          </p>
          <div className="mt-auto flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-indigo-400 transition-all">
             Case Study <div className="h-px flex-1 bg-white/5 group-hover:bg-indigo-500/30 transition-all" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
