"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Star, MapPin, Mail, CheckCircle, Clock, Award, 
  ShieldCheck, ExternalLink, Home, Wind, Briefcase, Building2, 
  ShieldPlus, Trees, Snowflake, Trash2, Sparkles, ChevronDown, 
  ChevronUp, ArrowRight, School, ParkingCircle, Factory, FileText, Check 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '../constants/services';
import { ContactForm } from '@/components/ContactForm';
import { ReviewSlider } from '@/components/ReviewSlider';

export const HomeClient = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const faqs = [
    { num: "01", q: "Welche Leistungen bietet Simba Facility Management an?", a: "Wir bieten professionelle Unterhaltsreinigung, Sonderreinigung, Fensterreinigung, Industrie- und Ordinationsreinigung sowie Hausbetreuung für Unternehmen in Wien und Umgebung." },
    { num: "02", q: "Für welche Branchen arbeiten Sie?", a: "Wir betreuen unter anderem Büros, Hotels, Arztpraxen, Industrieunternehmen, Schulen, Kindergärten, Wohnanlagen und Gewerbeobjekte." },
    { num: "03", q: "Wie stellen Sie gleichbleibende Qualität sicher?", a: "Durch strukturierte Reinigungsprozesse, regelmäßige Qualitätskontrollen und geschulte Mitarbeiter gewährleisten wir dauerhaft hohe Hygienestandards in Ihrem Objekt." },
    { num: "04", q: "Wie schnell erhalten wir ein Angebot?", a: "In der Regel erhalten Sie innerhalb von 24 Stunden ein individuelles und unverbindliches Angebot." },
    { num: "05", q: "Sind Sie auch außerhalb der Bürozeiten verfügbar?", a: "Ja. Viele Reinigungsarbeiten führen wir flexibel außerhalb Ihrer Geschäftszeiten durch, um Ihren Betriebsablauf nicht zu stören." },
    { num: "06", q: "Welche Qualitätsstandards verwenden Sie?", a: "Als Wiener Meisterbetrieb arbeiten wir mit klaren Qualitätsprozessen, regelmäßigen Kontrollen und professionellen Hygienestandards." },
    { num: "07", q: "Verwenden Sie umweltfreundliche Reinigungsmittel?", a: "Ja. Wir achten auf moderne, materialschonende und nachhaltige Reinigungslösungen für langfristigen Werterhalt und hygienische Sauberkeit." },
    { num: "08", q: "Können Reinigungszeiten individuell angepasst werden?", a: "Ja. Wir passen unsere Einsätze flexibel an Ihre Betriebszeiten und internen Abläufe an – auch früh morgens, abends oder außerhalb Ihrer Geschäftszeiten." },
    { num: "09", q: "In welchen Bezirken sind Sie tätig?", a: "Wir betreuen Kunden in ganz Wien und Umgebung." },
    { num: "10", q: "Warum entscheiden sich Unternehmen für Simba Facility Management?", a: "Unternehmen schätzen unsere Verlässlichkeit, schnelle Kommunikation, strukturierten Abläufe und den hohen Qualitätsanspruch unseres Meisterbetriebs." }
  ];

  // Map icons dynamically
  const iconsMap: Record<string, any> = {
    Briefcase, Home, Building2, Wind, ShieldPlus, Trees, Snowflake, Trash2, Sparkles, School, ParkingCircle, Factory
  };

  // Helper to adjust the focal point of specific services upwards
  const getServicePositionClass = (id: string) => {
    switch (id) {
      case 'unterhalts-buero-reinigung':
      case 'sonderreinigung':
      case 'hausbetreuung':
      case 'glasreinigung':
        return 'object-[center_12%]';
      case 'ordinationsreinigung':
      case 'entruempelungen':
      case 'schul-kindergartenreinigung':
        return 'object-[center_8%]';
      default:
        return 'object-center';
    }
  };

  // We split services: First 6 core services, then remaining database options
  const coreServiceIds = [
    'unterhalts-buero-reinigung', 
    'sonderreinigung', 
    'fassadenreinigung', 
    'hausbetreuung', 
    'industriereinigung', 
    'glasreinigung'
  ];

  const sortedServices = [...SERVICES_DATA].sort((a, b) => {
    const aIndex = coreServiceIds.indexOf(a.id);
    const bIndex = coreServiceIds.indexOf(b.id);
    
    // Sort core service ids first in exact matching order
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });

  const coreServices = sortedServices.slice(0, 6);
  const expandableServices = sortedServices.slice(6);

  return (
    <div className="w-full bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* =========================================================
          1. HERO SECTION (GRID LAYOUT WITH PERFECT ASPECTS TO AVOID CROPPING)
          ========================================================= */}
      <section className="relative w-full bg-white overflow-hidden lg:min-h-[685px]" id="hero">
        {/* Subtitle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />

        {/* Container for Content */}
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full pt-28 pb-2 lg:pt-32 lg:pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start">
              
              {/* Circular Simba Logo & Company Name Container */}
              <div className="flex items-center gap-3.5 mb-5 animate-fade-in">
                <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
                  <Image
                    src="/images/logos/logo.png"
                    alt="Simba Facility Management Logo"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-[#003067] font-black tracking-wider text-base md:text-lg lg:text-xl uppercase leading-none mb-1">
                    Simba
                  </h2>
                  <span className="text-primary font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] block leading-none">
                    Facility Management
                  </span>
                </div>
              </div>

              {/* Split Style Headline optimized for search: 'Gebäudereinigung' + 'Wien' */}
              <h1 className="text-[#003067] leading-[1.08] mb-2 tracking-tight">
                <span className="block text-3xl md:text-4.5xl lg:text-[45px] xl:text-[52px] font-light">Ihre</span>
                <span className="block text-3xl md:text-4.5xl lg:text-[45px] xl:text-[52px] font-black">Gebäudereinigung in</span>
                <span className="block text-3xl md:text-4.5xl lg:text-[45px] xl:text-[52px] font-black">Wien</span>
              </h1>

              {/* Serif Italic Subtitle from Mockup as h3 according to hierarchy */}
              <h3 className="font-serif italic text-lg md:text-xl text-[#004e9a] mb-5 tracking-wide font-normal">
                Ihr Erfolg in sauberen Händen
              </h3>

              {/* Paragraph Text from reference image */}
              <p className="text-base text-slate-600 max-w-xl leading-relaxed mb-6">
                Professionelle <strong className="font-semibold text-slate-800">Gebäudereinigung</strong> & <strong className="font-semibold text-slate-800">Unterhaltsreinigung</strong>. Wir sorgen für makellose Sauberkeit, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
              
              {/* Buttons from reference image */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Link 
                  href="#kontakt" 
                  className="w-full sm:w-auto text-center bg-[#003067] hover:bg-primary text-white font-bold px-8 py-3.5 rounded-lg text-sm md:text-base border border-[#003067] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Kostenloses Angebot
                </Link>
                <Link 
                  href="#services" 
                  className="w-full sm:w-auto text-[#004e9a] font-bold px-8 py-3.5 rounded-lg text-sm md:text-base transition-all flex items-center justify-center gap-2 bg-[#f0f9ff] hover:bg-[#e0f2fe] border border-[#bae6fd]"
                >
                  Unsere Leistungen
                </Link>
              </div>

              {/* Mobile team image - visible only on mobile/tablet screens (aligned to exact 800x1200 aspect ratio) */}
              <div className="relative w-full aspect-[800/1200] max-h-[480px] sm:max-h-[550px] mx-auto rounded-2xl overflow-hidden shadow-md mt-10 block lg:hidden">
                <Image 
                  src="/images/hero/header.webp" 
                  alt="Simba Facility Management - Professionelle Gebäudereinigung Wien" 
                  fill
                  className="object-cover object-[center_8%]"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

            {/* Right Side: Image Column (perfectly scaled to 800/1200 portrait ratio to guarantee zero head/body cropping) */}
            <div className="lg:col-span-6 hidden lg:block w-full">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full aspect-[800/1200] max-h-[500px] xl:max-h-[580px] ml-auto overflow-hidden"
                style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <img
                src="/images/hero/header.webp"
                alt="Simba Facility Management – Gebäudereinigung in Wien"
                className="absolute inset-0 h-full w-full object-cover object-[center_8%]"
               />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Soft background circle effect to give depth */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D9EAFF]/40 rounded-full blur-3xl -z-10" />
      </section>

      {/* =========================================================
          2. TRUSTED COMPANIES BANNER (MARQUEE OR GRID LOGOS)
          ========================================================= */}
      <section className="pt-2 pb-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left side: Bigger colored logos in a nice clean grid */}
            <div className="lg:col-span-7">
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 mb-8 lg:text-left text-center" id="partners">
                Ein Auszug unserer geschätzten Partner & Großkunden in Wien:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-center justify-items-center">
                {[
                  { name: "Berger Parkinnen", src: "/images/partners/berger.webp" },
                  { name: "GoodMills", src: "/images/partners/goodmills.webp" },
                  { name: "EPOFilm", src: "/images/partners/epo.webp" },
                  { name: "Steininger", src: "/images/partners/steininger.webp" },
                ].map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="relative h-16 w-32 sm:w-36 md:h-20 md:w-40 transition-all duration-300 flex items-center justify-center hover:scale-105"
                  >
                    <Image 
                      src={partner.src} 
                      alt={`${partner.name} - Simba Facility Management Partner`}
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side: Explanatory and professional text content to fill the banner perfectly */}
            <div className="lg:col-span-5 bg-slate-50/80 p-8 rounded-2xl border border-slate-100 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" id="excellence-indicator" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#004e9a]">
                  Exzellenz aus Wien
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#003067] tracking-tight leading-snug mb-3">
                Über 200 treue Gewerbekunden & Großprojekte
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vom geschichtsträchtigen Palais über moderne Bürokomplexe bis hin zu anspruchsvollen Hotels und Wohnhausanlagen: Simba Facility Management ist Ihr verlässlicher Wiener Partner für makellose Reinheit und erstklassigen Service – jeden Tag aufs Neue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FOUNDER & MEDIA SECTION (JASMINA PORTRAIT + KOSMO MAG SPEC)
          ========================================================= */}
      <section id="über-uns" className="py-20 lg:py-24 bg-[#f4f7fa] relative overflow-hidden">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#0f172a/[0.015]_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient soft glow highlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Column 1: Left Details (Text & Bullets) */}
            <div className="md:col-span-5 flex flex-col items-start pr-2">
              <span className="text-[#004e9a] font-black text-[11px] uppercase tracking-[0.25em] block mb-4">
                PERSÖNLICH. KOMPETENT. VERANTWORTUNGSVOLL.
              </span>
              
              <h2 className="text-3xl md:text-[38px] font-black text-[#003067] leading-[1.12] mb-6 tracking-tight font-sans">
                Vertrauen beginnt bei <br />
                <span className="text-[#0052b4]">persönlicher Verantwortung.</span>
              </h2>
              
              <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-6 font-medium">
                Simba Facility Management steht für Qualität, Verlässlichkeit und persönliche Betreuung auf höchstem Niveau. Geschäftsführerin Jasmina Marinkovic führt das Unternehmen mit Handschlagqualität, Fachkompetenz und einem klaren Anspruch: Ihre Zufriedenheit.
              </p>
              
              {/* Feature Points Check List */}
              <div className="flex flex-col gap-3.5 w-full mb-8">
                {[
                  "Meisterin der Gebäudereinigung",
                  "Ausbildung an der Wiener Gebäudereinigungsakademie",
                  "Langjährige Erfahrung in der Branche",
                  "Persönliche Betreuung und direkte Kommunikation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#004e9a] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-[#004e9a]/20">
                      <Check size={11} className="stroke-[4]" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-700 leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/ueber-uns" 
                className="inline-flex items-center gap-1.5 text-[#003067] hover:text-[#004e9a] font-extrabold text-[13px] tracking-wide uppercase transition-all duration-200 mt-2 hover:translate-x-0.5"
              >
                Mehr über uns <span className="ml-0.5">→</span>
              </Link>
            </div>

            {/* Column 2: Middle Portrait Photo using Jasmina_Marinkovic_Kosmo.webp */}
            <div className="md:col-span-4 relative h-[380px] md:h-[450px] lg:h-[480px] w-full rounded-none overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center bg-white p-2">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/ueber-uns/jasmina-marinkovic-kosmo.webp" 
                  alt="Jasmina Marinkovic - Geschäftsführerin Simba Facility Management" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>

            {/* Column 3: Right KOSMO Media Card */}
            <div className="md:col-span-3 flex flex-col justify-start pt-4 lg:pt-10">
              <span className="text-[#004e9a] font-extrabold text-[11px] uppercase tracking-[0.25em] block mb-5">
                BEKANNT AUS
              </span>
              
              {/* Styled KOSMO element to match screenshot branding */}
              <a 
                href="https://www.kosmo.at/gebaeudereinigungsakademie-meister-der-sauberkeit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group mb-6 hover:opacity-85"
                title="KOSMO Artikel aufrufen"
              >
                <span className="text-3xl font-black text-black tracking-tighter">KOSMO</span>
                <span className="h-6 w-6 bg-[#d01c1c] text-white flex items-center justify-center text-[10px] font-black tracking-tighter shadow-sm">
                  ME
                </span>
              </a>

              <p className="text-slate-600 text-[14px] font-medium leading-relaxed mb-6">
                Ausgezeichnet nach erfolgreich abgelegter Meisterprüfung an der renommierten Wiener Gebäudereinigungsakademie. In einer exklusiven Reportage des KOSMO Magazins wird die herausragende Fachkompetenz und Qualität des Wiener Meisterbetriebs porträtiert – als Symbol für höchste Standards in der modernen Denkmal-, Fassaden- und Gebäudereinigung.
              </p>

              <a 
                href="https://www.kosmo.at/gebaeudereinigungsakademie-meister-der-sauberkeit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#003067] hover:text-[#004e9a] font-extrabold text-[13px] tracking-wide uppercase transition-all duration-200 mt-2 hover:translate-x-0.5"
              >
                Zum Artikel <span className="ml-0.5">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          4. SERVICES SECTION (6 MAIN SERVICES FIRST + COLLAPSIBLE GRID)
          ========================================================= */}
      <section id="leistungen" className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003067] leading-tight mb-4 tracking-tight font-sans">
              Sauberkeit in Perfektion – <br />
              für <span className="text-[#0052b4]">jede Anforderung.</span>
            </h2>
          </div>

          {/* Primary Top 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => {
              const IconComponent = iconsMap[service.icon || 'Briefcase'] || Briefcase;

              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[20px] border border-slate-100/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group hover:border-primary/15 transition-all duration-500 h-full"
                >
                  {/* Service Card Image */}
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      fill
                      className={`object-cover ${getServicePositionClass(service.id)} group-hover:scale-105 transition-transform duration-700`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>

                  {/* Overlapping Absolute Icon (Screenshot Style Overhanging) */}
                  <div className="relative px-6 pt-0 pb-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center absolute -top-6 left-6 border-[4px] border-white shadow-sm z-10 transition-transform group-hover:scale-110">
                      <IconComponent size={18} />
                    </div>

                    <div className="pt-8 flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                      <Link 
                        href={service.path}
                        className="text-primary hover:text-[#003067] font-bold text-xs uppercase flex items-center gap-1.5 group"
                      >
                        Mehr erfahren
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Collapsible / Expanding Rest of Services Grid with Motion */}
          <AnimatePresence>
            {showAllServices && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  {expandableServices.map((service, idx) => {
                    const IconComponent = iconsMap[service.icon || 'Briefcase'] || Briefcase;

                    return (
                      <div 
                        key={idx} 
                        className="bg-white rounded-[20px] border border-slate-100/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group hover:border-primary/15 transition-all duration-500 h-full"
                      >
                        <div className="relative h-36 w-full overflow-hidden">
                          <Image 
                            src={service.img} 
                            alt={service.title} 
                            fill
                            className={`object-cover ${getServicePositionClass(service.id)} group-hover:scale-105 transition-transform duration-700`}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>

                        <div className="relative px-6 pt-0 pb-6 flex flex-col flex-1">
                          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center absolute -top-6 left-6 border-[4px] border-white shadow-sm z-10 transition-transform group-hover:scale-110">
                            <IconComponent size={18} />
                          </div>

                          <div className="pt-8 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 leading-tight">
                              {service.title}
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                              {service.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                            <Link 
                              href={service.path}
                              className="text-primary hover:text-[#003067] font-bold text-xs uppercase flex items-center gap-1.5 group"
                            >
                              Mehr erfahren
                              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button Container */}
          <div className="mt-14 text-center">
            <button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#002D72] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md group"
            >
              {showAllServices ? "Weniger Leistungen anzeigen" : "Alle Leistungen ansehen"}
              <ChevronDown size={16} className={`transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          5. CERTIFICATES & STANDARDS SECTION (HACCP, MEISTER, ANKÖ)
          ========================================================= */}
      <section id="qualität" className="py-20 lg:py-24 bg-[#f4f7fa] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Vertrauen durch Qualität
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003067] leading-tight mb-4 tracking-tight font-sans">
              Zertifizierter Fachbetrieb für <br />
              <span className="text-[#0052b4]">höchste Hygiene-Präzision.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Meisterbetrieb */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-start h-full">
              <div className="relative w-16 h-16 mb-6 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/logos/meisterbetrieb.png" 
                  alt="Meisterbetrieb Logo" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#003067] mb-3">Staatlich geprüfter Meisterbetrieb</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Als staatlich geprüfter Denkmal-, Fassaden- und Gebäudereinigung-Meisterbetrieb garantieren wir meisterhafte Genauigkeit. Jedes Projekt wird persönlich überwacht und entspricht den anspruchsvollen Anforderungen der Wirtschaftskammer Wien.
              </p>
            </div>

            {/* Card 2: HACCP */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-start h-full">
              <div className="relative w-16 h-16 mb-6 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/logos/haccp.png" 
                  alt="HACCP Logo" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#003067] mb-3">HACCP Hygiene-Standards</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Vorschriftsmäßige Hygiene nach strengen EU-Richtlinien. Unsere Mitarbeiter sind nach den geltenden HACCP-Richtlinien zertifiziert – die unabdingbare Voraussetzung für sensible Ordinationsreinigungen, Küchen und Lebensmittelbereiche.
              </p>
            </div>

            {/* Card 3: ANKÖ */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-start h-full">
              <div className="relative w-16 h-16 mb-6 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/logos/anko.png" 
                  alt="ANKÖ Logo" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#003067] mb-3">ANKÖ Führungsbestätigung</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Als gelistetes Unternehmen im offiziellen Auftragnehmerkataster Österreich (ANKÖ) weisen wir lückenlos unsere technische, rechtliche und finanzielle Eignung für private und öffentliche Ausschreibungen nach.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. OUR PROCESS (ULTRA-PREMIUM ENTERPRISE TIMELINE)
          ========================================================= */}
      <section id="prozess" className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Header Section */}
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              UNSER ABLAUF
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans mb-6">
              Ein klarer Prozess für <span className="text-[#0052b4]">maximale Qualität</span> und Verlässlichkeit.
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              Jeder Auftrag folgt einem strukturierten Ablauf, der Transparenz schafft, Qualität sichert und langfristige Partnerschaften ermöglicht.
            </p>
          </div>

          {/* Process Steps Timeline (Horizontal Desktop, Vertical Mobile) */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
              {[
                { 
                  step: "01", 
                  label: "ANALYSE", 
                  title: "Objektanalyse", 
                  desc: "Wir verschaffen uns ein genaues Bild vor Ort. Dabei analysieren wir alle relevanten Faktoren wie Flächen, Materialien, Nutzungsfrequenz und allgemeine Anforderungen zur Reinigung." 
                },
                { 
                  step: "02", 
                  label: "PLANUNG", 
                  title: "Individuelles Reinigungskonzept", 
                  desc: "Basierend auf der Analyse entwickeln wir ein maßgeschneidertes Reinigungskonzept inklusive Einsatzplan, Reinigungsverfahren, Qualitätsstandards und Kontrollsystem." 
                },
                { 
                  step: "03", 
                  label: "UMSETZUNG", 
                  title: "Professionelle Durchführung", 
                  desc: "Unser geschultes Team setzt den Plan mit höchster Sorgfalt und modernen Methoden um – effizient, diskret und mit Blick für jedes Detail." 
                },
                { 
                  step: "04", 
                  label: "KONTROLLE", 
                  title: "Laufende Qualitätssicherung", 
                  desc: "Regelmäßige Kontrollen und persönliche Betreuung sorgen für gleichbleibend hohe Qualität und ermöglichen eine kontinuierliche Optimierung." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start relative pr-4">
                  {/* Outer container for step number and line */}
                  <div className="relative w-full mb-6">
                    <span className="font-serif text-5xl md:text-6xl font-light text-[#003067] bg-white pr-4 inline-block leading-none">
                      {item.step}
                    </span>
                    
                    {/* Horizontal connection line on desktop with small square dot in the center */}
                    {i < 3 && (
                      <div className="hidden lg:block absolute left-20 right-[-4.5rem] top-7 h-[1px] bg-slate-200 z-0">
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[2px] w-1.5 h-1.5 bg-[#003067]" />
                      </div>
                    )}
                  </div>
                  
                  {/* Uppercase Blue Label */}
                  <span className="text-[11px] font-bold text-primary tracking-[0.25em] uppercase block mb-3">
                    {item.label}
                  </span>

                  {/* Content Title */}
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#003067] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          7. REVIEWS SECTION (INTEGRATING REVIEW SLIDER ACCORDING TO PLAN)
          ========================================================= */}
      <section id="bewertungen" className="py-20 lg:py-24 bg-[#f4f7fa] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <span className="text-[#0052b4] font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4 font-sans">
                Kundenstimmen
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003067] leading-tight mb-8 tracking-tight font-sans">
                Was Kunden über <br />
                <span className="text-[#0052b4]">Simba FM</span> sagen.
              </h2>
              
              <div className="flex items-center gap-4 mb-8 p-6 bg-white rounded-3xl shadow-sm border border-slate-100/80 w-fit">
                <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center">
                  <Image 
                    src="/images/logos/google.png" 
                    alt="Google Reviews" 
                    fill
                    className="object-contain p-1" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" className="text-yellow-400" />)}
                  </div>
                  <p className="text-xs font-black text-slate-800 tracking-tight">4.9 / 5 Sterne bei Google Reviews</p>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                Hundertprozentige Diskretion, Zuverlässigkeit und ein unbestechliches Auge für feinste Details zeichnen uns aus. Überzeugen Sie sich selbst von den echten Meinungen unserer Partner.
              </p>
            </div>
            
            <div className="lg:col-span-8 bg-white rounded-[40px] border border-slate-100 shadow-sm p-6 relative">
               <ReviewSlider />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          8. FAQ SECTION (2-COLUMN ACCORDION CONTAINER)
          ========================================================= */}
      <section id="faq" className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#0052b4] font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4 font-sans">
              Häufig Gestellt
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#003067] leading-tight mb-4 tracking-tight font-sans">
              Fragen zur Gebäudereinigung – <br />
              kurz &amp; <span className="text-[#0052b4]">klar beantwortet.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mx-auto w-full">
            {/* Column 1 (01 - 05) */}
            <div className="space-y-4">
              {faqs.slice(0, 5).map((item, idx) => {
                const globalIdx = idx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.025)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      <span className="text-[#0052b4] font-bold text-[14px] font-sans shrink-0 pt-0.5 min-w-[20px]">
                        {item.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-xl leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-100 mt-4 pt-3">
                                <p className="text-slate-500 font-normal text-[13px] sm:text-[13.5px] leading-relaxed font-sans">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (06 - 10) */}
            <div className="space-y-4">
              {faqs.slice(5, 10).map((item, idx) => {
                const globalIdx = idx + 5;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.025)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      <span className="text-[#0052b4] font-bold text-[14px] font-sans shrink-0 pt-0.5 min-w-[20px]">
                        {item.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-xl leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-100 mt-4 pt-3">
                                <p className="text-slate-500 font-normal text-[13px] sm:text-[13.5px] leading-relaxed font-sans">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          9. CONTACT SECTION & SUBMISSION FORM
          ========================================================= */}
      <section id="kontakt" className="py-20 lg:py-24 bg-[#f4f7fa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                <span className="text-[#0052b4]">Kontakt Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen haben, stehen wir Ihnen selbstverständlich zur Verfügung.
                </p>
                <p>
                  Innerhalb von 24 Stunden erhalten Sie eine Antwort.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Address Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/17/1, 1120 Wien</span>
                </div>

                {/* Phone Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors">+43 660 1470 316</a>
                </div>
                
                {/* Email Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all">simbafacility@outlook.com</a>
                </div>
              </div>

              {/* Premium Luxury Architecture Line-art Blueprint Illustration */}
              <div className="hidden md:block relative w-full max-w-[420px] h-[255px] mt-10 overflow-visible">
                <svg viewBox="0 0 500 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Soft warm background circle */}
                  <circle cx="250" cy="140" r="115" stroke="#bae6fd" strokeWidth="0.75" opacity="0.25" />
                  
                  {/* Horizontal luxury grounded floor lines */}
                  <line x1="40" y1="240" x2="460" y2="240" stroke="#003067" strokeWidth="1.5" />
                  <line x1="60" y1="246" x2="440" y2="246" stroke="#003067" strokeWidth="0.5" opacity="0.4" />
                  
                  {/* Left Part: Iconic Stephansdom Spire (Gothic Spire Layout) */}
                  <g stroke="#003067" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    {/* Cathedral Spire Base */}
                    <rect x="80" y="140" width="50" height="100" fill="#ffffff" />
                    {/* Arch windows */}
                    <path d="M95 165 C95 155, 115 155, 115 165 L115 200 L95 200 Z" fill="none" />
                    <path d="M95 210 L115 210" />
                    {/* Inner detail divisions */}
                    <line x1="105" y1="140" x2="105" y2="240" strokeWidth="0.5" strokeDasharray="2 2" />
                    
                    {/* Tall Spire Triangle */}
                    <path d="M80 140 L105 40 L130 140" fill="#ffffff" strokeWidth="1.5" />
                    {/* Spire cross on top */}
                    <line x1="105" y1="40" x2="105" y2="30" strokeWidth="1.5" />
                    <line x1="100" y1="34" x2="110" y2="34" strokeWidth="1.5" />
                    
                    {/* Horizontal bands */}
                    <line x1="88" y1="110" x2="122" y2="110" />
                    <line x1="94" y1="80" x2="116" y2="80" />
                  </g>

                  {/* Center Part: Elegant Classic Archways (Viennese Ringstraße Style) */}
                  <g stroke="#003067" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Main arcade building block */}
                    <rect x="155" y="90" width="160" height="150" fill="#ffffff" rx="4" />
                    
                    {/* Classic pediment roof (Giebel) */}
                    <path d="M150 90 L235 60 L320 90" fill="#ffffff" strokeWidth="1.5" />
                    {/* Pediment decoration circle */}
                    <circle cx="235" cy="78" r="5" fill="none" />
                    
                    {/* Arcades / Arch columns */}
                    {/* Arch 1 */}
                    <path d="M175 240 L175 150 C175 130, 205 130, 205 150 L205 240" fill="none" strokeWidth="1.5" />
                    {/* Arch 2 */}
                    <path d="M220 240 L220 150 C220 130, 250 130, 250 150 L250 240" fill="none" strokeWidth="1.5" />
                    {/* Arch 3 */}
                    <path d="M265 240 L265 150 C265 130, 295 130, 295 150 L295 240" fill="none" strokeWidth="1.5" />
                    
                    {/* Horizontal classical cornice detailing */}
                    <line x1="155" y1="105" x2="315" y2="105" />
                    <line x1="155" y1="112" x2="315" y2="112" strokeWidth="0.5" />
                    
                    {/* Small rectangular upper windows */}
                    <rect x="180" y="118" width="12" height="12" rx="1" fill="none" />
                    <rect x="226" y="118" width="12" height="12" rx="1" fill="none" />
                    <rect x="272" y="118" width="12" height="12" rx="1" fill="none" strokeWidth="1.2" />
                  </g>

                  {/* Right Part: Majestic Botanical Branch Line Art */}
                  <g stroke="#00c2cb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                    {/* Elegant bending branch that frames the architecture nicely */}
                    <path d="M380 240 Q390 160, 350 100" />
                    
                    {/* Fine leaves blooming from the branch */}
                    {/* Leaf 1 */}
                    <path d="M380 205 Q365 210, 362 195 Q375 200, 380 205" fill="none" />
                    {/* Leaf 2 */}
                    <path d="M386 175 Q405 170, 408 185 Q395 180, 386 175" fill="none" />
                    {/* Leaf 3 */}
                    <path d="M378 145 Q360 145, 358 132 Q370 138, 378 145" fill="none" />
                    {/* Leaf 4 */}
                    <path d="M366 118 Q385 110, 388 122 Q374 120, 366 118" fill="none" />
                    {/* Top Bud */}
                    <path d="M350 100 Q342 90, 346 92 Q348 94, 350 100" fill="#00c2cb" />
                  </g>
                  
                  {/* Compass Emblem representing Vienna Geolocation */}
                  <g opacity="0.35" transform="translate(425, 40)">
                    <line x1="0" y1="10" x2="20" y2="10" stroke="#003067" strokeWidth="1" />
                    <line x1="10" y1="0" x2="10" y2="20" stroke="#003067" strokeWidth="1" />
                    <circle cx="10" cy="10" r="7" stroke="#003067" strokeWidth="0.75" />
                    <text x="14" y="6" fontSize="5" fontFamily="sans-serif" fill="#003067" fontWeight="bold">W</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Flat high-end styled contact form container */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full">
              <div className="mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-[#003067] mb-2">Unverbindliche Anfrage senden</h3>
                 <p className="text-slate-500 text-xs md:text-sm">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject="Allgemeine Anfrage Homepage" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
