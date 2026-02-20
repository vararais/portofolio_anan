'use client';
import { motion } from 'framer-motion';
import { Mail, Users, Zap, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

export default function Profile({ isDarkMode }: { isDarkMode: boolean }) {
  // Data Statistik 
  const stats = [
    { label: "Students Mentored", value: "40+", icon: Users },
    { label: "Years Experience", value: "1+", icon: Zap },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center items-center max-w-5xl mx-auto pb-24 pt-10">
      
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
        className="grid grid-cols-2 gap-4 max-w-md w-full mx-auto mb-12"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            // PERBAIKAN BORDER: border-black/10 ditambahkan untuk Light Mode
            <div key={index} className={`p-6 rounded-3xl border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-black/10 shadow-sm hover:shadow-md'
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

      {/* 3. CTA BUTTONS DENGAN HOVER MENU SOSMED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 relative group" // Group untuk trigger hover
      >
        {/* Tombol Utama */}
        <button className={`flex items-center gap-2 px-8 py-4 rounded-full border text-xs font-black tracking-widest transition-all ${
          isDarkMode ? 'border-white/20 hover:bg-white/10 text-white' : 'border-gray-300 hover:bg-white text-gray-900'
        }`}>
          <Mail size={16} />
          CONTACT ME
        </button>

        {/* WRAPPER MENU SOSMED */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 hidden group-hover:block z-50">
          
          {/* Kotak Glassmorphism */}
          <div className="flex items-center gap-1.5 p-2 rounded-2xl shadow-xl transition-all animate-in slide-in-from-top-2 fade-in duration-200 backdrop-blur-md border bg-white/80 border-gray-200 dark:bg-black/80 dark:border-white/10">
            
            <a href="https://linkedin.com/in/anan-paradigma" target="_blank" rel="noreferrer" title="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-white hover:bg-orange-500 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            
            <a href="https://github.com/vararais" target="_blank" rel="noreferrer" title="GitHub" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-white hover:bg-orange-500 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>

            <a href="https://wa.me/6287731292404" target="_blank" rel="noreferrer" title="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-white hover:bg-orange-500 dark:text-gray-400 dark:hover:text-white transition-colors">
              <MessageCircle size={18} />
            </a>

            <a href="https://t.me/ananprdgm" target="_blank" rel="noreferrer" title="Telegram" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-white hover:bg-orange-500 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Send size={18} />
            </a>

            <a href="mailto:varadigmaisnann@gmail.com" title="Email" className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-white hover:bg-orange-500 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Mail size={18} />
            </a>

          </div>
        </div>
      </motion.div>

    </div>
  );
}