"use client";

import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Send } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  defaultSubject?: string;
  customSubjects?: string[];
  id?: string;
}

export const ContactSection = ({ 
  title = "Kompetente Beratung für Ihr sauberes Umfeld.",
  subtitle = "Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien & Umgebung.",
  defaultSubject,
  customSubjects,
  id = "kontakt"
}: ContactSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-20 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
          <div>
            <div className="inline-block bg-primary text-white px-5 py-2 rounded-md font-bold mb-6 tracking-widest uppercase text-[10px]">
              Kontakt
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-8 tracking-tight">
              {title.split(' ').map((word, i) => (
                word.includes('sauberes') || word.includes('glänzendes') || word.includes('neues') || word.includes('Karriere') ? <span key={i} className="italic font-extrabold"> {word} </span> : word + ' '
              ))}
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-xs group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-dark/70 mb-1">Telefonisch erreichbar</p>
                  <a href="tel:06601470316" className="text-2xl font-bold text-dark hover:text-primary transition-colors">0660 / 1470316</a>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-xs group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-dark/80 mb-1">Schreiben Sie uns</p>
                  <a href="mailto:simbafacility@outlook.com" className="text-2xl font-bold text-dark hover:text-primary transition-colors break-all md:break-normal">simbafacility@outlook.com</a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-xs group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-dark/80 mb-1">Unser Standort</p>
                  <p className="text-2xl font-bold text-dark italic font-serif">Wien, Österreich</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4 text-dark/40">
              <ShieldCheck size={20} className="text-primary" />
              <p className="text-sm">Sicherer Datentransfer & DSGVO-konform</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <div className="mb-8">
               <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Anfrage senden</h3>
               <p className="text-slate-500 text-sm italic">{subtitle}</p>
            </div>
            <ContactForm defaultSubject={defaultSubject} customSubjects={customSubjects} />
          </div>
        </div>
      </div>
    </section>
  );
};
