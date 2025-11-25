import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { SkillData, Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const skills: SkillData[] = [
  { subject: 'Python', A: 140, fullMark: 150 },
  { subject: 'React/FE', A: 130, fullMark: 150 },
  { subject: 'Machine Learning', A: 110, fullMark: 150 },
  { subject: 'FastAPI', A: 125, fullMark: 150 },
  { subject: 'AI/Automation', A: 135, fullMark: 150 },
  { subject: 'Data Analytics', A: 120, fullMark: 150 },
];

// Import projects from Projects page
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const { navigateWithAgent } = useNavigation();
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');
  const fullText = "AI ENGINEER & FULL STACK DEVELOPER";

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-20">
        <div className="md:w-1/2 space-y-8 text-center md:text-left z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-300 text-xs font-mono mb-4 animate-float">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            NEURAL LINK ESTABLISHED
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            AJAY PALVAI
          </h1>

          <h2 className="text-2xl md:text-3xl font-[Outfit] text-cyan-400 h-8 neon-text-cyan">
            {text}<span className="animate-pulse border-r-4 border-fuchsia-500 ml-1"> </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed border-l-2 border-purple-500 pl-4">
            Full Stack Developer & Data Analyst specializing in AI-powered applications, automation tools, and data-driven solutions. Experienced in building scalable web applications with <span className="text-fuchsia-400 font-bold">React, FastAPI, and LLMs.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="relative group bg-transparent overflow-hidden rounded-lg px-8 py-4 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-80 group-hover:opacity-100"></div>
              <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30"></div>
              <span className="relative text-white font-bold font-[Outfit] tracking-widest flex items-center gap-2">
                VIEW PROJECTS <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>

            <a
              href="#contact"
              className="glass hover:bg-white/5 text-cyan-300 border-cyan-500/50 hover:border-cyan-400 py-4 px-8 rounded-lg transition-all font-mono flex items-center gap-2 group"
            >
              <span className="w-2 h-2 bg-slate-500 group-hover:bg-green-400 rounded-full transition-colors"></span>
              CONTACT ME
            </a>
          </div>
        </div>

        {/* Right Side 3D Viz */}
        <div className="md:w-1/2 w-full h-[350px] md:h-[500px] mt-12 md:mt-0 flex justify-center relative perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <div className="w-full h-full relative glass-panel rounded-full border-none p-8 animate-float">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 px-4 py-1 bg-black border border-cyan-500 text-cyan-400 text-xs font-mono rounded">
              SKILL MATRIX
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="60%" data={skills}>
                <PolarGrid stroke="rgba(232, 121, 249, 0.3)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#22d3ee', fontSize: 10, fontFamily: 'Outfit' }}
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#e879f9"
                  strokeWidth={3}
                  fill="#c026d3"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Outfit]">ABOUT ME</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-[Outfit]">Professional Summary</h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              A Passionate <span className="text-cyan-400 font-bold">AI Engineer</span> skilled in Python, ML/DL, Generative AI, LLMs, and Agentic AI. Experienced in Tableau BI, SQL/MySQL, NoSQL/MongoDB, and building data-driven solutions.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Proficient in <span className="text-fuchsia-400 font-bold">MERN Stack, FastAPI</span>, and integrating AI agents using LangChain, LangGraph, Crew AI, n8n, RAG, MCP, and Vibe Coding. Focused on creating intelligent automation and scalable AI applications that drive actionable insights.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-[Outfit]">Current Role</h3>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">AI Engineer @ Spearsoft</h4>
              <p className="text-slate-400 mb-4">Building intelligent systems and automation solutions</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm">Agentic AI</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 rounded-full text-sm">GEN-AI</span>
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-sm">LLMs</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm">RAG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="mb-12 relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 blur-3xl"></div>

          <div className="relative glass p-8 rounded-2xl border border-cyan-500/30">
            <div className="flex items-center gap-4 mb-4">
              {/* <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse-slow">
                <span className="text-3xl">🤖</span>
              </div> */}
              <div>
                <h2 className="text-4xl font-bold text-white font-[Outfit] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                  PROJECTS
                </h2>
                <p className="text-cyan-400 text-sm font-mono flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                  11 FEATURED SYSTEMS DEPLOYED
                </p>
              </div>
            </div>

            <p className="text-slate-300 max-w-3xl mb-4">
              Each project features an <span className="text-cyan-400 font-bold">AI Agent</span> that analyzes and explains the system in three modes.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-mono text-sm ${filter === cat
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto glass p-8 rounded-2xl border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-2 font-[Outfit]">ESTABLISH UPLINK</h2>
          <p className="text-slate-400 mb-8">Get in touch for collaborations and opportunities</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 glass rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:palvaiajay4730@gmail.com" className="text-cyan-400 font-bold hover:text-cyan-300">
                  palvaiajay4730@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass rounded-lg border border-purple-500/30 hover:border-purple-400 transition-colors">
              <span className="text-3xl">📱</span>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a href="tel:+916303082138" className="text-purple-400 font-bold hover:text-purple-300">
                  +91 6303082138
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass rounded-lg border border-fuchsia-500/30 hover:border-fuchsia-400 transition-colors">
              <span className="text-3xl">💼</span>
              <div>
                <p className="text-sm text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ajay-palvai-384750210/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 font-bold hover:text-fuchsia-300">
                  Ajay Palvai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Features Strip */}
      <div className="w-full glass border-y border-white/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="text-xl font-bold text-white font-[Outfit] mb-2 group-hover:text-cyan-400">AI Automation</h3>
            <p className="text-slate-400 text-sm">Building intelligent systems with LLMs, Crew AI, and n8n.</p>
          </div>
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="text-xl font-bold text-white font-[Outfit] mb-2 group-hover:text-fuchsia-400">Full Stack Development</h3>
            <p className="text-slate-400 text-sm">React.js, FastAPI, MongoDB, and MySQL for scalable applications.</p>
          </div>
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold text-white font-[Outfit] mb-2 group-hover:text-purple-400">Data Analytics</h3>
            <p className="text-slate-400 text-sm">HR analytics, web scraping, and data-driven insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
