'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LoadingScreen from '../components/LoadingScreen';
import About from '../components/About';
import Experience from '../components/Experience'; 
import Projects from '../components/Projects'; 
import Achievements from '../components/Achievements';
import Profile from '../components/Profile'; // <--- TAMBAHAN: Import file baru

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        // PERUBAHAN: Kode panjang tadi sudah dipindah ke file Profile.tsx
        return <Profile isDarkMode={isDarkMode} />;
      case 'about':
        return <About isDarkMode={isDarkMode} />;
      case 'experience':
        return <Experience isDarkMode={isDarkMode} />;
      case 'projects':
        return <Projects isDarkMode={isDarkMode} />;
      case 'achievements':
        return <Achievements isDarkMode={isDarkMode} />; 
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-orange-500/50">
            <span className="text-4xl mb-4">🚧</span>
            <span className="font-bold text-xl tracking-widest">UNDER CONSTRUCTION</span>
          </div>
        );
    }
  };

  return (
    <div className={`h-screen w-screen overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-[#f0f2f5]'}`}>
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        // UPDATE LAYOUT: Padding lebih rapat, gap-4, tinggi full
        <div className="flex flex-col md:flex-row h-full w-full p-4 md:p-6 gap-4 relative z-10">
          
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />

          {/* UPDATE MAIN: Glass panel ditempel disini agar tinggi sama persis dengan sidebar */}
          <main className={`flex-1 h-full rounded-3xl overflow-hidden glass-panel transition-all duration-500 flex flex-col`}>
             <div className="flex-1 overflow-y-auto hide-scrollbar p-6 md:p-10">
                {renderContent()}
             </div>
          </main>

        </div>
      )}

      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob ${isDarkMode ? 'bg-orange-900' : 'bg-orange-300'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-300'}`}></div>
      </div>
    </div>
  );
}