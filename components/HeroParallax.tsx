
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroParallax: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black mt-20">
      <video
        src="/videos/hero-video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Subtle Branding Overlay */}
      <div className="absolute top-8 left-8 z-10">
        <div className="text-brand-cream">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Digital <span className="text-brand-orange">Jaywalking</span>
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-brand-cream/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="animate-bounce text-brand-orange">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroParallax;
