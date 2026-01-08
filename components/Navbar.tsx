
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[80] w-fit">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 p-1.5 bg-gray-950/20 backdrop-blur-2xl border border-white/5 rounded-full shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="pl-4 pr-2">
           <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center font-black text-[10px] text-white">W</div>
        </div>
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ y: -2 }}
            className="px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all"
          >
            {item.name}
          </motion.a>
        ))}
        <div className="ml-2">
          <a 
            href="#contact" 
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all block shadow-lg shadow-indigo-600/20"
          >
            Hire
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
