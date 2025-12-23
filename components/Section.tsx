
import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'cream' | 'teal' | 'black';
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle, className = '', variant = 'cream' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const bgClass = {
    cream: 'bg-brand-cream text-brand-black',
    teal: 'bg-brand-teal text-brand-cream',
    black: 'bg-brand-black text-brand-cream',
  }[variant];

  return (
    <section 
      ref={sectionRef} 
      className={`py-24 px-6 md:px-12 ${bgClass} ${className}`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && (
              <p className="text-brand-orange uppercase tracking-[0.2em] font-bold text-xs mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-extrabold font-display">
                {title}
              </h2>
            )}
            <div className="h-1 w-20 bg-brand-orange mt-6" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
