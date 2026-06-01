import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Die AGB von Simba Facility Management Wien.',
  canonical: '/agb',
});

export default function AGBPage() {
  return (
    <div className="pt-48 pb-32 px-5">
      <div className="max-w-[800px] mx-auto prose prose-lg">
        <h1 className="font-serif text-5xl mb-12 text-primary">Allgemeine Geschäftsbedingungen</h1>
        
        <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
        <p className="mb-8">
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Leistungen und Angebote zwischen Simba Facility Management (nachfolgend „Auftragnehmer“) und seinen Kunden (nachfolgend „Auftraggeber“).
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Vertragsabschluss</h2>
        <p className="mb-8">
          Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die tatsächliche Ausführung der Leistung zustande.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Leistungsumfang</h2>
        <p className="mb-8">
          Der Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot bzw. der Leistungsbeschreibung. Zusätzliche Leistungen werden gesondert berechnet. Der Auftragnehmer verpflichtet sich, die Arbeiten fachgerecht und nach den anerkannten Regeln der Technik auszuführen.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Preise und Zahlungsbedingungen</h2>
        <p className="mb-8">
          Alle Preise verstehen sich, sofern nicht anders angegeben, zuzüglich der gesetzlichen Umsatzsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Haftung</h2>
        <p className="mb-8">
          Der Auftragnehmer haftet für Schäden, die durch ihn oder seine Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursacht wurden. Die Haftung für leichte Fahrlässigkeit ist, sofern gesetzlich zulässig, ausgeschlossen. Schäden sind dem Auftragnehmer unverzüglich schriftlich anzuzeigen.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Kündigung</h2>
        <p className="mb-8">
          Bei unbefristeten Verträgen kann das Vertragsverhältnis unter Einhaltung einer Frist von drei Monaten zum Monatsende schriftlich gekündigt werden, sofern im Einzelvertrag nichts anderes vereinbart wurde.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Schlussbestimmungen</h2>
        <p className="mb-8">
          Es gilt österreichisches Recht. Gerichtsstand ist Wien. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </div>
    </div>
  );
}
