import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import AIAssistant from './components/AIAssistant';
import NeuralBackground from './components/NeuralBackground';
import NavigationAgent from './components/NavigationAgent';
import SystemMonitor from './components/SystemMonitor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { NavigationProvider } from './context/NavigationContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavigationProvider>
        <div className="relative min-h-screen text-slate-200 selection:bg-fuchsia-500 selection:text-white">
          <NeuralBackground />
          <NavigationAgent />
          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <SystemMonitor />
          <AIAssistant />
        </div>
      </NavigationProvider>
    </HashRouter>
  );
};

export default App;