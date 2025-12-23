
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, index) => (
        <div 
          key={index} 
          className="border border-brand-cream/10 rounded-[1.5rem] overflow-hidden bg-brand-black/20 backdrop-blur-sm transition-all"
        >
          <button 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-7 text-left hover:bg-brand-cream/5 transition-colors"
          >
            <span className="text-lg font-bold text-brand-cream pr-4">
              {faq.question}
            </span>
            <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-orange text-white' : 'bg-brand-cream/5 text-brand-orange'}`}>
              {openIndex === index ? (
                <Minus size={18} />
              ) : (
                <Plus size={18} />
              )}
            </div>
          </button>
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="p-7 pt-0 text-brand-cream/60 leading-relaxed border-t border-brand-cream/5 font-light">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
