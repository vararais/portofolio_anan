'use client';
import { motion } from 'framer-motion';
import { Download, Mail, Users, Code, Award, Zap } from 'lucide-react';

export default function Profile({ isDarkMode }: { isDarkMode: boolean }) {
  // Data Statistik (Bisa diubah sesuai data asli)
  const stats = [
    { label: "Students Mentored", value: "40+", icon: Users },
    { label: "Projects Completed", value: "12+", icon: Code },
    { label: "Awards Won", value: "3", icon: Award },
    { label: "Years Experience", value: "2+", icon: Zap },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center max-w-5xl mx-auto">
      
      {/* 1. HERO SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        {/* Badge Status */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-[10px] font-black tracking-widest mb-6 animate-pulse">
          ● AVAILABLE FOR PROJECTS 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-orange-500 mb-6 tracking-tighter leading-none">
          HELLO, I&apos;M <br/>
          <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>ANAN PARADIGMA.</span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A <span className="text-orange-500 font-bold">Fullstack Developer</span> & <span className="text-orange-500 font-bold">Assistant Lecturer</span> who loves building secure systems and teaching logic.
        </p>
      </motion.div>

      {/* 2. STATS BENTO GRID */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`p-6 rounded-3xl border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/40 shadow-sm hover:shadow-md'
            }`}>
              <div className={`w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-3 text-orange-500`}>
                 <Icon size={20} /> 
              </div>
              <h3 className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
            </div>
          );
        })}
      </motion.div>

      {/* 3. CTA BUTTONS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black tracking-widest shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95">
          <Download size={16} />
          DOWNLOAD CV
        </button>
        <button className={`flex items-center gap-2 px-8 py-4 rounded-full border text-xs font-black tracking-widest transition-all hover:scale-105 active:scale-95 ${
          isDarkMode ? 'border-white/20 hover:bg-white/10 text-white' : 'border-gray-300 hover:bg-white text-gray-900'
        }`}>
          <Mail size={16} />
          CONTACT ME
        </button>
      </motion.div>

    </div>
  );
}