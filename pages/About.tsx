import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-6 pb-20">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Orbitron]">ABOUT ME</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Bio Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div> */}
              <h3 className="text-2xl font-bold text-white font-[Orbitron]">Professional Summary</h3>
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

          {/* Current Role */}
          <div className="glass p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div> */}
              <h3 className="text-2xl font-bold text-white font-[Orbitron]">Current Role</h3>
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

          {/* Education */}
          <div className="glass p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div> */}
              <h3 className="text-2xl font-bold text-white font-[Orbitron]">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-fuchsia-500 pl-6">
                <h4 className="text-lg font-bold text-white">B.Tech in Computer Science (Data Science)</h4>
                <p className="text-cyan-400">Mahatma Gandhi Institute of Technology – JNTUH</p>
                <p className="text-slate-400 text-sm">Graduated: July 2024 | CGPA: 7.49</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-bold text-white">Diploma in Computer Engineering</h4>
                <p className="text-cyan-400">Bomma Institute of Technology and Science – SBTET</p>
                <p className="text-slate-400 text-sm">Graduated: May 2021 | CGPA: 7.84</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Skills & Achievements */}
        <div className="space-y-6">
          {/* Technical Skills */}
          <div className="glass p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 font-[Orbitron]">Tech Stack</h3>
            
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

          {/* Achievements */}
          <div className="glass p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 font-[Orbitron]">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-slate-300 text-sm">Runner-up – Smart India Hackathon 2024: Developed an AI-powered solution to automate document verification and reduce manual processing time for government services.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎖️</span>
                <div>
                  <p className="text-slate-300 text-sm">Participated in NCC National Level Camps</p>
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

          {/* Soft Skills */}
          <div className="glass p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 font-[Orbitron]">Soft Skills</h3>
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

          {/* Contact Info */}
          <div className="glass p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 font-[Orbitron]">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:palvaiajay4730@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <span className="text-xl">📧</span>
                <span className="text-sm">palvaiajay4730@gmail.com</span>
              </a>
              <a href="tel:+916303082138" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <span className="text-xl">📱</span>
                <span className="text-sm">+91 6303082138</span>
              </a>
              <a href="https://www.linkedin.com/in/ajay-palvai-384750210/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <span className="text-xl">💼</span>
                <span className="text-sm">Ajay Palvai-Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
