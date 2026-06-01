"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Award,
  Send,
  Star,
  ShieldCheck,
  Leaf,
  Users,
  Calendar,
  UserCheck,
  Mail,
  Headphones,
  MousePointerClick,
  Clock,
  User,
  Building2,
  LayoutGrid,
  Headset,
  Stethoscope,
  Scale,
  ShoppingBag,
  Sofa,
  Dumbbell,
  MapPin,
  Plus,
  Search,
  Coins,
  Home,
  Building,
  Warehouse,
  Shapes,
  Paintbrush,
  Sparkles,
  Store,
  Trash2,
  Sprout,
  FileText,
  Wrench,
  Droplets,
  Wind,
  Sun,
  Lightbulb,
  CheckCircle2,
  Coffee,
  SprayCan,
  Layout,
  Monitor,
  Baby,
  School,
  Pencil,
  Heart,
  Settings,
  Factory,
  HardHat,
  Boxes,
  Activity,
  Hospital,
  Microscope,
  Syringe,
  ShieldAlert,
  Truck,
  FileCheck,
  AlertTriangle,
  Snowflake,
  Car,
  Check,
  ChevronRight,
  ClipboardList,
  RefreshCw,
  ClipboardCheck,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { ServiceData } from "@/lib/services-data";
import { getFaqForService } from "@/lib/faq-data";
import { getServiceItemsForService } from "@/lib/service-items-data";

const iconMap: Record<string, any> = {
  Users,
  Calendar,
  User,
  ShieldCheck,
  Clock,
  Building2,
  Stethoscope,
  Scale,
  ShoppingBag,
  Sofa,
  Dumbbell,
  Search,
  Coins,
  Award,
  CheckCircle,
  Home,
  Building,
  Warehouse,
  Shapes,
  Paintbrush,
  Sparkles,
  Store,
  Trash2,
  Sprout,
  FileText,
  Wrench,
  Droplets,
  Wind,
  Sun,
  Lightbulb,
  CheckCircle2,
  Coffee,
  SprayCan,
  Layout,
  Monitor,
  Baby,
  School,
  Pencil,
  Heart,
  Settings,
  Factory,
  HardHat,
  Boxes,
  Activity,
  Hospital,
  Microscope,
  Syringe,
  ShieldAlert,
  Truck,
  FileCheck,
  AlertTriangle,
  Snowflake,
  Car,
};

// Collected authentic client reviews for deterministic rotation
const ALL_REVIEWS = [
  {
    name: "Victoria R.",
    text: "Jasmina ist mega professionell in ihrer Arbeitsweise und man kann ihrem Team ohne Bedenken vertrauen. Das finde ich extrem wichtig bei einer Reinigungsfirma! Immer wieder gerne :)"
  },
  {
    name: "Almira S.",
    text: "Top Chefin! Sehr Professionell sauber pünktlich und verlässlich. Diese Firma kann ich mit gutem gewissen weiterempfehlen."
  },
  {
    name: "Isabella S.",
    text: "Ich kann nur ein großes Lob aussprechen. Machen einen tollen Job in der Reinigung und sind immer freundlich und zuvorkommend. Gerne wieder!"
  },
  {
    name: "Silja H.",
    text: "Wir sind mehr als zufrieden mit der Unterhaltsreinigung! Seit über einem Jahr nehmen wir das Service in Anspruch und sind durchgehend rundum zufrieden. Die Qualität der Arbeit ist konstant hervorragend. Vom ersten Kontakt bis zur Durchführung verläuft alles stets professionell, freundlich und zuverlässig."
  },
  {
    name: "Markus H.",
    text: "Ich habe ursprünglich Simba Facility B2B kennengelernt. Aufgrund der guten Erinnerungen habe ich mich vor ca. zwei Monaten dazu entschieden für meine Privatwohnung eine wöchentliche Reinigung anzufragen. Unkompliziert, professionell und top Qualität. Klare Empfehlung!"
  },
  {
    name: "Alminko D.",
    text: "Unser Büro wird von Simba Betreut, Top Zuverlässig, Preis Leistung Top👌 …"
  },
  {
    name: "Jasmin S.",
    text: "Großartige Chefin - top Leistung - wir sind sehr zufrieden!"
  },
  {
    name: "Sonnenschein.",
    text: "Wie jedes Jahr waren wir auch heuer wieder sehr zufrieden mit unserer Terrassen-Reinigung von Simba Facility👍 Pünktlich , ordentlich , sympathisch und alles super sauber ! Nächstes Jahr wieder …"
  },
  {
    name: "The",
    text: "Ein wunderbares Unternehmen. Ich bin sehr zufrieden mit der Reinigungsarbeit. Wird auf jeden Fall weiterempfohlen"
  },
  {
    name: "M. Wagner",
    text: "Sehr kompetente Beratung, schnelle Abwicklung und perfektes Reinigungsergebnis bei der Büroreinigung. Absolute Empfehlung!"
  }
];

const REVIEWS_BY_SLUG: Record<string, number[]> = {
  "unterhaltsreinigung-wien": [3, 5, 9], // Silja H., Alminko D., M. Wagner
  "entruempelungen-wien": [1, 4, 8],      // Almira S., Markus H., The
  "fassadenreinigung-wien": [2, 7, 6],    // Isabella S., Sonnenschein., Jasmin S.
  "fensterreinigung-wien": [3, 0, 9],     // Silja H., Victoria R., M. Wagner
  "garagenreinigung-wien": [4, 5, 1],     // Markus H., Alminko D., Almira S.
  "hausbetreuung-wien": [5, 8, 2],        // Alminko D., The, Isabella S.
  "industriereinigung-wien": [6, 9, 7],   // Jasmin S., M. Wagner, Sonnenschein.
  "praxisreinigung-wien": [7, 0, 3],      // Sonnenschein., Victoria R., Silja H.
  "schul-kindergartenreinigung-wien": [8, 1, 4], // The, Almira S., Markus H.
  "sonderreinigung-wien": [9, 2, 6],      // M. Wagner, Isabella S., Jasmin S.
  "winterdienst-wien": [0, 4, 7],         // Victoria R., Markus H., Sonnenschein.
};

const getReviewsForService = (slug: string) => {
  const indices = REVIEWS_BY_SLUG[slug] || [0, 1, 2];
  return [
    ALL_REVIEWS[indices[0]],
    ALL_REVIEWS[indices[1]],
    ALL_REVIEWS[indices[2]]
  ];
};

interface ServicePageClientProps {
  data: ServiceData;
}

