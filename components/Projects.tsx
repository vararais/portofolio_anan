'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, Code2, FileText } from 'lucide-react';

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  // DATA PROYEK UTUH
  const projects = [
    {
      title: "ToyFolio: API Based Payment",
      desc: "Optimizing API payment gateway for toy collection store with secure token.",
      tags: ["Data", "API", "Payment"],
      link: "https://github.com/vararais/049_Toy-Folio-Project_PWS.git",
      image: "/uploads/Mockup ToyFolio.png" 
    },
    {
      title: "Sav'IT: Saving App",
      desc: "Bridging robust SQL database with native Kotlin interface via custom REST API for stuff and money management app.",
      tags: ["Kotlin", "SQL Server", "REST API"],
      link: "https://github.com/vararais/PAM2025_049.git",
      image: "/uploads/Mockup Sav'IT.jpg"
    },
    {
      title: "Simore: IoT Restaurant Management",
      desc: "Participate in making group project, an IoT system for restaurant management with ESP32 and Arduino IDE.",
      tags: ["Database", "IoT"],
      link: "https://github.com/A-PPAW-TI503P-2025/PROJECT_KELOMPOK5_HUMAN-BODY.git",
      image: "/uploads/Mockup IOT.jpg"
    },
    {
      title: "Pure Scoop: Sugar-Free Ice Cream Proposal",
      desc: "Proposing an actual Ice Cream business model with COBIT 2019.",
      tags: ["COBIT 2019"],
      image: "/uploads/Mockup PureScoop.png"
    },
    {
      title: "MeatMe: Beef Ordering System",
      desc: "Designing a system to help local beef farmers sell their products.",
      tags: ["UI/UX", "Website"],
      link: "https://github.com/nacho0ol/Project-MENPRO.git",
      image: "/uploads/Mockup MeatMe.png"
    },
    {
      title: "Debayi: Preventive Speech Delay Survey",
      desc: "Designing and implementing a user-friendly web-based survey speech delay prevention for PKM-KC.",
      tags: ["UI/UX", "Website"],
      image: "/uploads/Mockup Debayi.png"
    },
        {
      title: "Perqara.id: Law and Regulation with Technology based",
      desc: "Designing a proposal for Technopreneurship with market analysis.",
      tags: ["Research", "Proposal"],
      image: "/uploads/Mockup Perqara.id.png"
    },
    {
      title: "Merche: Merchandise Management App",
      desc: "Designing a system to help band sell their products and souvenirs.",
      tags: ["Website"],
      link: "https://github.com/Mihaly24/PDWProjectFix.git",
      image: "/uploads/Mockup Merche.png"
    },
  ];

  // LOGIKA PEMISAHAN REPOSITORIES & DOCUMENTATION
  const githubProjects = projects.filter(p => p.link && p.link.includes('github'));
  const otherProjects = projects.filter(p => !p.link || !p.link.includes('github'));

  // KOMPONEN KARTU PROYEK (Gambar Landscape 4:3)
  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      // PERBAIKAN BORDER: border-black/10 ditambahkan untuk Light Mode
      className={`group relative p-4 rounded-3xl border transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden ${
        isDarkMode 
          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]' 
          : 'bg-white/50 border-black/10 hover:bg-white/90 shadow-sm hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]'
      }`}
    >
      {/* 1. CONTAINER GAMBAR (RASIO 4:3 LANDSCAPE) */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-200 dark:bg-gray-800">
        
        {/* Gambar Mockup - Placeholder diubah jadi 800x600 (Landscape) */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/800x600/f97316/ffffff?text=MOCKUP+IMAGE" }} 
        />

        {/* Overlay gelap transparan saat di-hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* 2. TOMBOL MENGAMBANG DI ATAS GAMBAR */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {/* Ikon Folder Glassmorphism */}
          <div className={`p-2 rounded-xl backdrop-blur-md shadow-sm ${isDarkMode ? 'bg-black/40 text-orange-400' : 'bg-white/70 text-orange-500'}`}>
            <Folder size={18} />
          </div>
          
          {/* Tombol LIHAT Global */}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black tracking-widest transition-all backdrop-blur-md shadow-lg transform hover:scale-105 active:scale-95 ${
                isDarkMode 
                  ? 'bg-black/50 text-white hover:bg-orange-500' 
                  : 'bg-white/80 text-gray-900 hover:bg-orange-500 hover:text-white'
              }`}
            >
              <ExternalLink size={14} />
              LIHAT
            </a>
          )}
        </div>
      </div>

      {/* 3. KONTEN TEKS (Bawah Gambar) */}
      <div className="px-2 flex flex-col flex-1">
        <h3 className={`text-xl font-black mb-2 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-5 leading-relaxed flex-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className={`text-[10px] font-black tracking-wider px-3 py-1.5 rounded-lg border ${
              isDarkMode 
                ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' 
                : 'bg-orange-50 text-orange-600 border-orange-200'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="h-full flex flex-col">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-black text-orange-500 mb-6 tracking-tighter shrink-0"
      >
        SELECTED WORKS
      </motion.h2>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-10 pr-2">
        
        {/* BAGIAN 1: REPOSITORIES (GitHub) */}
        {githubProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-black tracking-widest text-orange-500/70 mb-5 flex items-center gap-2">
              <Code2 size={18} /> REPOSITORIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {githubProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* BAGIAN 2: RESEARCH & DOCUMENTATION (Non-GitHub) */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-sm font-black tracking-widest text-orange-500/70 mb-5 flex items-center gap-2">
              <FileText size={18} /> RESEARCH & DOCUMENTATION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index + githubProjects.length} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}