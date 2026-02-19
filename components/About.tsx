'use client';
import { motion } from 'framer-motion';
import { Terminal, Layers } from 'lucide-react';

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  
  // 1. Kategori Bahasa Pemrograman
  const languages = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  ];

  // 2. Kategori Software, Frameworks, DB & Tools
  const software = [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true }, // Logo hitam, perlu invert di dark mode
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invertDark: true },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ];

  // Komponen Kartu (Re-usable)
  const SkillCard = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 group ${
        isDarkMode 
          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
          : 'bg-white/50 border-white/40 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-white/50 dark:bg-white/5 shadow-sm">
        {/* Render Logo dari URL */}
        <img 
          src={item.icon} 
          alt={item.name} 
          className={`w-full h-full object-contain transition-all duration-300 ${
            item.invertDark && isDarkMode ? 'invert brightness-0 bg-white/20 rounded-lg' : ''
          }`} 
        />
      </div>
      <span className={`text-xs font-bold tracking-wider text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {item.name}
      </span>
    </motion.div>
  );

  return (
    <div className="h-full flex flex-col overflow-y-auto hide-scrollbar pb-10 pr-2">
      
      {/* --- SECTION 1: LANGUAGES --- */}
      <div className="mb-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-orange-500 mb-6 tracking-tighter flex items-center gap-3"
        >
          <Terminal size={28} /> LANGUAGES
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languages.map((item, index) => (
            <SkillCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* --- SECTION 2: SOFTWARE & FRAMEWORKS --- */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-black text-orange-500 mb-6 tracking-tighter flex items-center gap-3"
        >
          <Layers size={28} /> SOFTWARE & TOOLS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {software.map((item, index) => (
            <SkillCard key={item.name} item={item} index={index + 5} />
          ))}
        </div>
      </div>

    </div>
  );
}