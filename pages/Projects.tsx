import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-6 pb-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 font-[Orbitron]">PROJECT MATRIX</h2>
        <p className="text-slate-400 max-w-2xl">
          A collection of deployed systems. Interact with the cards to see AI-generated insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;