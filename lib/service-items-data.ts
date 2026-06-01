import {
  Layout,
  Droplets,
  Coffee,
  Sparkles,
  ClipboardCheck,
  Shapes,
  ShieldCheck,
  Building2,
  Calendar,
  Leaf,
  Wrench,
  Search,
  Home,
  Building,
  Trash2,
  Coins,
  Clock,
  CheckCircle,
  Car,
  Lightbulb,
  Sprout,
  Settings,
  Factory,
  HardHat,
  FileText,
  Stethoscope,
  Baby,
  School,
  Dumbbell,
  ShieldAlert,
  Snowflake,
  Scale,
  FileCheck,
  Check,
  Phone,
  SprayCan,
  Award,
  Users,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  desc: string;
  icon: any;
}

export const SERVICE_ITEMS_DICT: Record<string, ServiceItem[]> = {
  "unterhaltsreinigung-wien": [
    { title: "Arbeitsplätze & Gemeinschaftsbereiche", desc: "Gründliche Reinigung und Pflege aller Arbeitsflächen für ein hygienisches und produktives Arbeiten.", icon: Layout },
    { title: "Sanitär- & Hygienebereiche", desc: "Sorgfältige Reinigung und Hygiene in Sanitäranlagen für höchste Sauberkeit und Frische.", icon: Droplets },
    { title: "Küchen & Aufenthaltsräume", desc: "Hygiene und Sauberkeit in Küchen und Pausenräumen für mehr Wohlbefinden und eine angenehme Atmosphäre.", icon: Coffee },
    { title: "Glas- & Innenflächen", desc: "Streifenfreie Reinigung von Glas, Türen und Oberflächen für transparente Sauberkeit.", icon: Sparkles },
    { title: "Bodenpflege", desc: "Professionelle Reinigung und Pflege aller Bodenbeläge für ein dauerhaft gepflegtes Erscheinungsbild.", icon: Check },
    { title: "Qualität & Kontrolle", desc: "Regelmäßige Qualitätskontrollen und ein fester Ansprechpartner für maximale Zuverlässigkeit.", icon: ClipboardCheck }
  ],
  "fensterreinigung-wien": [
    { title: "Fenster & Glasflächen", desc: "Streifenfreie Reinigung für Fenster jeder Größe, inklusive Wintergärten und Dachfenster.", icon: Layout },
    { title: "Rahmen & Stöcke", desc: "Gründliche Reinigung von Fensterrahmen, Fensterbänken und Stöcken für eine gepflegte Optik.", icon: Shapes },
    { title: "Spezialglas-Reinigung", desc: "Fachgerechte Pflege von empfindlichen Gläsern, Schallschutz- oder Sonnenschutzfenstern.", icon: ShieldCheck },
    { title: "Teleskop- & Reinwasser-Technik", desc: "Sichere Reinigung auch in großen Höhen ohne teures Gerüst – umweltfreundlich & effektiv.", icon: Droplets },
    { title: "Glasfassaden", desc: "Reinigung kompletter Glasfronten für repräsentative Bürogebäude und Wohnhäuser.", icon: Building2 },
    { title: "Intervalle nach Maß", desc: "Ob einmaliger Frühjahrsputz oder regelmäßige Pflege in festen Abständen.", icon: Calendar }
  ],
  "fassadenreinigung-wien": [
    { title: "Algen- & Moosentfernung", desc: "Schonende Beseitigung von organischem Bewuchs ohne Beschädigung des Putzes.", icon: Leaf },
    { title: "Schmutz- & Rußabreinigungsverfahren", desc: "Wirksame Entfernung von Umwelt- und Rußablagerungen für ein neuwertiges Erscheinungsbild.", icon: SprayCan },
    { title: "Materialschonende Reinigung", desc: "Einsatz von materialgerechten Druck- und Temperaturstufen für Putz, Klinker oder Metall.", icon: Wrench },
    { title: "Nachhaltige Imprägnierung", desc: "Schutz vor feuchtigkeitsbedingten Schäden und langanhaltender Schutz vor erneutem Algbefall.", icon: ShieldCheck },
    { title: "Meisterhafte Hebebühnenführung", desc: "Sichere Ausführung an hohen Gebäuden mithilfe moderner Zugangstechniken.", icon: ShieldCheck },
    { title: "Kostenlose Probefläche", desc: "Wir reinigen vorab ein kleines Segment Ihrer Fassade unverbindlich als Qualitätsnachweis.", icon: Search }
  ],
  "entruempelungen-wien": [
    { title: "Wohnungs- & Hausräumung", desc: "Besenreine Räumung von Wohnungen, Häusern und gesamten Liegenschaften bei Auszug oder Erbschaft.", icon: Home },
    { title: "Firmen- & Büroräumungen", desc: "Diskrete und schnelle Auflösung von Gewerbeflächen, Archiven oder Lagerräumen.", icon: Building },
    { title: "Zertifizierte Mülltrennung", desc: "Umweltbewusste Sortierung und fachgerechte Zuführung zur Altstoffverwertung nach Ö-Norm.", icon: Trash2 },
    { title: "Fixpreis-Garantie", desc: "Sie erhalten ein verbindliches Angebot vorab, garantiert ohne versteckte Zusatzgebühren.", icon: Coins },
    { title: "Schnelle Abwicklung", desc: "Kurzfristige Termine und zügige Durchführung innerhalb kürzester Zeit.", icon: Clock },
    { title: "Besenreine Übergabe", desc: "Wir übergeben alle Räumlichkeiten sauber gefegt und sofort bezugsfertig.", icon: CheckCircle }
  ],
  "garagenreinigung-wien": [
    { title: "Kehren & Nassreinigung", desc: "Maschinelle Entfernung von Reifenabrieb, Staub, Streusalz und grobem Schmutz.", icon: Car },
    { title: "Hartnäckige Ölflecken", desc: "Spezielle Behandlung und ökologische Beseitigung von Ölrückständen und Treibstoffflecken.", icon: Droplets },
    { title: "Ablaufrinnen & Gullys", desc: "Regelmäßige Kontrolle und Reinigung der Entwässerungswege zur Vermeidung von Verstopfungen.", icon: Wrench },
    { title: "Wand- & Deckenreinigung", desc: "Entstaubung und Feuchtreinigung von Rohrleitungen, Beleuchtung und Beschilderungen.", icon: Layout },
    { title: "Hochdruckwaschverfahren", desc: "Porentiefe Sauberkeit für stark beanspruchte Beton- und Epoxidharzböden.", icon: SprayCan },
    { title: "Umweltschonende Entsorgung", desc: "Auffangen und fachgerechte Ableitung von Schmutzwasser nach behördlichen Vorgaben.", icon: ShieldCheck }
  ],
  "hausbetreuung-wien": [
    { title: "Stiegenhausreinigung", desc: "Laufendes Kehren und Wischen des Treppenhauses inkl. Handläufe und Eingangsbereich.", icon: Home },
    { title: "Mülltonnendienst", desc: "Pünktliches Bereitstellen und Zurückstellen der Abfallbehälter zu den Abholtagen.", icon: Trash2 },
    { title: "Leuchtmitteltausch & Kontrolle", desc: "Regelmäßige Überprüfung der Allgemeinbeleuchtung und sofortiger Austausch defekter Birnen.", icon: Lightbulb },
    { title: "Garten- & Grünpflege", desc: "Mähen von Rasenflächen, Unkrautentfernung und pflege der Außenanlagen.", icon: Sprout },
    { title: "Technische Kontrollen", desc: "Überprüfung der Haustechnik, Heizungsanlagen und Aufzüge auf Funktionstüchtigkeit.", icon: Settings },
    { title: "24/7 Notdienst", desc: "Immer erreichbar bei Schlüsselverlust, Wasserschäden oder akuten Störungen im Gebäude.", icon: Clock }
  ],
  "industriereinigung-wien": [
    { title: "Maschinenreinigung", desc: "Fachgerechte Reinigung komplexer Produktionsanlagen zur Vermeidung von Stillstandszeiten.", icon: Settings },
    { title: "Industriehallenböden", desc: "Entfernung extrem hartnäckiger Verschmutzungen, Öle und Fette auf Industrieböden.", icon: Factory },
    { title: "Reinigung im laufenden Betrieb", desc: "Flexible Schichteinsätze, die Ihre Produktionsprozesse minimal beeinträchtigen.", icon: Clock },
    { title: "Hochdruck- & Heißdampf", desc: "Spezialwaschgänge für Stahlkonstruktionen, Kessel und Schweißanlagen.", icon: Droplets },
    { title: "Sicherheitszertifiziert", desc: "Unsere Teams sind im Umgang mit Gefahrstoffen und industriellen Arbeitsschutzregeln geschult.", icon: HardHat },
    { title: "Dokumentierte Prozesse", desc: "Lückenloser Nachweis über Reinigungsschritte und Freigaben.", icon: FileText }
  ],
  "praxisreinigung-wien": [
    { title: "Flächendesinfektion", desc: "Vorschriftsmäßige Desinfektion aller patientennahen Kontaktflächen zur Keimprävention.", icon: Award },
    { title: "Sensible Wartezimmer", desc: "Hygienische Pflege und Staubentfernung im Empfang, Wartebereich und Sanitärräumen.", icon: Users },
    { title: "Behandlungsräume", desc: "Reinigung unter strengster Einhaltung der Hygiene-Richtlinien für medizinische Einrichtungen.", icon: Stethoscope },
    { title: "HACCP- & RKI-Standards", desc: "Einsatz von zertifizierten Desinfektionsmitteln und Einhaltung von Farbsystemen zur Infektionsvermeidung.", icon: ShieldCheck },
    { title: "Diskrete Durchführung", desc: "Zuverlässiger Reinigungsservice außerhalb Ihrer Sprechzeiten für einen reibungslosen Praxisbetrieb.", icon: Clock },
    { title: "Lückenloses Hygiene-Protokoll", desc: "Dokumentierte Reinigungsprozesse für Ihre QM-Systeme und behördliche Prüfungen.", icon: FileText }
  ],
  "schul-kindergartenreinigung-wien": [
    { title: "Ungiftige Reinigungsmittel", desc: "Einsatz umweltfreundlicher, biologisch abbaubarer Mittel zum Wohle der Kindergesundheit.", icon: Leaf },
    { title: "Keimfreie Spielflächen", desc: "Besonderer Fokus auf hygienische Tiefenreinigung von Spielzeug, Böden und Möbeln.", icon: Baby },
    { title: "Klassenzimmer & Tafeln", desc: "Tägliches Abstauben, Nasswischen der Böden und Reinigung der Schülertische.", icon: School },
    { title: "Sanitäranlagen für Kinder", desc: "Mehrmals tägliche Desinfektion und Reinigung der WC-Bereiche und Waschbecken.", icon: Droplets },
    { title: "Kantine & Speisesäle", desc: "Hygienische Reinigung aller Verpflegungsstationen nach strengen Lebensmittel-Standards.", icon: Coffee },
    { title: "Ferien-Grundreinigung", desc: "Detaillierte Grundreinigung und Bodenversiegelung während der schulfreien Zeit.", icon: Calendar }
  ],
  "sonderreinigung-wien": [
    { title: "Grundreinigung nach Bau", desc: "Gründliche Bauendreinigung und Baustaubbeseitigung nach Renovierungen oder Bauarbeiten.", icon: Wrench },
    { title: "Teppich- & Polsterreinigung", desc: "Sprühextraktionsverfahren zur porentiefen Schmutz- und Geruchsbeseitigung aus Textilien.", icon: Dumbbell },
    { title: "Schwerer Schmutzfall", desc: "Professionelle Lösungen bei extremen Verschmutzungen wie Brandfällen oder Messi-Wohnungen.", icon: ShieldAlert },
    { title: "Spezialmaschinen", desc: "Einsatz modernster Einscheibenmaschinen, Trockeneisgeräte und Industrie-Nasssauger.", icon: Settings },
    { title: "Oberflächen-Spezialpflege", desc: "Versiegelung von Holzböden, Naturstein oder Linoleum für langanhaltenden Schutz.", icon: Award },
    { title: "Flexible Soforthilfe", desc: "Zügige Terminvergabe und Einsatzbereitschaft bei unvorhergesehenen Notfällen.", icon: Clock }
  ],
  "winterdienst-wien": [
    { title: "Schneeräumung", desc: "Zuverlässige manuelle und maschinelle Schneebeseitigung von Gehwegen, Parkplätzen und Zufahrten.", icon: Snowflake },
    { title: "Eisglättebekämpfung", desc: "Präventives und akutes Streuen von Salz, Splitt oder umweltschonenden Taumitteln gegen Glatteis.", icon: Droplets },
    { title: "24/7 Rufbereitschaft", desc: "Kontinuierliche Überwachung der GPS-Wetterdaten für rechtzeitige Einsätze vor dem Frost.", icon: Clock },
    { title: "Volle Haftungsübernahme", desc: "Gesetzlich abgesicherte Übernahme der Räumpflicht (gemäß § 93 StVO), 100% haftungsfrei für Sie.", icon: Scale },
    { title: "Lückenlose GPS-Protokolle", desc: "Gerichtsfester Nachweis über Einsatzzeiten und Fahrrouten im Schadensfall.", icon: FileCheck },
    { title: "Saison-Splittkehrung", desc: "Gründliche Beseitigung und Entsorgung des Streugutes nach dem Winterende.", icon: Check }
  ]
};

export function getServiceItemsForService(slug: string): ServiceItem[] {
  return SERVICE_ITEMS_DICT[slug] || SERVICE_ITEMS_DICT["unterhaltsreinigung-wien"];
}
