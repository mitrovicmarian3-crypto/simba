import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Impressum',
  description: 'Rechtliche Informationen zu Simba Facility Management Wien.',
  canonical: '/impressum',
});

export default function ImpressumPage() {
  return (
    <div className="pt-48 pb-32 px-5">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-serif text-5xl mb-12 text-primary">Impressum</h1>
        
        <div className="space-y-8 text-lg text-dark/80 leading-relaxed">
          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Angaben gemäß Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</h2>
            <p>
              <strong>Simba Facility Management</strong><br />
              Herthergasse 37/17/1<br />
              1120 Wien<br />
              Österreich
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Kontakt</h2>
            <p>
              Telefon: <a href="tel:06601470316" className="text-primary hover:underline">0660 / 1470316</a><br />
              E-Mail: <a href="mailto:simbafacility@outlook.com" className="text-primary hover:underline">simbafacility@outlook.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">UID-Nummer</h2>
            <p>[Deine UID-Nummer hier eintragen, falls vorhanden]</p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Unternehmensgegenstand</h2>
            <p>Gebäudereinigung (Hausbetreuung)</p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Aufsichtsbehörde/Gewerbebehörde</h2>
            <p>Magistratisches Bezirksamt des XII. Bezirkes</p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Berufsbezeichnung</h2>
            <p>Denkmal-, Fassaden- und Gebäudereiniger (Meisterbetrieb)</p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">EU-Streitschlichtung</h2>
            <p>
              Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission unter <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://ec.europa.eu/odr</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4 text-dark">Haftung für Inhalte dieser Webseite</h2>
            <p>
              Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitstellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
