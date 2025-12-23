
import React from 'react';
import { Cpu, Layout, BrainCircuit, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={32} />,
  Layout: <Layout size={32} />,
  BrainCircuit: <BrainCircuit size={32} />,
  Zap: <Zap size={32} />,
};

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service) => (
        <div 
          key={service.id}
          className="dark-glass-card p-8 rounded-3xl hover:border-brand-orange/40 transition-all duration-300 group hover:-translate-y-2 border-brand-cream/5"
        >
          <div className="mb-6 p-4 bg-brand-cream/5 rounded-2xl w-fit group-hover:bg-brand-orange/10 transition-colors text-brand-orange shadow-lg">
            {IconMap[service.iconName]}
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-cream group-hover:text-brand-orange transition-colors">
            {service.title}
          </h3>
          <p className="text-brand-cream/50 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
