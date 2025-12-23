
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const HeroParallax: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const VIDEO_URL = "https://yntowivdfwmsygfrptrx.supabase.co/storage/v1/object/public/Webp%20Sequence/hero_tech_video.mp4";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollProgress(progress);

      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = videoRef.current.duration * progress;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[250vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-0 bg-brand-black">
        {/* Parallax Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 ease-out"
            style={{ 
              transform: `scale(${1 + scrollProgress * 0.15})`,
              filter: `brightness(${1 - scrollProgress * 0.5}) contrast(1.1)`
            }}
          />
          {/* Overlays for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-teal/20 to-brand-black z-10" />
          <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full pt-20">
            {/* Left Column: Identity */}
            <div 
              className="space-y-6 animate-slide-up"
              style={{ transform: `translateY(-${scrollProgress * 50}px)` }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-sm drop-shadow-lg">
                  Welcome to Digital Jaywalking
                </span>
                <h1 className="text-7xl md:text-[9rem] font-extrabold leading-none font-display tracking-tighter drop-shadow-2xl text-brand-cream">
                  Digital<br />
                  <span className="text-brand-cream/30 italic">Jaywalking</span>
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                {[
                  "#01 Custom Automation Systems",
                  "#02 Web Design & Development",
                  "#03 AI-Powered Tools & Workflows",
                  "#04 No-Code Solutions"
                ].map((skill, i) => (
                  <div key={i} className="text-[10px] uppercase tracking-wider text-brand-cream/50 border-l border-brand-orange/50 pl-3 py-2 bg-brand-teal/20 backdrop-blur-sm rounded-r-md">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Value Prop */}
            <div 
              className="lg:pt-24 space-y-8 animate-slide-up [animation-delay:200ms]"
              style={{ transform: `translateY(-${scrollProgress * 100}px)` }}
            >
              <div className="max-w-md glass-card p-8 rounded-[2rem] border-brand-cream/10 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-cream leading-tight">
                  Stop Wasting Time on <span className="italic text-brand-orange underline decoration-brand-peach/30 decoration-4 underline-offset-8">Manual Work</span>
                </h2>
                <p className="text-lg text-brand-cream/70 leading-relaxed mb-8">
                  I build custom systems that automate your workflow, save you hours every week, 
                  and help you focus on what actually matters.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                   <button className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(240,104,54,0.3)]">
                    Let's Build It <ArrowRight size={18} />
                  </button>
                  <button className="px-8 py-4 bg-brand-teal/40 backdrop-blur-md border border-brand-cream/10 text-brand-cream font-bold rounded-full hover:bg-brand-teal/60 transition-all flex items-center justify-center">
                    See My Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons & Scroll Indicator */}
        <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-6 z-30 transition-opacity duration-300" style={{ opacity: 1 - scrollProgress * 3 }}>
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="text-brand-cream/40 hover:text-brand-orange transition-all duration-300 hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="animate-bounce text-brand-orange/50">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroParallax;
