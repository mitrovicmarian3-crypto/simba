"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Mail, ShieldCheck, FileText, Info, Star, Instagram, Facebook, Linkedin, Music2, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CookieConsent } from './CookieConsent';
import { SmoothScroll } from './SmoothScroll';
import { SERVICES_DATA } from '../constants/services';

// --- Icons ---
export const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- Background Components ---
const BackgroundAnimations = React.memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:_2s]" />
    </div>
  );
});

// --- Navigation ---
const Navigation = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <header className="flex items-center justify-between px-4 md:px-8 py-3 mx-auto max-w-[1250px] w-full transition-all duration-300 gap-3 xl:gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 px-1 shrink-0">
          <Link href="/" className="logo shrink-0 relative h-8 md:h-9 w-20 md:w-22">
            <Image 
              src="/images/logos/logo.png" 
              alt="Simba Facility Management - Unterhaltsreinigung & Gebäudereinigung Wien" 
              title="Simba Facility Management Logo"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="hidden sm:block font-serif text-[0.85rem] xl:text-[1.02rem] leading-tight shrink-0">
            <span className="text-primary font-black">Simba</span> <br className="xl:hidden" /> <span className="text-dark font-semibold">Facility Management</span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 flex-1 px-3">
          {['Home', 'Über uns', 'Leistungen', 'Blog', 'Kontakt'].map((item) => (
            item === 'Leistungen' ? (
              <div 
                key={item}
                className="relative group py-2"
                onMouseEnter={() => setIsLeistungenOpen(true)}
                onMouseLeave={() => setIsLeistungenOpen(false)}
              >
                <Link 
                  href="/leistungen" 
                  className="text-dark font-bold text-[0.75rem] xl:text-[0.82rem] uppercase tracking-wider hover:text-primary transition-all flex items-center gap-1 whitespace-nowrap"
                >
                  {item}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isLeistungenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </Link>
                <AnimatePresence>
                  {isLeistungenOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 overflow-hidden"
                    >
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block px-6 py-3 text-sm font-bold text-dark hover:bg-ice hover:text-primary transition-all"
                          onClick={() => setIsLeistungenOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link 
                key={item} 
                href={
                  item === 'Home' ? '/' : 
                  item === 'Über uns' ? '/ueber-uns' : 
                  item === 'Kontakt' ? '/kontakt' :
                  item === 'Blog' ? '/blog' :
                  `/#${item.toLowerCase().replace(' ', '-')}`
                } 
                className="text-dark font-bold text-[0.75rem] xl:text-[0.82rem] uppercase tracking-wider hover:text-primary transition-all py-2 whitespace-nowrap"
              >
                {item}
              </Link>
            )
          ))}
        </nav>
        {/* Actions Section */}
<div className="actions flex items-center gap-3.5 xl:gap-5 shrink-0">

  {/* Opening Hours left of Tel No */}
  <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-slate-50/70 text-[10px] xl:text-[11px] leading-none font-bold shrink-0 whitespace-nowrap">
    <Clock size={12} className="stroke-[2.5] text-primary shrink-0" />
    <span className="text-primary">Mo-Fr: 08-18</span>
    <span className="text-slate-300">•</span>
    <span className="text-slate-500">Sa: 08-12</span>
  </div>

  <a 
    href="tel:06601470316" 
    className="btn-header bg-primary hover:bg-[#003566] text-white px-4 md:px-5.5 py-2 md:py-2.5 rounded-full font-bold text-[0.75rem] md:text-[0.82rem] flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shrink-0 whitespace-nowrap border border-primary/10"
  >
    <Phone size={13} className="fill-white/20" /> 
    <span>+43 660 147 03 16</span>
  </a>

</div>
</header>
</div>
);
});

