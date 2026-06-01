"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const ServiceFAQ = ({ items, title = "Häufig gestellte Fragen (FAQ)", subtitle = "Häufig gefragt.", alignment = 'center' }: ServiceFAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  const isCenter = alignment === 'center';

  return (
    <div className="mt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {subtitle && <p className={`text-primary italic font-serif text-xl mb-1 ${isCenter ? 'text-center' : 'text-left'}`}>{subtitle}</p>}
      {title && <h2 className={`text-3xl md:text-5xl font-extrabold text-primary mb-12 tracking-tight ${isCenter ? 'text-center' : 'text-left'}`}>{title}</h2>}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-7 text-left bg-white hover:bg-primary/[0.03] transition-all duration-300 group"
            >
              <span className="font-bold text-dark/90 text-lg md:text-xl group-hover:text-primary transition-colors pr-8">{item.question}</span>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                {activeIndex === index ? (
                  <Minus size={24} className="text-primary" />
                ) : (
                  <Plus size={24} className="text-primary" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 pt-0 text-dark/70 leading-relaxed bg-white border-t border-gray-50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