export const ServicePageClient = ({ data }: ServicePageClientProps) => {
  const { slug, hero, benefitsSection, content, internalLinks } = data;
  const { title, subtitle, image: imageSrc } = hero;
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  // Helper to map slug to clean image names
  const getImagePrefix = React.useCallback((slug: string) => {
    if (slug === "praxisreinigung-wien") {
      return "ordinationsreinigung";
    }
    return slug.replace("-wien", "");
  }, []);

  // Derive dynamic labels based on slug
  const displayEyebrow = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return "UNTERHALTSREINIGUNG";
      case "fensterreinigung-wien":
        return "FENSTERREINIGUNG";
      case "fassadenreinigung-wien":
        return "FASSADENREINIGUNG";
      case "entruempelungen-wien":
        return "ENTRÜMPELUNGEN";
      case "garagenreinigung-wien":
        return "GARAGENREINIGUNG";
      case "hausbetreuung-wien":
        return "HAUSBETREUUNG";
      case "industriereinigung-wien":
        return "INDUSTRIEREINIGUNG";
      case "praxisreinigung-wien":
        return "ORDINATIONSREINIGUNG";
      case "schul-kindergartenreinigung-wien":
        return "KINDERGARTEN- & SCHULREINIGUNG";
      case "sonderreinigung-wien":
        return "SONDERREINIGUNG";
      case "winterdienst-wien":
        return "WINTERDIENST";
      default:
        return "DIENSTLEISTUNG";
    }
  }, [slug]);

  const displayServiceLower = React.useMemo(() => {
    switch (slug) {
      case "winterdienst-wien":
        return "unseren Winterdienst-Service";
      case "entruempelungen-wien":
        return "unsere professionellen Entrümpelungen";
      default:
        return `unsere ${displayEyebrow}`;
    }
  }, [slug, displayEyebrow]);

  // Rotate customer reviews based on slug
  const serviceReviews = React.useMemo(() => {
    return getReviewsForService(slug);
  }, [slug]);

  // Load custom 10 B2B FAQs
  const serviceFaqs = React.useMemo(() => {
    return getFaqForService(slug);
  }, [slug]);

  // Get detailed 6 items grid cards
  const serviceDetailItems = React.useMemo(() => {
    return getServiceItemsForService(slug);
  }, [slug]);

  // Helpers for text tailoring
  const prep = slug === "winterdienst-wien" ? "FÜR DEN" : slug === "entruempelungen-wien" ? "FÜR" : "FÜR DIE";
  const headlineArea = slug === "winterdienst-wien" ? "Sicherheit" : slug === "entruempelungen-wien" ? "Räumung" : "Sauberkeit";
  
  const section1Title = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return "Professionelle Unterhaltsreinigung für dauerhaft gepflegte Arbeitsumgebungen.";
      case "entruempelungen-wien":
        return "Professionelle Entrümpelung für besenreine Objekte.";
      case "fassadenreinigung-wien":
        return "Professionelle Fassadenreinigung für dauerhaft gepflegte Fassaden.";
      case "fensterreinigung-wien":
        return "Professionelle Fensterreinigung für dauerhaft glasklare Aussichten.";
      case "garagenreinigung-wien":
        return "Professionelle Garagenreinigung für dauerhaft saubere Tiefgaragen.";
      case "hausbetreuung-wien":
        return "Professionelle Hausbetreuung für dauerhaft gepflegte Liegenschaften.";
      case "industriereinigung-wien":
        return "Professionelle Industriereinigung für hocheffiziente Industriebetriebe.";
      case "praxisreinigung-wien":
        return "Professionelle Ordinationsreinigung für absolut hygienische Praxen.";
      case "schul-kindergartenreinigung-wien":
        return "Professionelle Kindergarten- & Schulreinigung für gesunde Räume.";
      case "sonderreinigung-wien":
        return "Professionelle Sonderreinigung für anspruchsvolle Härtefälle.";
      case "winterdienst-wien":
        return "Professioneller Winterdienst für verlässlich schneefreie Liegenschaften.";
      default:
        return `Professionelle ${displayEyebrow.toLowerCase()} für erstklassigen Werterhalt.`;
    }
  }, [slug, displayEyebrow]);

  const section1TitleParts = React.useMemo(() => {
    const t = section1Title;
    const parts = t.split(" für ");
    if (parts.length >= 2) {
      return {
        prefix: parts[0] + " für",
        highlight: parts.slice(1).join(" für ")
      };
    }
    return {
      prefix: t,
      highlight: ""
    };
  }, [section1Title]);

  const section2Title = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return "Ihr zuverlässiger Partner für eine saubere Arbeitsumgebung.";
      case "entruempelungen-wien":
        return "Ihr zuverlässiger Partner für stressfreie Räumungen.";
      case "fassadenreinigung-wien":
        return "Ihr zuverlässiger Partner für strahlend saubere Fassaden.";
      case "fensterreinigung-wien":
        return "Ihr zuverlässiger Partner für glasklare Sichtverhältnisse.";
      case "garagenreinigung-wien":
        return "Ihr zuverlässiger Partner für perfekt gepflegte Tiefgaragen.";
      case "hausbetreuung-wien":
        return "Ihr zuverlässiger Partner für rundum gepflegte Liegenschaften.";
      case "industriereinigung-wien":
        return "Ihr zuverlässiger Partner für anspruchsvolle Industriereinigung.";
      case "praxisreinigung-wien":
        return "Ihr zuverlässiger Partner für keimfreie Ordinationen.";
      case "schul-kindergartenreinigung-wien":
        return "Ihr zuverlässiger Partner für hygienische Bildungseinrichtungen.";
      case "sonderreinigung-wien":
        return "Ihr zuverlässiger Partner für professionelle Sonderreinigungen.";
      case "winterdienst-wien":
        return "Ihr zuverlässiger Partner für schneefreie Liegenschaften.";
      default:
        return `Ihr zuverlässiger Partner für meisterhafte ${displayEyebrow.toLowerCase()}.`;
    }
  }, [slug, displayEyebrow]);

  const section2TitleParts = React.useMemo(() => {
    const t = section2Title;
    const words = t.trim().split(" ");
    if (words.length > 2) {
      const lastTwo = words.slice(-2).join(" ");
      const prefix = words.slice(0, -2).join(" ");
      return { prefix, lastTwo };
    }
    return { prefix: t, lastTwo: "" };
  }, [section2Title]);

  const section2Subtext = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return "Eine professionelle Unterhaltsreinigung sorgt für Sauberkeit, Hygiene und Werterhalt – und schafft die Grundlage für produktive Arbeitsprozesse und zufriedene Mitarbeiter. Wir unterstützen Unternehmen dabei, täglich den besten Eindruck zu hinterlassen.";
      case "entruempelungen-wien":
        return "Eine fachgerechte Entrümpelung schafft schnell und unkompliziert neuen Platz in Ihren Objekten. Wir planen Ihre Räumung diskret, besenrein und absolut verlässlich zum garantierten Festpreis.";
      case "fassadenreinigung-wien":
        return "Eine professionelle Fassadenreinigung entfernt hartnäckige Verschmutzungen sowie organischen Algen- und Moosbefall materialschonend und nachhaltig – für einen bleibenden, erstklassigen Eindruck.";
      case "fensterreinigung-wien":
        return "Eine regelmäßige und gründliche Reinigung aller Glasflächen inklusive Rahmen sichert optimalen Lichteinfall und sorgt für ein gepflegtes, glasklares Erscheinungsbild Ihrer Schaufenster und Liegenschaften.";
      case "garagenreinigung-wien":
        return "Eine maschinelle Garagenreinigung entfernt Reifenabrieb, Ruß, Staub und aggressive Streusalzrückstände porentief und materialschonend – für Langlebigkeit und Sauberkeit Ihrer Parkflächen.";
      case "hausbetreuung-wien":
        return "Eine meisterhaft gepflegte Liegenschaft sichert den langfristigen Werterhalt und sorgt für vollste Mieterzufriedenheit. Wir übernehmen alle Aufgaben verlässlich, rechtssicher und auf höchstem Niveau.";
      case "industriereinigung-wien":
        return "Sorgfältige Reinigung im industriellen Umfeld sichert den reibungslosen Produktionsablauf, verringert Maschinenausfälle und schützt die Gesundheit Ihrer Teams – hocheffizient und flexibel.";
      case "praxisreinigung-wien":
        return "In Praxen und Kliniken hat Hygiene oberste Priorität. Wir reinigen absolut vorschriftsmäßig, chemisch einwandfrei nach HACCP-Standards und sichern die sterile Gesundheit von Personal und Patienten.";
      case "schul-kindergartenreinigung-wien":
        return "Ökologische Sauberkeit schafft gesunde Räume für Kinder und Jugendliche. Wir reinigen keimfrei, giftfrei und schonend mit zertifizierten Mitteln – für einen unbeschwerten Schul- und Kindergartenalltag.";
      case "sonderreinigung-wien":
        return "Sonderreinigungen verlangen spezielles Know-how und modernste Maschinen. Ob nach Baustellen, bei extremen Härtefällen oder für textile Spezialflächen – wir lösen jedes Problem fachgerecht.";
      case "winterdienst-wien":
        return "Sorgenfreie Wintersaison dank 100% rechtskonformer Übernahme der gesetzlichen Räum- und Streupflicht. Wir überwachen das Wetter 24/7 und rücken bei Schneefall und Glätte vollautomatisch aus.";
      default:
        return "Wir garantieren maximale Zuverlässigkeit, transparente Konditionen und beste Ausführung – exakt auf Ihre Liegenschaft abgestimmt.";
    }
  }, [slug]);

  const section3Prose = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return {
          p1: "Eine saubere Arbeitsumgebung steigert das Wohlbefinden, die Produktivität und hinterlässt bei Kunden und Geschäftspartnern einen professionellen Eindruck.",
          p2: "Mit über 10 Jahren Erfahrung in der Unterhaltsreinigung sorgen wir für höchste Standards, verlässliche Abläufe und nachhaltige Sauberkeit."
        };
      case "entruempelungen-wien":
        return {
          p1: "Eine professionelle und besenreine Räumung schafft sofort wieder Platz und Ordnung in privaten oder gewerblichen Liegenschaften.",
          p2: "Mit über 10 Jahren Erfahrung koordinieren wir jeden Ablauf stressfrei, diskret und trennen Wertstoffe sorgfältig für Sie."
        };
      case "fassadenreinigung-wien":
        return {
          p1: "Eine gepflegte Außenfassade schützt vor folgenschweren Bauschäden und sichert ein repräsentatives Erscheinungsbild Ihrer Liegenschaft.",
          p2: "Mit modernsten Materialien und Hebebühnen entfernen wir Algen, Ruß und organischen Schmutz schonend und langanhaltend."
        };
      case "fensterreinigung-wien":
        return {
          p1: "Glasklare Sichtverhältnisse und saubere Rahmen fluten Ihre Räume mit natürlichem Tageslicht und werten Schaufenster merklich auf.",
          p2: "Mit erfahrenen Fensterputzern und moderner Teleskop-Technik reinigen wir Scheiben jeder Größe streifenfrei und sicher."
        };
      case "garagenreinigung-wien":
        return {
          p1: "Tiefgaragen sind ständig Abgasen, Staub und aggressivem Tausalz ausgesetzt. Eine maschinelle Nassreinigung sichert Sauberkeit und Werterhalt.",
          p2: "Mit modernen Kehrsaugmaschinen und Hochdruckwaschverfahren reinigen wir Böden, Rinnen und Schilder gründlich und umweltschonend."
        };
      case "hausbetreuung-wien":
        return {
          p1: "Eine lückenlose und meisterhafte Hausbetreuung entlastet Eigentümer und sichert ein harmonisches Wohnumfeld für alle Mieter.",
          p2: "Ob Stiegenhausreinigung, Haustechnik-Kontrolle oder Grünflächenpflege – wir übernehmen alle Aufgaben verlässlich und kompetent."
        };
      case "industriereinigung-wien":
        return {
          p1: "In Werkshallen und Industriebetrieben sichert die fachgerechte Reinigung von Kesseln, Öfen und Böden die laufende Arbeitssicherheit.",
          p2: "Wir arbeiten flexibel in Betriebspausen oder am Wochenende und setzen modernste Geräte ein, um Ausfälle komplett zu vermeiden."
        };
      case "praxisreinigung-wien":
        return {
          p1: "Hygienische Keimfreiheit und sterile Flächen schützen die Gesundheit von Patienten und Personal in Ordinationen nachweislich.",
          p2: "Unser speziell geschultes Team reinigt nach HACCP- und RKI-Richtlinien und dokumentiert alle Schritte gerichts- und prüfsicher."
        };
      case "schul-kindergartenreinigung-wien":
        return {
          p1: "In Kindergärten und Schulen ist eine ökologische, Gift- und keimfreie Reinigung für eine gesunde Entwicklung unverzichtbar.",
          p2: "Mit materialschonenden, zertifiziert biologischen Mitteln sorgen wir für saubere Spielflächen, Tische und keimfreie Sanitäranlagen."
        };
      case "sonderreinigung-wien":
        return {
          p1: "Anspruchsvolle Härtefälle wie Bauendreinigungen, Teppich-Spezialpflege oder Räumungen verlangen meisterhaftes Fachwissen.",
          p2: "Mit Spezialgeräten, professionellen Reinigungsmitteln und geschulten Kräften lösen wir jedes Reinigungsproblem im Handumdrehen."
        };
      case "winterdienst-wien":
        return {
          p1: "Schneefreie Gehwege und sichere Parkflächen sind im Winter gesetzliche Pflicht. Wir befreien Sie zu 100% von der Haftung.",
          p2: "Dank GPS-Überwachung und 24/7 Rufbereitschaft rücken unsere Räum- und Streuteams bei Frost und Schneefall vollautomatisch für Sie aus."
        };
      default:
        return {
          p1: "Ein gepflegtes und sauberes Umfeld steigert das Wohlbefinden und sichert den optimalen Werterhalt Ihrer Liegenschaft.",
          p2: "Mit über 10 Jahren Erfahrung sorgen wir für höchste Qualitätsstandards und einwandfreie, verlässliche Ausführung."
        };
    }
  }, [slug]);

  const getEightBenefitsForSlug = React.useCallback((slug: string) => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return [
          { title: "Höhere Mitarbeiterzufriedenheit", desc: "Saubere und hygienische Arbeitsplätze steigern das Wohlbefinden und die Motivation." },
          { title: "Strukturierte Abläufe & Planungssicherheit", desc: "Feste Reinigungspläne und abgestimmte Prozesse sorgen für reibungslose Abläufe und volle Kontrolle." },
          { title: "Professioneller Unternehmensauftritt", desc: "Gepflegte Räumlichkeiten hinterlassen bei Kunden, Besuchern und Geschäftspartnern einen positiven Eindruck." },
          { title: "Entlastung interner Ressourcen", desc: "Wir übernehmen die Reinigung – Ihr Team kann sich auf das Kerngeschäft konzentrieren." },
          { title: "Langfristige Werterhaltung", desc: "Regelmäßige Reinigung und pflege schützen Ihre Immobilie und erhalten ihren Wert über viele Jahre." },
          { title: "Dokumentierte Qualitätskontrollen", desc: "Regelmäßige Kontrollen sichern gleichbleibend hohe Reinigungsstandards." },
          { title: "Weniger krankheitsbedingte Ausfälle", desc: "Hygienische Umgebungen reduzieren Keime und tragen zur Gesundheit Ihrer Mitarbeiter bei." },
          { title: "Flexibilität nach Ihren Anforderungen", desc: "Individuelle Leistungen und Intervalle, angepasst an Ihre Betriebszeiten und Bedürfnisse." }
        ];
      case "entruempelungen-wien":
        return [
          { title: "Garantierter Festpreis", desc: "Verbindliche Angebote ohne versteckte Nebenkosten geben Ihnen absolute finanzielle Sicherheit." },
          { title: "Besenreine Übergabe", desc: "Wir hinterlassen alle geräumten Räume und Wege komplett sauber gefegt und bezugsfertig." },
          { title: "Diskrete Durchführung", desc: "Unsere eingespielten Teams arbeiten schnell, leise und absolut diskret in jedem Objekt." },
          { title: "Zertifizierte Entsorgung", desc: "Fachgerechte Mülltrennung und Ablieferung bei lizenzierten Wiener Deponien nach Gesetz." },
          { title: "Mögliche Wertanrechnung", desc: "Gut erhaltene Möbel oder Wertgegenstände rechnen wir fair auf den Gesamtpreis an." },
          { title: "Schnelle Terminvereinbarung", desc: "Kurzfristige Besichtigungen und rascher Projektstart sorgen für maximale Zeitersparnis." },
          { title: "Komplette Demontage", desc: "Wir übernehmen den Abbau von Möbeln, Küchen und Einbauten fachgerecht und sauber." },
          { title: "Haftpflicht-Abdeckung", desc: "Voller Versicherungsschutz im seltenen Schadensfall während der gesamten Räumung." }
        ];
      case "fassadenreinigung-wien":
        return [
          { title: "Werterhalt der Fassade", desc: "Regelmäßige Reinigung schützt Putz und Mauerwerk vor schädlichen Umwelteinflüssen." },
          { title: "Schonende Algenentfernung", desc: "Spezielle Verfahren beseitigen Algen und Moos, ohne die Bausubstanz anzugreifen." },
          { title: "Langanhaltender Schutz", desc: "Eine abschließende Imprägnierung schützt langfristig vor erneutem biologischem Befall." },
          { title: "Aufwertung der Immobilie", desc: "Eine saubere Fassade steigert den optischen Repräsentationswert und den Marktwert merklich." },
          { title: "Kein teures Baugerüst nötig", desc: "Dank Hebebühnen und Teleskoptechnik arbeiten wir extrem effizient und kostengünstig." },
          { title: "Musterfläche vorab", desc: "Wir reinigen auf Wunsch eine Probefläche, um Sie von unserem Ergebnis zu überzeugen." },
          { title: "Profis an der Hebebühne", desc: "Geschulte Höhenarbeiter garantieren eine sichere und makellose Durchführung." },
          { title: "Umweltgerechte Chemie", desc: "Wir verwenden ausschließlich geprüfte, bauökologisch unbedenkliche Reinigungsprodukte." }
        ];
      case "fensterreinigung-wien":
        return [
          { title: "Streifenfreier Glanz", desc: "Professionelle Abziehtechnik sorgt für kristallklare Scheiben ohne störende Schlieren." },
          { title: "Inklusive Rahmenreinigung", desc: "Wir reinigen Falze, Rahmen und Fensterbänke standardmäßig gründlich mit." },
          { title: "Modernes Reinwassersystem", desc: "Glasklare Sauberkeit auch ohne Leitern bei großen Höhen durch umweltschonendes Filtersystem." },
          { title: "Schonung des Materials", desc: "Wir verwenden weiche Bürsten und materialschonende, biologisch abbaubare Reiniger." },
          { title: "Erhöhte Langlebigkeit", desc: "Die Beseitigung von saurem Regen und Schmutz schützt Ihr Glas vor langfristiger Trübung." },
          { title: "Flexible Intervalle", desc: "Ob einmaliger Großputz oder regelmäßiger Turnus – wir passen uns Ihren Wünschen an." },
          { title: "Hervorragender Lichteinfall", desc: "Saubere Scheiben lassen mehr Tageslicht herein und verbessern das Raumklima spürbar." },
          { title: "Sichere Ausführung", desc: "Ausgebildete Glasreiniger verfügen über die nötige Höhensicherung für kritische Bereiche." }
        ];
      case "garagenreinigung-wien":
        return [
          { title: "Porentiefe Nassreinigung", desc: "Maschinelle Schrubber-Saugmaschinen entfernen hartnäckigen Schmutz und Reifenabrieb." },
          { title: "Zuverlässige Ölbeseitigung", desc: "Wir behandeln Ölflecken und Kraftstoffrückstände fachgerecht nach Umweltvorgaben." },
          { title: "Werterhalt des Bodens", desc: "Entfernung von Streusalzrückständen schützt den Beton vor Korrosion und Lochfraß." },
          { title: "Saubere Abflüsse", desc: "Wir reinigen Rinnen und Sinkkästen gründlich, um Verstopfungen bei Starkregen vorzubeugen." },
          { title: "Entstaubung von Leitungen", desc: "Kabelkanäle, Schilder und Beleuchtungskörper werden materialschonend mitgereinigt." },
          { title: "Sicherheits-Vorteil", desc: "Saubere Stellplätze und trockene Fahrbahnen mindern die Rutsch- und Unfallgefahr stark." },
          { title: "Professioneller Eindruck", desc: "Eine helle, saubere Tiefgarage vermittelt Parkern ein hohes Sicherheits- und Premiumgefühl." },
          { title: "Umweltschonende Entsorgung", desc: "Das Schmutzwasser wird vorschriftsmäßig aufgefangen und über Ölabscheider gereinigt." }
        ];
      case "hausbetreuung-wien":
        return [
          { title: "Konstanter Werterhalt", desc: "Regelmäßige Pflege schützt die Bausubstanz Ihres Objektes nachhaltig vor Verfall." },
          { title: "Zufriedene Mieter", desc: "Ein gepflegtes Stiegenhaus und saubere Außenbereiche sorgen für ein angenehmes Wohnklima." },
          { title: "Rechtssichere Betreuung", desc: "Wir überwachen alle Fluchtwege, tauschen Leuchtmittel und sichern die Haustechnik ab." },
          { title: "Ein fester Ansprechpartner", desc: "Direkte und unkomplizierte Kommunikation sorgt für schnelle Abhilfe bei Anliegen." },
          { title: "Pünktlicher Mülltonnendienst", desc: "Verlässliche Bereitstellung aller Tonnen an den offiziellen Entleerungstagen der MA 48." },
          { title: "Rundum-Gepflegte Außenanlagen", desc: "Regelmäßiges Rasenmähen, Kehren und Unkrautjäten hält Ihr Objekt stets repräsentativ." },
          { title: "Technisches Kontroll-System", desc: "Frühzeitiges Erkennen von Defekten an Türen, Aufzügen und Heizungen spart teure Reparaturen." },
          { title: "24/7 Notdienst-Erreichbarkeit", desc: "Schnelle Hilfe bei Rohrbruch, Stromausfall oder blockierten Eingängen rund um die Uhr." }
        ];
      case "industriereinigung-wien":
        return [
          { title: "Vermeidung von Stillstand", desc: "Präventive Reinigung sichert die ständige Betriebsbereitschaft Ihrer Produktionsstraßen." },
          { title: "Längere Lebensdauer der Maschinen", desc: "Fachmännische Entfernung von Staub und Schlacke mindert den mechanischen Verschleiß." },
          { title: "Hocheffiziente Spezialgeräte", desc: "Wir nutzen modernste Industrie-Nasssauger, Hochdruck- und Trockeneisreinigungsverfahren." },
          { title: "Maximale Arbeitssicherheit", desc: "Saubere Hallenböden minimieren Rutschunfälle und gefährliche Arbeitsplatzrisiken." },
          { title: "Reinigung während Ruhezeiten", desc: "Wir reinigen nachts, am Wochenende oder in Werksferien, ohne Ihren Betrieb zu stören." },
          { title: "Zertifizierter Arbeitsschutz", desc: "Unsere Reinigungskräfte sind vollumfänglich geschult und tragen vorschriftsmäßige PSA." },
          { title: "Gesetzeskonforme Entsorgung", desc: "Fachgerechte Trennung und Protokollierung aller Industrieabfälle und Schmierstoffe." },
          { title: "Detaillierte Ablaufberichte", desc: "Sie erhalten lückenlose Nachweise und Protokolle für Ihre internen Audits und Zertifikate." }
        ];
      case "praxisreinigung-wien":
        return [
          { title: "RKI- & HACCP-Konformität", desc: "Strengste Einhaltung aller Vorgaben des Robert Koch-Instituts für keimfreie Sicherheit." },
          { title: "Vermeidung von Kreuzkontamination", desc: "Strikte Anwendung unseres Farbsystems verhindert die Keimverschleppung im Objekt." },
          { title: "Zertifizierte Desinfektion", desc: "Wirksam gelistete Desinfektionsmittel sichern die Keimfreiheit in Behandlungsräumen." },
          { title: "Schutz von Personal & Patienten", desc: "Ein hygienisch einwandfreies Umfeld senkt das Infektionsrisiko in Arztpraxen drastisch." },
          { title: "Diskretes Profi-Personal", desc: "Unser fest angestelltes Team arbeitet absolut diskret und ist speziell für Praxen geschult." },
          { title: "Lückenloses Hygiene-Protokoll", desc: "Dokumentierte Prozesse bieten Ihnen absolute Rechtssicherheit bei Kontrollen durch das Amt." },
          { title: "Schutz wertvoller Geräte", desc: "Materialschonende Reinigung empfindlicher medizinischer Oberflächen und Apparaturen." },
          { title: "Flexibler Einsatz am Feierabend", desc: "Wir reinigen nach Ihren Sprechzeiten, damit Ihr Praxisbetrieb ungestört bleibt." }
        ];
      case "schul-kindergartenreinigung-wien":
        return [
          { title: "Ökologische Reinigungsmittel", desc: "Wir verwenden ausschließlich ungiftige, biologisch abbaubare und geruchsneutrale Produkte." },
          { title: "Keimfreie Spielbereiche", desc: "Sorgfältige Desinfektion von Spielflächen, Spielzeugen und Tischen schützt die Kleinsten." },
          { title: "Farbsystem gegen Keime", desc: "Strenge Einhaltung von Reinigungsklassen schließt Keimübertragungen konsequent aus." },
          { title: "Schutz der Kindergesundheit", desc: "Eine staub- und allergenarme Umgebung begünstigt ein gesundes Lern- und Spielklima." },
          { title: "Speziell geschulte Teams", desc: "Unsere festen Mitarbeiter arbeiten mit Freude und hoher Sorgfalt in Bildungseinrichtungen." },
          { title: "Ferien-Intensivreinigung", desc: "In den Ferien reinigen und versiegeln wir elastische Böden tiefenwirksam für das neue Jahr." },
          { title: "Wohlfühlfaktor für Pädagogen", desc: "Saubere Aufenthaltsräume fördern ein produktives und motivierendes Arbeitsumfeld." },
          { title: "Dokumentiertes Qualitätskonzept", desc: "Wir halten behördliche Vorgaben penibel ein und protokollieren jeden Einsatz verlässlich." }
        ];
      case "sonderreinigung-wien":
        return [
          { title: "Lösung für jeden Härtefall", desc: "Ob nach Brand, Wasserschaden oder bei Messi-Wohnungen – wir reinigen gründlich." },
          { title: "Gründliche Baureinigung", desc: "Wir befreien frisch fertiggestellte Immobilien porentief von Baustaub, Mörtel und Farbresten." },
          { title: "Modernste Spezialmaschinen", desc: "Wir setzen Trockeneisgeräte, Einscheibenmaschinen und Thermo-Nasssauger gezielt ein." },
          { title: "Tiefenwirksame Polsterpflege", desc: "Sprühextraktionsverfahren entfernt festsitzenden Schmutz und Gerüche aus Textilien." },
          { title: "Professionelle Versiegelungen", desc: "Porenschutz für Holz, Marmor, Linoleum oder Granit für extrem verlängerte Lebensdauer." },
          { title: "Schnelle Soforthilfe", desc: "Wir reagieren umgehend auf Notfälle und vereinbaren zeitnahe Sondereinsätze." },
          { title: "Zertifiziertes Fachwissen", desc: "Ausgebildete Gebäudereinigemeister leiten die anspruchsvollen Spezialreinigungen an." },
          { title: "Transparentes Festpreisangebot", desc: "Wir besichtigen den Härtefall vor Ort und kalkulieren ein faires, bindenes Angebot." }
        ];
      case "winterdienst-wien":
        return [
          { title: "100% Haftungsübernahme", desc: "Wir haften per Vertrag im Schadensfall vollumfänglich und befreien Sie von jeder Sorge." },
          { title: "Wettersatelliten-Überwachung", desc: "Automatisches Ausrücken bei Frost oder Schneefall dank modernster Meteorologie-Daten." },
          { title: "Gerichtsfeste GPS-Protokolle", desc: "Jeder Einsatz wird lückenlos erfasst, digital abgesichert und sicher archiviert." },
          { title: "Zuverlässiger 24/7 Notdienst", desc: "Wir räumen und streuen Gehwege, Einfahrten und Parkflächen rund um die Uhr." },
          { title: "Streuung nach Umweltschutz", desc: "Wir verwenden Salz, Splitt und Tau-Mittel präzise dosiert und baurechtsneutral." },
          { title: "Entsorgung Reststreugut", desc: "Gründliche Kehrung und Abtransport des Splitts nach Saisonende im Frühjahr inklusive." },
          { title: "Moderner Maschinenpark", desc: "Vom ergonomischen Handschieber bis zum leistungsstarken Schneeräum-Fahrzeug einsatzbereit." },
          { title: "Pauschalierte Saisonpreise", desc: "Volle Budgetsicherheit dank einheitlicher Fixpreise für die gesamte Wintersaison." }
        ];
      default:
        return [
          { title: "Feste Teams statt ständig wechselndes Personal", desc: "Ihre Räumlichkeiten werden von vertrauten Mitarbeitern gereinigt – ohne Einarbeitung, ohne Qualitätsverlust." },
          { title: "Klare Reinigungspläne statt Chaos im Alltag", desc: "Feste Zeiten, keine Ausfälle oder Überraschungen." },
          { title: "Persönlicher Ansprechpartner statt Hotline", desc: "Direkt erreichbar, ohne Umwege." },
          { title: "Regelmäßige Qualitätskontrollen", desc: "Sauberkeit auf konstant hohem Niveau." },
          { title: "Flexible Einsatzzeiten", desc: "Auch außerhalb Ihrer Öffnungszeiten." },
          { title: "Feste Ansprechpartner", desc: "Immer erreichbar bei Fragen." },
          { title: "Meisterbetrieb", desc: "Höchste Qualität und Fachkompetenz." },
          { title: "Transparente Preise", desc: "Feste Konditionen ohne Überraschungen." }
        ];
    }
  }, []);

  const getFormSubjectForSlug = React.useCallback((slug: string) => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return "Unterhaltsreinigung";
      case "entruempelungen-wien":
        return "Entrümpelungen";
      case "fassadenreinigung-wien":
        return "Fassadenreinigung";
      case "fensterreinigung-wien":
        return "Glasreinigung";
      case "garagenreinigung-wien":
        return "Garagenreinigung";
      case "hausbetreuung-wien":
        return "Hausbetreuung";
      case "industriereinigung-wien":
        return "Industriereinigung";
      case "praxisreinigung-wien":
        return "Ordinationsreinigung";
      case "schul-kindergartenreinigung-wien":
        return "Schul- & Kindergartenreinigung";
      case "sonderreinigung-wien":
        return "Sonderreinigung";
      case "winterdienst-wien":
        return "Winterdienst";
      default:
        return "Sonstiges";
    }
  }, []);

  const dynamicIntroSection1 = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return [
          "Eine verlässliche und <strong>professionelle Unterhaltsreinigung</strong> bildet das unaufgeregte, aber essentielle Fundament für den täglichen Erfolg moderner Unternehmen. In einer Zeit, in der hygienische Standards und gesunde, produktive Arbeitsumgebungen über die Zufriedenheit von Teams und Kunden entscheiden, bedarf die laufende <strong>Gebäudereinigung Wien</strong> einer präzisen Organisation. Planbare Abläufe, geschulte Reinigungsteams und eine strukturierte Betreuung garantieren, dass Ihre Geschäftsräume Tag für Tag repräsentativ bleiben.",
          "Bei Simba Facility Management betrachten wir die regelmäßige Pflege von Immobilien als ganzheitlichen Beitrag zur langfristigen Werterhalt. Mit eingespielten, festen Reinigungsprozessen und einer diskreten Durchführung während oder außerhalb Ihrer Betriebszeiten sichern wir eine gleichbleibende Qualität auf höchstem Niveau. Durch maßgeschneiderte Pflegekonzepte und kontinuierliche Qualitätsaudits schaffen wir die verlässliche Struktur, die anspruchsvolle Gewerbeimmobilien verlangen. Als erfahrener Partner für eine hochwertige <strong>Unterhaltsreinigung Wien</strong> stehen wir für Substanzschutz und Professionalität."
        ];
      case "entruempelungen-wien":
        return [
          "Eine professionelle und <strong>fachgerechte Entrümpelung</strong> schafft rasch und unkompliziert Platz in Ihren privaten oder gewerblichen Objekten. Ob Wohnungsauflösung, Kellerräumung oder Geschäftsschließung – eine planmäßige <strong>Räumung Wien</strong> minimiert Ihren Stressfaktor erheblich. Mit professioneller Planung, einem starken Team und klar getakteten Abläufen sorgen wir dafür, dass Ihre Räumlichkeiten termingerecht leer und sauber übergeben werden.",
          "Bei Simba Facility Management behandeln wir jede Entrümpelung mit absoluter Diskretion und Sorgfalt. Wir verwerten gut erhaltene Gegenstände und trennen den verbleibenden Abfall fachgerecht nach gesetzlichen Bestimmungen. Durch transparente Fixpreisangebote behalten Sie stets die volle Kostenkontrolle. Als Ihr verlässlicher Experte für eine termingerechte <strong>Entrümpelung Wien</strong> stehen wir Ihnen bei jedem Schritt kompetent zur Seite."
        ];
      case "fassadenreinigung-wien":
        return [
          "Eine fachmännisch durchgeführte und <strong>professionelle Fassadenreinigung</strong> schützt Ihre Immobilie wirksam vor witterungsbedingten Schäden und sichert ein repräsentatives Erscheinungsbild. Im Laufe der Jahre führen Moos, Algen und Umweltgase zu unschönen Verfärbungen, sodass eine professionelle <strong>Gebäudereinigung Wien</strong> an der Außenhaut unverzichtbar wird. Mit modernsten Geräten und schonenden Wirkstoffen bringen wir Ihre Fassade wieder zum Strahlen.",
          "Bei Simba Facility Management betrachten wir den Schutz Ihrer Bausubstanz als höchste Priorität. Dank moderner Hebebühnen und Teleskoplösungen reinigen wir Ihre Immobilie extrem effizient und absolut sicher, ohne teure Geruste aufstellen zu müssen. Durch eine optionale Langzeit-Imprägnierung beugen wir dem Neubefall durch Mikroorganismen nachhaltig vor. Als Ihr spezialisierter Partner für eine werterhaltende <strong>Fassadenreinigung Wien</strong> stehen wir für maximale Qualität."
        ];
      case "fensterreinigung-wien":
        return [
          "Eine gründliche und <strong>streifenfreie Fensterreinigung</strong> lässt natürliches Licht ungehindert in Ihre Räume fluten und wertet jedes Gebäude optisch auf. Saubere Glasflächen und gepflegte Rahmen sind die Visitenkarte eines jeden Unternehmens, weshalb eine regelmäßige <strong>Glasreinigung Wien</strong> zu den wichtigsten Pflegemaßnahmen gehört. Mit modernster Abziehtechnik und geschultem Blick reinigen wir jede Glasfläche rückstandslos.",
          "Bei Simba Facility Management reinigen wir nicht nur die Scheiben, sondern befreien auch Falze, Rahmen und Fensterbänke von hartnäckigem Umweltschmutz. Unsere erfahrenen Fensterputzer arbeiten zügig, leise und absolut sicher – auch bei schwer zugänglichen Verglasungen oder in großen Höhen mit Reinwassersystemen. Als Ihr erfahrener Dienstleister für eine glasklare <strong>Fensterreinigung Wien</strong> garantieren wir eine makellose Optik."
        ];
      case "garagenreinigung-wien":
        return [
          "Eine hochmoderne und <strong>maschinelle Garagenreinigung</strong> befreit Ihre Tiefgarage porentief von Reifenabrieb, Ruß, Staub und aggressiven Streusalzrückständen. Besonders im Winter sind Parkflächen hohen Belastungen ausgesetzt, was eine regelmäßige <strong>Tiefgaragenreinigung Wien</strong> zur unverzichtbaren Investition für den Substanzschutz macht. Planbare Abläufe und leistungsstarke Kehrsaugmaschinen garantieren ein optimales Reinigungsergebnis.",
          "Bei Simba Facility Management reinigen wir Ihre Garagenböden, Rinnen, Rohrleitungen und Hinweisschilder materialschonend und umweltbewusst. Das kontaminierte Abwasser wird vorschriftsmäßig über Ölabscheider von uns gefiltert und entsorgt. Durch rutschfeste, saubere Böden erhöhen wir zudem die Verkehrssicherheit für alle Parker. Als Ihr meistergeführter Partner für eine professionelle <strong>Garagenreinigung Wien</strong> stehen wir für Sauberkeit und Sicherheit."
        ];
      case "hausbetreuung-wien":
        return [
          "Eine lückenlose und <strong>meisterhafte Hausbetreuung</strong> entlastet Immobilieneigentümer spürbar und sorgt für eine hohe Zufriedenheit unter den Mietern. Ein gepflegtes Stiegenhaus, funktionierende Haustechnik und saubere Außenanlagen steigern den Wohnkomfort massiv, was eine professionelle <strong>Hausverwaltung Wien</strong> ideal ergänzt. Wir überwachen alle Details Ihres Objektes verlässlich und rechtssicher.",
          "Bei Simba Facility Management decken wir das gesamte Spektrum von der regelmäßigen Stiegenhausreinigung über die Haustechnik-Kontrolle bis zum Mülltonnendienst ab. Ein fester Ansprechpartner kümmert sich persönlich um Ihre Liegenschaft und führt regelmäßige Qualitätsprüfungen durch. Sollte es zu Störungen kommen, sind wir sofort zur Stelle. Als Ihr starker Partner für eine verlässliche <strong>Hausbetreuung Wien</strong> sichern wir den Wert Ihrer Immobilie."
        ];
      case "industriereinigung-wien":
        return [
          "Eine hocheffiziente und <strong>fachgerechte Industriereinigung</strong> sichert die Funktionalität Ihrer Maschinen und trägt maßgeblich zur Arbeitssicherheit der Mitarbeiter bei. Staub, Schmiermittel und Produktionsrückstände müssen unter strengen Richtlinien entfernt werden, was eine zertifizierte <strong>Hallenreinigung Wien</strong> unverzichtbar macht. Mit modernsten Reinigungsverfahren passen wir uns flexibel an Ihre Produktionszyklen an.",
          "Bei Simba Facility Management stimmen wir unsere Einsätze perfekt mit Ihren Betriebspausen oder Wochenenden ab, um Stillstandszeiten komplett zu vermeiden. Unser geschultes Personal arbeitet unter strikter Einhaltung aller Sicherheits- und Umweltstandards und dokumentiert jeden Arbeitsschritt lückenlos im Protokoll. Als Ihr erfahrener Spezialist für eine professionelle <strong>Industriereinigung Wien</strong> stehen wir für Höchstleistungen."
        ];
      case "praxisreinigung-wien":
        return [
          "Eine absolut keimfreie und <strong>hygienische Praxisreinigung</strong> schützt die Gesundheit von Patienten und Praxispersonal in hohem Maße. In Arztpraxen, Laboren und Kliniken gelten strengste gesetzliche Auflagen, weshalb eine vorschriftsmäßige <strong>Desinfektionsreinigung Wien</strong> keinen Raum für Kompromisse lässt. Wir reinigen streng nach gesetzlichen Hygieneplänen und Vorgaben des RKI.",
          "Bei Simba Facility Management setzt unser biologisch und chemisch geschultes Team das bewährte Vier-Farben-Reinigungsverfahren ein, um Kreuzkontaminationen absolut auszuschließen. Jede Fläche wird materialschonend desinfiziert und der gesamte Prozess für Ihre nächste behördliche Prüfung gerichts- und lückenlos dokumentiert. Als Ihr zertifizierter Partner für eine lückenlose <strong>Praxisreinigung Wien</strong> garantieren wir maximale Sicherheit."
        ];
      case "schul-kindergartenreinigung-wien":
        return [
          "Eine umweltschonende und <strong>ökologische Schulreinigung</strong> schafft gesunde, staubfreie Lebens- und Lernräume für Kinder und Jugendliche. Da junge Immunsysteme besonders sensibel reagieren, ist eine giftfreie <strong>Kindergartenreinigung Wien</strong> von entscheidender Bedeutung für den täglichen Gesundheitsschutz. Wir entfernen Viren und Keime schonend und vollkommen rückstandslos von allen Kontaktflächen.",
          "Bei Simba Facility Management verwenden wir ausschließlich zertifizierte, umweltfreundliche und geruchsneutrale Reinigungsmittel namhafter Hersteller. Unsere eingespielten Teams reinigen Klassenräume, Spielflächen und Sanitärbereiche mit größter Begeisterung und hoher Gründlichkeit. Als Ihr verantwortungsvoller Partner für eine nachhaltige <strong>Schul- und Kindergartenreinigung Wien</strong> setzen wir Maßstäbe für Sauberkeit."
        ];
      case "sonderreinigung-wien":
        return [
          "Eine professionelle und <strong>bedarfsgerechte Sonderreinigung</strong> löst selbst hartnäckigste Probleme und anspruchsvolle Härtefälle schnell und gründlich. Ob Bauendreinigung nach einer Renovierung, Tiefenreinigung von Teppichböden oder Reinigung nach Wasserschäden – eine meisterhafte <strong>Spezialreinigung Wien</strong> erfordert das passende Equipment und tiefes Fachwissen. Wir übernehmen jeden Härtefall mit vollem Erfolg.",
          "Bei Simba Facility Management setzen wir modernste Einscheibenmaschinen, Trockeneisgeräte und Spezialreiniger ein, um selbst hartnäckigste Verschmutzungen materialschonend zu entfernen. Wir besichtigen die Situation vorab kostenfrei und vereinbaren einen garantierten Festpreis für Sie. Als Ihr flexibler und meistergeführter Partner für eine gründliche <strong>Sonderreinigung Wien</strong> schaffen wir glänzende Verhältnisse."
        ];
      case "winterdienst-wien":
        return [
          "Ein reibungsloser und <strong>rechtskonformer Winterdienst</strong> befreit Sie in der kalten Jahreszeit zuverlässig von der gesetzlichen Räum- und Streupflicht. Hauseigentümer und Firmen haften bei Glatteisunfällen voll, was eine professionelle <strong>Schneeräumung Wien</strong> zur unverzichtbaren Absicherung macht. Wir überwachen die Wetterdaten rund um die Uhr und rücken bei Schneefall vollautomatisch aus.",
          "Bei Simba Facility Management übernehmen wir die vertragliche Haftung für Ihre Liegenschaft zu 100%. Unsere modernen Räumfahrzeuge und Streumannschaften sorgen dafür, dass Gehwege und Parkplätze schnell wieder sicher begehbar sind. Jeder Einsatz wird gerichts- und versicherungsfest digital dokumentiert. Als Ihr verlässlicher Partner für einen sicheren <strong>Winterdienst Wien</strong> stehen wir für absolute Sorgenfreiheit."
        ];
      default:
        const textSegment = content?.sections?.[0]?.text || "";
        return textSegment.split("\n\n");
    }
  }, [slug, content]);

  // Steps timeline
  const timelineSteps = React.useMemo(() => {
    if (slug === "winterdienst-wien") {
      return [
        { num: "01", title: "Analyse", desc: "Wir begehen die Liegenschaft kostenlos zur präzisen Flächenvermessung und Ermittlung aller Risikozonen." },
        { num: "02", title: "Planung", desc: "Sie erhalten das maßgeschneiderte Winterdienstkonzept mit vertraglich geregelter Haftungsübernahme." },
        { num: "03", title: "Umsetzung", desc: "Unsere verlässlichen Winterdienstmannschaften beräumen und streuen Gehwege und Parkflächen vollautomatisch." },
        { num: "04", title: "Qualitätskontrolle", desc: "Gerichtsfeste GPS-Einsatzprotokolle sichern die lückenlose Einhaltung aller gesetzlichen Qualitätsstandards." }
      ];
    } else if (slug === "entruempelungen-wien") {
      return [
        { num: "01", title: "Analyse", desc: "Wir analysieren den genauen Räumungsumfang und kalkulieren eventuelle Wertanrechnungen direkt vor Ort." },
        { num: "02", title: "Planung", desc: "Sie erhalten innerhalb von 24h Ihr verbindliches Festpreisangebot, garantiert ohne versteckte Gebühren." },
        { num: "03", title: "Umsetzung", desc: "Unser eingespieltes Team räumt diskret und trennt sämtliche Rohstoffe und Abfälle fachgerecht." },
        { num: "04", title: "Qualitätskontrolle", desc: "Akkurate Endkontrollen vor der besenreinen Übergabe sichern ein perfektes und einwandfreies Ergebnis." }
      ];
    } else {
      return [
        { num: "01", title: "Analyse", desc: "Wir analysieren Objektstruktur, Nutzungsfrequenz und individuelle Anforderungen Ihres Unternehmens." },
        { num: "02", title: "Planung", desc: "Sie erhalten ein maßgeschneidertes Reinigungskonzept mit klar definierten Intervallen und Abläufen." },
        { num: "03", title: "Umsetzung", desc: "Unsere festen Reinigungsteams setzen sämtliche Leistungen zuverlässig, fachgerecht und diskret um." },
        { num: "04", title: "Qualitätskontrolle", desc: "Dokumentierte Qualitätskontrollen sichern dauerhaft hohe Standards und gleichbleibende Ergebnisse." }
      ];
    }
  }, [slug]);

  const qualityStandards = React.useMemo(() => {
    return [
      {
        num: "01",
        title: "Zertifizierter Meisterbetrieb",
        desc: "Fachgerechte Reinigung mit höchsten Standards. Als Meisterbetrieb stehen wir für professionelle Prozesse, geschulte Fachkräfte und konstant hohe Qualitätsmaßstäbe. Unsere langjährige Erfahrung garantiert zuverlässige Ergebnisse.",
        icon: Award
      },
      {
        num: "02",
        title: "Feste Ansprechpartner",
        desc: "Sie erhalten einen persönlichen Objektbetreuer, der Ihre Anforderungen, Abläufe und Prioritäten genau kennt. Dadurch ermöglichen wir schnelle Reaktionszeiten, klare Kommunikation und eine reibungslose Zusammenarbeit.",
        icon: UserCheck
      },
      {
        num: "03",
        title: "Individuelle Reinigungskonzepte",
        desc: "Jede Immobilie stellt unterschiedliche Anforderungen an Reinigung, Hygiene und Organisation. Deshalb entwickeln wir individuelle Reinigungskonzepte, die exakt auf Nutzungsfrequenz, Betriebszeiten und Objektstruktur abgestimmt sind.",
        icon: ClipboardList
      },
      {
        num: "04",
        title: "Hygienisches 4-Farben-System",
        desc: "Durch die konsequente Einhaltung unseres professionellen 4-Farben-Systems verhindern wir wirksam Kreuzkontaminationen zwischen Sanitär-, Küchen- und Bürobereichen. Hygiene und Sauberkeit in jedem Segment gesichert.",
        icon: LayoutGrid
      },
      {
        num: "05",
        title: "Nachhaltige Reinigungsmittel",
        desc: "Wir setzen auf umweltschonende, biologisch abbaubare Reinigungsmittel namhafter Hersteller. Diese bieten höchste Reinigungskraft bei maximaler Schonung von Gesundheit, Umwelt und wertvollen Oberflächen.",
        icon: Leaf
      },
      {
        num: "06",
        title: "Persönliche Objektbetreuung",
        desc: "Regelmäßige Qualitätsaudits und persönliche Kontrollen durch unsere Objektleiter sichern eine gleichbleibend hohe Reinigungsqualität. Durch dokumentierte Checklisten halten wir unsere meisterhaften Standards konstant.",
        icon: Headset
      }
    ];
  }, []);

  const formattedTitle = React.useMemo(() => {
    switch (slug) {
      case "unterhaltsreinigung-wien":
        return {
          prefix: "Professionelle Unterhaltsreinigung",
          highlight: "Wiener Unternehmen",
          italic: "zuverlässig, planbar & mit festen Teams"
        };
      case "entruempelungen-wien":
        return {
          prefix: "Professionelle Entrümpelung",
          highlight: "Wiener Objekte",
          italic: "besenrein, diskret & zum Fixpreis"
        };
      case "fassadenreinigung-wien":
        return {
          prefix: "Professionelle Fassadenreinigung",
          highlight: "Wiener Immobilien",
          italic: "schonend, nachhaltig & mit Langzeitschutz"
        };
      case "fensterreinigung-wien":
        return {
          prefix: "Professionelle Fensterreinigung",
          highlight: "Wiener Liegenschaften",
          italic: "glasklar, streifenfrei & inklusive Rahmen"
        };
      case "garagenreinigung-wien":
        return {
          prefix: "Professionelle Garagenreinigung",
          highlight: "Wiener Tiefgaragen",
          italic: "maschinell, sauber & porentief rein"
        };
      case "hausbetreuung-wien":
        return {
          prefix: "Professionelle Hausbetreuung",
          highlight: "Wiener Liegenschaften",
          italic: "verlässlich, meistergepflegt & rechtssicher"
        };
      case "industriereinigung-wien":
        return {
          prefix: "Professionelle Industriereinigung",
          highlight: "Wiener Industrie-Betriebe",
          italic: "effizient, flexibel & nach höchsten Standards"
        };
      case "praxisreinigung-wien":
        return {
          prefix: "Professionelle Ordinationsreinigung",
          highlight: "Wiener Praxen & Kliniken",
          italic: "hygienisch, nach HACCP & absolut zuverlässig"
        };
      case "schul-kindergartenreinigung-wien":
        return {
          prefix: "Kindergarten- & Schulreinigung",
          highlight: "Wiener Bildungseinrichtungen",
          italic: "ökologisch, keimfrei & für gesunde Räume"
        };
      case "sonderreinigung-wien":
        return {
          prefix: "Professionelle Sonderreinigung",
          highlight: "Wiener Härtefälle",
          italic: "effektiv, meisterhaft & mit Spezialgeräten"
        };
      case "winterdienst-wien":
        return {
          prefix: "Professioneller Winterdienst",
          highlight: "Wiener Liegenschaften",
          italic: "schneefrei, 24/7 überproportional & rechtssicher"
        };
      default: {
        const parts = title.split(" – ");
        return {
          prefix: parts[0] || title,
          highlight: "Wien",
          italic: parts[1] || "zuverlässig, planbar & auf Meister-Niveau"
        };
      }
    }
  }, [slug, title]);

  return (
    <div className="bg-white min-h-screen">
      {/* --- MASTER-TEMPLATED PREMIUM CORPORATE HERO --- */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-28">
        {/* Absolute right side image container matching mockup blending layout */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%] xl:w-[57%] z-0 hidden lg:block overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-left"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Natural smooth desktop white gradient overlay, fading perfectly into solid white background */}
            <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
          </div>
        </div>

        <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text Block */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
              {/* Quiet Premium Pre-Title matching Mockup exactly */}
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067]/85 mb-5 font-bold block leading-none font-sans">
                {displayEyebrow} IN WIEN
              </span>
              
              {/* Elegant Large Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-6 font-sans">
                {formattedTitle.prefix} <br className="hidden md:inline" />
                für <span className="text-[#0854a0] font-black">{formattedTitle.highlight}</span>
              </h1>

              {/* Distinctive Small Horizontal Divider Segment */}
              <div className="w-12 h-1 bg-[#003067] mb-6 rounded-full" />

              {/* Classy Serif Italic Phrase */}
              <span className="text-primary italic font-serif font-normal block text-2xl sm:text-3xl md:text-[34px] leading-tight mb-8">
                {formattedTitle.italic}
              </span>
              
              {/* Clean, Slate Paragraph Block matching mockup styling */}
              <p 
                className="text-slate-500 font-semibold text-base md:text-lg leading-relaxed max-w-xl mb-12 font-sans"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
              
              {/* Clean, Non-Flickering Buttons matching Home and Mockup pages */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="#kontakt"
                  className="bg-[#003067] hover:bg-primary text-white font-bold px-8 py-4.5 rounded-lg text-sm md:text-base border border-[#003067] hover:border-primary transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md shadow-primary/5 group"
                >
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                  Kostenloses Angebot anfordern
                </Link>
                <a
                  href="tel:06601470316"
                  className="border border-[#003067]/20 hover:border-[#003067]/40 text-[#003067] hover:bg-[#003067]/5 text-center font-bold px-8 py-4.5 rounded-lg text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Phone size={16} />
                  Jetzt anrufen
                </a>
              </div>
            </div>

            {/* Mobile/Tablet Image Layout fallback beneath buttons (lg:hidden) */}
            <div className="lg:hidden relative w-full h-[300px] sm:h-[420px] overflow-hidden rounded-2xl border border-slate-100/60 shadow-sm mt-6">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* --- SECTION 1: CORPORATE TRUST & PROSE TEXT (LIGHT BLUE-GREY BACKGROUND) --- */}
      <section className="py-20 lg:py-24 bg-[#f4f7fa] border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Block Title & Subtext Unified for Perfect Spacing */}
            <div className="lg:col-span-12">
              <span className="text-[11.5px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
                {displayEyebrow} IN WIEN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-[#003067] leading-[1.12] tracking-tight mb-5 font-sans">
                {section1TitleParts.prefix} <span className="text-[#0052b4] font-black">{section1TitleParts.highlight}</span>
              </h2>

              <div className="text-slate-500 font-medium text-[15.5px] sm:text-base md:text-[17px] leading-relaxed font-sans space-y-6 max-w-5xl pr-0 lg:pr-4 mt-6">
                {dynamicIntroSection1.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} className="leading-relaxed" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY US BENEFITS (WHITE BACKGROUND) --- */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Header above the grid to align top of image with top of subtext */}
          <div className="mb-10 lg:mb-12 max-w-4xl">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              WELCHE VORTEILE HAT {slug === "winterdienst-wien" ? "DER WINTERDIENST" : slug === "entruempelungen-wien" ? "DIE ENTRÜMPELUNG" : `DIE ${displayEyebrow}`}?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              {section2TitleParts.prefix} <span className="text-[#0052b4]">{section2TitleParts.lastTwo}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Text and Benefits List */}
            <div className="lg:col-span-7">
              {/* Dynamic Subtext */}
              <p className="text-slate-500 text-[15px] sm:text-base font-medium mb-10 leading-relaxed font-sans max-w-2xl">
                {section2Subtext}
              </p>
 
              {/* Grid layout for 8 benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {getEightBenefitsForSlug(slug).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0052b4] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={14} className="stroke-[3.5]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] font-bold text-[#003067] font-sans leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-normal text-[13px] sm:text-sm mt-1 leading-relaxed font-sans max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Segment Image positioned perfectly matching top text line and bottom item */}
            <div className="lg:col-span-5 lg:self-stretch relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[480px] rounded-[30px] overflow-hidden border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
              <Image
                src={`/images/services/${getImagePrefix(slug)}-2.webp`}
                alt={`${title} Ausführung`}
                fill
                className={`object-cover ${
                  slug === "entruempelungen-wien" || slug === "industriereinigung-wien"
                    ? "object-left"
                    : "object-center"
                }`}
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: 6 DETAIL SERVICES CARDS (LIGHT BLUE-GREY BACKGROUND) --- */}
      {/* --- SECTION 3: DETAILED SERVICES GRID NEXT TO VERTICAL IMAGE (LIGHT BLUE-GREY BACKGROUND) --- */}
      <section className="py-20 lg:py-24 bg-[#f4f7fa] border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Header above the grid to align top of image with top of subtext */}
          <div className="mb-10 lg:mb-12 max-w-4xl">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              LEISTUNGEN {prep} {displayEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              {headlineArea} in allen <span className="text-[#0052b4]">wichtigen Bereichen.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Text, description and the 6 details items */}
            <div className="lg:col-span-7">
              <div className="text-slate-500 font-medium text-[15px] sm:text-base leading-relaxed font-sans space-y-4 mb-10 max-w-2xl">
                <p>{section3Prose.p1}</p>
                <p>{section3Prose.p2}</p>
              </div>

              {/* 2-Column List Grid of the 6 detailed services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {serviceDetailItems.map((item, idx) => {
                  const IconComp = item.icon || Sparkles;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-[#0052b4] flex items-center justify-center shrink-0 mt-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] border border-slate-200/40">
                        <IconComp size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#003067] font-sans leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 font-normal text-[13px] sm:text-sm mt-1.5 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Large Vertical Image positioned perfectly starting with text and ending at the last list item */}
            <div className="lg:col-span-5 lg:self-stretch relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[480px] rounded-[30px] overflow-hidden border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
              <Image
                src={`/images/services/${getImagePrefix(slug)}.webp`}
                alt={`${title} Detailansicht`}
                fill
                className={`object-cover ${
                  slug === "garagenreinigung-wien" || slug === "industriereinigung-wien"
                    ? "object-left"
                    : "object-center"
                }`}
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: UNIFIED TIMELINE SEQUENCE (WHITE BACKGROUND) --- */}
      <section id="prozess" className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Header Section */}
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              UNSER ABLAUF
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans mb-6">
              Ein klarer Prozess für maximale Qualität <span className="text-[#0052b4]">und Verlässlichkeit.</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              Jeder Auftrag folgt einem strukturierten Ablauf, der Transparenz schafft, Qualität sichert und langfristige Partnerschaften ermöglicht.
            </p>
          </div>

          {/* Process Steps Timeline (Horizontal Desktop, Vertical Mobile) */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
              {timelineSteps.map((item, idx) => {
                const stepLabels = ["ANALYSE", "PLANUNG", "UMSETZUNG", "KONTROLLE"];
                return (
                  <div key={idx} className="flex flex-col items-start relative pr-4">
                    {/* Outer container for step number and line */}
                    <div className="relative w-full mb-6">
                      <span className="font-serif text-5xl md:text-6xl font-light text-[#003067] bg-white pr-4 inline-block leading-none">
                        {item.num}
                      </span>
                      
                      {/* Horizontal connection line on desktop with small square dot in the center */}
                      {idx < 3 && (
                        <div className="hidden lg:block absolute left-20 right-[-4.5rem] top-7 h-[1px] bg-slate-200 z-0">
                          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[2px] w-1.5 h-1.5 bg-[#003067]" />
                        </div>
                      )}
                    </div>
                    
                    {/* Uppercase Blue Label */}
                    <span className="text-[11px] font-bold text-primary tracking-[0.25em] uppercase block mb-3">
                      {stepLabels[idx]}
                    </span>

                    {/* Content Title */}
                    <h3 className="text-lg md:text-xl font-serif font-bold text-[#003067] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4.5: QUALITY STANDARDS & MEISTERBETRIEB INDICATION (LIGHT BLUE-GREY BACKGROUND) --- */}
      <section className="py-20 lg:py-24 bg-[#f4f7fa] border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-4xl mb-0">
            
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              QUALITÄTSSTANDARDS &amp; BETREUUNG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans mb-6">
              Warum Unternehmen langfristig auf <span className="text-[#0052b4]">Simba Facility Management</span> setzen.
            </h2>
            
            <div className="text-slate-500 font-semibold text-[15.5px] sm:text-[16.5px] leading-relaxed font-sans space-y-4">
              <p>
                Wir verstehen uns nicht als einfacher Dienstleister, sondern als langfristiger Partner für den Werterhalt Ihrer Immobilien. Unser Fokus liegt auf konstanter Qualität, lückenloser Aufsicht und kurzen Kommunikationswegen.
              </p>
              <p>
                Dazu setzen wir auf zertifizierte Ausbildung, faire Löhne nach Tarif und modernste technische Geräte. Überzeugen Sie sich von unseren erstklassigen B2B-Prozessen.
              </p>
            </div>

          </div>

          {/* Cardless grid of the 6 standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 border-t border-slate-200/30 pt-8 mt-8">
            {qualityStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-5">
                  <div className="text-[#003067] shrink-0 mt-1">
                    <Icon size={32} className="stroke-[1.25]" />
                  </div>
                  <div>
                    <span className="text-[#0052b4] text-xs font-bold font-sans block mb-1">
                      {item.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#003067] font-sans mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 font-normal text-[13px] sm:text-[14px] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- SECTION 5: ROTATING AUTHENTIC REVIEWS GRID (WHITE BACKGROUND) --- */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              BEWERTUNGEN UNSERER KUNDEN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              Was denken Kunden über <span className="text-[#0052b4]">Simba Facility Management?</span>
            </h2>
            <p className="text-slate-500 font-medium text-base mt-4 font-sans leading-relaxed">
              Langfristige Zusammenarbeit entsteht durch konstante Qualität, verlässliche Betreuung und professionelle Abläufe im täglichen Betrieb. Unternehmen und Partner aus Wien und Umgebung vertrauen auf unseren Service im Bereich {displayServiceLower}.
            </p>
          </div>

          {/* Exactly 3 rotated, authentic client reviews in a beautiful clean row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {serviceReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-yellow-500 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className="text-yellow-500 stroke-none" />
                    ))}
                  </div>
                  <p className="text-slate-500 font-medium text-[13.5px] sm:text-[14.5px] mb-8 leading-relaxed italic pr-1">
                    &quot;{rev.text}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-100/60 pt-5 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#003067]/10 text-[#003067] flex items-center justify-center font-bold text-sm uppercase shrink-0 font-sans">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#003067] text-sm leading-none mb-1 font-sans">{rev.name}</p>
                    <p className="text-[9px] text-[#0052b4] font-bold uppercase tracking-widest font-sans">Verifizierter Kunde</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Ratings visual banner styled beautifully with white background and Google Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 p-5 sm:p-6 bg-white rounded-full border border-slate-200/80 max-w-2xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
            <div className="flex items-center gap-3.5">
              <div className="relative w-6 h-6 shrink-0 select-none">
                <Image
                  src="/images/logos/google.png"
                  alt="Google Logo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[#003067] font-black text-2xl font-sans tracking-tight">4.9</span>
              <div className="flex gap-0.5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" className="text-yellow-500 stroke-none" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="text-center sm:text-left text-slate-500 font-bold text-xs tracking-wider font-sans uppercase">
              basierend aus den TOP 10 Google Bewertungen
            </div>
          </div>

        </div>
      </section>

      {/* Section 6 is removed to match the master template's exact layout perfectly. */}

      {/* --- SECTION 7: STANDALONE ACCORDION FAQ (LIGHT BLUE-GREY BACKGROUND) --- */}
      <section id="faq" className="py-20 lg:py-24 bg-[#f4f7fa] border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
              HÄUFIG GESTELLTE FRAGEN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans">
              Antworten rund um unsere <span className="text-[#0052b4]">{displayEyebrow}.</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm mt-4 font-sans leading-relaxed">
              Kurze Antworten zu Ablauf, Reinigungskonzepten, Betreuung und Qualitätsstandards bei Simba Facility Management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Column 1 (01 - 05) */}
            <div className="space-y-4">
              {serviceFaqs.slice(0, 5).map((item, idx) => {
                const globalIdx = idx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.025)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      {/* Left Index */}
                      <span className="text-[#0052b4] font-bold text-[14px] font-sans shrink-0 pt-0.5 min-w-[20px]">
                        {item.num}
                      </span>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-xl leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        
                        {/* Animated body */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 mt-4 pt-3">
                            <p 
                              className="text-slate-500 font-normal text-[13px] sm:text-[13.5px] leading-relaxed font-sans"
                              dangerouslySetInnerHTML={{ __html: item.a }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (06 - 10) */}
            <div className="space-y-4">
              {serviceFaqs.slice(5, 10).map((item, idx) => {
                const globalIdx = idx + 5;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div 
                    key={globalIdx} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.025)] transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none bg-transparent border-none"
                    >
                      {/* Left Index */}
                      <span className="text-[#0052b4] font-bold text-[14px] font-sans shrink-0 pt-0.5 min-w-[20px]">
                        {item.num}
                      </span>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#003067] font-sans leading-snug">
                            {item.q}
                          </h3>
                          <span className="text-[#0052b4] font-light text-xl leading-none shrink-0 select-none ml-2">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        
                        {/* Animated body */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 mt-4 pt-3">
                            <p 
                              className="text-slate-500 font-normal text-[13px] sm:text-[13.5px] leading-relaxed font-sans"
                              dangerouslySetInnerHTML={{ __html: item.a }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* --- STANDALONE CONTACT SECTION WITH INTEGRATED FORM --- */}
      <section id="kontakt" className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details Left Side */}
            <div>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#003067] mb-4 font-bold block leading-none font-sans">
                ERSTKLASSIGE VERBINDUNG
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black text-[#003067] tracking-tight font-sans mb-6">
                Kontakt <span className="text-[#0052b4]">Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg mb-8 max-w-md font-medium leading-relaxed font-sans">
                <p>
                  Sollten Sie noch weitere Fragen haben, stehen wir Ihnen selbstverständlich zur Verfügung.
                </p>
                <p>
                  Innerhalb von 24 Stunden erhalten Sie eine Antwort.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Address Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067] font-sans">Herthergasse 37/17/1, 1120 Wien</span>
                </div>

                {/* Phone Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <a href="tel:06601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors font-sans">+43 660 1470 316</a>
                </div>
                
                {/* Email Line info */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-100/50 rounded-lg flex items-center justify-center text-[#003067] text-lg font-bold group-hover:bg-[#003067] group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:simbafacility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#004e9a] transition-colors break-all font-sans">simbafacility@outlook.com</a>
                </div>
              </div>

              {/* Premium Luxury Architecture Line-art Blueprint Illustration */}
              <div className="hidden md:block relative w-full max-w-[420px] h-[255px] mt-10 overflow-visible">
                <svg viewBox="0 0 500 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Soft warm background circle */}
                  <circle cx="250" cy="140" r="115" stroke="#bae6fd" strokeWidth="0.75" opacity="0.25" />
                  
                  {/* Horizontal luxury grounded floor lines */}
                  <line x1="40" y1="240" x2="460" y2="240" stroke="#003067" strokeWidth="1.5" />
                  <line x1="60" y1="246" x2="440" y2="246" stroke="#003067" strokeWidth="0.5" opacity="0.4" />
                  
                  {/* Gothic Spire Layout */}
                  <g stroke="#003067" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    {/* Cathedral Spire Base */}
                    <rect x="80" y="140" width="50" height="100" fill="#ffffff" />
                    {/* Arch windows */}
                    <path d="M95 165 C95 155, 115 155, 115 165 L115 200 L95 200 Z" fill="none" />
                    {/* Gothic Arch line detail */}
                    <path d="M105 140 L105 240" strokeWidth="0.5" strokeDasharray="2 3" />
                    {/* Spire triangles */}
                    <path d="M80 140 L105 50 L130 140 Z" fill="#ffffff" />
                    {/* Cross on top of Stephansdom spire */}
                    <line x1="105" y1="50" x2="105" y2="35" strokeWidth="1.5" />
                    <line x1="100" y1="42" x2="110" y2="42" strokeWidth="1.5" />
                  </g>

                  {/* Modernist Cubist Real Estate Architecture Layout on Right side */}
                  <g stroke="#003067" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    {/* First floor solid marble block representing premium design */}
                    <rect x="220" y="150" width="100" height="90" fill="#ffffff" />
                    {/* Floor separation line */}
                    <line x1="220" y1="195" x2="320" y2="195" strokeWidth="0.75" />
                    <line x1="220" y1="150" x2="320" y2="150" strokeWidth="1.5" />
                    {/* Modern vertical glass beams */}
                    <rect x="235" y="158" width="10" height="30" />
                    <rect x="260" y="158" width="10" height="30" />
                    <rect x="285" y="158" width="10" height="30" />
                    
                    {/* Ground floor double entrance door matching luxury corporate layout */}
                    <path d="M260 210 L260 240 M280 210 L280 240 M260 210 L280 210" fill="none" strokeWidth="1.5" />
                    
                    {/* Cantilever roof floating structure on top */}
                    <polygon points="200,150 220,110 340,110 320,150" fill="#ffffff" />
                    {/* Blueprint grid support lines */}
                    <line x1="210" y1="130" x2="330" y2="130" strokeWidth="0.5" strokeDasharray="3 3" />
                  </g>

                  {/* Elegant High-rise building blueprint layout right margin */}
                  <g stroke="#003067" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                    <rect x="360" y="90" width="60" height="150" fill="#ffffff" />
                    <line x1="360" y1="120" x2="420" y2="120" strokeWidth="0.5" />
                    <line x1="360" y1="150" x2="420" y2="150" strokeWidth="0.5" />
                    <line x1="360" y1="180" x2="420" y2="180" strokeWidth="0.5" />
                    <line x1="360" y1="210" x2="420" y2="210" strokeWidth="0.5" />
                    {/* Accent vertical lines */}
                    <line x1="380" y1="90" x2="380" y2="240" strokeWidth="0.5" opacity="0.3" />
                    <line x1="400" y1="90" x2="400" y2="240" strokeWidth="0.5" opacity="0.3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Form Right Side with pre-selected dynamic Subject */}
            <div className="pt-4">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/10 border border-slate-100 relative overflow-hidden">
                <ContactForm defaultSubject={getFormSubjectForSlug(slug)} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
