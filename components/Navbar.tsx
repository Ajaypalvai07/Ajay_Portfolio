import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { navigateWithAgent } = useNavigation();
  const [agentPosition, setAgentPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAgentPosition((prev) => (prev + 1) % navItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (path: string) => location.pathname === path
    ? "text-cyan-400 border-b-2 border-cyan-400 shadow-[0_4px_10px_rgba(34,211,238,0.3)]"
    : "text-slate-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all";

  const NavButton = ({ to, label, index }: { to: string, label: string, index: number }) => (
    <button
      onClick={() => navigateWithAgent(to)}
      className={`px-2 py-1 relative ${isActive(to)}`}
    >
      {label}
      {/* {agentPosition === index && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xl animate-bounce">
          🤖
        </span>
      )} */}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigateWithAgent('/')}>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative w-full h-full bg-slate-900 rounded-lg border border-cyan-500 flex items-center justify-center">
              <span className="text-xl font-bold font-[Outfit] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">A</span>
            </div>
          </div>
          <span className="text-2xl font-bold font-[Outfit] tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            Ajay<span className="text-fuchsia-500">Palvai</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 code-font text-sm">
          {navItems.map((item, index) => (
            <NavButton key={item.to} to={item.to} label={item.label} index={index} />
          ))}
        </div>

        {/* Resume Download & Automation Indicator */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/Ajay_palvai_res.pdf"
            download="Ajay_palvai_res.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all text-xs font-[Outfit] shadow-lg hover:shadow-cyan-500/50"
          >
            <span>📄</span>
            <span>RESUME</span>
          </a>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            <span className="text-[10px] text-slate-400 font-mono">AUTO-PILOT ENGAGED</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/30 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => {
                navigateWithAgent(item.to);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left py-3 px-4 rounded-lg font-mono text-lg ${location.pathname === item.to
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                : "text-slate-300 hover:bg-white/5"
                }`}
            >
              {item.label}
            </button>
          ))}

          <div className="h-px bg-white/10 my-2"></div>

          <a
            href="/Ajay_palvai_res.pdf"
            download="Ajay_palvai_res.pdf"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg font-[Outfit]"
          >
            <span>📄</span>
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;