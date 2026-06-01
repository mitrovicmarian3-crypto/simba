"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Upload, 
  FileText, 
  ShieldCheck
} from 'lucide-react';

export default function KarrierePage() {
  const formSectionRef = useRef<HTMLDivElement>(null);
  
  // Custom states
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Handle setting selected role from positioning list
  const applyForJob = (roleId: string) => {
    if (!selectedAreas.includes(roleId)) {
      setSelectedAreas([roleId]);
    }
    // Scroll directly to recruitment contact section
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAreaToggle = (id: string) => {
    setSelectedAreas(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = droppedFile.name.substring(droppedFile.name.lastIndexOf('.')).toLowerCase();
      if (validTypes.includes(fileExtension)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Create readable summary of selected areas for message submission
    const areasMap: Record<string, string> = {
      reinigungskraft: 'Reinigungskraft',
      sonderreiniger: 'Sonderreiniger',
      objektleitung: 'Objektleitung',
      buerokraft: 'Bürokraft'
    };
    
    const formattedAreas = selectedAreas.map(a => areasMap[a] || a).join(', ');
    const displaySubject = formattedAreas ? `Bewerbung: ${formattedAreas}` : 'Initiativbewerbung Karriere';

    // Put together message body
    const fullMessage = `Bewerbungs-Bereich: ${formattedAreas || "Nicht gewählt/Initiative"}\n` +
      `Lebenslauf angehängt: ${file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)` : 'Nein'}\n\n` +
      `Nachricht:\n${message}`;

    const submissionData = {
      name,
      email,
      phone,
      subject: displaySubject,
      message: fullMessage
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form
        setSelectedAreas([]);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setFile(null);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans min-h-screen pt-24 pb-0 overflow-x-hidden relative">
      
      {/* ========================================================== */}
      {/* 1. HERO SECTION - Clean, High-Contrast Corporate Look     */}
      {/* ========================================================== */}
      <section className="relative w-full bg-white py-16 md:py-24 border-b border-stone-100" id="hero">
        {/* Subtle Background Glow mimicking main page hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D9EAFF]/30 rounded-full blur-3xl z-0 pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#0052b4] uppercase mb-4">
                Karriere
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#003067] leading-tight tracking-tight mb-6">
                Arbeiten mit <br />
                <span className="italic font-bold text-[#0052b4]">Verantwortung</span>.
              </h1>
              <p className="text-slate-650 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                Sauberkeit schafft Lebensqualität – und Menschen machen den Unterschied. Werden Sie Teil eines strukturierten Meisterbetriebs, der Qualität, Verlässlichkeit und Teamgeist jeden Tag lebt.
              </p>
              <button 
                onClick={() => document.getElementById('was-wir-bieten')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#003067] hover:bg-[#004e9a] text-white font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                Was wir bieten
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Widget Column */}
            <div className="lg:col-span-5 w-full">
              <div className="grid grid-cols-2 bg-white border border-slate-200/50 rounded-none divide-x divide-y divide-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                
                {/* 1 */}
                <div className="p-6 sm:p-8 flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-[#f0f9ff] flex items-center justify-center text-[#003067] mb-5">
                    <Users size={20} />
                  </div>
                  <span className="text-3xl font-extrabold text-[#003067] leading-none mb-2">40+</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Mitarbeiter</span>
                </div>
                
                {/* 2 */}
                <div className="p-6 sm:p-8 flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-[#f0f9ff] flex items-center justify-center text-[#003067] mb-5">
                    <Award size={20} />
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#003067] leading-tight mb-2">Meisterbetrieb</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">in Wien</span>
                </div>

                {/* 3 */}
                <div className="p-6 sm:p-8 flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-[#f0f9ff] flex items-center justify-center text-[#003067] mb-5">
                    <Clock size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#003067] leading-tight mb-2">Langfristige</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Perspektiven</span>
                </div>

                {/* 4 */}
                <div className="p-6 sm:p-8 flex flex-col items-start text-left">
                  <div className="w-10 h-10 bg-[#f0f9ff] flex items-center justify-center text-[#003067] mb-5">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#003067] leading-tight mb-2">Sichere &amp; faire</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Bedingungen</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 2. WAS WIR BIETEN - 1-Spalten Layout mit Checkpoints       */}
      {/* ========================================================== */}
      <section className="py-20 bg-white border-b border-stone-100 scroll-mt-24" id="was-wir-bieten">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#0052b4] uppercase mb-4 block">
              Unsere Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003067] leading-tight tracking-tight">
              Was wir Ihnen bieten
            </h2>
            <p className="text-slate-600 text-sm mt-3 max-w-xl mx-auto">
              Als qualifizierter Wiener Meisterbetrieb legen wir großen Wert auf ein sicheres, faires und professionelles Arbeitsumfeld.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Faire & pünktliche Entlohnung",
                desc: "Verlassen Sie sich auf eine überpünktliche Auszahlung. Wir entlohnen Ihre Leistung fair und leistungsgerecht, mit Bereitschaft zur Überzahlung je nach Erfahrung."
              },
              {
                title: "Langfristige & krisensichere Festanstellung",
                desc: "Sicherheit steht an erster Stelle. Sie erhalten ein unbefristetes und stabiles Arbeitsverhältnis für eine langfristige gemeinsame Zukunft."
              },
              {
                title: "Strukturierte Einschulung & feste Zuständigkeiten",
                desc: "Wir lassen Sie nicht allein. Sie erhalten eine fachgerechte Einarbeitung vor Ort und klare Pläne für feste Reinigungsobjekte."
              },
              {
                title: "Hochwertige Arbeitsbekleidung & Profi-Ausrüstung",
                desc: "Wir statten Sie mit hochwertiger, moderner Arbeitskleidung und ergonomischen Reinigungswerkzeugen aus, um Ihren Arbeitsalltag so komfortabel wie möglich zu gestalten."
              },
              {
                title: "Wertschätzendes & familiäres Betriebsklima",
                desc: "Flache Hierarchien, offene Kommunikation und ein respektvoller Umgang auf Augenhöhe zeichnen unsere Wiener Unternehmenskultur aus."
              },
              {
                title: "Flexible Arbeitszeitmodelle",
                desc: "Egal ob Vollzeit oder Teilzeit – wir planen Ihre Routen und Einsätze partnerschaftlich, sodass sie optimal zu Ihrer Lebenssituation passen."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-5 sm:p-6 bg-white border border-slate-100 hover:border-slate-300 transition-all rounded-lg shadow-3xs"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircle size={18} className="stroke-[2.5]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. WAS SIE MITBRINGEN - 1-Spalten Layout mit Checkpoints   */}
      {/* ========================================================== */}
      <section className="py-20 bg-[#f8fafc] border-b border-stone-200" id="was-sie-mitbringen">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#0052b4] uppercase mb-4 block">
              Ihre Qualifikationen
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003067] leading-tight tracking-tight">
              Was Sie mitbringen
            </h2>
            <p className="text-slate-600 text-sm mt-3 max-w-xl mx-auto">
              Gemeinsam sorgen wir für höchste Standards. Diese Eigenschaften erwarten wir von unseren Teammitgliedern.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Verlässlichkeit & Pünktlichkeit",
                desc: "Unsere Kunden vertrauen auf unseren pünktlichen Service. Ein eigenverantwortlicher, verlässlicher Arbeitsstil ist für uns unumgänglich."
              },
              {
                title: "Gepflegtes Auftreten & höfliche Umgangsformen",
                desc: "Als Repräsentant unseres Wiener Meisterbetriebs treten Sie stets freundlich, respektvoll und kundenorientiert auf."
              },
              {
                title: "Sorgfalt & Blick fürs Detail",
                desc: "Sie haben einen hohen Qualitätsanspruch an Sauberkeit und führen alle Reinigungsarbeiten gewissenhaft und gründlich durch."
              },
              {
                title: "Strukturierte & selbstständige Arbeitsweise",
                desc: "Sie arbeiten Pläne verlässlich ab und können sich Ihre Aufgaben vor Ort gut einteilen."
              },
              {
                title: "Gute Kommunikationsfähigkeit auf Deutsch",
                desc: "Für die sichere Einhaltung von Hygienevorgaben sowie die Abstimmung im Team sind solide Deutschkenntnisse erforderlich."
              },
              {
                title: "Engagement & Freude an Teamarbeit",
                desc: "Sie sind motiviert, aktiv anzupacken, arbeiten gerne in einem starken Team und unterstützen Ihre Kolleginnen und Kollegen."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-5 sm:p-6 bg-white border border-slate-200/60 hover:border-slate-300 transition-all rounded-lg shadow-3xs"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0052b4]">
                    <ShieldCheck size={18} className="stroke-[2.5]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#003067] mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white border border-slate-200/60 px-6 py-4 rounded-none text-xs sm:text-sm text-slate-600 font-medium">
              Nutzen Sie unten einfach das Formular für Ihre komfortable <button onClick={() => formSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} className="text-[#003067] font-bold hover:underline cursor-pointer">Initiativbewerbung</button>.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 4. BEWERBUNGSFORMULAR - Real submission matches Homepage  */}
      {/* ========================================================== */}
      <section ref={formSectionRef} id="kontakt" className="py-20 lg:py-24 bg-[#f4f7fa] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div>
              <span className="inline-block bg-[#003067] text-white px-5 py-2 rounded-md font-bold mb-6 tracking-widest uppercase text-[10px]">
                JETZT BEWERBEN
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight font-sans">
                Wir freuen uns auf <br />
                <span className="italic font-bold text-[#0052b4]">Ihre Bewerbung</span>.
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-sm font-medium leading-relaxed">
                <p>
                  Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Gebäudereinigung in Wien aktiv mit.
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#0052b4] italic mt-3 bg-white py-2 px-3 border-l-2 border-[#0052b4] inline-block shadow-3xs">
                  Innerhalb von 24 Stunden erhalten Sie eine erste Rückmeldung.
                </p>
              </div>
              
              {/* Contact numbers mimic Homepage */}
              <div className="space-y-4 mb-6">
                
                {/* Location Line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-150/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300 border border-slate-200/40">
                    <MapPin size={18} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/17/1, 1120 Wien</span>
                </div>

                {/* Telephone Line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-150/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300 border border-slate-200/40">
                    <Phone size={18} />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors">+43 660 1470 316</a>
                </div>
                
                {/* Email Line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-150/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300 border border-slate-200/40">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all">simbafacility@outlook.com</a>
                </div>
              </div>

              {/* Stephansdom Spire lineart to replicate homepage exactly */}
              <div className="hidden md:block relative w-full max-w-[420px] h-[255px] mt-10 overflow-visible">
                <svg viewBox="0 0 500 280" className="w-full h-auto animate-pulse-slow" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="140" r="115" stroke="#bae6fd" strokeWidth="0.75" opacity="0.25" />
                  
                  <line x1="40" y1="240" x2="460" y2="240" stroke="#003067" strokeWidth="1.5" />
                  <line x1="60" y1="246" x2="440" y2="246" stroke="#003067" strokeWidth="0.5" opacity="0.4" />
                  
                  <g stroke="#003067" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    <rect x="80" y="140" width="50" height="100" fill="#ffffff" />
                    <path d="M95 165 C95 155, 115 155, 115 165 L115 200 L95 200 Z" fill="none" />
                    <path d="M95 210 L115 210" />
                    <line x1="105" y1="140" x2="105" y2="240" strokeWidth="0.5" strokeDasharray="2 2" />
                    
                    <path d="M80 140 L105 40 L130 140" fill="#ffffff" strokeWidth="1.5" />
                    <line x1="105" y1="40" x2="105" y2="30" strokeWidth="1.5" />
                    <line x1="100" y1="34" x2="110" y2="34" strokeWidth="1.5" />
                    
                    <line x1="88" y1="110" x2="122" y2="110" />
                    <line x1="94" y1="80" x2="116" y2="80" />
                  </g>

                  <g stroke="#003067" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="155" y="90" width="160" height="150" fill="#ffffff" rx="4" />
                    <path d="M150 90 L235 60 L320 90" fill="#ffffff" strokeWidth="1.5" />
                    <circle cx="235" cy="78" r="5" fill="none" />
                    
                    <path d="M175 240 L175 150 C175 130, 205 130, 205 150 L205 240" fill="none" strokeWidth="1.5" />
                    <path d="M220 240 L220 150 C220 130, 250 130, 250 150 L250 240" fill="none" strokeWidth="1.5" />
                    <path d="M265 240 L265 150 C265 130, 295 130, 295 150 L295 240" fill="none" strokeWidth="1.5" />
                    
                    <line x1="155" y1="105" x2="315" y2="105" />
                    <line x1="155" y1="112" x2="315" y2="112" strokeWidth="0.5" />
                    
                    <rect x="180" y="118" width="12" height="12" rx="1" fill="none" />
                    <rect x="226" y="118" width="12" height="12" rx="1" fill="none" />
                    <rect x="272" y="118" width="12" height="12" rx="1" fill="none" strokeWidth="1.2" />
                  </g>

                  <g stroke="#00c2cb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                    <path d="M380 240 Q390 160, 350 100" />
                    <path d="M380 205 Q365 210, 362 195 Q375 200, 380 205" fill="none" />
                    <path d="M386 175 Q405 170, 408 185 Q395 180, 386 175" fill="none" />
                    <path d="M378 145 Q360 145, 358 132 Q370 138, 378 145" fill="none" />
                    <path d="M366 118 Q385 110, 388 122 Q374 120, 366 118" fill="none" />
                    <path d="M350 100 Q342 90, 346 92 Q348 94, 350 100" fill="#00c2cb" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column Form Container */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white border border-slate-200/65 p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015)] rounded-none">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#003067] mb-2">Bewerbung absenden</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Wir melden uns verlässlich zurück.</p>
              </div>

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                  >
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-5 shadow-sm">
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#003067] mb-2">Bewerbung gesendet!</h3>
                    <p className="text-sm text-slate-500 mb-6 max-w-sm leading-relaxed">
                      Vielen Dank für Ihr Vertrauen. Ihre Bewerbungsdaten wurden erfolgreich registriert. Wir prüfen Ihre Unterlagen sorgfältig und kontaktieren Sie innerhalb von 24 Stunden.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="text-xs font-bold text-[#003067] hover:underline bg-slate-50 px-5 py-2.5 rounded-md border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer"
                    >
                      Eine weitere Bewerbung senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5" 
                    onSubmit={handleSubmit}
                  >
                    
                    {/* Checkbox fields as requested */}
                    <div>
                      <span className="block text-xs font-extrabold text-[#003067] uppercase tracking-wider mb-3">
                        Gewünschter Bereich *
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "reinigungskraft", label: "Reinigungskraft" },
                          { id: "sonderreiniger", label: "Sonderreiniger" },
                          { id: "objektleitung", label: "Objektleitung" },
                          { id: "buerokraft", label: "Bürokraft" }
                        ].map((area) => (
                          <label 
                            key={area.id}
                            className={`flex items-center gap-3 p-3 bg-white border cursor-pointer transition-all text-xs sm:text-sm select-none ${
                              selectedAreas.includes(area.id)
                                ? "border-[#003067] bg-[#f0f9ff]/30 text-[#003067] font-semibold"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <input 
                              type="checkbox"
                              name="areas"
                              value={area.id}
                              checked={selectedAreas.includes(area.id)}
                              onChange={() => handleAreaToggle(area.id)}
                              className="w-4 h-4 rounded border-slate-300 text-[#003067] focus:ring-[#003067]/40 cursor-pointer"
                            />
                            {area.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name input */}
                    <div>
                      <input 
                        required 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#003067] focus:ring-1 focus:ring-[#003067] transition-all text-sm" 
                        placeholder="Name" 
                      />
                    </div>

                    {/* Email & Phone - 50/50 Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        required 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#003067] focus:ring-1 focus:ring-[#003067] transition-all text-sm" 
                        placeholder="E-Mail" 
                      />
                      <input 
                        required 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#003067] focus:ring-1 focus:ring-[#003067] transition-all text-sm" 
                        placeholder="Telefonnummer" 
                      />
                    </div>

                    {/* Message textarea */}
                    <div>
                      <textarea 
                        required 
                        rows={4} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#003067] focus:ring-1 focus:ring-[#003067] transition-all text-sm resize-none" 
                        placeholder="Nachricht (z.B. Qualifikationen, frühestmöglicher Eintritt...)"
                      />
                    </div>

                    {/* Custom File Upload for CV with Drag and Drop */}
                    <div>
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('cv-resume-upload')?.click()}
                        className={`border border-dashed rounded-lg p-5 text-center transition-all cursor-pointer ${
                          isDragging 
                            ? "border-[#003067] bg-[#f0f9ff]/50" 
                            : file 
                              ? "border-emerald-500 bg-emerald-50/10" 
                              : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <input 
                          type="file"
                          id="cv-resume-upload"
                          name="resume"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                        <div className="flex flex-col items-center justify-center gap-2">
                          {file ? (
                            <>
                              <FileText className="text-emerald-600 animate-pulse-slow" size={24} />
                              <div className="text-xs font-semibold text-emerald-800 break-all px-4">
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </div>
                              <button 
                                type="button" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile();
                                }}
                                className="text-[10px] font-bold text-red-650 hover:underline mt-1"
                              >
                                Datei entfernen
                              </button>
                            </>
                          ) : (
                            <>
                              <Upload className="text-slate-400" size={20} />
                              <p className="text-xs text-slate-600">
                                <span className="font-bold text-[#003067]">Lebenslauf hochladen</span> oder hierher ziehen (PDF, DOC, DOCX)
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-red-500 text-xs font-bold">Es gab einen Fehler beim Senden. Bitte versuchen Sie es telefonisch oder später erneut.</p>
                    )}

                    {/* Consent DSGVO */}
                    <div className="flex items-start gap-3 py-1">
                      <input 
                        required 
                        type="checkbox" 
                        id="career-consent" 
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-[#003067] focus:ring-[#003067]/40 cursor-pointer" 
                      />
                      <label htmlFor="career-consent" className="text-[10px] sm:text-xs text-slate-550 leading-relaxed select-none cursor-pointer">
                        Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Bewerbung erhoben und verarbeitet werden.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start">
                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-[#003067] hover:bg-[#004e9a] text-white px-10 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {formStatus === 'submitting' ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          "Bewerbung senden"
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
