'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Achievements({ isDarkMode }: { isDarkMode: boolean }) {
  const awards = [
    {
      title: "Silver Medal - PKM RE",
      issuer: "Kemendikbud Ristek",
      date: "2025",
      verifLink: "#", // Link ke website resmi lomba/kampus
      imageColor: "bg-gray-300" // Nanti ganti jadi url gambar
    },
    {
      title: "Assistant Lecturer Certification",
      issuer: "Universitas Muhammadiyah Yogyakarta",
      date: "2026",
      verifLink: "#",
      imageColor: "bg-blue-200"
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-black text-orange-500 mb-6 tracking-tighter shrink-0"
      >
        HALL OF FAME
      </motion.h2>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-4 pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border overflow-hidden ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/40 shadow-sm'
              }`}
            >
              {/* AREA GAMBAR + WATERMARK PROTECTOR */}
              <div className={`relative h-40 w-full ${award.imageColor} flex items-center justify-center overflow-hidden group`}>
                
                {/* Placeholder Gambar (Nanti ganti <img>) */}
                <Award size={40} className="text-gray-500/50" />
                
                {/* LAYER PROTEKSI (Watermark) */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
                  <div className="rotate-[-15deg] opacity-30 border-4 border-black/20 p-2 rounded-lg">
                    <span className="text-2xl font-black text-black/20 uppercase tracking-[0.5em]">
                      PREVIEW ONLY
                    </span>
                  </div>
                </div>
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <span className="text-white font-bold text-xs tracking-widest border border-white px-4 py-2 rounded-full">
                    SECURE PREVIEW
                  </span>
                </div>
              </div>

              {/* Detail Sertifikat */}
              <div className="p-5">
                <h3 className={`font-bold text-lg leading-tight mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {award.title}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Issued by {award.issuer} • {award.date}
                </p>

                <a 
                  href={award.verifLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-widest transition-all shadow-lg shadow-orange-500/20"
                >
                  <CheckCircle size={14} />
                  VERIFY CREDENTIAL
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}