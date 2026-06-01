import React from 'react';
import { CheckCircle, Briefcase, Home, Building2, Wind, ShieldPlus, Trees, Snowflake, Trash2, Sparkles, ArrowRight, School, ParkingCircle, Factory } from 'lucide-react';
import Link from 'next/link';
import { SERVICES_DATA } from '../../constants/services';

export default function LeistungenPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="mb-20 text-center">
          <div className="inline-block bg-primary/5 text-primary px-5 py-2 rounded-full font-bold mb-6 tracking-widest uppercase text-xs">
            Unser Portfolio
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-tight mb-8">
            Alle Leistungen <span className="italic">auf einen Blick.</span>
          </h1>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto leading-relaxed">
            Von der Unterhaltsreinigung bis zur spezialisierten Sonderreinigung – wir bieten maßgeschneiderte Lösungen für jedes Objekt in Wien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES_DATA.map((service, idx) => {
            const icons: Record<string, any> = {
              Briefcase, Home, Building2, Wind, ShieldPlus, Trees, Snowflake, Trash2, Sparkles, School, ParkingCircle, Factory
            };
            const IconComponent = icons[service.icon || 'Briefcase'] || Briefcase;

            return (
              <div 
                key={idx}
                className="group bg-white p-8 md:p-12 border border-gray-100 rounded-[40px] hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-all group-hover:w-40 group-hover:h-40 group-hover:bg-primary/10" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-ice rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <IconComponent size={32} />
                  </div>
                  
                  <h2 className="text-3xl font-serif text-dark mb-6 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  
                  <p className="text-dark/60 mb-8 leading-relaxed">
                    Professionelle Lösung für höchste Ansprüche im Bereich {service.title.toLowerCase()}.
                  </p>

                  <div className="space-y-4 mb-12">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-primary/40 mt-1 flex-shrink-0" />
                        <span className="text-base font-medium text-dark/70 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.path} 
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-dark transition-all shadow-lg shadow-primary/20"
                  >
                    Details & Preise <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="mt-32 p-10 md:p-20 bg-primary rounded-[60px] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-20" />
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            Nichts Passendes dabei?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Wir erstellen auch individuelle Reinigungspläne genau nach Ihren Vorgaben. Sprechen wir darüber!
          </p>
          <Link href="/#kontakt" className="bg-white text-primary px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-ice transition-all shadow-2xl">
            Jetzt anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
