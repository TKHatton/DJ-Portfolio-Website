
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project) => (
        <div 
          key={project.id} 
          className="group relative overflow-hidden rounded-[2.5rem] bg-brand-orange/5 border border-brand-orange/10 aspect-[4/5] shadow-xl"
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-brand-cream mb-2 group-hover:text-brand-orange transition-colors drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-brand-cream/70 text-sm mb-6 max-w-xs leading-relaxed">
              {project.description}
            </p>
            <a 
              href={project.link || '#'} 
              className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-[0.2em] hover:gap-4 transition-all"
            >
              View Project <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
