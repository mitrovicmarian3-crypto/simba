"use client";

import React, { use } from "react";
import { ALL_BLOG_POSTS, POPULAR_ARTICLES, getAuthenticImage } from "../posts";
import { EXPANDED_SECTIONS } from "../expandedPosts";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, Calendar, Clock, ChevronRight, Check, 
  MapPin, Phone, Mail, ShieldCheck 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string; category?: string; q?: string }>;
}

interface Enrichments {
  quote1: string;
  quote2: string;
  factBox: {
    title: string;
    text: string;
  };
}

const CUSTOM_ARTICLE_ENRICHMENTS: Record<string, Enrichments> = {
  "4-farben-system": {
    quote1: "Kreuzkontaminationen entstehen meist nicht durch mangelnde Reinigung, sondern durch fehlende Systematik.",
    quote2: "Saubere Prozesse sind kein Zufall – sie sind das Ergebnis klarer Standards und konsequenter Umsetzung.",
    factBox: {
      title: "Der Hygiene-Fakten-Check",
      text: "Wussten Sie schon? Die Trennung von Sanitär (Rot/Gelb), allgemeiner Bürooberfläche (Blau) und Küche (Grün) reduziert das Risiko einer bakteriellen Keimverschleppung um über 98%."
    }
  },
  "nachhaltige-reinigung": {
    quote1: "Umweltbewusstsein und kompromisslose Hygiene sind im 21. Jahrhundert kein Widerspruch mehr.",
    quote2: "Wer heute an der Ökologie spart, zahlt morgen bei der Gesundheit seiner Mitarbeiter.",
    factBox: {
      title: "Ökologisches Bewusstsein",
      text: "Moderne, zertifizierte Öko-Reiniger sind biologisch vollständig abbaubar und schonen empfindliche Materialien, was den langfristigen Erhalt Ihrer Büroausstattung sichert."
    }
  },
  "buero-keime-hotspots": {
    quote1: "Hygiene im Büro beginnt an den Berührungspunkten, die im Alltag völlig unsichtbar bleiben.",
    quote2: "Ein durchdachter Hygieneplan senkt krankheitsbedingte Ausfälle im Team um bis zu 30%.",
    factBox: {
      title: "Tipp für den Alltag",
      text: "Auf einer Standard-Tastatur befinden sich statistisch ca. 400-mal mehr Keime als auf einer Toilettenbrille. Regelmäßige Wischdesinfektion durch Profis schützt aktiv Ihr Team."
    }
  },
  "haccp-reinigung-erklaert": {
    quote1: "HACCP ist kein bürokratisches Hindernis, sondern das wirksamste Schutzschild für Ihren Gewerbebetrieb.",
    quote2: "Lückenlose Hygiene-Dokumentation ist die beste Vorsorge gegen behördliche Risiken.",
    factBox: {
      title: "Gesetzlicher Rahmen",
      text: "Das HACCP-Konzept ist für Lebensmittelbetriebe und medizinische Zonen gesetzlich vorgeschrieben. Ein zertifizierter Meisterbetrieb garantiert Ihnen volle Betriebsprüfungssicherheit."
    }
  },
  "unterhaltsreinigung-vs-sonderreinigung": {
    quote1: "Die Unterhaltsreinigung sichert den Standard – die Sonderreinigung schützt die eigentliche Substanz.",
    quote2: "Abstimmung der Intervalle spart langfristig Kosten und erhält den Wert Ihrer Premium-Immobilie.",
    factBox: {
      title: "Experten-Empfehlung",
      text: "Ergänzen Sie Ihre tägliche Pflege (Unterhaltsreinigung) 1-2 Mal jährlich durch professionelle Grundreinigungen, um tiefsitzenden Schmutz aus Fugen und Böden materialschonend zu entfernen."
    }
  },
  "warum-professionelle-reinigungspartner": {
    quote1: "Fremdvergabe schafft unternehmerische Freiheit und garantiert berechenbare Meisterqualität.",
    quote2: "Ein professioneller Dienstleister fängt jeden Ausfall sofort ab, damit Ihr Kopf frei bleibt.",
    factBox: {
      title: "Kosten-Vorteil",
      text: "Eigene Arbeitskräfte bedeuten hohe Lohnnebenkosten, Urlaubsansprüche und administrativen Aufwand. Eine externe Partnerschaft ist steuerlich voll absetzbar und flexibel kündbar."
    }
  },
  "richtige-reinigungsfirma-finden": {
    quote1: "Qualität in der Gebäudereinigung basiert auf Vertrauen, fairen Tarifen und klarer Struktur.",
    quote2: "Vermeiden Sie anonyme Großdienstleister, bei denen der persönliche Kontakt verloren geht.",
    factBox: {
      title: "Die Meister-Garantie",
      text: "Achten Sie bei der Wahl der Partner auf staatlich geprüfte Meistertitel, ortsübliche Tariflöhne und feste, gleichbleibende Reinigungsteams für Ihr Objekt."
    }
  },
  "werterhalt-durch-reinigung": {
    quote1: "Die pflegende Unterhaltsreinigung entscheidet über den Substanzwert und die Bilanzstärke von morgen.",
    quote2: "Schmutz wirkt wie Schleifpapier auf edle Böden – regelmäßige Versiegelung schützt die Substanz.",
    factBox: {
      title: "Rentabilitäts-Fokus",
      text: "Professionelle Bausubstanz-Pflege verzögert teure Sanierungen von Teppich-, Stein- oder Echtholzböden um viele Jahre und sichert eine hervorragende Mieter- und Kundenzufriedenheit."
    }
  },
  "qualitaetskontrollen-reinigung": {
    quote1: "Qualität ist kein einmaliges Versprechen, sondern das Resultat täglicher, unangekündigter Systemprüfungen.",
    quote2: "Transparente Berichte schaffen Vertrauen und beugen einem Abflachen der Reinigungsleistung vor.",
    factBox: {
      title: "Digitale Dokumentation",
      text: "Mit moderner Qualitäts-Software kontrollieren wir regelmäßig alle vereinbarten Intervalle und stellen Fehlerprotokolle in Echtzeit zur Verfügung."
    }
  },
  "feste-reinigungsteams-vorteile": {
    quote1: "Personalkonstanz schafft Vertrauen, hocheffiziente Handgriffe und maximale Sicherheit.",
    quote2: "Gute Gebäudereinigung basiert vor allem auf menschlicher Wertschätzung und stabilen Teams.",
    factBox: {
      title: "Fester Bezugspunkt",
      text: "Wir garantieren feste Teams für Ihr Objekt. So weiß jeder Mitarbeiter von Tag eins an genau, welche Besonderheiten in Ihren Räumen zu beachten sind."
    }
  },
  "reinigungskonzepte-arztpraxen": {
    quote1: "In der Ordination ist Hygiene kein Komfortmerkmal, sondern gelebter Patientenschutz.",
    quote2: "Keimfreiheit nach strengsten Standards schützt Ihr medizinisches Team und Ihre Patienten.",
    factBox: {
      title: "Medizinische Richtlinien",
      text: "Unsere Praxisreinigung erfolgt nach strengen Richtlinien des RKI (Robert Koch-Institut) und wird mit zertifizierten, oberflächenschonenden Desinfektionsmitteln ausgeführt."
    }
  },
  "hotel-hygienestandards": {
    quote1: "Sauberkeit und Frische sind die schärfste Währung in der modernen Hotellerie.",
    quote2: "Das Housekeeping agiert dezent im Hintergrund, aber prägt das gesamte Urlaubserlebnis.",
    factBox: {
      title: "Gästebewertungen",
      text: "Mehr als 90% aller Urlaubs- und Geschäftsreisenden machen ihre Online-Bewertungen primär von der Sauberkeit des Hotelzimmers und des Bads abhängig."
    }
  },
  "reinigung-schulen-kindergaerten": {
    quote1: "In Bildungseinrichtungen schützt eine hygienische Umgebung die Gesundheit unserer Kinder.",
    quote2: "Wir verwenden ausschließlich hautschonende, biologisch abbaubare Mittel im Umfeld von Kindern.",
    factBox: {
      title: "Allergiker-Sicherheit",
      text: "Der Einsatz zertifizierter HEPA-Feinstaubfilter bei unseren Sauggeräten entfernt luftgängige Allergene und schont die Atmung von asthmatischen Kindern."
    }
  },
  "industriehallen-reinigen": {
    quote1: "Saubere Produktionshallen sind die Grundvoraussetzung für hohe Arbeitssicherheit.",
    quote2: "Spezialsauger beseitigen hartnäckige Fette, ohne den laufenden Logistikfluss zu blockieren.",
    factBox: {
      title: "Arbeitsschutz",
      text: "Die gründliche Entfettung von Industrieböden vermindert Gefahren durch Rutschen und Stürze in Montage- und Logistikhallen um bis zu 85%."
    }
  },
  "gebaeudereinigung-buero-wien": {
    quote1: "Eine makellose Geschäftsfläche ist die lautlose Visitenkarte Ihres täglichen Erfolgs.",
    quote2: "Weit über das Feudeln hinaus: Diskrete Pflege in den Randzeiten schützt Ihre sensiblen Daten.",
    factBox: {
      title: "Gewerbe-Schnittstelle",
      text: "Durch die Reinigung nach Feierabend oder am frühen Morgen betritt Ihre Belegschaft jeden Tag ein frisches, motivierendes Arbeitsumfeld."
    }
  },
  "saubere-arbeitsumgebungen-wirkung": {
    quote1: "Saubere Luft und geordnete Schreibtische steigern die Konzentration und senken den Stresspegel.",
    quote2: "Eine saubere Umgebung vermittelt Mitarbeitern eine spürbare Wertschätzung ihrer Leistung.",
    factBox: {
      title: "Arbeitspsychologie",
      text: "Arbeitspsychologische Untersuchungen belegen: In gepflegten Arbeitsräumen steigt die Produktivität des Personals nachweislich um bis zu 15%."
    }
  },
  "professionelle-reinigung-entlastet": {
    quote1: "Konzentrieren Sie sich auf Ihr Kerngeschäft – wir halten Ihnen den Rücken völlig frei.",
    quote2: "Der automatische Hygiene-Service beendet jegliche Zuständigkeitsdebatte im Team.",
    factBox: {
      title: "Ressourcen-Plus",
      text: "Verlieren Sie keine Zeit mehr mit dem Einkauf von Hygieneartikeln oder dem mühsamen Suchen von Urlaubsvertretungen – Simba erledigt alles im Hintergrund."
    }
  },
  "fensterreinigung-vorteile": {
    quote1: "Glasklare Fenster lenken maximales Tageslicht ins Büro und beflügeln das Arbeitsklima.",
    quote2: "Regelmäßige Glasreinigung schützt Rahmen und Dichtungen vor irreversiblem Verschleiß.",
    factBox: {
      title: "Sicherheit & ÖNORM",
      text: "Wir reinigen auch anspruchsvolle Außen-Glasfassaden in großer Höhe fachgerecht mit professioneller Ausrüstung gemäß allen gesetzlichen Unfallvorschriften."
    }
  },
  "was-moderne-gebaeudereinigung-leisten-muss": {
    quote1: "Gebäudereinigung ist heute ein integraler Systempartner für Gesundheit, Werterhalt und Nachhaltigkeit.",
    quote2: "Wir verbinden traditionelles Wiener Handwerk mit modernsten, CO2-neutralen Standards.",
    factBox: {
      title: "Zukunft & Werte",
      text: "Moderne Betreiber erwarten ganzheitliche Dienstleistungen, die nachweislich die Umwelt schonen und den Wert der gesamten Anlage langfristig erhalten."
    }
  },
  "unsichtbare-arbeit-sauberkeit": {
    quote1: "Hinter jedem glänzenden Boden steht unermüdliche, meisterhaft geplante Handarbeit.",
    quote2: "Fairness, Tariflöhne und Respekt schaffen das stabile Fundament für hervorragende Ergebnisse.",
    factBox: {
      title: "Kundenzufriedenheit",
      text: "Echte Meisterqualität lebt von motiviertem Personal. Durch faire Tarife und kontinuierliches Feedback sichern wir langfristig den besten Standard für Ihr Wiener Büro."
    }
  }
};

