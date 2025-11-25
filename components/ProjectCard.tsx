import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [summaryMode, setSummaryMode] = useState<'child' | 'engineer' | 'ceo'>('engineer');
  const streamInterval = useRef<NodeJS.Timeout | null>(null);

  const handleSummarize = (mode: 'child' | 'engineer' | 'ceo') => {
    if (streamInterval.current) clearInterval(streamInterval.current);
    setSummaryMode(mode);
    setLoadingSummary(true);
    setSummary('');

    const targetText = project.aiInsights ? project.aiInsights[mode] : "Analysis not available.";
    let index = 0;

    // Simulate network delay then stream
    setTimeout(() => {
      setLoadingSummary(false);
      streamInterval.current = setInterval(() => {
        setSummary(prev => targetText.substring(0, index + 1));
        index++;
        if (index >= targetText.length) {
          if (streamInterval.current) clearInterval(streamInterval.current);
        }
      }, 30); // Typing speed
    }, 600);
  };

  useEffect(() => {
    return () => {
      if (streamInterval.current) clearInterval(streamInterval.current);
    }
  }, []);

  return (
    <div className="relative group perspective-1000 h-full">
      {/* Glow Effect behind card */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>

      <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group-hover:-translate-y-2 flex flex-col p-6">

        {/* Header Section (Replaces Image) */}
        <div className="mb-4 border-b border-white/10 pb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="bg-cyan-900/30 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/50 font-mono">
              {project.category}
            </div>
            <div className="flex gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  title="View Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-white font-[Orbitron] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => (
              <span key={tech} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-600 group-hover:border-purple-500/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* AI Actions */}
          <div className="bg-black/40 p-4 rounded-lg border border-white/5 mb-4 relative overflow-hidden mt-auto">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-cyan-400 font-bold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                AI ANALYSIS
              </span>
              <div className="flex gap-1">
                {(['child', 'engineer', 'ceo'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => handleSummarize(mode)}
                    className={`text-[9px] px-2 py-1 rounded uppercase tracking-wider border transition-all ${summaryMode === mode && (summary || loadingSummary) ? 'bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800 border-transparent text-slate-500 hover:text-white hover:border-slate-600'}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[60px] text-[11px] text-slate-300 font-mono leading-relaxed">
              {loadingSummary ? (
                <div className="flex items-center gap-2 text-fuchsia-400">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Synthesizing neural patterns...</span>
                </div>
              ) : summary ? (
                <p className="animate-in fade-in duration-500">{summary}</p>
              ) : (
                <span className="text-slate-600 italic">Select a mode to generate an AI summary of this project.</span>
              )}
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="group/stat hover:bg-white/5 rounded p-1 transition-colors">
                <div className="text-cyan-300 font-bold text-sm font-mono">{value}</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-wider">{key}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;