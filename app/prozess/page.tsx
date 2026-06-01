"use client";

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProcessPage() {
  return (
    <div className="pt-32">
      {/* --- HERO --- */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Unser Prozess</h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Transparenz und Systematik für Ergebnisse, die begeistern. Erfahren Sie mehr über unsere Arbeitsweise.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img 
            src="/images/logos/logo.png" 
            alt="Simba Background Logo" 
            className="absolute inset-0 w-full h-full object-contain" 
          />
        </div>
      </section>

      {/* --- DETAILED STEPS --- */}
      <section className="py-32 px-5 bg-white">
        <div className="max-w-[1000px] mx-auto space-y-32">
          {[
            { 
              step: '01', 
              title: 'Die Besichtigung', 
              desc: 'Jedes Objekt ist einzigartig. Deshalb beginnt unsere Zusammenarbeit immer mit einer persönlichen Begehung vor Ort. Wir erfassen die spezifischen Anforderungen, Bodenbeläge und kritischen Bereiche.',
              details: [
                'Kostenlose Bestandsaufnahme',
                'Beratung zu Reinigungsintervallen',
                'Analyse von Problemzonen',
                'Individuelle Zeitplanung'
              ],
              icon: <MapPin size={48} />
            },
            { 
              step: '02', 
              title: 'Das Angebot', 
              desc: 'Basierend auf der Besichtigung erstellen wir ein detailliertes Leistungsverzeichnis. Sie wissen genau, welche Leistungen zu welchem Preis erbracht werden – ohne Überraschungen.',
              details: [
                'Transparente Fixpreise',
                'Detailliertes Leistungsverzeichnis',
                'Keine versteckten Kosten',
                'Schnelle Erstellung innerhalb 24h'
              ],
              icon: <Mail size={48} />
            },
            { 
              step: '03', 
              title: 'Die Durchführung', 
              desc: 'Nach Ihrer Freigabe startet unser Team. Wir setzen modernste Geräte und umweltfreundliche Mittel ein. Regelmäßige Qualitätskontrollen durch unsere Objektleiter garantieren den Meister-Standard.',
              details: [
                'Geschultes Fachpersonal',
                'Moderne Reinigungstechnik',
                'Laufende Qualitätschecks',
                'Direkter Ansprechpartner'
              ],
              icon: <Award size={48} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="text-primary font-black text-6xl mb-4 opacity-20">{item.step}</div>
                <h2 className="font-serif text-4xl mb-6 text-primary">{item.title}</h2>
                <p className="text-xl text-dark/70 leading-relaxed mb-8">{item.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-accent" />
                      <span className="font-bold text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square bg-ice rounded-[50px] flex items-center justify-center text-primary shadow-inner">
                  <div className="scale-[2]">{item.icon}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-ice text-center px-5">
        <h2 className="font-serif text-4xl mb-8">Bereit für den ersten Schritt?</h2>
        <Link href="/#kontakt" className="btn-main bg-primary text-white px-11 py-5 rounded-full font-extrabold uppercase tracking-widest text-base shadow-2xl hover:scale-105 transition-all inline-block">
          Jetzt Besichtigung anfragen
        </Link>
      </section>
    </div>
  );
}
