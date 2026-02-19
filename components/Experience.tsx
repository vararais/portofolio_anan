'use client';
import { motion } from 'framer-motion';

export default function Experience({ isDarkMode }: { isDarkMode: boolean }) {
  const experiences = [
    {
      year: "2026 - Present",
      role: "Assistant Lecturer",
      company: "Cyber Security & STQA",
      desc: "Mentoring students on vulnerability assessment, penetration testing, and software quality assurance standards."
    },
    {
      year: "2026",
      role: "PicoCTF Contributor",
      company: "Capture The Flag Event",
      desc: "Designed 'triple-secure' challenge demonstrating multi-layer security protocols for student competence tests."
    },
    {
      year: "2025 - 2026",
      role: "Fullstack Developer",
      company: "Freelance / Projects",
      desc: "Developed various web applications using Next.js and SQL Server, focusing on clean architecture and performance."
    },
    {
      year: "2025",
      role: "Research Team Lead",
      company: "PKM-RE",
      desc: "Led a research team to develop 'Library Input System' winning a Silver Medal. Managed UX research timeline."
    },
    {
      year: "2024 - 2025",
      role: "Lab Assistant",
      company: "Database Systems",
      desc: "Guided 40+ students in mastering complex SQL queries, triggers, and stored procedures with 100% grading accuracy."
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-black text-orange-500 mb-6 tracking-tighter shrink-0"
      >
        JOURNEY
      </motion.h2>

      {/* PERBAIKAN DISINI:
        - flex-1: Mengambil sisa ruang tinggi yang ada
        - overflow-y-auto: Mengaktifkan scroll vertikal jika konten panjang
        - hide-scrollbar: Menyembunyikan batang scroll biar rapi
        - pr-4: Memberi jarak kanan sedikit biar teks tidak mepet pinggir
      */}
      <div className="flex-1 overflow-y-auto hide-scrollbar relative border-l-2 border-orange-500/30 ml-3 space-y-8 pb-4 pr-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }} // Dipercepat dikit delay-nya biar responsif
            className="ml-8 relative group"
          >
            {/* Dot Timeline */}
            <div className={`absolute -left-[43px] top-1 w-5 h-5 rounded-full border-4 transition-colors z-10 ${
              isDarkMode ? 'bg-black border-orange-500 group-hover:bg-orange-500' : 'bg-white border-orange-500 group-hover:bg-orange-500'
            }`}></div>

            <div className={`p-6 rounded-2xl border transition-all hover:translate-x-1 ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/40 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.role}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black tracking-wider">
                  {exp.year}
                </span>
              </div>
              
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {exp.company}
              </p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}