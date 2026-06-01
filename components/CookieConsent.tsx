"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    statistics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = (selectedPrefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(selectedPrefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      statistics: true,
      marketing: true,
      preferences: true,
    };
    handleSave(allAccepted);
  };

  const handleAcceptNecessary = () => {
    const onlyNecessary = {
      necessary: true,
      statistics: false,
      marketing: false,
      preferences: false,
    };
    handleSave(onlyNecessary);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-lg z-[3000]"
        >
          <div className="bg-white rounded-[30px] p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-dark/20 hover:text-dark transition-colors"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-dark text-left">Cookie-Einstellungen</h3>
            </div>

            {!showSettings ? (
              <>
                <p className="text-dark/70 text-sm leading-relaxed mb-8 text-left">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind technisch notwendig, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Wir kategorisieren diese in Notwendige, Statistiken, Marketing und Präferenzen. Details finden Sie in unserer <Link href="/datenschutz#cookies" className="text-primary hover:underline font-bold">Cookie-Richtlinie</Link>.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs shadow-lg hover:bg-dark transition-all"
                  >
                    Alle akzeptieren
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={handleAcceptNecessary}
                      className="flex-1 bg-ice text-dark py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
                    >
                      Nur Notwendige
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex-1 border border-gray-200 text-dark/60 py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all font-sans"
                    >
                      Einstellungen
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { id: 'necessary', label: 'Notwendig', desc: 'Erforderlich für die Grundfunktionen der Website.', disabled: true },
                    { id: 'statistics', label: 'Statistiken', desc: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.' },
                    { id: 'marketing', label: 'Marketing', desc: 'Werden verwendet, um Besuchern relevante Anzeigen zu zeigen.' },
                    { id: 'preferences', label: 'Präferenzen', desc: 'Ermöglichen es der Website, sich an Informationen zu erinnern.' },
                  ].map((item) => (
                    <label key={item.id} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-ice transition-all cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={preferences[item.id as keyof typeof preferences]}
                        disabled={item.disabled}
                        onChange={() => setPreferences(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof preferences] }))}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary disabled:opacity-50"
                      />
                      <div className="text-left">
                        <p className="font-bold text-sm text-dark">{item.label}</p>
                        <p className="text-xs text-dark/60 leading-tight">{item.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 border border-gray-200 text-dark/60 py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={() => handleSave(preferences)}
                    className="flex-1 bg-primary text-white py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs shadow-lg hover:bg-dark transition-all"
                  >
                    Speichern
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
