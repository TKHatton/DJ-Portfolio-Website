
import React from 'react';

interface ParallaxVideoProps {
  videoSrc?: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  text?: string;
}

const ParallaxVideo: React.FC<ParallaxVideoProps> = ({
  videoSrc = '/videos/hero-video.mp4',
  height = 'medium',
  overlay = true,
  text,
}) => {
  const heightClasses = {
    small: 'h-[50vh]',
    medium: 'h-[70vh]',
    large: 'h-screen',
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden my-16`}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/60" />
      )}

      {text && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-4xl md:text-6xl font-black text-brand-cream text-center px-6 drop-shadow-2xl">
            {text}
          </h2>
        </div>
      )}
    </section>
  );
};

export default ParallaxVideo;
