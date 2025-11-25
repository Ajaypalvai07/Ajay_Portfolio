import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getChatbotResponse } from '../data/chatbotData';
import { ChatMessage, Role } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: Role.MODEL, text: "Greetings. I am **Ajay's Assistant**. How can I assist your navigation?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: Role.USER, text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // Simulate network delay for realism
    setTimeout(() => {
      const responseText = getChatbotResponse(input);
      setMessages(prev => [...prev, { role: Role.MODEL, text: responseText, timestamp: new Date() }]);
      setIsThinking(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] glass rounded-xl flex flex-col overflow-hidden shadow-2xl border border-cyan-500/30 slide-in-bottom">
          {/* Header */}
          <div className="p-3 bg-slate-800/80 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-bold text-cyan-400 font-[Outfit]">AJAY'S ASSISTANT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === Role.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-xs md:text-sm ${msg.role === Role.USER
                  ? 'bg-cyan-600 text-white rounded-tr-none'
                  : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                  }`}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                      li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                      h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-base font-bold mb-2 text-cyan-300" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-sm font-bold mb-1 text-cyan-200" {...props} />,
                      a: ({ node, ...props }) => <a className="text-cyan-300 hover:text-cyan-100 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                      strong: ({ node, ...props }) => <strong className="font-bold text-cyan-100" {...props} />,
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none border border-slate-600">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about projects, skills..."
              className="flex-1 bg-slate-900 text-white text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <button
              onClick={handleSend}
              className="bg-cyan-600 hover:bg-cyan-500 text-white rounded px-3 py-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-slate-800 border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 animate-ping"></div>
        <div className="relative">
          {/* New Robot Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default AIAssistant;