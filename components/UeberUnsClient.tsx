"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Target, 
  TrendingUp, 
  Users, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check
} from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';

export const UeberUnsClient = () => {
  // Timeline Steps Data
  const timelineSteps = [
    {
      icon: Award,
      num: "01",
      label: "DER ANFANG",
      title: "Der Anfang",
      desc: "Mit einer fundierten Ausbildung und jahrelanger Erfahrung im Gebäudereinigungsbereich legte Jasmina den Grundstein für ihre Vision."
    },
    {
      icon: Target,
      num: "02",
      label: "DIE ENTSCHEIDUNG",
      title: "Die Entscheidung",
      desc: "Der Entschluss, Qualität, Fairness und Verantwortung im Dienstleistungssektor auf ein neues Level zu heben."
    },
    {
      icon: TrendingUp,
      num: "03",
      label: "DIE ERSTEN SCHRITTE",
      title: "Die ersten Schritte",
      desc: "Die ersten Kunden übergebten die pflege ihrer Objekte und wurden sofort durch konstante Ergebnisse begeistert."
    },
    {
      icon: Users,
      num: "04",
      label: "WACHSTUM",
      title: "Wachstum",
      desc: "Durch harte Arbeit, Vertrauen und Weiterempfehlungen wuchs das Unternehmen kontinuierlich und organisch."
    },
    {
      icon: Building2,
      num: "05",
      label: "HEUTE",
      title: "Heute",
      desc: "Heute betreut Simba als meistergeführter Reinigungsservice in Wien zahlreiche Objekte mit einem festen Kern aus engagierten Mitarbeitern."
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Annika S.",
      text: "Simba Facility Management ist seit Jahren ein verlässlicher Partner. Die Qualität ist konstant hoch und die Kommunikation einfach hervorragend."
    },
    {
      name: "Marius T.",
      text: "Endlich ein Reinigungsunternehmen, auf das man sich wirklich verlassen kann. Unser Büro war noch nie so sauber."
    },
    {
      name: "Isabella S.",
      text: "Top Service, freundliches Team und absolut professionell. Uneingeschränkt weiterzuempfehlen!"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f9] text-slate-700">
      
      {/* ========================================================== */}
      {/* 1. HERO SECTION                                            */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden bg-white pt-16 pb-0 md:pt-24 md:pb-0 lg:pt-28 lg:pb-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text Block */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6 pb-2">
              {/* Quiet Premium Pre-Title matching Mockup exactly */}
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-5 font-bold block leading-none font-sans">
                ÜBER UNS
              </span>
              
              {/* Elegant Large Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-6 font-sans">
                Qualität beginnt bei den <br className="hidden md:inline" />
                <span className="text-[#0052b4] font-black">Menschen dahinter.</span>
              </h1>

              {/* Distinctive Small Horizontal Divider Segment */}
              <div className="w-12 h-1 bg-[#003067] mb-6 rounded-full" />

              {/* Classy Serif Italic Phrase */}
              <span className="text-[#0052b4] italic font-serif font-normal block text-2xl sm:text-3xl md:text-[34px] leading-tight mb-8">
                persönlich, verlässlich &amp; mit Verantwortung
              </span>
              
              {/* Clean, Slate Paragraph Block matching mockup styling */}
              <p className="text-slate-500 font-semibold text-base md:text-lg leading-relaxed max-w-xl mb-12 font-sans">
                Simba Facility Management steht für persönliche Verantwortung, klare Abläufe und echte Handschlagqualität aus Wien. Erfahren Sie, warum wir für Zuverlässigkeit stehen.
              </p>
              
              {/* Clean, Non-Flickering Buttons matching Home and Mockup pages */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#kontakt"
                  className="bg-[#003067] hover:bg-[#004e9a] text-white font-bold px-8 py-4.5 rounded-lg text-sm md:text-base border border-[#003067] hover:border-[#004e9a] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md shadow-[#003067]/5 group text-center"
                  id="hero-cta-contact"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="#kontakt"
                  className="bg-[#f0f9ff] hover:bg-[#e0f2fe] text-[#004e9a] font-bold px-8 py-4.5 rounded-lg text-sm md:text-base border border-[#bae6fd] hover:border-[#bae6fd]/80 text-center transition-all duration-300 flex items-center justify-center gap-2.5"
                  id="hero-cta-more"
                >
                  Angebot anfordern
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Side: Image Column (perfectly scaled to 800/1200 portrait ratio to guarantee zero head/body cropping style) */}
            <div className="lg:col-span-6 hidden lg:block w-full">
              <div
                className="relative w-full aspect-[800/1200] max-h-[580px] xl:max-h-[660px] ml-auto overflow-hidden rounded-none border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)]"
                style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <Image
                  src="/images/hero/header.webp"
                  alt="Simba Facility Management Team"
                  fill
                  className="object-cover object-[center_8%]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>

            {/* Mobile/Tablet Image Layout fallback beneath buttons (lg:hidden) */}
            <div className="lg:hidden relative w-full aspect-[800/1200] max-h-[480px] sm:max-h-[550px] mx-auto rounded-none overflow-hidden border border-slate-100/60 shadow-sm mt-6">
              <Image
                src="/images/hero/header.webp"
                alt="Simba Facility Management Team"
                fill
                className="object-cover object-[center_8%]"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 2. SECTION: WIE ALLES BEGANN                               */}
      {/* ========================================================== */}
      <section id="story" className="py-20 lg:py-24 bg-[#f5f7f9] border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Section Header above the text and image columns */}
          <div className="mb-10 lg:mb-12 max-w-3xl">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none font-sans">
              WIE ALLES BEGANN
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003067] tracking-tight font-sans">
              Eine Idee. Ein Versprechen. <span className="text-[#0052b4]">Ein Unternehmen.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Prose content */}
            <div className="lg:col-span-7 pr-0 lg:pr-6 flex flex-col justify-between">
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6 max-w-2xl font-sans">
                <p>
                  Simba Facility Management entstand aus einer einfachen Erkenntnis im Wiener Markt für Gebäudereinigung. Gründerin Jasmina Marinkovic bemerkte während ihrer langjährigen Berufspraxis, dass große Anbieter oft auf Anonymität und Massenabwicklung setzen. Qualität und die individuellen Kundenbedürfnisse traten dabei meist in den Hintergrund.
                </p>
                <p>
                  Sie beschloss, ein Unternehmen zu gründen, das Sauberkeit strukturierter, verlässlicher und persönlicher gestaltet. Jasmina wollte, dass Qualität keine leere Phrase ist, sondern durch systematische Abläufe und direkte meisterhafte Kontrollen garantiert wird. Verantwortung für den Werterhalt von Immobilien und das Wohlbefinden der Menschen sollte wieder im Mittelpunkt stehen.
                </p>
                <p>
                  Statt unkontrolliertem Schnellwachstum setzt Simba FM ganz bewusst auf gesundes, organisches Wachstum und feste Partnerschaften. So können wir gewährleisten, dass unser hoher Anspruch und unsere Handschlagqualität tagtäglich auf jedem betreuten Objekt in Wien und Niederösterreich akribisch umgesetzt werden.
                </p>
              </div>
            </div>
            
            {/* Right Column: Image aligning perfectly with the text height */}
            <div className="lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[400px] lg:h-auto rounded-[30px] overflow-hidden border border-slate-200/50 shadow-[0_15px_50px_rgba(0,0,0,0.02)] bg-white">
              <Image 
                src="/images/ueber-uns/jasmina-marinkovic-kosmo.webp" 
                alt="Jasmina Marinkovic" 
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. SECTION: DER WEG ZUM UNTERNEHMEN                        */}
      {/* ========================================================== */}
      <section id="prozess" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Header */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none font-sans">
              UNSER WEG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              Der Weg zum heutigen <span className="text-[#0052b4]">Unternehmen.</span>
            </h2>
          </div>

          {/* Timeline Node Sequence */}
          <div className="relative">
            {/* Connecting Horizontal Line for Large Screens */}
            <div className="hidden lg:block absolute left-[8%] right-[8%] top-10 h-[1.5px] bg-[#003067]/10 z-0 pointer-events-none" />
            
            {/* Timeline Steps Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
              {timelineSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    
                    {/* Circle Node (Icon / Symbol) */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-[#f5f7f9] group-hover:bg-[#003067]/5 flex items-center justify-center border border-slate-200 text-[#003067] group-hover:text-[#0052b4] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                        <IconComponent size={30} strokeWidth={1.5} />
                      </div>
                      
                      {/* Step Number Badge */}
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0052b4] text-white text-[10px] font-bold flex items-center justify-center border border-white">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Content */}
                    <span className="text-[10px] font-black text-[#0052b4] tracking-widest font-sans uppercase mb-2 block">
                      {step.label}
                    </span>
                    
                    <h3 className="text-lg font-bold text-[#003067] font-sans mb-3 leading-snug">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-500 font-normal text-xs md:text-sm leading-relaxed font-sans max-w-[240px] lg:max-w-none">
                      {step.desc}
                    </p>
                    
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* 4. SECTION: UNSER TEAM                                     */}
      {/* ========================================================== */}
      <section id="team" className="py-20 lg:py-24 bg-[#f5f7f9] border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Section Header above the text and image columns */}
          <div className="mb-10 lg:mb-12 max-w-3xl">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none font-sans">
              UNSER TEAM
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003067] tracking-tight font-sans">
              Menschen, die <span className="text-[#0052b4]">Verantwortung leben.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 pr-0 lg:pr-6 flex flex-col justify-between">
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6 max-w-2xl font-sans">
                <p>
                  Das wahre Kapital von Simba Facility Management sind unsere hervorragenden Mitarbeiterinnen und Mitarbeiter, die Tag für Tag leidenschaftlich meisterhafte Arbeit leisten. Unser Stammteam besteht mittlerweile aus über 40 fest angestellten Fachkräften in Wien. Wir glauben fest daran, dass hervorragende Reinigungsleistungen nur durch eine verlässliche und harmonische Arbeitswelt entstehen.
                </p>
                <p>
                  Um absolute Verlässlichkeit und Gewohnheit zu garantieren, setzen wir gezielt auf feste Arbeitskräfte anstelle von ständig wechselndem Personal oder anonymen Vermittlungsdiensten. Jedes betreute Objekt wird von festen Teams gepflegt, die mit den spezifischen Gegebenheiten vor Ort bestens vertraut sind.
                </p>
                <p>
                  Kontinuierliche Schulungen und verlässliche Weiterbildungen sichern ein lückenloses Qualitätsbewusstsein sowie den fachgerechten Umgang mit umweltschonenden Reinigungskomponenten. Eine faire Entlohnung, gegenseitiger Respekt und flache Hierarchien sorgen für ein enges, freundschaftliches Betriebsklima, das man an den glänzenden Ergebnissen direkt spürt.
                </p>
              </div>
            </div>
            
            {/* Right Image Column aligning perfectly with the text height */}
            <div className="lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[400px] lg:h-auto rounded-[30px] overflow-hidden border border-slate-200/50 shadow-[0_15px_50px_rgba(0,0,0,0.02)] bg-white">
              <Image 
                src="/images/ueber-uns/team.webp" 
                alt="Unser qualifiziertes Simba Team" 
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 5. SECTION: UNSERE ARBEITSWEISE                            */}
      {/* ========================================================== */}
      <section id="praxisbeispiel" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none font-sans">
              UNSERE ARBEITSWEISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.12] font-black text-[#003067] tracking-tight font-sans mb-6">
              Wie unsere Teams täglich <span className="text-[#0052b4]">Qualität sichern.</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed font-sans">
              Keine anonymen Einsätze, keine ständig wechselnden Kräfte und keine unklaren Abläufe. Bei Simba Facility Management arbeiten feste Teams mit klaren Verantwortlichkeiten und strukturierten Prozessen für dauerhaft zuverlässige Ergebnisse.
            </p>
          </div>

          {/* 2-Spalten Layout with 4 Points each (8 total) using checkpoints styled like service pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12 max-w-5xl mx-auto">
            
            {/* Left Column (Points 1 - 4) */}
            <div className="space-y-8">
              
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Feste Teams
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Unsere Kunden werden langfristig von eingespielten Teams betreut, die mit den Anforderungen und Abläufen vor Ort bestens vertraut sind.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Strukturierte Abläufe
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Jedes Objekt folgt klar definierten Reinigungsplänen, Qualitätsstandards und dokumentierten Kontrollprozessen.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Laufende Schulungen
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Regelmäßige Weiterbildungen sorgen dafür, dass unser Team moderne Reinigungsverfahren und Hygienestandards sicher beherrscht.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Persönliche Verantwortung
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Direkte Ansprechpartner, kurze Kommunikationswege und laufende Qualitätskontrollen schaffen Vertrauen im täglichen Betrieb.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (Points 5 - 8) */}
            <div className="space-y-8">
              
              {/* Point 5 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Erfahrene Objektleiter
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Meistergeführte Kontrollen und kontinuierliche Abstimmung sichern ein lückenloses Qualitätsbewusstsein bei jedem Einsatz.
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Umweltschonende Mittel
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Wir setzen gezielt auf moderne, ökologische Reinigungskomponenten zum Schutz Ihrer Gesundheit, des Objekts und der Umwelt.
                  </p>
                </div>
              </div>

              {/* Point 7 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Modernste Ausrüstung
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Unser Team arbeitet ausschließlich mit professionellen Geräten und schonenden Verfahren für ein perfektes Reinigungsergebnis.
                  </p>
                </div>
              </div>

              {/* Point 8 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={14} className="stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#003067] font-sans leading-snug">
                    Faire Partnerschaft
                  </h4>
                  <p className="text-slate-500 font-normal text-sm mt-1.5 leading-relaxed font-sans">
                    Transparente Fixpreise, verlässliche Verträge und ehrliche Handschlagqualität bilden das Fundament unserer Zusammenarbeit.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* 6. SECTION: KUNDENSTIMMEN                                  */}
      {/* ========================================================== */}
      <section id="bewertungen" className="py-20 lg:py-24 bg-[#f5f7f9] border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none font-sans">
              KUNDENSTIMMEN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              Das sagen <span className="text-[#0052b4]">unsere Kunden.</span>
            </h2>
          </div>

          {/* Testimonials 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((rev, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[30px] p-8 border border-slate-200/50 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars Row */}
                  <div className="flex gap-0.5 text-yellow-500 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  {/* Quote text */}
                  <p className="text-slate-550 leading-relaxed text-xs sm:text-sm italic font-sans mb-8">
                    &bdquo;{rev.text}&ldquo;
                  </p>
                </div>
                
                {/* User Row */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#f5f7f9] flex items-center justify-center font-bold text-xs text-[#003067] border border-slate-200">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#003067] text-xs sm:text-sm leading-none mb-1 font-sans">{rev.name}</p>
                    <p className="text-[9px] text-[#0052b4] font-bold uppercase tracking-widest font-sans">Verifizierter Kunde</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Ratings visual banner styled beautifully with white background and Google Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-5 sm:p-6 bg-white rounded-full border border-slate-200 max-w-2xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div className="flex items-center gap-3.5">
              <div className="relative w-6 h-6 shrink-0 select-none">
                <Image
                  src="/images/logos/google.png"
                  alt="Google Logo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[#003067] font-black text-2xl font-sans tracking-tight">4.9</span>
              <div className="flex gap-0.5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" className="text-yellow-500 stroke-none" />
                ))}
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-slate-200" />
            
            <p className="text-slate-500 text-xs sm:text-sm font-medium font-sans">
              basierend auf den TOP 10 Google Bewertungen
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* 7. SECTION: KONTAKT                                        */}
      {/* ========================================================== */}
      <section id="kontakt" className="py-20 lg:py-24 bg-white">
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
              <ContactForm defaultSubject="Anfrage von Über Uns" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
