import React, { useState, useEffect } from 'react';

const logs = [
  "Optimizing neural weights...",
  "Garbage collection: 45MB freed",
  "Pinging satellite uplink...",
  "Syncing with vector database...",
  "Analysing user cursor trajectory...",
  "Updating DOM nodes...",
  "Refining generative output...",
  "Checking API latency: 24ms",
  "Cooling virtual cores..."
];

const SystemMonitor: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [systemHealth, setSystemHealth] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = logs[Math.floor(Math.random() * logs.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setLines(prev => [`[${timestamp}] ${newLog}`, ...prev].slice(0, 5));
      
      // Fluctuate health
      setSystemHealth(prev => Math.min(100, Math.max(85, prev + (Math.random() - 0.5) * 5)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block fixed bottom-6 left-6 w-64 glass-panel rounded-lg p-3 border-l-2 border-l-cyan-500 z-40 font-mono text-[10px] text-cyan-300 select-none pointer-events-none">
      <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-1">
        <span className="font-bold text-white">SYSTEM STATUS</span>
        <span className={`${systemHealth > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
          {systemHealth.toFixed(1)}% OPERATIONAL
        </span>
      </div>
      <div className="space-y-1 opacity-80">
        {lines.map((line, i) => (
          <div key={i} className="truncate" style={{ opacity: 1 - i * 0.2 }}>
            <span className="text-purple-400 mr-1">{'>'}</span>
            {line}
          </div>
        ))}
      </div>
      <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
         <div className="h-full bg-cyan-500 animate-pulse" style={{ width: `${systemHealth}%` }}></div>
      </div>
    </div>
  );
};

export default SystemMonitor;