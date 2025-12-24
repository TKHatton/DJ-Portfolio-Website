
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent: React.FC = () => {
  return (
    <section className="bg-brand-black text-brand-cream py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">
              Welcome to Digital Jaywalking
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight font-display tracking-tighter text-brand-cream">
              Building Systems <br/>That <span className="text-brand-orange italic">Actually Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream/70 leading-relaxed max-w-3xl mx-auto">
              Custom automation, web development, and AI-powered tools designed to save you time and scale your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="btn-angular px-10 py-5 bg-brand-orange text-white font-bold hover:bg-brand-orange/90 transition-all flex items-center gap-3 shadow-xl shadow-brand-orange/20">
                <ArrowRight size={20} /> Let's Build Something
              </button>
              <button className="btn-angular px-10 py-5 bg-brand-cream/10 backdrop-blur-md border-2 border-brand-cream/20 text-brand-cream font-bold hover:bg-brand-cream/20 transition-all">
                View My Work
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroContent;
