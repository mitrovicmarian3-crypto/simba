"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

const galleryImages = [
  { id: 1, keyword: 'cleaning' },
  { id: 2, keyword: 'office' },
  { id: 3, keyword: 'building' },
  { id: 4, keyword: 'shiny' },
  { id: 5, keyword: 'window' },
  { id: 6, keyword: 'facade' },
  { id: 7, keyword: 'team' },
  { id: 8, keyword: 'tools' },
  { id: 9, keyword: 'hygiene' },
];

export const GalerieClient = () => {
  return (
    <div className="pt-32">
      <section className="py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center mb-20">
          <div>
            <h1 className="font-sans text-5xl md:text-7xl mb-6 text-primary font-extrabold tracking-tight">Unsere Galerie</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
              Ein Bild sagt mehr als tausend Worte. Entdecken Sie Impressionen unserer täglichen Arbeit und überzeugen Sie sich visuell von der <strong>Meisterqualität</strong> unserer Reinigungsleistungen in Wien. Ob Baustellenreinigung, komplexe Glasfassaden oder gepflegte Büroflächen – wir hinterlassen bleibende Eindrücke.
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                className="aspect-[4/3] rounded-[30px] overflow-hidden shadow-lg border-4 border-white hover:shadow-2xl transition-all relative group bg-slate-100"
              >
                <Image
                  src={`https://picsum.photos/seed/${img.keyword}/800/600`}
                  alt={`Referenzbild ${img.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 max-w-[800px] mx-auto prose prose-lg text-dark/70 text-center">
          <h2 className="font-sans font-extrabold text-primary tracking-tight">Qualität, die man sehen kann</h2>
          <p>
            In unserer Galerie präsentieren wir Ihnen einen Auszug aus unseren Projekten im gesamten <strong>Großraum Wien</strong>. Jedes Foto steht für die Sorgfalt und Professionalität, die Simba Facility Management auszeichnet. Wir legen Wert auf jedes Detail, denn erst die Perfektion macht den Unterschied aus.
          </p>
          <p>
            Besonders stolz sind wir auf unsere Arbeit an historischen Gebäuden und modernen Bürokomplexen. Unsere Teams sind darauf spezialisiert, den ursprünglichen Glanz von Oberflächen wiederherzustellen und langfristig zu erhalten.
          </p>
        </div>
      </section>
    </div>
  );
};