export default function ArticlePage({ params, searchParams }: PageProps) {
  const decodedParams = use(params);
  const decodedSearchParams = use(searchParams);
  const page = decodedSearchParams?.page || "1";
  const category = decodedSearchParams?.category || "Alle";
  const q = decodedSearchParams?.q || "";
  
  const rawId = decodedParams?.id || "";
  const decodedId = decodeURIComponent(rawId);
  
  const foundArticle = ALL_BLOG_POSTS.find((p) => {
    const postId = p.id.toLowerCase();
    const cleanRaw = rawId.toLowerCase();
    const cleanDecoded = decodedId.toLowerCase();
    
    return (
      postId === cleanRaw ||
      postId === cleanDecoded ||
      postId.replace(/ä/g, "ae") === cleanDecoded ||
      postId === cleanDecoded.replace(/ä/g, "ae") ||
      postId.replace(/ä/g, "ae") === cleanRaw ||
      postId === cleanRaw.replace(/ä/g, "ae")
    );
  });

  if (!foundArticle) {
    notFound();
  }

  // Hydrate sections with exactly 4 detailed topics with 5-6 sentences
  const expanded = EXPANDED_SECTIONS[foundArticle.id];
  const article = expanded
    ? {
        ...foundArticle,
        content: {
          ...foundArticle.content,
          sections: expanded,
        },
      }
    : foundArticle;

  // Slice exactly 3 recommended readings for a clean graphic balance in sidebar
  const otherArticles = ALL_BLOG_POSTS.filter((p) => p.id !== article.id).slice(0, 3);
  const enrichment = CUSTOM_ARTICLE_ENRICHMENTS[article.id];

  return (
    <div className="pt-24 bg-white min-h-screen text-slate-900 font-sans pb-16">
      
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href={`/blog?page=${page}&category=${encodeURIComponent(category)}${q ? `&q=${encodeURIComponent(q)}` : ""}`} 
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0052b4] hover:text-[#003067] transition-all group uppercase tracking-wider"
            id="back-to-blog"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </Link>
          
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
            <Link href="/" className="hover:text-[#0052b4]">Home</Link>
            <ChevronRight size={10} />
            <Link href="/blog" className="hover:text-[#0052b4]">Magazin</Link>
            <ChevronRight size={10} />
            <span className="text-[#003067] truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC PREMIUM HEADER BANNER */}
      <header className="bg-white pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 text-left">
          <div className="max-w-4xl">
            {/* Category + Date + Reading-time above headline in corporate branding sync */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0052b4] mb-4">
              <span>{article.category}</span>
              <span className="text-slate-200">•</span>
              <span className="text-slate-400 font-mono font-bold flex items-center gap-1.5">
                <Calendar size={13} className="text-slate-400" /> {article.date}
              </span>
              <span className="text-slate-200">•</span>
              <span className="text-slate-400 font-mono font-bold flex items-center gap-1.5">
                <Clock size={13} className="text-slate-400" /> {article.readingTime}
              </span>
            </div>
            
            {/* Massive modern Bold Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-black text-[#003067] tracking-tight leading-[1.125] mb-2">
              {article.title}
            </h1>
          </div>
        </div>
      </header>

      {/* 3. HERO IMAGE FRAME */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-50 border border-slate-100 overflow-hidden">
          <Image 
            src={getAuthenticImage(article.id, article.category)}
            alt={article.title}
            fill
            className="object-cover hover:scale-[1.01] transition-transform duration-500"
            style={
              article.id === "richtige-reinigungsfirma-finden"
                ? { objectPosition: "center 75%" }
                : article.id === "qualitaetskontrollen-reinigung"
                ? { objectPosition: "center 75%" }
                : article.id === "4-farben-system"
                ? { objectPosition: "center 75%" }
                : undefined
            }
            referrerPolicy="no-referrer"
            priority
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>
      </div>

      {/* 4. COHESIVE MAGAZINE CONTENT GRID */}
      <section className="pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: MAIN ARTICLE ZONE (Col span 8) */}
            <main className="lg:col-span-8 text-left">
              
              {/* Elegant lead-in Intro paragraph framed with clean thin divider lines */}
              <div className="border-t border-b border-slate-100 py-8 mb-10">
                <p className="text-base sm:text-[18px] text-slate-700 font-semibold leading-relaxed italic pr-4">
                  {article.content.intro}
                </p>
              </div>

              {/* Dynamic Section Blocks Mapping */}
              <div className="space-y-12">
                {article.content.sections.map((sec, sIdx) => {
                  return (
                    <div key={sIdx} className="space-y-5">
                      {/* Section heading with scroll anchor offset */}
                      <h2 
                        id={`section-${sIdx}`} 
                        className="text-2xl sm:text-[28px] font-black text-[#003067] tracking-tight leading-tight pt-2 scroll-mt-28"
                      >
                        {sec.title}
                      </h2>
                      
                      {/* Article text body paragraph block in premium dark gray readable font */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {sec.text}
                      </p>
                      
                      {/* Styled list elements */}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="grid grid-cols-1 gap-4 pl-0 py-2">
                          {sec.bullets.map((b, bIdx) => {
                            const hasBold = b.includes("**");
                            let cleanB = b;
                            let label = "";
                            if (hasBold) {
                              const match = b.match(/\*\*(.*?)\*\*(.*)/);
                              if (match) {
                                label = match[1];
                                cleanB = match[2];
                              }
                            }
                            
                            // Interactive dynamic check circles for 4-Farben-System (Rot, Gelb, Blau, Grün)
                            let circleBg = "bg-slate-50 border border-slate-100 text-[#0052b4]";
                            if (article.id === "4-farben-system") {
                              const lowerLabel = label.toLowerCase();
                              if (lowerLabel.includes("rot")) {
                                circleBg = "bg-red-50 border border-red-200 text-red-600";
                              } else if (lowerLabel.includes("gelb")) {
                                circleBg = "bg-amber-50 border border-amber-200 text-amber-600";
                              } else if (lowerLabel.includes("blau")) {
                                circleBg = "bg-blue-50 border border-blue-200 text-blue-600";
                              } else if (lowerLabel.includes("grün") || lowerLabel.includes("gruen")) {
                                circleBg = "bg-emerald-50 border border-emerald-200 text-emerald-600";
                              }
                            }

                            return (
                              <li key={bIdx} className="flex items-start gap-4 p-5 bg-stone-50/50 border border-stone-100 rounded-none transition-shadow hover:shadow-sm">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${circleBg}`}>
                                  <Check size={14} className="stroke-[2.5]" />
                                </span>
                                <span className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-0.5">
                                  {label ? <strong className="text-[#003067] font-black block mb-0.5">{label}</strong> : ""}
                                  <span>{cleanB}</span>
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {/* Dynamic Editorial Divider, Quotes & FactBoxes insertion points */}
                      {enrichment && sIdx === 0 && (
                        <>
                          <hr className="border-t border-slate-100 my-8" />
                          <div className="my-10 pl-6 border-l-4 border-l-[#0052b4] py-1">
                            <p className="text-lg sm:text-xl font-bold italic text-[#003067] leading-relaxed">
                              &bdquo;{enrichment.quote1}&ldquo;
                            </p>
                          </div>
                          <hr className="border-t border-slate-100 my-8" />
                        </>
                      )}

                      {enrichment && sIdx === 1 && (
                        <>
                          <hr className="border-t border-slate-100 my-8" />
                          <div className="my-10 p-6 bg-slate-50/80 border-l-4 border-l-[#003067] border border-slate-200/40 rounded-none text-left">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#003067] mb-2">
                              {enrichment.factBox.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                              {enrichment.factBox.text}
                            </p>
                          </div>
                          <hr className="border-t border-slate-100 my-8" />
                        </>
                      )}

                      {enrichment && sIdx >= 2 && sIdx === article.content.sections.length - 1 && (
                        <>
                          <hr className="border-t border-slate-100 my-8" />
                          <div className="my-10 pl-6 border-l-4 border-l-[#0052b4] py-1">
                            <p className="text-lg sm:text-xl font-bold italic text-[#003067] leading-relaxed">
                              &bdquo;{enrichment.quote2}&ldquo;
                            </p>
                          </div>
                          <hr className="border-t border-slate-100 my-8" />
                        </>
                      )}

                      {/* Standard elegant corporate divider between topics when no enrichment is showing */}
                      {sIdx < article.content.sections.length - 1 && !(sIdx === 0 || sIdx === 1) && (
                        <hr className="border-t border-slate-100 my-10" />
                      )}
                    </div>
                  );
                })}
              </div>
            </main>

            {/* RIGHT COLUMN: SIDEBAR COLUMN (Col span 4) */}
            <aside className="lg:col-span-4 space-y-8 text-left">
              
              {/* 1. AUTHOR CARD BOX ("IHR MEISTERBETRIEB") */}
              <div className="bg-white p-6 sm:p-8 border border-slate-100 shadow-sm rounded-none">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0052b4] font-bold block mb-4">
                  IHR MEISTERBETRIEB
                </span>
                
                <div className="flex items-center gap-4 mb-4 border-b border-slate-100 pb-4">
                  <div className="relative w-14 h-14 bg-slate-50 shrink-0 border border-slate-100 rounded-full overflow-hidden">
                    <Image 
                      src="/images/ueber-uns/Jasmina_Marinkovic_Kosmo.webp" 
                      alt="Jasmina Marinkovic - Simba Facility Wien" 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                      sizes="56px"
                    />
                  </div>
                  <div className="leading-tight text-left">
                    <h4 className="text-sm font-black text-[#003067]">Simba Facility</h4>
                    <span className="text-[9px] text-[#0052b4] font-black tracking-widest uppercase block mt-1">Staatlich geprüfter</span>
                    <span className="text-[9px] text-[#003067] font-black tracking-widest uppercase block">Meisterbetrieb</span>
                  </div>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed font-normal">
                  Persönliche Verantwortung, meisterhafter Service und nachhaltige Reinigungsprozesse für Ihren Wiener Gewerbebetrieb.
                </p>
              </div>

              {/* 2. TABLE OF CONTENTS ("INHALTSVERZEICHNIS") */}
              <div className="bg-white p-6 sm:p-8 border border-slate-100 shadow-sm rounded-none">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0052b4] font-bold block mb-5">
                  INHALTSVERZEICHNIS
                </span>
                
                <nav className="flex flex-col gap-3.5 font-sans">
                  {article.content.sections.map((sec, sIdx) => (
                    <a 
                      key={sIdx}
                      href={`#section-${sIdx}`}
                      className="flex items-start gap-2.5 text-xs font-bold text-slate-500 hover:text-[#0052b4] transition-colors leading-relaxed group"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(`section-${sIdx}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <span className="font-mono text-slate-300 group-hover:text-[#0052b4] transition-colors">{sIdx + 1}.</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{sec.title}</span>
                    </a>
                  ))}
                  <a 
                    href="#kontakt"
                    className="flex items-start gap-2.5 text-xs font-bold text-slate-550 hover:text-[#0052b4] transition-colors leading-relaxed group border-t border-slate-100 pt-3.5 mt-1"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("kontakt");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="font-mono text-slate-300 group-hover:text-[#0052b4] transition-colors">{article.content.sections.length + 1}.</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200 text-[#003067]">Ihr Vorteil mit Simba</span>
                  </a>
                </nav>
              </div>

              {/* 3. RECOMMENDED ARTICLES ("WEITERE BEITRÄGE") */}
              <div className="bg-white p-6 sm:p-8 border border-slate-100 shadow-sm rounded-none">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0052b4] font-bold block mb-5">
                  WEITERE BEITRÄGE
                </span>

                <div className="space-y-5">
                  {otherArticles.map((art) => (
                    <Link 
                      key={art.id}
                      href={`/blog/${art.id}?page=${page}&category=${encodeURIComponent(category)}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      {/* Rectilinear graphic thumb */}
                      <div className="relative w-12 h-12 bg-slate-50 border border-slate-100 shrink-0 overflow-hidden rounded-none">
                        <Image 
                          src={getAuthenticImage(art.id, art.category)}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          sizes="48px"
                        />
                      </div>
                      
                      <div className="space-y-1 text-left min-w-0">
                        <h4 className="text-xs font-bold text-[#003067] leading-tight group-hover:text-[#0052b4] transition-colors line-clamp-2">
                          {art.title}
                        </h4>
                        <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 tracking-wider uppercase inline-block font-sans">
                          {art.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* 5. DYNAMIC HIGH-END CONTACT FORM AT THE BOTTOM */}
      <section id="kontakt" className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Pure corporate column details */}
            <div className="text-left">
              <span className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-black block leading-none">
                KONTAKT
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight">
                Lernen Sie uns kennen.
              </h2>
              
              <div className="space-y-4 text-slate-500 text-sm md:text-base mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen haben, stehen wir Ihnen selbstverständlich zur Verfügung.
                </p>
                <p>
                  Innerhalb von 24 Stunden erhalten Sie ein maßgeschneidertes, unverbindliches Angebot.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Location row */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-[#003067] border border-slate-100 rounded-none shadow-sm">
                    <MapPin size={16} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-[#003067]">Herthergasse 37/10-11, 1120 Wien</span>
                </div>

                {/* Telephone row */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-[#003067] border border-slate-100 rounded-none shadow-sm">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+436601470316" className="text-xs md:text-sm font-bold text-[#003067] hover:text-[#0052b4] transition-colors">+43 660 147 0316</a>
                </div>
                
                {/* Email row */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-[#003067] border border-slate-100 rounded-none shadow-sm">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:simba.facility@outlook.com" className="text-xs md:text-sm font-bold text-[#003067] hover:text-[#0052b4] transition-colors break-all">simba.facility@outlook.com</a>
                </div>
              </div>

              {/* Secure DSGVO notice banner */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-3 text-slate-400">
                <ShieldCheck size={16} className="text-[#0052b4]" />
                <p className="text-[10px] font-bold uppercase tracking-widest mt-0.5">Sicherer Datentransfer &amp; DSGVO-konform</p>
              </div>
            </div>

            {/* Flat high-end styled contact form container (Rectilinear style) */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white border border-slate-100 shadow-sm rounded-none p-8 sm:p-10 text-left">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 uppercase tracking-wide">Unverbindliche Anfrage</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject={`Anfrage bezüglich Fachartikel: ${article.title}`} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

