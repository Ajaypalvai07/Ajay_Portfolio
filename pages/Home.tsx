import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { SkillData, Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const skills: SkillData[] = [
  { subject: 'Python', A: 145, fullMark: 150 },
  { subject: 'React.js', A: 135, fullMark: 150 },
  { subject: 'FastAPI', A: 130, fullMark: 150 },
  { subject: 'AI/LLMs', A: 140, fullMark: 150 },
  { subject: 'Data Analytics', A: 125, fullMark: 150 },
  { subject: 'MongoDB/SQL', A: 120, fullMark: 150 },
  { subject: 'Tableau BI', A: 115, fullMark: 150 },
  { subject: 'Machine Learning', A: 110, fullMark: 150 },
];

// Import projects from Projects page
const projects: Project[] = [
  {
    id: '1',
    title: 'AutoHire.cv',
    category: 'Generative AI',
    description: 'AI-powered recruitment platform automating hiring through intelligent resume screening, AI interviews, and real-time candidate insights.',
    techStack: ['AI', 'NLP', 'React.js', 'FastAPI'],
    demoUrl: 'https://www.autohire.cv/',
    aiInsights: {
      child: '🤖 A smart robot helper that reads resumes and talks to people who want jobs! It helps companies find the best workers faster.',
      engineer: '⚙️ Enterprise-grade recruitment automation using NLP for resume parsing, LLM-powered conversational AI for interviews, and real-time analytics dashboard. Built with React.js frontend and FastAPI backend.',
      ceo: '💼 Reduces hiring time by 70% and costs by 60%. Scales recruitment operations while maintaining quality. ROI positive within 3 months. Demo: autohire.cv'
    },
    stats: { accuracy: '95%', latency: '500ms', users: 1000 }
  },
  {
    id: '2',
    title: 'AutoHire Prep',
    category: 'Generative AI',
    description: 'Complete career ecosystem from learning algorithms to acing interviews.',
    techStack: ['AI', 'React.js', 'Python', 'LLMs'],
    demoUrl: 'https://prep.autohire.cv/',
    aiInsights: {
      child: '📚 Like a super smart teacher that helps you learn coding and practice for job interviews!',
      engineer: '🎓 Comprehensive learning platform with 500+ coding challenges, AI-powered mock interviews, personalized learning paths.',
      ceo: '🎯 B2B2C model serving universities. Increases placement rates by 40%. Visit: prep.autohire.cv'
    },
    stats: { accuracy: '92%', latency: '600ms', users: 5000 }
  },
  {
    id: '3',
    title: 'CDrive AutoHire',
    category: 'Generative AI',
    description: 'Next-gen AI campus placement platform with 5-stage assessment and professional proctoring.',
    techStack: ['OpenAI GPT-4', 'React.js', 'AI Proctoring'],
    demoUrl: 'https://cdrive.autohire.cv/',
    aiInsights: {
      child: '🎮 A test game that watches you take exams and makes sure you don\'t cheat!',
      engineer: '🔒 Enterprise assessment platform with GPT-4 evaluation, screen recording, identity verification.',
      ceo: '📊 99.9% accuracy. Reduces hiring cycle from 3 months to 2 weeks. Try: cdrive.autohire.cv'
    },
    stats: { accuracy: '99.9%', latency: '400ms', users: 2000 }
  },
  {
    id: '4',
    title: 'Leadspear.ai',
    category: 'Automation',
    description: 'AI-powered marketing automation and lead generation platform.',
    techStack: ['AI', 'Marketing Automation', 'React.js'],
    demoUrl: 'https://www.leadspear.ai/',
    aiInsights: {
      child: '📧 A robot that sends emails and posts on social media for businesses automatically!',
      engineer: '🚀 Multi-channel marketing automation with MailGrid (email), SocialGrid (social media).',
      ceo: '💰 SaaS platform with 3000+ users. Increases lead generation by 250%. Explore: leadspear.ai'
    },
    stats: { accuracy: '94%', latency: '300ms', users: 3000 }
  },
  {
    id: '5',
    title: 'EchelonX AI',
    category: 'Generative AI',
    description: 'Custom AI solutions for businesses focusing on sales optimization and automation.',
    techStack: ['AI', 'LLMs', 'Business Automation'],
    demoUrl: 'https://echelonxai.com/',
    aiInsights: {
      child: '🤝 Smart helpers that work for different companies!',
      engineer: '🏗️ Custom AI solution development using LLMs for sales optimization and workflow automation.',
      ceo: '📈 Average 35% productivity increase for clients. Learn more: echelonxai.com'
    },
    stats: { accuracy: '96%', latency: '450ms', users: 800 }
  },
  {
    id: '6',
    title: 'Crypto Investment Platform',
    category: 'Automation',
    description: 'Full-stack cryptocurrency portfolio management with real-time tracking.',
    techStack: ['React.js', 'Material-UI', 'Redux', 'FastAPI', 'MySQL'],
    aiInsights: {
      child: '🪙 A digital wallet that keeps track of your crypto coins!',
      engineer: '🔐 Full-stack fintech app with JWT + 2FA authentication, role-based access control.',
      ceo: '💼 Secure crypto portfolio management with enterprise security standards.'
    },
    stats: { accuracy: '99%', latency: '150ms', users: 50 }
  }
];

const Home: React.FC = () => {
  const { navigateWithAgent } = useNavigation();
  const [text, setText] = useState('');
  const fullText = "AI ENGINEER & FULL STACK DEVELOPER";

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div> */}
                <h3 className="text-2xl font-bold text-white font-[Outfit]">Professional Summary</h3>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                I am a passionate and results-driven <span className="text-cyan-400 font-bold">AI Engineer and Data Analyst</span> with a strong foundation in Machine Learning, Python, and Tableau BI, committed to converting raw data into actionable insights and intelligent automation.
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                I specialize in building data-driven solutions using <span className="text-fuchsia-400 font-bold">SQL (MySQL), NoSQL (MongoDB), and FastAPI</span>, along with expertise in developing and integrating AI agents into real-world applications to enhance automation and decision-making capabilities.
              </p>

              <p className="text-slate-300 leading-relaxed">
                With practical experience in frontend development using <span className="text-cyan-400 font-bold">React.js and Redux</span>, I've successfully delivered and deployed dynamic web applications by integrating RESTful APIs for optimal performance and user experience. I also ensure smooth collaboration and code quality through version control with Git and GitHub.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div> */}
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
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm">MCP</span>
                  <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-sm">Crew AI</span>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div> */}
                <h3 className="text-2xl font-bold text-white font-[Outfit]">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h4 className="text-lg font-bold text-white">B.Tech in Computer Science (Data Science)</h4>
                  <p className="text-cyan-400">Mahatma Gandhi Institute of Technology – JNTUH</p>
                  <p className="text-slate-400 text-sm">CGPA: 7.49</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-bold text-white">Diploma in Computer Engineering</h4>
                  <p className="text-cyan-400">Bomma Institute of Technology and Science – SBTET</p>
                  <p className="text-slate-400 text-sm">CGPA: 7.84</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Tech Stack & Achievements */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 font-[Outfit]">Tech Stack</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-cyan-400 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">SQL</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">C</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Java</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-fuchsia-400 mb-2">AI/ML Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">LLMs</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Crew AI</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">LangChain</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">LangGraph</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">n8n</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">RAG</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">MCP</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-purple-400 mb-2">Web Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">React.js</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Redux</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">FastAPI</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Express</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-green-400 mb-2">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">MySQL</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">MongoDB</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-blue-400 mb-2">Analytics</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Tableau BI</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 font-[Outfit]">Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-slate-300 text-sm">Runner-up – Smart India Hackathon 2024</p>
                    <p className="text-slate-500 text-xs">AI-powered document verification solution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎖️</span>
                  <div>
                    <p className="text-slate-300 text-sm">NCC National Level Camps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📜</span>
                  <div>
                    <p className="text-slate-300 text-sm">Google Data Analytics Professional Certificate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 font-[Outfit]">Soft Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-slate-300">Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                  <span className="text-slate-300">Adaptability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-300">Problem Solving</span>
                </div>
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
                  6 FEATURED SYSTEMS DEPLOYED
                </p>
              </div>
            </div>

            <p className="text-slate-300 max-w-3xl mb-4">
              Each project features an <span className="text-cyan-400 font-bold">AI Agent</span> that analyzes and explains the system in three modes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
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
