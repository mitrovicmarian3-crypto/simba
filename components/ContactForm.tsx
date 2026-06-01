"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ChevronDown } from 'lucide-react';

export const ContactForm = ({ 
  defaultSubject, 
  customSubjects 
}: { 
  defaultSubject?: string;
  customSubjects?: string[];
}) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const subjects = customSubjects || [
    'Unterhaltsreinigung',
    'Hausbetreuung',
    'Fassadenreinigung',
    'Glasreinigung',
    'Ordinationsreinigung',
    'Sonderreinigung',
    'Winterdienst',
    'Entrümpelungen',
    'Garagenreinigung',
    'Schul- & Kindergartenreinigung',
    'Industriereinigung',
    'Sonstiges'
  ];
  const [subject, setSubject] = useState(defaultSubject || subjects[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  const inputClasses = "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#003067] focus:ring-1 focus:ring-[#003067] transition-all text-sm";

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {formStatus === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center p-8 bg-[#f8fafc] rounded-2xl border border-slate-100"
          >
            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#003067] mb-2">Vielen Dank!</h3>
            <p className="text-xs text-slate-505 mb-6 max-w-sm">Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.</p>
            <button 
              onClick={() => setFormStatus('idle')}
              className="text-xs font-bold text-[#003067] hover:underline bg-white px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Eine weitere Nachricht senden
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4" 
            onSubmit={handleSubmit}
          >
            {/* Name - Full width */}
            <div>
              <input 
                id="form-name" 
                name="name" 
                required 
                type="text" 
                className={inputClasses} 
                placeholder="Name" 
              />
            </div>

            {/* Email & Phone - 50/50 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input 
                  id="form-email" 
                  name="email" 
                  required 
                  type="email" 
                  className={inputClasses} 
                  placeholder="Email" 
                />
              </div>

              <div>
                <input 
                  id="form-phone" 
                  name="phone" 
                  required 
                  type="tel" 
                  className={inputClasses} 
                  placeholder="Telefonnummer" 
                />
              </div>
            </div>

            {/* Betreff (Dropdown) - Full width */}
            <div className="relative">
              <select 
                id="form-subject"
                name="subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputClasses} appearance-none pr-10`}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                <ChevronDown size={18} />
              </div>
            </div>

            {/* Nachricht - Full width */}
            <div>
              <textarea 
                id="form-message" 
                name="message" 
                required 
                rows={5} 
                className={`${inputClasses} resize-none`} 
                placeholder="Nachricht"
              ></textarea>
            </div>

            {formStatus === 'error' && (
              <p className="text-red-500 text-xs font-bold">Es gab einen Fehler beim Senden. Bitte versuchen Sie es telefonisch oder später erneut.</p>
            )}

            {/* Consent DSGVO */}
            <div className="flex items-start gap-3 py-1">
              <input 
                required 
                type="checkbox" 
                id="consent" 
                className="mt-1 w-4 h-4 rounded border-slate-300 text-[#003067] focus:ring-[#003067]/40 cursor-pointer" 
              />
              <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed select-none cursor-pointer">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an <a href="mailto:simbafacility@outlook.com" className="text-[#003067] font-semibold hover:underline">simbafacility@outlook.com</a> widerrufen.
              </label>
            </div>

            {/* Submit Button - Left Aligned */}
            <div className="flex justify-start pt-2">
              <button 
                disabled={formStatus === 'submitting'}
                className="bg-[#003067] hover:bg-[#004e9a] text-white px-10 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Senden"
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
