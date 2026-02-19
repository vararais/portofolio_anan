'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const projects = [
    {
      title: "ToyFolio",
      desc: "Optimizing API payment gateway for toy collection store with secure token.",
      tags: ["Data", "API", "Payment"],
      link: "https://github.com/vararais/049_Toy-Folio-Project_PWS.git", // Ganti link asli
    },
    {
      title: "Sav'IT: Saving App",
      desc: "Bridging robust SQL database with native Kotlin interface via custom REST API for stuff and money management app.",
      tags: ["Kotlin", "SQL Server", "REST API"],
      link: "https://github.com/vararais/PAM2025_049.git",
    },
        {
      title: "Simore: IoT Restaurant Management",
      desc: "Participate in making group project, an IoT system for restaurant management with ESP32 and Arduino IDE.",
      tags: ["Database", "IoT"],
      link: "https://github.com/A-PPAW-TI503P-2025/PROJECT_KELOMPOK5_HUMAN-BODY.git",
    },
        {
      title: "Pure Scoop: Healty Ice Cream Proposal",
      desc: "Bridging robust SQL database with native Kotlin interface via custom REST API for stuff and money management app.",
      tags: ["Kotlin", "SQL Server", "REST API"]
    },
    {
      title: "Beef Ordering System",
      desc: "Designing a system to help local beef farmers sell their products.",
      tags: ["UI/UX", "Website"],
      link: "https://github.com/nacho0ol/Project-MENPRO.git",
    },
    {
      title: "Debayi: Preventive Speech Delay Survey",
      desc: "Designing and implementing a user-friendly web-based survey speech delay prevention for PKM-KC.",
      tags: ["UI/UX", "Website"]
    },
        {
      title: "Sav'IT: Saving App",
      desc: "Bridging robust SQL database with native Kotlin interface via custom REST API for stuff and money management app.",
      tags: ["Kotlin", "SQL Server", "REST API"],
      link: "https://github.com/vararais/PAM2025_049.git",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-black text-orange-500 mb-6 tracking-tighter shrink-0"
      >
        SELECTED WORKS
      </motion.h2>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-4 pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/50' 
                  : 'bg-white/50 border-white/40 hover:bg-white/80 shadow-sm hover:shadow-orange-500/10'
              }`}
            >
              {/* Icon Type */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <Folder size={20} />
                </div>
                <div className="flex gap-2">
                  <a href={project.link} target="_blank" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              
              <p className={`text-sm mb-4 flex-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}