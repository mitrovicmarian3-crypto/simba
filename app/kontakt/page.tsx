"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

export default function KontaktPage() {
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
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Kontakt</h1>
            <p className="text-xl opacity-80 max-w-3xl mx-auto italic">
              Persönlich, schnell und unkompliziert. Wir freuen uns auf Ihre Anfrage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <ContactSection 
        title="Persönliche Beratung für Ihr glänzendes Vorhaben."
        subtitle="Schreiben Sie uns Ihr Anliegen. Wir antworten innerhalb von 24 Stunden."
      />

      {/* --- MAP --- */}
      <section className="h-[500px] w-full grayscale border-t border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.1017!2d16.3331!3d48.1853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da83401f8e12d%3A0x6734c5685a6396e0!2sHerthergasse%2037%2F17%2F1%2C%201120%20Wien!5e0!3m2!1sde!2sat!4v1711234567890!5m2!1sde!2sat" 
          width="100%" height="100%" className="border-0" allowFullScreen loading="lazy" 
          title="Standort von Simba Facility Management in Wien"
        />
      </section>
    </div>
  );
}
