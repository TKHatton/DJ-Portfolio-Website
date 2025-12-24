
import React from 'react';
import { BookOpen } from 'lucide-react';

const BookSection: React.FC = () => {
  return (
    <div className="dark-glass-card rounded-[3rem] p-8 md:p-12 overflow-hidden relative border-brand-cream/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <h3 className="text-4xl md:text-5xl font-black leading-tight text-brand-cream">
            Building <span className="text-brand-orange">The Invisible</span> Architect
          </h3>
          <p className="text-brand-cream/70 text-lg leading-relaxed">
            This book teaches you how to build custom automation systems without code.
            Perfect for entrepreneurs, creators, and small business owners who want to
            save time and stay competitive.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Mindset of Automation', 'Tools for the New Age', 'Building Your First System', 'Scaling with AI'].map((topic, i) => (
              <li key={i} className="flex items-center gap-2 text-brand-cream/50 text-sm italic">
                <BookOpen size={14} className="text-brand-orange" /> {topic}
              </li>
            ))}
          </ul>
          <button className="btn-angular px-8 py-4 bg-brand-orange text-white font-bold hover:bg-brand-orange/90 transition-all mt-4 shadow-xl shadow-brand-orange/20">
            Notify Me When It Launches
          </button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-64 h-80 md:w-80 md:h-[450px] bg-gradient-to-br from-brand-orange to-brand-peach rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-teal/20 mix-blend-multiply rounded-lg"></div>
            <div className="relative z-10 space-y-4">
              <div className="text-white font-black text-3xl leading-none drop-shadow-md">THE INVISIBLE ARCHITECT</div>
              <div className="text-white/70 text-[10px] uppercase font-bold tracking-widest italic">Building Systems Without Code</div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="text-white font-bold text-lg tracking-wide drop-shadow-lg">Lenise Kenney</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