// --- Layout Component ---
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <BackgroundAnimations />
        <Navigation />
        <CookieConsent />
        
        <main>
          {children}
        </main>

        {/* --- MOBILE WHATSAPP FLOATING --- */}
        <a 
          href="https://wa.me/436601470316" 
          target="_blank" 
          rel="noopener noreferrer"
          className="lg:hidden fixed bottom-6 right-6 z-[2000] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
          aria-label="WhatsApp Kontakt"
        >
          <WhatsAppIcon size={28} />
        </a>

        {/* --- FOOTER --- */}
        <footer className="bg-primary text-white py-0 px-5">
          <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[1250px] mx-auto py-12">
            <div className="footer-col">
              <Link href="/" className="relative h-14 w-40 block mb-6">
                <Image 
                  src="/images/logos/logo.png" 
                  className="object-contain" 
                  alt="Simba Facility Management Logo" 
                  title="Simba Facility Management"
                  fill
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="opacity-90 leading-relaxed font-bold text-white mb-6">
                Ihr Meisterbetrieb für Wien & Umgebung. Professionelle Reinigungslösungen für Gewerbe und Privat.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://maps.google.com/maps?q=Herthergasse+37+15,+1120+Wien,+Austria&output=embed&hl=de" 
                  width="100%" height="100%" className="border-0" allowFullScreen loading="lazy" 
                  title="Standort von Simba Facility Management in Wien"
                />
              </div>
            </div>
            <div className="footer-col">
              <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Kontakt</h3>
              <div className="space-y-4 opacity-80 font-medium mb-8">
                <p className="flex items-center gap-3"><MapPin size={18} /> Herthergasse 37/15/1, 1120 Wien</p>
                <p className="flex items-center gap-3"><Phone size={18} /> <a href="tel:06601470316" className="hover:text-white transition-colors">0660 / 1470316</a></p>
                <p className="flex items-center gap-3"><Mail size={18} /> <a href="mailto:office@simbafm.at" className="hover:text-white transition-colors">office@simbafm.at</a></p>
                <p className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0" />
                   <span>Mo-Fr 08-18 Uhr, Sa 08-12 Uhr</span>
                </p>
                </div>
              </div>

              <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Folgen Sie uns</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/simba_facility_management?igsh=MWt4eTdvanlncGx1cA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-tr from-[#FFB553] via-[#E1306C] to-[#833AB4] rounded-full flex items-center justify-center hover:scale-110 transition-all text-white shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/share/18H3sXqtJ3/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-all text-white shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@sigmafacility?_r=1&_t=ZN-95guUYHLbeg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center hover:scale-110 transition-all text-white shadow-lg border border-white/20"
                  aria-label="TikTok"
                >
                  <Music2 size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jasmina-marinkovic-0351842a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-110 transition-all text-white shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Unsere Leistungen</h3>
              <ul className="space-y-4 opacity-80 font-medium">
                {SERVICES_DATA.map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} className="hover:opacity-100 transition-all">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Informationen</h3>
              <ul className="space-y-4 opacity-80 font-medium mb-8">
                <li><Link href="/blog" className="hover:opacity-100 transition-all flex items-center gap-3"><FileText size={18} /> Blog</Link></li>
                <li><Link href="/kontakt" className="hover:opacity-100 transition-all flex items-center gap-3"><Mail size={18} /> Kontakt</Link></li>
                <li><Link href="/agb" className="hover:opacity-100 transition-all flex items-center gap-3"><FileText size={18} /> AGB</Link></li>
                <li><Link href="/impressum" className="hover:opacity-100 transition-all flex items-center gap-3"><Info size={18} /> Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:opacity-100 transition-all flex items-center gap-3"><ShieldCheck size={18} /> Datenschutz</Link></li>
              </ul>
              
              <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Zertifizierungen</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5 group">
                  <div className="relative h-16 w-24 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Image 
                      src="/images/logos/meisterbetrieb.png" 
                      alt="Meisterbetrieb" 
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-bold opacity-100 leading-tight">Staatlich geprüfter Meisterbetrieb</span>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="relative h-16 w-24 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Image 
                      src="/images/logos/haccp.png" 
                      alt="HACCP zertifiziert" 
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-bold opacity-100 leading-tight">HACCP zertifizierte Hygiene</span>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="relative h-16 w-24 bg-white rounded-lg p-2 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Image 
                      src="/images/logos/anko.png" 
                      alt="ANKÖ Führungsbestätigung" 
                      fill
                      className="object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-bold opacity-100 leading-tight">ANKÖ Führungsbestätigung</span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1250px] mx-auto pb-8 border-t border-white/10 text-center opacity-60 text-sm font-bold">
            <div className="pt-8 mb-4 flex items-center justify-center gap-2 text-white/80">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span>Top bewertete Reinigungsfirma in Wien auf Google</span>
            </div>
            <p>© {new Date().getFullYear()} Simba Facility Management. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
};
