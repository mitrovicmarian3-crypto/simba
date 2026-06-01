import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz bei Simba Facility Management Wien.',
  canonical: '/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <div className="pt-48 pb-32 px-5">
      <div className="max-w-[800px] mx-auto prose prose-lg">
        <h1 className="font-serif text-5xl mb-12 text-primary">Datenschutzerklärung</h1>
        
        <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
        <p className="mb-8">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Datenerfassung auf unserer Webseite</h2>
        <p className="mb-4">
          Die Datenverarbeitung auf dieser Webseite erfolgt durch den Webseitenbetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Webseite entnehmen.
        </p>
        <p className="mb-8">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Webseite durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Zweck der Datennutzung</h2>
        <p className="mb-8">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Ihre Rechte</h2>
        <p className="mb-8">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>

        <h2 id="cookies" className="text-2xl font-bold mb-4">5. Cookies</h2>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät (Laptop, Tablet, Smartphone etc.) gespeichert werden. Sie dienen dazu, unsere Website nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>

        <h3 className="text-xl font-bold mb-3">5.1 Arten von Cookies</h3>
        <p className="mb-4">Wir unterscheiden Cookies nach folgenden Kriterien:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Session-Cookies vs. Persistente Cookies:</strong> Session-Cookies sind temporär und werden gelöscht, wenn Sie Ihren Browser schließen. Persistente Cookies bleiben für einen vordefinierten Zeitraum auf Ihrem Gerät gespeichert.</li>
          <li><strong>Essenziell vs. Nicht-essenziell:</strong> Essenzielle Cookies sind für den Betrieb der Website technisch notwendig. Nicht-essenzielle Cookies (z.B. Marketing, Statistiken) dienen der Analyse des Nutzerverhaltens oder dem Ausspielen von Werbung.</li>
          <li><strong>First-Party vs. Third-Party:</strong> First-Party Cookies werden von uns selbst gesetzt. Third-Party Cookies stammen von Drittanbietern (z.B. Google Maps).</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">5.2 Cookie-Kategorien auf unserer Website</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ice border-b border-primary/10">
                <th className="p-3 text-left font-bold">Kategorie</th>
                <th className="p-3 text-left font-bold">Zweck</th>
                <th className="p-3 text-left font-bold">Einwilligung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-bold">Notwendig</td>
                <td className="p-3">Ermöglichen Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche.</td>
                <td className="p-3">Nicht erforderlich</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Präferenzen</td>
                <td className="p-3">Ermöglichen es einer Website, sich an Informationen zu erinnern, die das Verhalten oder Aussehen der Website beeinflussen (z.B. Sprache).</td>
                <td className="p-3">Erforderlich</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Statistiken</td>
                <td className="p-3">Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt werden.</td>
                <td className="p-3">Erforderlich</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Marketing</td>
                <td className="p-3">Werden verwendet, um Besuchern relevante Anzeigen zu zeigen und die Effektivität von Kampagnen zu messen.</td>
                <td className="p-3">Erforderlich</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3">5.3 Liste der verwendeten Cookies</h3>
        <p className="mb-4">Nachfolgend finden Sie eine detaillierte Liste der auf dieser Website eingesetzten Cookies:</p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ice border-b border-primary/10">
                <th className="p-3 text-left font-bold">Name</th>
                <th className="p-3 text-left font-bold">Anbieter</th>
                <th className="p-3 text-left font-bold">Zweck</th>
                <th className="p-3 text-left font-bold">Dauer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3">cookie-consent</td>
                <td className="p-3">Simba FM (Eigener)</td>
                <td className="p-3">Speichert den Status Ihrer Cookie-Einwilligung.</td>
                <td className="p-3">1 Jahr</td>
              </tr>
              <tr>
                <td className="p-3">_ga, _gid</td>
                <td className="p-3">Google Analytics</td>
                <td className="p-3">Anonyme Analyse von Besucherstatistiken.</td>
                <td className="p-3">Session bis 2 Jahre</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3">5.4 Widerruf und Einstellungen</h3>
        <p className="mb-8">
          Sie können Ihre Einwilligung jederzeit ändern oder widerrufen. Klicken Sie dazu auf den Button "Cookie-Einstellungen" am unteren Bildschirmrand (wird nur angezeigt, wenn kein aktiver Consent vorliegt) oder löschen Sie Ihre Browser-Cookies, um das Banner erneut aufzurufen.
        </p>
      </div>
    </div>
  );
}
