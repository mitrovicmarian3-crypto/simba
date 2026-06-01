"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Victoria R.',
    text: 'Jasmina ist mega professionell in ihrer Arbeitsweise und man kann ihrem Team ohne Bedenken vertrauen. Das finde ich extrem wichtig bei einer Reinigungsfirma! Immer wieder gerne :)',
    rating: 5
  },
  {
    name: 'Almira S.',
    text: 'Top Chefin! Sehr Professionell sauber pünktlich und verlässlich. Diese Firma kann ich mit gutem gewissen weiterempfehlen.',
    rating: 5
  },
  {
    name: 'Isabella S.',
    text: 'Ich kann nur ein großes Lob aussprechen. Machen einen tollen Job in der Reinigung und sind immer freundlich und zuvorkommend. Gerne wieder!',
    rating: 5
  },
  {
    name: 'Silja H.',
    text: 'Wir sind mehr als zufrieden mit der Unterhaltsreinigung! Seit über einem Jahr nehmen wir das Service in Anspruch und sind durchgehend rundum zufrieden. Die Qualität der Arbeit ist konstant hervorragend. Vom ersten Kontakt bis zur Durchführung verläuft alles stets professionell, freundlich und zuverlässig. Besonders hervorheben möchten wir Frau Jasmina. Sie koordiniert alles äußerst zuverlässig und professionell und fragt stets nach, ob alles in Ordnung ist. Diese Aufmerksamkeit und ihr Engagement zeigen, wie wichtig ihr die Kundenzufriedenheit ist. Zudem ist sie immer freundlich, hilfsbereit und sehr angenehm im Umgang. Wir freuen uns auf die weitere Zusammenarbeit und können Simba Facility uneingeschränkt weiterempfehlen!',
    rating: 5
  },
  {
    name: 'Markus H.',
    text: 'Ich habe ursprünglich Simba Facility B2B kennengelernt. Aufgrund der guten Erinnerungen habe ich mich vor ca. zwei Monaten dazu entschieden für meine Privatwohnung eine wöchentliche Reinigung anzufragen. Nix aufregendes, putzen halt, aber bei den eigenen vier Wänden muss das Vertrauensverhältnis und Preis/Leistung stimmen, gleichzeitig eine gewisse Flexibilität möglich sein. Ich bin vollauf begeistert. 3mal 5 Sterne! Unkompliziert, professionell und top Qualität. Klare Empfehlung!',
    rating: 5
  },
  {
    name: 'Alminko D.',
    text: 'Unser Büro wird von Simba Betreut, Top Zuverlässig, Preis Leistung Top👌 …',
    rating: 5
  },
  {
    name: 'Jasmin S.',
    text: 'Großartige Chefin - top Leistung - wir sind sehr zufrieden!',
    rating: 5
  },
  {
    name: 'Sonnenschein.',
    text: 'Wie jedes Jahr waren wir auch heuer wieder sehr zufrieden mit unserer Terrassen-Reinigung von Simba Facility👍 Pünktlich , ordentlich , sympathisch und alles super sauber ! Nächstes Jahr wieder …',
    rating: 5
  },
  {
    name: 'The',
    text: 'Ein wunderbares Unternehmen. Ich bin sehr zufrieden mit der Reinigungsarbeit. Wird auf jeden Fall weiterempfohlen',
    rating: 5
  }
];

export const ReviewSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex gap-6 animate-scroll whitespace-nowrap">
        {/* Render base reviews for SEO */}
        {REVIEWS.map((review, i) => (
          <div 
            key={`base-${i}`} 
            className="inline-block w-[300px] md:w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow whitespace-normal shrink-0"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(review.rating)].map((_, starIdx) => (
                <Star key={starIdx} size={14} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-sm md:text-base font-medium text-dark/80 mb-6 line-clamp-4 italic leading-relaxed">
              "{review.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                {review.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-bold text-dark text-sm leading-none mb-1">{review.name}</p>
                <p className="text-[9px] text-dark/30 font-bold uppercase tracking-widest">Verifizierter Kunde</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Render clones ONLY on client for seamless loop - prevents SEO duplicate content */}
        {mounted && REVIEWS.map((review, i) => (
          <div 
            key={`clone-${i}`} 
            aria-hidden="true"
            className="inline-block w-[300px] md:w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] shadow-none whitespace-normal shrink-0 pointer-events-none opacity-100"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(review.rating)].map((_, starIdx) => (
                <Star key={starIdx} size={14} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-sm md:text-base font-medium text-dark/80 mb-6 line-clamp-4 italic leading-relaxed">
              "{review.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                {review.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-bold text-dark text-sm leading-none mb-1">{review.name}</p>
                <p className="text-[9px] text-dark/30 font-bold uppercase tracking-widest">Verifizierter Kunde</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
