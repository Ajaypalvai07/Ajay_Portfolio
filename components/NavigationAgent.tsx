import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const NavigationAgent: React.FC = () => {
  const { isNavigating, targetPath } = useNavigation();

  if (!isNavigating) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"></div>

      {/* The Agent Container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* The Glowing Orb (Agent) */}
        <div className="relative w-24 h-24 mb-8">
           <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl animate-pulse"></div>
           <div className="absolute inset-0 rounded-full bg-purple-600 blur-xl opacity-70 animate-pulse delay-75"></div>
           <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 via-white to-purple-500 border-2 border-white shadow-[0_0_50px_rgba(34,211,238,0.8)] flex items-center justify-center overflow-hidden">
              {/* Inner "Eye" Animation */}
              <div className="w-16 h-1 bg-black/20 absolute top-1/2 -translate-y-1/2 animate-ping"></div>
              <div className="w-1 h-16 bg-black/20 absolute left-1/2 -translate-x-1/2 animate-ping delay-100"></div>
           </div>
        </div>

        {/* Text Interface */}
        <div className="text-center space-y-2">
            <div className="text-cyan-300 font-[Orbitron] text-xl tracking-[0.2em] animate-bounce">
                NAVIGATING
            </div>
            <div className="text-purple-300 font-mono text-sm">
                Target: {targetPath?.toUpperCase() || "UNKNOWN_SECTOR"}
            </div>
            <div className="flex gap-1 justify-center mt-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-20 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-600 relative">
                    <div className="h-full bg-cyan-500 animate-[scanline_1s_linear_infinite] w-full"></div>
                </div>
            </div>
        </div>

        {/* Flying Lines Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] -z-10 opacity-20">
             <svg width="100%" height="100%">
                 <line x1="50%" y1="50%" x2="0" y2="0" stroke="#22d3ee" strokeWidth="2" />
                 <line x1="50%" y1="50%" x2="100%" y2="0" stroke="#e879f9" strokeWidth="2" />
                 <line x1="50%" y1="50%" x2="0" y2="100%" stroke="#8b5cf6" strokeWidth="2" />
                 <line x1="50%" y1="50%" x2="100%" y2="100%" stroke="#22d3ee" strokeWidth="2" />
             </svg>
        </div>

      </div>
    </div>
  );
};

export default NavigationAgent;