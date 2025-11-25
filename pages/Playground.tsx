import React, { useState } from 'react';
import { generateResponse } from '../services/geminiService';

const Playground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'generate' | 'code'>('generate');

  const handleRun = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setOutput('');
    try {
      const systemPrompt = mode === 'code' 
        ? "You are a coding engine. Output ONLY code based on the request. No markdown backticks, just raw code or code inside a block." 
        : "You are a creative AI engine.";
      
      const result = await generateResponse(prompt, systemPrompt);
      setOutput(result);
    } catch (error) {
      setOutput("Error executing model.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen container mx-auto px-6 pb-20">
      <h2 className="text-4xl font-bold text-white mb-2 font-[Orbitron]">AI PLAYGROUND</h2>
      <p className="text-slate-400 mb-8">Live interface to Gemini 2.5 Flash. Test the model directly from the browser.</p>

      <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
        {/* Input Section */}
        <div className="lg:w-1/2 flex flex-col glass p-6 rounded-xl border border-slate-700">
          <div className="flex gap-4 mb-4">
            <button 
              onClick={() => setMode('generate')}
              className={`px-4 py-2 rounded font-bold text-sm transition-colors ${mode === 'generate' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              TEXT GENERATION
            </button>
            <button 
              onClick={() => setMode('code')}
              className={`px-4 py-2 rounded font-bold text-sm transition-colors ${mode === 'code' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              CODE SYNTHESIS
            </button>
          </div>

          <textarea 
            className="flex-1 bg-slate-900/50 border border-slate-600 rounded-lg p-4 text-slate-200 focus:border-cyan-500 focus:outline-none resize-none code-font text-sm"
            placeholder={mode === 'code' ? "// Describe the function you need..." : "Enter your prompt here..."}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="mt-4 flex justify-end">
            <button 
              onClick={handleRun}
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded shadow-lg disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING
                </>
              ) : (
                <>RUN MODEL</>
              )}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:w-1/2 glass p-6 rounded-xl border border-slate-700 relative overflow-hidden flex flex-col">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
           <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">System Output</h3>
           
           <div className="flex-1 bg-slate-950 rounded-lg p-4 overflow-y-auto border border-slate-800 code-font text-sm text-green-400 whitespace-pre-wrap">
             {output ? output : <span className="text-slate-600 opacity-50">Waiting for input stream...</span>}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;