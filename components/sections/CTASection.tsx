
import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import Section from '../Section';

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: 'cream' | 'teal';
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Stop Wasting Time?",
  description = "Let's talk about what's broken in your business. No pitch. Just a conversation about your systems.",
  variant = 'cream'
}) => {
  return (
    <Section className="pb-32" variant={variant}>
      <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-brand-black">
          {title.split(' ').slice(0, -2).join(' ')} <span className="text-brand-orange underline decoration-brand-sage/30 underline-offset-8">{title.split(' ').slice(-2).join(' ')}</span>
        </h2>
        <p className="text-xl text-brand-black/60">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="btn-angular px-12 py-5 bg-brand-orange text-white font-bold hover:bg-brand-orange/90 flex items-center gap-3 shadow-xl shadow-brand-orange/20">
            <MessageSquare size={20} /> Tell Me About Your Problem
          </button>
          <button className="btn-angular px-12 py-5 bg-brand-black/90 backdrop-blur-md border-2 border-brand-orange text-brand-cream font-bold hover:bg-brand-black transition-all flex items-center gap-3">
            <Calendar size={20} /> Book a Quick Call
          </button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
