import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('analyzing');
    // Simulate AI analysis
    setTimeout(() => {
      setStatus('sent');
    }, 2000);
  };

  return (
    <div className="pt-24 min-h-screen container mx-auto px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full glass p-8 rounded-2xl border border-slate-700">
        <h2 className="text-3xl font-bold text-white mb-2 font-[Outfit]">ESTABLISH UPLINK (Connect)</h2>
        <p className="text-slate-400 mb-8">Send a message</p>

        {status === 'sent' ? (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">TRANSMISSION RECEIVED</h3>
            <p>Analysis: Professional Tone detected. Sentiment: Positive.</p>
            <p className="mt-2 text-sm text-slate-400">I will get back to you within 24 computational hours.</p>
            <button onClick={() => setStatus('idle')} className="mt-4 text-white hover:underline">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm mb-2">IDENTIFIER (NAME)</label>
              <input required type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">COORDINATES (EMAIL)</label>
              <input required type="email" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">PAYLOAD (MESSAGE)</label>
              <textarea required rows={5} className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'analyzing'}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded transition-all flex justify-center items-center gap-2"
            >
              {status === 'analyzing' ? 'ANALYZING SEMANTICS...' : 'TRANSMIT DATA'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;