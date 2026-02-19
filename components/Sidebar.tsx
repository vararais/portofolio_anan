'use client';
import Image from 'next/image';
import { User, Code, Briefcase, Rocket, Award, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, isDarkMode, toggleTheme }: SidebarProps) {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'about', label: 'Tech Stack', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'achievements', label: 'Awards', icon: Award },
  ];

  return (
    <aside className="w-full md:w-80 h-auto md:h-full shrink-0 z-40 flex flex-col relative glass-panel rounded-3xl overflow-hidden transition-all duration-500">
      
      {/* Bagian Atas: Identitas & Toggle Slide */}
      <div className="p-8 text-center flex flex-col items-center border-b border-gray-200/20 dark:border-white/10">
        <div className="w-24 h-24 rounded-full border-4 border-orange-500/30 p-1 mb-4 shadow-lg shadow-orange-500/20">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative">
             <Image 
               src="/uploads/profile.jpg" 
               alt="Profile"
               fill
               className="object-cover"
             />
          </div>
        </div>
        <h1 className="text-2xl font-black text-orange-500 tracking-tighter">Anan Paradigma</h1>
        <p className={`text-xs font-bold tracking-widest mt-1 mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          FULLSTACK & ASST. LECTURER
        </p>

        {/* --- TOMBOL TOGGLE SLIDE (Baru) --- */}
        <button 
          onClick={toggleTheme}
          className={`relative w-14 h-8 rounded-full transition-colors duration-300 flex items-center px-1 shadow-inner ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        >
          <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}>
            {isDarkMode ? (
              <Moon size={14} className="text-gray-800" />
            ) : (
              <Sun size={14} className="text-orange-500" />
            )}
          </div>
        </button>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto hide-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden text-left ${
                isActive ? 'text-white shadow-lg shadow-orange-500/20' : 'text-gray-500 dark:text-gray-400 hover:bg-orange-500/10'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-orange-500 rounded-2xl"></div>
              )}
              
              <Icon size={20} className={`relative z-10 ${isActive ? 'text-white' : 'text-orange-500'}`} />
              <span className={`relative z-10 font-bold tracking-wide text-sm ${isActive ? 'text-white' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer Kecil */}
      <div className="p-4 text-center opacity-30 text-[10px] font-bold tracking-widest">
        © 2026 ANAN PARADIGMA
      </div>
    </aside>
  );
}