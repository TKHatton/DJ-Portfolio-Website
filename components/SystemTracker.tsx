
import React from 'react';
import { Clock, FlaskConical, Target } from 'lucide-react';
import { SYSTEMS } from '../constants';

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    'In Development': 'bg-brand-orange/20 text-brand-orange border-brand-orange/20',
    'Validating': 'bg-brand-sage/20 text-brand-sage border-brand-sage/20',
    'Planning': 'bg-brand-tan/20 text-brand-tan border-brand-tan/20',
  }[status] || 'bg-brand-grey/20 text-brand-grey';

  const icons = {
    'In Development': <Clock size={12} />,
    'Validating': <FlaskConical size={12} />,
    'Planning': <Target size={12} />,
  }[status] || null;

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold border flex items-center gap-1.5 ${styles}`}>
      {icons} {status}
    </span>
  );
};

const SystemTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      {SYSTEMS.map((system) => (
        <div 
          key={system.id} 
          className="dark-glass-card p-8 rounded-3xl border-l-4 border-brand-orange hover:translate-x-2 transition-transform duration-300 shadow-xl border-brand-cream/5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-cream">{system.name}</h3>
              <p className="text-brand-orange/80 text-xs font-bold uppercase tracking-[0.2em] mt-2">
                Expected: {system.availability}
              </p>
            </div>
            <StatusBadge status={system.status} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-brand-cream/80">
            <div>
              <p className="text-brand-cream/30 text-[10px] uppercase font-black mb-3 tracking-[0.3em]">Problem It Solves</p>
              <p className="text-sm italic font-light leading-relaxed">"{system.problem}"</p>
            </div>
            <div>
              <p className="text-brand-cream/30 text-[10px] uppercase font-black mb-3 tracking-[0.3em]">Who It's For</p>
              <p className="text-sm italic font-light leading-relaxed">{system.whoItIsFor}</p>
            </div>
          </div>

          <button className="btn-angular px-8 py-3 bg-brand-cream/5 border border-brand-cream/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all text-xs font-bold uppercase tracking-widest text-brand-cream">
            Get Early Access
          </button>
        </div>
      ))}
    </div>
  );
};

export default SystemTracker;
