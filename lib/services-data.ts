import { FAQItem } from "@/components/ServiceFAQ";

export interface ServiceBenefit {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  benefitsSection: {
    title: string;
    highlights: string[];
    benefits: ServiceBenefit[];
    image: string;
  };
  content: {
    sections: {
      title: string;
      text: string;
      image?: string;
      cta?: {
        text: string;
        link: string;
      };
      uspList?: string[];
      industries?: { title: string; icon: string }[];
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  internalLinks: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "unterhaltsreinigung-wien": {
    slug: "unterhaltsreinigung-wien",
    seo: {
      title: "Unterhaltsreinigung Wien | Professionell & Zuverlässig | Simba FM",
      description: "Professionelle Unterhaltsreinigung in Wien für Unternehmen. ✓ 24h Angebot ✓ Meisterbetrieb ✓ Feste Ansprechpartner. Jetzt kostenloses Angebot anfordern!",
    },
    hero: {
      title: "Professionelle <span class=\"text-primary\">Unterhaltsreinigung</span> für <span class=\"text-primary\">Wiener Unternehmen</span> – zuverlässig, planbar & mit festen Teams",
      subtitle: "Wir betreuen Büros, Praxen und Gewerbeflächen – <span class=\"text-primary\">konstant sauber</span>, ohne Ausfälle und ohne Aufwand für Sie.",
      description: "Maximale Sauberkeit bei minimalem Verwaltungsaufwand – Professionelle Reinigungslösungen für anspruchsvolle Wiener Unternehmen.",
      image: "/images/services/unterhaltsreinigung.webp",
    },
    benefitsSection: {
      title: "Unterhaltsreinigung für Unternehmen – <span class=\"text-primary\">konstant sauber</span> ohne Aufwand",
      highlights: ["Feste Teams", "Meisterbetrieb", "Flexibel"],
      image: "/images/services/unterhaltsreinigung-2.webp",
      benefits: [
        { title: "Feste Teams statt ständig wechselndes Personal", desc: "Ihre Räumlichkeiten werden von vertrauten Mitarbeitern gereinigt – ohne Einarbeitung, ohne Qualitätsverlust", icon: "Users" },
        { title: "Klare Reinigungspläne statt Chaos im Alltag", desc: "Feste Zeiten, keine Ausfälle oder Überraschungen.", icon: "Calendar" },
        { title: "Persönlicher Ansprechpartner statt Hotline", desc: "Direkt erreichbar, ohne Umwege.", icon: "User" },
        { title: "Regelmäßige Qualitätskontrollen", desc: "Sauberkeit auf konstant hohem Niveau.", icon: "ShieldCheck" },
        { title: "Flexible Einsatzzeiten", desc: "Auch außerhalb Ihrer Öffnungszeiten.", icon: "Clock" },
      ]
    },
    content: {
      sections: [
        {
          title: "Höchste Standards für <span class=\"text-primary\">Ihr Unternehmen</span>",
          text: "Ein sauberes Arbeitsumfeld ist entscheidend für Produktivität und Wohlbefinden. Unsere regelmäßige Reinigung sorgt für konstante Sauberkeit in Ihren Büros, Praxen oder Verkaufsflächen. Wir verstehen uns als Partner, der im Hintergrund für einen perfekten ersten Eindruck sorgt.\n\nWir setzen auf geschulte Reinigungskräfte und moderne Reinigungsmethoden. Ob tägliche Reinigung oder spezifische Intervalle – wir erstellen ein Konzept, das sich nahtlos in Ihren Arbeitsalltag integriert, ohne diesen zu stören.\n\nAls meistergeführter Betrieb in Wien legen wir höchsten Wert auf Qualitätssicherung. Regelmäßige Kontrollen und feste Ansprechpartner garantieren, dass unser hoher Standard dauerhaft gehalten wird.",
          cta: { text: "Kostenlose Beratung anfordern", link: "#kontakt" },
          uspList: [
            "Meisterbetrieb mit QC-Garantie",
            "Eingespielte Reinigungsteams",
            "Flexibilität bei den Zeiten",
            "Feste Ansprechpartner"
          ]
        },
        {
          title: "Über 10 Jahre <span class=\"text-primary\">Exzellenz</span> in der <span class=\"text-primary\">Gebäudereinigung</span>",
          text: "Unsere Expertise in der Objektpflege basiert auf über 10 Jahren Erfahrung und zahlreichen erfolgreich betreuten Objekten in der gesamten Hauptstadt. Als meistergeführte Reinigungsfirma haben wir unsere Prozesse perfektioniert, um höchsten hygienischen Anforderungen gerecht zu werden.\n\nWir wissen genau, dass Unterhaltsreinigung mehr ist als nur Staubwischen. Es geht um den Werterhalt Ihrer Immobilie, die Gesundheit Ihrer Mitarbeiter und den professionellen Eindruck, den Sie bei Ihren Kunden hinterlassen. Ob moderne Großraumbüros, sensible Behandlungszimmer in Arztpraxen oder diskrete Kanzleiräume – wir setzen auf geschultes Personal, das mit modernster Reinigungstechnik und viel Liebe zum Detail für makellose Sauberkeit sorgt.",
          image: "/images/services/unterhaltsreinigung-2.webp"
        },
        {
          title: "Wird Ihr Büro <span class=\"text-primary\">meisterlich gereinigt</span>?",
          text: "Ein vernachlässigter Arbeitsplatz stört die Konzentration und hinterlässt bei Kunden einen schlechten Eindruck. Wir sorgen für repräsentative Sauberkeit in Ihrem Unternehmen.\n\nUnsere Objektleiter koordinieren feste Teams, die Ihr Büro genau kennen. Wir reagieren sofort auf Wünsche und halten alle Bereiche in einem einwandfreien Zustand.",
          industries: [
            { title: "Büros", icon: "Building2" },
            { title: "Arztpraxen", icon: "Stethoscope" },
            { title: "Kanzleien", icon: "Scale" },
            { title: "Einzelhandel", icon: "ShoppingBag" },
            { title: "Showrooms", icon: "Sofa" },
            { title: "Fitnessstudios", icon: "Dumbbell" }
          ]
        }
      ]
    },
    faq: {
      title: "Fragen zur <span class=\"text-primary\">Unterhaltsreinigung Wien</span> – kurz & klar beantwortet",
      subtitle: "Häufig gefragt.",
      items: [
        { question: "Was kostet eine Unterhaltsreinigung in Wien?", answer: "Die Kosten hängen von der Fläche, der Reinigungsfrequenz und dem Leistungsumfang ab. Wir bieten transparente Fixpreise nach einer kostenlosen Besichtigung an, damit Sie volle Planungssicherheit haben." },
        { question: "Welche Leistungen sind enthalten?", answer: "Unser Standard umfasst die Oberflächenreinigung, Bodenpflege, Sanitärhygiene und Müllentsorgung. Wir passen das Leistungsverzeichnis jedoch exakt an Ihre individuellen Anforderungen an." },
        { question: "Zu welchen Zeiten reinigen Sie?", answer: "Wir richten uns nach Ihren Abläufen. Meist reinigen wir außerhalb Ihrer Geschäftszeiten – also früh morgens oder spät abends – um Ihren Betrieb nicht zu stören." },
        { question: "Gibt es feste Ansprechpartner?", answer: "Ja, Kontinuität ist uns wichtig. Für jedes Objekt gibt es einen festen Objektleiter und ein eingespieltes Team, das Ihre Räumlichkeiten genau kennt." },
        { question: "Wie schnell erhalte ich ein Angebot?", answer: "Nach einer kurzen Besichtigung vor Ort erhalten Sie Ihr individuelles Angebot meist innerhalb von 24 Stunden – transparent und ohne versteckte Kosten." }
      ]
    },
    internalLinks: ["fensterreinigung-wien", "fassadenreinigung-wien", "hausbetreuung-wien"]
  },
  "entruempelungen-wien": {
    slug: "entruempelungen-wien",
    seo: {
      title: "Entrümpelung Wien | Räumung zum Fixpreis ✓ Besenrein | Simba FM",
      description: "Professionelle Entrümpelung & Räumung in Wien ✓ Kostenlose Besichtigung ✓ Fixpreis-Garantie ✓ Wohnungen, Keller, Lager. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Entrümpelung in Wien",
      subtitle: "besenrein & zum Fixpreis",
      description: "Platz für Neues schaffen. Wir erledigen Ihre Entrümpelung oder Räumung in Wien schnell, diskret und absolut stressfrei zum garantierten Fixpreis – professionell & zuverlässig.",
      image: "/images/services/entruempelungen.webp",
    },
    benefitsSection: {
      title: "Stressfreie Räumung für Wiener Privathaushalt & Gewerbe",
      highlights: ["Fixpreis", "Besenrein", "Diskret"],
      image: "/images/services/entruempelungen-2.webp",
      benefits: [
        { title: "Kostenlose Besichtigung & Beratung", desc: "Wir prüfen das Volumen und den Aufwand kostenlos vor Ort.", icon: "Search" },
        { title: "Fixpreis-Garantie", desc: "Keine versteckten Kosten nach Auftragserteilung.", icon: "Coins" },
        { title: "Besenreine Übergabe garantiert", desc: "Wir hinterlassen Ihr Objekt bezugsfertig leer.", icon: "CheckCircle" },
        { title: "Zertifizierte Entsorgung", desc: "Fachgerechte Trennung und Entsorgung.", icon: "Trash2" },
        { title: "Diskretion & Zuverlässigkeit", desc: "Besonders wichtig bei Verlassenschaften.", icon: "ShieldCheck" },
      ]
    },
    content: {
      sections: [
        {
          title: "Stressfreie Räumung für Wiener Privathaushalt & Gewerbe",
          text: "Schaffen Sie Platz für neue Kapitel. Egal ob eine komplette Wohnungsauflösung, eine Räumung nach einem Umzug oder das Ausmisten von Keller und Dachboden – eine Entrümpelung in Wien kann emotional fordernd sein. Wir nehmen Ihnen diese Last ab.\n\nAls erfahrener Dienstleister legen wir großen Wert auf Transparenz. Nach einer kostenlosen Besichtigung erhalten Sie einen Fixpreis, der alles beinhaltet: Von der Demontage über den Abtransport bis zur fachgerechten Entsorgung bei zertifizierten Partnern.\n\nWir garantieren eine pünktliche und besenreine Übergabe. Ob privater Haushalt oder gewerbliche Fläche – wir räumen schnell, diskret und umweltbewusst in allen Wiener Bezirken.",
          uspList: [
            "Kostenlose Erstbesichtigung",
            "Garantierter Fixpreis",
            "Besenreine Übergabe",
            "Wertanrechnung möglich"
          ],
          cta: { text: "Jetzt kostenlosen Besichtigungstermin buchen", link: "#kontakt" }
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Erfahrung in Räumungen aller Art",
          text: "Als Profi-Entrümpler in Wien setzen wir auf ein systematisches Trennverfahren direkt vor Ort. Das schont die Umwelt und reduziert durch die Wertstofftrennung effektiv Ihre Entsorgungskosten. Wir entsorgen ausschließlich bei lizenzierten Wiener Fachbetrieben.\n\nUnser Fokus liegt auf Ihrer maximalen Entlastung. Wir kümmern uns um die Beantragung von Halteverbotszonen, die Demontage von Möbeln und den kompletten Abtransport. Wir hinterlassen nicht nur leere Räume, sondern ein blitzsauberes Objekt.\n\nSimba FM ist Ihr zuverlässiger Partner in Wien für sensible Räumungen, wie z.B. Verlassenschaften. Wir agieren mit dem nötigen Respekt und der Diskretion, die solche Lebensereignisse erfordern.",
          image: "/images/services/entruempelungen.webp"
        }
      ]
    },
    faq: {
      title: "FAQ zur Entrümpelung",
      subtitle: "Besenrein & Schnell.",
      items: [
        { question: "Was beeinflusst den Preis einer Entrümpelung?", answer: "Die Kosten richten sich nach dem Umfang (Kubikmeter), dem Stockwerk und der Art des zu entsorgenden Materials. Wir bieten eine kostenlose Besichtigung an, um Ihnen einen verbindlichen Fixpreis zu nennen." },
        { question: "Ist die Besichtigung wirklich kostenlos?", answer: "Ja, absolut. Wir kommen in alle Wiener Bezirke kostenlos vorbei, um den Aufwand einzuschätzen. Danach erhalten Sie ein unverbindliches Angebot ohne Risiko." },
        { question: "Wie schnell ist ein Termin verfügbar?", answer: "In dringenden Fällen können wir oft innerhalb von 24-48 Stunden eine Besichtigung und kurz darauf die Durchführung anbieten." },
        { question: "Rechnen Sie verwertbare Gegenstände an?", answer: "Ja, gut erhaltene Möbel oder funktionstüchtige Elektrogeräte können wir oft gegenrechnen, was die Gesamtkosten Ihrer Entrümpelung deutlich senkt." }
      ]
    },
    internalLinks: ["unterhaltsreinigung-wien", "hausbetreuung-wien", "garagenreinigung-wien"]
  },
  "fassadenreinigung-wien": {
    slug: "fassadenreinigung-wien",
    seo: {
      title: "Fassadenreinigung Wien | Glanz & Schutz für Ihre Immobilie | Simba FM",
      description: "Professionelle Fassadenreinigung in Wien ✓ Algen- & Moosentfernung ✓ Schonende Verfahren ✓ Kostenlose Probefläche. Jetzt faires Fixpreis-Angebot anfordern!",
    },
    hero: {
      title: "Professionelle Fassadenreinigung in Wien – Glanz & Werterhalt",
      subtitle: "Verleihen Sie Ihrer Immobilie neuen Glanz ohne teuren Neuanstrich. Wir entfernen Schmutz, Algen und Moos materialschonend und nachhaltig in ganz Wien.",
      description: "Ihr Spezialist für Fassadenreinigung in Wien. Die Fassade ist die Visitenkarte Ihrer Immobilie.",
      image: "/images/services/fassadenreinigung.webp",
    },
    benefitsSection: {
      title: "Werterhalt durch professionelle Fassadenreinigung",
      highlights: ["Schonend", "Zertifiziert", "Werterhalt"],
      image: "/images/services/fassadenreinigung-2.webp",
      benefits: [
        { title: "Schonende Algen- & Moosentfernung", desc: "Besonders effektiv gegen biologischen Bewuchs.", icon: "Droplets" },
        { title: "Werterhalt ohne Neuanstrich", desc: "Bis zu 70% günstiger als ein neuer Anstrich.", icon: "Coins" },
        { title: "Kostenlose Probefläche vor Ort", desc: "Sehen Sie das Ergebnis an Ihrem eigenen Objekt.", icon: "Search" },
        { title: "Professionelle Imprägnierung", desc: "Schützt langfristig vor Neuverschmutzung.", icon: "ShieldCheck" },
        { title: "Meistergeführte Fachqualität", desc: "Erfahrung und Expertise im Fassadenschutz.", icon: "Award" },
      ]
    },
    content: {
      sections: [
        {
          title: "Ihr Spezialist für Fassadenreinigung in Wien",
          text: "Die Fassade ist die Visitenkarte Ihrer Immobilie. Witterungseinflüsse, Abgase und organische Ablagerungen wie Algen oder Pilze lassen Gebäude über die Jahre ungepflegt wirken. Doch ein teurer Neuanstrich ist oft gar nicht nötig.\n\nUnsere spezialisierte Fassadenreinigung in Wien löst Verschmutzungen porentief und schont dabei die Substanz Ihres Gebäudes. Wir setzen auf innovative Verfahren, die biologischen Bewuchs an der Wurzel bekämpfen – effizient, nachhaltig und mit Wiener Traditionsqualität.\n\nAls meistergeführter Betrieb garantieren wir Ihnen eine fachgerechte Analyse des Untergrunds. Ob Putz, Stein, Klinker oder Metall – wir wählen das schonendste Verfahren aus, um die Langlebigkeit Ihres Objekts zu sichern.",
          cta: { text: "Kostenlose Probefläche anfordern", link: "#kontakt" },
          uspList: [
            "Bis zu 70% günstiger als Anstrich",
            "Schonendes Niederdruck-Verfahren",
            "Langzeit-Schutzimprägnierung",
            "Kostenlose Probefläche vor Ort"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Expertise im Fassadenschutz",
          text: "Eine fachgerechte Fassadenreinigung in Wien erfordert tiefgehendes Materialwissen. Wir wissen, wie unterschiedliche Oberflächen auf Umwelteinflüsse reagieren und welche Wirkstoffe effektiv reinigen, ohne die Bausubstanz anzugreifen.\n\nWir nutzen keine aggressiven Hochdruckreiniger, die den Putz aufrauen könnten. Stattdessen setzen wir auf chemisch-physikalische Verfahren, die Algen und Pilze porentief abtöten. Unsere anschließende Imprägnierung sorgt dafür, dass Wasser und Schmutz einfach abperlen, während die Fassade weiterhin diffusionsoffen bleibt.",
          image: "/images/services/fassadenreinigung-2.webp"
        },
        {
          title: "Saubere Fassaden für alle Objekttypen",
          text: "Wir reinigen Fassaden für private Eigentümer, Hausverwaltungen und Unternehmen in ganz Wien.",
          industries: [
            { title: "Wohnhausanlagen", icon: "Home" },
            { title: "Bürogebäude", icon: "Building2" },
            { title: "Industriehallen", icon: "Warehouse" },
            { title: "Öffentliche Bauten", icon: "Building" },
            { title: "Denkmalschutz", icon: "Shapes" },
            { title: "Einkaufszentren", icon: "Paintbrush" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Fassadenreinigung",
      subtitle: "Werterhalt & Schutz.",
      items: [
        { question: "Wann ist eine Fassadenreinigung in Wien sinnvoll?", answer: "Sobald sich erste Verfärbungen durch Algen, Pilze oder Umweltverschmutzung zeigen. Eine rechtzeitige Reinigung verhindert, dass Feuchtigkeit den Putz angreift." },
        { question: "Was ist der Vorteil gegenüber einem Neuanstrich?", answer: "Eine Fassadenreinigung ist bis zu 70% kostengünstiger als ein Neuanstrich. Zudem bleibt die ursprüngliche Struktur und Farbe erhalten." },
        { question: "Bieten Sie eine kostenlose Probefläche an?", answer: "Ja, absolut. Wir reinigen eine kleine Fläche an Ihrem Objekt in Wien kostenlos, damit Sie den Unterschied sofort sehen können." }
      ]
    },
    internalLinks: ["fensterreinigung-wien", "hausbetreuung-wien", "unterhaltsreinigung-wien"]
  },
  "fensterreinigung-wien": {
    slug: "fensterreinigung-wien",
    seo: {
      title: "Fensterreinigung Wien | Streifenfreier Glanz für Ihr Objekt | Simba FM",
      description: "Professionelle Fensterreinigung in Wien ✓ Für Privat & Gewerbe ✓ Inkl. Rahmen & Stöcke ✓ Streifenfrei garantiert. Jetzt kostenloses Angebot anfordern!",
    },
    hero: {
      title: "Fensterreinigung in Wien – streifenfreier Glanz garantiert",
      subtitle: "Glasklarer Durchblick für Ihr Zuhause oder Ihr Unternehmen. Wir sorgen für streifenfreie Ergebnisse und gepflegte Rahmen in ganz Wien – professionell & zuverlässig.",
      description: "Ihr Profi für Glasreinigung in ganz Wien. Saubere Fenster sind die Visitenkarte jeder Immobilie.",
      image: "/images/services/fensterreinigung.webp",
    },
    benefitsSection: {
      title: "Glasklarer Durchblick für Ihre Immobilie",
      highlights: ["Streifenfrei", "Inkl. Rahmen", "Fixpreis"],
      image: "/images/services/fensterreinigung-2.webp",
      benefits: [
        { title: "Streifenfreier Glanz garantiert", desc: "Perfekte Ergebnisse auf allen Glasflächen.", icon: "Sparkles" },
        { title: "Inklusive Rahmen- & Stockreinigung", desc: "Wir reinigen nicht nur das Glas, sondern das ganze Fenster.", icon: "CheckCircle" },
        { title: "Schonende & effektive Methoden", desc: "Einsatz von Reinwasser-Technik möglich.", icon: "Droplets" },
        { title: "Faire Fixpreise ohne Aufschlag", desc: "Transparente Kosten ohne versteckte Gebühren.", icon: "Coins" },
        { title: "Erfahrenes Fensterputzer-Team", desc: "Geschulte Profis für jede Fensterform.", icon: "Users" },
      ]
    },
    content: {
      sections: [
        {
          title: "Ihr Profi für Glasreinigung in ganz Wien",
          text: "Saubere Fenster sind die Visitenkarte jeder Immobilie. In einer Stadt wie Wien setzen wir neue Maßstäbe für glasklare Ergebnisse. Streifenfreier Glanz und gründliche Rahmenpflege werden bei uns durch meisterliches Handwerk garantiert.\n\nOb Privathaus, Büroetage oder großflächige Glasfassade – wir sorgen für den perfekten Durchblick. Lichtdurchflutete Räume steigern nicht nur das Wohlbefinden, sondern unterstreichen auch die Professionalität Ihres Unternehmens.",
          cta: { text: "Jetzt unverbindliches Angebot einholen", link: "#kontakt" },
          uspList: [
            "Streifenfreie Ergebnisse",
            "Inklusive Rahmen & Falze",
            "Faire Pauschalpreise",
            "Erfahrenes Fachpersonal"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Erfahrung in der Glasreinigung",
          text: "Als meistergeführte Reinigungsfirma in Wien wissen wir, dass Glasfläche nicht gleich Glasfläche ist. Von historischen Kastenfenstern in der Wiener Innenstadt bis hin zu modernen Glasfassaden in der Donaustadt – wir haben die richtige Technik für jede Herausforderung.\n\nWir setzen auf eine Kombination aus traditioneller Handwerkskunst und modernsten Verfahren wie der Reinwasser-Technologie. Dies ermöglicht ein streifenfreies Abtrocknen ohne Rückstände und schont gleichzeitig die Umwelt.",
          image: "/images/services/fensterreinigung-2.webp"
        },
        {
          title: "Glasklare Lösungen für jedes Gebäude",
          text: "Vom kleinen City-Appartement bis zum großen Industriepark – wir haben das Know-how für jede Fensterreinigung in Wien.",
          industries: [
            { title: "Privathaushalte", icon: "Home" },
            { title: "Bürokomplexe", icon: "Building2" },
            { title: "Einzelhandel", icon: "Store" },
            { title: "Industriegebäude", icon: "Warehouse" },
            { title: "Hotellerie", icon: "Building2" },
            { title: "Gastronomie", icon: "Sparkles" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Fensterreinigung",
      subtitle: "Durchblick & Klarheit.",
      items: [
        { question: "Was kostet eine professionelle Fensterreinigung in Wien?", answer: "Die Kosten hängen von der Anzahl der Fenster, deren Größe und der Erreichbarkeit ab. Wir bieten transparente Fixpreise an." },
        { question: "Sind Rahmen und Stöcke bei der Reinigung dabei?", answer: "Ja, bei Simba Facility Management ist die Reinigung der Rahmen und Stöcke standardmäßig im Service enthalten." },
        { question: "Reinigen Sie auch schwer zugängliche Glasflächen?", answer: "Absolut. Wir verfügen über professionelle Teleskopstangensysteme und Hebebühnen für hohe Fenster." }
      ]
    },
    internalLinks: ["fassadenreinigung-wien", "hausbetreuung-wien", "garagenreinigung-wien"]
  },
  "garagenreinigung-wien": {
    slug: "garagenreinigung-wien",
    seo: {
      title: "Garagenreinigung Wien | Professionelle Tiefgaragenpflege | Simba FM",
      description: "Fachmännische Garagenreinigung in Wien ✓ Tiefgaragen ✓ Parkdecks ✓ Öl- & Abriebentfernung ✓ Werterhalt. Jetzt kostenloses Angebot anfordern!",
    },
    hero: {
      title: "Professionelle Garagenreinigung in Wien – sauber & sicher",
      subtitle: "Werterhalt und Sicherheit für Ihre Parkflächen. Wir sorgen für fachgerechte Pflege von Tiefgaragen und Parkdecks in ganz Wien – meistergeführt & gründlich.",
      description: "Saubere Parkflächen sind die Visitenkarte Ihrer Immobilie. Wir sorgen für ein hygienisches Umfeld und sichern den Wert Ihrer Anlage nachhaltig.",
      image: "/images/services/garagenreinigung.webp",
    },
    benefitsSection: {
      title: "Sicherheit & Sauberkeit in Ihrer Garage",
      highlights: ["Werterhalt", "Öl-Entfernung", "Maschinell"],
      image: "/images/services/garagenreinigung-2.webp",
      benefits: [
        { title: "Spezialisierte Bodenreinigung", desc: "Fachgerechte Pflege für jeden Bodenbelag.", icon: "CheckCircle" },
        { title: "Entfernung hartnäckiger Ölflecken", desc: "Porentiefe Reinigung mit Spezialmittel.", icon: "Droplets" },
        { title: "Reinigung von Entwässerungsrinnen", desc: "Vermeidung von Verstopfungen & Schäden.", icon: "Wrench" },
        { title: "Werterhalt der Bausubstanz", desc: "Schutz vor aggressiven Salzrückständen.", icon: "ShieldCheck" },
        { title: "Höchste Sicherheitsstandards", desc: "Sichere Ausführung durch Profi-Teams.", icon: "Award" },
      ]
    },
    content: {
      sections: [
        {
          title: "Fachgerechte Tiefgaragenpflege für Wiener Objekte",
          text: "Tiefgaragen sind täglich extremen Belastungen ausgesetzt. Reifenabrieb, Abgase und vor allem Streusalz im Winter greifen nicht nur die Optik, sondern langfristig auch die Bausubstanz an.\n\nUnsere spezialisierte Garagenreinigung in Wien bietet Ihnen die perfekte Lösung. Mit modernsten Scheuersaugmaschinen und umweltfreundlichen Reinigungsmitteln entfernen wir selbst hartnäckigste Öl- und Fettflecken porentief. Wir sorgen für ein hygienisches Umfeld, das das Sicherheitsgefühl Ihrer Mieter und Kunden steigert.",
          cta: { text: "Jetzt kostenlosen Termin vereinbaren", link: "#kontakt" },
          uspList: [
            "Werterhalt der Bodenqualität",
            "Entfernung von Öl & Reifenabrieb",
            "Erhöhung der Helligkeit",
            "Spezialisierte Maschinentechnik"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Expertise in der Garagenpflege",
          text: "Als Profis für Gebäudereinigung in Wien wissen wir, worauf es bei der Garagenreinigung ankommt. Jede Fläche wird von uns individuell bewertet, um das optimale Reinigungsverfahren für den jeweiligen Bodenbelag (Beton, Asphalt oder Epoxidharz) zu wählen.\n\nBesonderes Augenmerk legen wir auf die Zeit nach dem Winter. Streusalzrückstände sind hochgradig aggressiv gegenüber Beton. Durch unsere gründliche Nassreinigung neutralisieren wir diese Rückstände und beugen so teuren Sanierungen vor.",
          image: "/images/services/garagenreinigung-2.webp"
        },
        {
          title: "Saubere Lösungen für jede Parkanlage",
          text: "Vom privaten Garagenkomplex bis zum großen Parkhaus – wir sind Ihr Partner für Garagenreinigung in Wien.",
          industries: [
            { title: "Wohnhausanlagen", icon: "Home" },
            { title: "Bürogebäude", icon: "Building2" },
            { title: "Einkaufszentren", icon: "Warehouse" },
            { title: "Hotels", icon: "Building2" },
            { title: "Logistikzentren", icon: "Warehouse" },
            { title: "Öffentliche Parkhäuser", icon: "Car" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Garagenreinigung",
      subtitle: "Werterhalt & Sicherheit.",
      items: [
        { question: "Was kostet eine Garagenreinigung?", answer: "Die Kosten hängen von der Fläche und dem Verschmutzungsgrad ab. Wir bieten Fixpreise nach kostenloser Besichtigung." },
        { question: "Müssen Autos entfernt werden?", answer: "Für beste Ergebnisse empfehlen wir eine komplette Räumung, koordinieren aber auch abschnittsweise Reinigungen." },
        { question: "Entfernen Sie auch Ölflecken?", answer: "Ja, wir verwenden spezialisierte Reiniger für tiefsitzende Öl- und Fettflecken." }
      ]
    },
    internalLinks: ["hausbetreuung-wien", "winterdienst-wien", "sonderreinigung-wien"]
  },
  "hausbetreuung-wien": {
    slug: "hausbetreuung-wien",
    seo: {
      title: "Hausbetreuung Wien | Professionelle Objektpflege & Reinigung | Simba FM",
      description: "Top Hausbetreuung in Wien ✓ Meisterbetrieb ✓ Stiegenhausreinigung ✓ Müllservice ✓ Gartenpflege. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Hausbetreuung in Wien – Werterhalt & Ordnung für Ihr Objekt",
      subtitle: "Umfassende Pflege und Werterhalt für Ihre Immobilie. Wir sorgen für Sauberkeit, Sicherheit und Ordnung in Wiener Wohnhausanlagen – meistergeführt & zuverlässig.",
      description: "Gepflegte Immobilien durch professionelle Hausbetreuung. Eine gepflegte Immobilie ist der Schlüssel zum langfristigen Werterhalt.",
      image: "/images/services/hausbetreuung.webp",
    },
    benefitsSection: {
      title: "Rundum-Betreuung für Ihre Liegenschaft",
      highlights: ["Meistergeführt", "Zuverlässig", "Wertsteigernd"],
      image: "/images/services/hausbetreuung-2.webp",
      benefits: [
        { title: "Meistergeführte Objektbetreuung", desc: "Professionelle Aufsicht und Pflege.", icon: "ShieldCheck" },
        { title: "Lückenlose Dokumentation", desc: "Alle Leistungen werden digital erfasst.", icon: "FileText" },
        { title: "Zuverlässiger Mülltonnenservice", desc: "Pünktliche Bereitstellung zu den Abholzeiten.", icon: "Trash2" },
        { title: "Regelmäßige Qualitätskontrollen", desc: "Ständige Prüfung für höchste Standards.", icon: "CheckCircle" },
        { title: "24/7 Notdienst-Erreichbarkeit", desc: "Hilfe rund um die Uhr bei Notfällen.", icon: "Clock" },
      ]
    },
    content: {
      sections: [
        {
          title: "Gepflegte Immobilien durch professionelle Hausbetreuung",
          text: "Eine gepflegte Immobilie ist der Schlüssel zum langfristigen Werterhalt. Sauberkeit in den Gemeinschaftsbereichen sorgt nicht nur für ein angenehmes Wohnklima, sondern ist essentiell für das Ansehen jeder Liegenschaft.\n\nUnser meistergeführter Betrieb in Wien steht für absolute Zuverlässigkeit. Von der klassischen Stiegenhausreinigung bis zum technischen Check-up – wir haben die Details im Blick, die Bewohnern und Eigentümern wichtig sind.",
          cta: { text: "Jetzt Objekt-Check vereinbaren", link: "#kontakt" },
          uspList: [
            "Regelmäßige Qualitäts-Checks",
            "Zuverlässiger Müll-Service",
            "Feste Ansprechpartner",
            "Lückenloses Reporting"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Vertrauen in Wiener Hausverwaltung",
          text: "Als Profis für Hausbetreuung in Wien wissen wir, dass jede Liegenschaft ihren eigenen Charakter hat. Ob prachtvolles Zinshaus im ersten Bezirk oder moderne Wohnhausanlage in der Donaustadt – wir passen unsere Services exakt an.\n\nWir putzen nicht nur, wir schauen aktiv nach dem Rechten. Wir erkennen defekte Leuchtmittel, lose Türdichtungen oder andere Mängel, bevor sie zu einem Problem für die Mieter werden.",
          image: "/images/services/hausbetreuung-2.webp"
        },
        {
          title: "Ganzheitliche Pflege für jedes Objekt",
          text: "Vom klassischen Zinshaus bis zur modernen Wohnhausanlage – wir sind Ihr Partner für Hausbetreuung in Wien.",
          industries: [
            { title: "Zinshäuser", icon: "Building" },
            { title: "Wohnhausanlagen", icon: "Users" },
            { title: "Bürogebäude", icon: "Building2" },
            { title: "Gewerbeobjekte", icon: "Building" },
            { title: "Gartenanlagen", icon: "Sprout" },
            { title: "Müllmanagement", icon: "Trash2" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Hausbetreuung",
      subtitle: "Werterhalt & Pflege.",
      items: [
        { question: "Wie wird der Preis für eine Hausbetreuung kalkuliert?", answer: "Die Kosten richten sich nach der Objektgröße, der Anzahl der Stiegenhäuser und dem Leistungsumfang." },
        { question: "Wie oft findet die Stiegenhausreinigung statt?", answer: "Üblicherweise erfolgt die Reinigung ein- bis zweimal pro Woche, je nach Bedarf." },
        { question: "Übernehmen Sie auch die Gartenpflege der Anlage?", answer: "Ja, wir kümmern uns um die komplette Grünflächenpflege im Rahmen der Hausbetreuung." }
      ]
    },
    internalLinks: ["unterhaltsreinigung-wien", "winterdienst-wien", "garagenreinigung-wien"]
  },
  "industriereinigung-wien": {
    slug: "industriereinigung-wien",
    seo: {
      title: "Industriereinigung Wien | Professionelle Fabrik- & Hallenreinigung | Simba FM",
      description: "Professionelle Industriereinigung in Wien ✓ Maschinenreinigung ✓ Hallenbodenreinigung ✓ Entfettung ✓ Werterhalt für Anlagen. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Professionelle Industriereinigung in Wien – effizient & sicher",
      subtitle: "Höchste Sauberkeit für Ihre Produktion und Anlagen. Wir sichern Ihre reibungslosen Abläufe durch spezialisierte Hallen- und Maschinenreinigung in ganz Wien – meistergeführt & flexibel.",
      description: "Maximale Verfügbarkeit Ihrer Anlagen durch fachgerechte Industriepflege. Sauberkeit ist in der Industrie die Basis für Sicherheit und Qualität.",
      image: "/images/services/industriereinigung.webp",
    },
    benefitsSection: {
      title: "Power für Ihre Produktion",
      highlights: ["Effizient", "Sicher", "Werterhalt"],
      image: "/images/services/industriereinigung-2.webp",
      benefits: [
        { title: "Spezialisierte Reinigungstechniken", desc: "Trockeneis-Strahlen & Hochdruckreinigung.", icon: "Settings" },
        { title: "Minimierung von Stillständen", desc: "Planung nach Ihren Produktionszyklen.", icon: "Clock" },
        { title: "Höchste Sicherheitsstandards", desc: "Strikte Einhaltung aller Arbeitsschutz-Regeln.", icon: "ShieldCheck" },
        { title: "Werterhalt Ihres Maschinenparks", desc: "Vermeidung von Verschleiß durch Rückstände.", icon: "Award" },
        { title: "Fachgerechte Entsorgung", desc: "Umgang mit industriellen Abfällen.", icon: "HardHat" },
      ]
    },
    content: {
      sections: [
        {
          title: "Industrie- & Hallenreinigung mit System",
          text: "Staub, Öl-Ablagerungen und Produktionsrückstände können nicht nur Maschinen schädigen, sondern stellen auch ein erhebliches Risiko dar. Als spezialisierte Reinigungsfirma für die Wiener Industrie bieten wir Lösungen, die dort ansetzen, wo Standardreinigung aufhört.\n\nWir minimieren Ihre Stillstandszeiten durch hochflexible Einsatzzeiten (24/7 möglich) und maximieren durch fachgerechte Pflege den Werterhalt Ihres gesamten Maschinenparks.",
          cta: { text: "Kostenlose Fachberatung anfordern", link: "#kontakt" },
          uspList: [
            "Verlängerte Maschinenlaufzeiten",
            "Höchste Arbeitssicherheit",
            "Spezialisiertes Fachpersonal",
            "Flexibilität bei Stillständen"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Erfahrung in industrieller Sauberkeit",
          text: "Wir setzen auf hochspezialisierte Verfahren wie CO2-Strahlen (Trockeneis) oder chemisch-physikalische Entfettung, um selbst hartnäckige Rückstände rückstandsfrei zu entfernen. Dabei achten wir strikt auf die Einhaltung aller Arbeitsschutz-Richtlinien.",
          image: "/images/services/industriereinigung-2.webp"
        },
        {
          title: "Saubere Fabriken für alle Branchen",
          text: "Vom Hightech-Labor bis zur schweren Metallverarbeitung – wir haben das Know-how für jede Industriereinigung in Wien.",
          industries: [
            { title: "Produktionshallen", icon: "Factory" },
            { title: "Logistikzentren", icon: "Truck" },
            { title: "Lebensmittelindustrie", icon: "Boxes" },
            { title: "Werkstätten", icon: "Wrench" },
            { title: "Maschinenbau", icon: "Settings" },
            { title: "Lagerhäuser", icon: "Boxes" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Industriereinigung",
      subtitle: "Effizienz & Sicherheit.",
      items: [
        { question: "Was kostet eine Industriereinigung?", answer: "Die Preise richten sich nach Verschmutzung und technischem Aufwand. Wir erstellen Fixpreis-Angebote nach Besichtigung." },
        { question: "Reinigen Sie während des Betriebs?", answer: "Ja, wir passen uns Ihren Schichtplänen an – auch nachts oder am Wochenende." },
        { question: "Haben Sie Erfahrung mit sensiblen Maschinen?", answer: "Ja, unser Personal ist geschult und arbeitet nach Herstellervorgaben." }
      ]
    },
    internalLinks: ["sonderreinigung-wien", "fassadenreinigung-wien", "unterhaltsreinigung-wien"]
  },
  "praxisreinigung-wien": {
    slug: "praxisreinigung-wien",
    seo: {
      title: "Ordinationsreinigung Wien | Hygiene für Praxen & Kliniken | Simba FM",
      description: "Professionelle Ordinationsreinigung in Wien ✓ Höchste Hygienestandards ✓ Medizinische Fachreinigung ✓ 24h Angebot. Jetzt kostenloses Angebot anfordern!",
    },
    hero: {
      title: "Professionelle Ordinationsreinigung in Wien – sicher & hygienisch",
      subtitle: "Höchste Sauberkeitsstandards für Ihre Arztpraxis oder Klinik in Wien. Wir sorgen für ein sicheres Umfeld für Patienten und Personal – meistergeführt & zuverlässig.",
      description: "In medizinischen Einrichtungen ist Sauberkeit gleichbedeutend mit Sicherheit. Unsere Ordinationsreinigung in Wien geht über die klassische Unterhaltsreinigung hinaus.",
      image: "/images/services/ordinationsreinigung.webp",
    },
    benefitsSection: {
      title: "Sicherheit & Schutz in Ihrer Praxis",
      highlights: ["HACCP", "Desinfektion", "Zertifiziert"],
      image: "/images/services/ordinationsreinigung-2.webp",
      benefits: [
        { title: "Höchste Hygienestandards", desc: "Arbeit nach strengen HACCP-Richtlinien.", icon: "ShieldCheck" },
        { title: "Gezielte Flächendesinfektion", desc: "Vermeidung von Kreuzkontaminationen.", icon: "Droplets" },
        { title: "Speziell geschultes Personal", desc: "Regelmäßige Praxis-Hygiene Training.", icon: "Users" },
        { title: "Lückenlose Dokumentation", desc: "Revisionssichere Reinigungs-Protokolle.", icon: "FileText" },
        { title: "Medizinisches Abfallmanagement", desc: "Sichere Entsorgung nach Vorschrift.", icon: "Trash2" },
      ]
    },
    content: {
      sections: [
        {
          title: "Hygiene-Management für Wiener Ordinationen",
          text: "Die Ordinationsreinigung in Wien erfordert höchste Präzision. Wir setzen auf gezielte Desinfektion und strikte Einhaltung von Hygieneplänen, um das Vertrauen Ihrer Patienten zu stärken.\n\nAls meistergeführter Betrieb verstehen wir die sensiblen Anforderungen unterschiedlicher Fachrichtungen. Wir setzen geschultes Fachpersonal ein, das mit HACCP-Standards vertraut ist und modernste Reinigungsmethoden sicher anwendet.",
          cta: { text: "Individuelle Hygiene-Beratung", link: "#kontakt" },
          uspList: [
            "Desinfektion n. VAH-Vorgaben",
            "Speziell geschultes Personal",
            "Einhaltung von Hygieneplänen",
            "Lückenlose Qualitätskontrolle"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Erfahrung in klinischer Hygiene",
          text: "Wir wissen genau, dass Behandlungszimmer, Warteräume und Sanitärbereiche unterschiedliche Anforderungen an die Keimreduktion stellen. Unsere Reinigungsteams werden regelmäßig in aktuellen Desinfektionsverfahren geschult. Wir verwenden ausschließlich hochwertige, gelistete Desinfektionsmittel.",
          image: "/images/services/ordinationsreinigung-2.webp"
        },
        {
          title: "Spezialisierte Hygiene für das Gesundheitswesen",
          text: "Jeder medizinische Bereich hat eigene Standards. Wir bieten passgenaue Lösungen für die Praxisreinigung in ganz Wien.",
          industries: [
            { title: "Hausarztpraxen", icon: "Stethoscope" },
            { title: "Zahnärzte", icon: "Activity" },
            { title: "Therapiezentren", icon: "Hospital" },
            { title: "Labore", icon: "Microscope" },
            { title: "Kliniken", icon: "Building2" },
            { title: "Fachärzte", icon: "Syringe" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Ordinationsreinigung",
      subtitle: "Hygiene & Vertrauen.",
      items: [
        { question: "Was kostet eine Ordinationsreinigung?", answer: "Die Preise hängen von Fläche und Hygiene-Level ab. Wir bieten Fixpreise nach Begehung." },
        { question: "Wird die Reinigung dokumentiert?", answer: "Ja, wir führen auf Wunsch detaillierte Protokolle für Behörden." },
        { question: "Arbeiten Sie nach speziellen Vorschriften?", answer: "Ja, wir arbeiten strikt nach den gesetzlichen Hygienevorgaben für medizinische Einrichtungen." }
      ]
    },
    internalLinks: ["unterhaltsreinigung-wien", "fensterreinigung-wien", "sonderreinigung-wien"]
  },
  "schul-kindergartenreinigung-wien": {
    slug: "schul-kindergartenreinigung-wien",
    seo: {
      title: "Schul- & Kindergartenreinigung Wien | Hygiene für Kinder | Simba FM",
      description: "Professionelle Reinigung von Schulen & Kindergärten in Wien ✓ Höchste Hygienestandards ✓ Ökologische Mittel ✓ Meisterbetrieb. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Schul- & Kindergartenreinigung in Wien – sicher & gesund",
      subtitle: "Höchste Hygiene für die nächste Generation. Wir sorgen für eine saubere und gesunde Lernumgebung in Wiener Bildungseinrichtungen – ökologisch & meistergeführt.",
      description: "Wo Kinder spielen und lernen, steht Gesundheit an erster Stelle. Als erfahrener Reinigungsbetrieb in Wien haben wir uns auf den Schutz dieser Umgebungen spezialisiert.",
      image: "/images/services/schul-kindergartenreinigung.webp",
    },
    benefitsSection: {
      title: "Schutz für die Kleinsten",
      highlights: ["Ökologisch", "HACCP", "Keimfrei"],
      image: "/images/services/schul-kindergartenreinigung-2.webp",
      benefits: [
        { title: "Zertifizierte Bio-Mittel", desc: "Ökologische & ungiftige Reinigungsmittel.", icon: "Leaf" },
        { title: "Keimfreie Spielflächen", desc: "Besonderer Fokus auf hygienische Sicherheit.", icon: "CheckCircle" },
        { title: "HACCP-geschultes Personal", desc: "Fachwissen für sensible Bildungsbereiche.", icon: "Users" },
        { title: "Ferien-Grundreinigung", desc: "Tiefenreinigung während der Schließzeiten.", icon: "Calendar" },
        { title: "Ressourcenschonende Technik", desc: "Nachhaltigkeit von Anfang an.", icon: "Droplets" },
      ]
    },
    content: {
      sections: [
        {
          title: "Hygiene mit Verantwortung für Wiener Schulen",
          text: "Schulen und Kindergärten sind Orte hoher Frequentierung, an denen sich Bakterien und Viren schnell verbreiten können. Als erfahrener Reinigungsbetrieb in Wien setzen wir nicht nur auf optische Sauberkeit, sondern vor allem auf gesundheitsschonende Hygiene.\n\nWir verwenden ausschließlich ökologische Reinigungsmittel, die keine schädlichen Rückstände hinterlassen. Dies sorgt für ein gesundes Raumklima, in dem sich Kinder sicher entfalten können.",
          cta: { text: "Jetzt Hygiene-Check vereinbaren", link: "#kontakt" },
          uspList: [
            "Ökologische Reinigungsmittel",
            "HACCP-geschultes Personal",
            "Keimfreie Spielflächen",
            "Flexible Ferienreinigung"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre Vertrauen in der Bildungsreinigung",
          text: "Besonderen Wert legen wir auf die Keimreduktion ohne Chemiebombe. Durch Farbleitsysteme und spezielle Mikrofaser-Technik verhindern wir die Übertragung von Krankheitserregern zwischen Sanitär-, Küchen- und Spielbereichen.",
          image: "/images/services/schul-kindergartenreinigung-2.webp"
        },
        {
          title: "Hygiene für Bildung & Betreuung",
          text: "Wir betreuen Bildungseinrichtungen jeder Art und Größe in ganz Wien mit spezialisierter Schul- & Kindergartenreinigung.",
          industries: [
            { title: "Kindergärten", icon: "Baby" },
            { title: "Volksschulen", icon: "School" },
            { title: "Gymnasien", icon: "Pencil" },
            { title: "Universitäten", icon: "School" },
            { title: "Horte", icon: "Users" },
            { title: "Musikschulen", icon: "Heart" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Bildungsreinigung",
      subtitle: "Sicher & Sauber.",
      items: [
        { question: "Welche Reinigungsmittel verwenden Sie?", answer: "Wir verwenden ausschließlich zertifizierte, ökologische und für Kinder unbedenkliche Mittel." },
        { question: "Reinigen Sie während des Betriebs?", answer: "Die Hauptreinigung erfolgt meist nachts, wir bieten aber auch diskrete Zwischenreinigungen an." },
        { question: "Gibt es Ferienreinigungen?", answer: "Ja, wir bieten intensive Grundreinigungen während der Schließzeiten an." }
      ]
    },
    internalLinks: ["unterhaltsreinigung-wien", "hausbetreuung-wien", "fensterreinigung-wien"]
  },
  "sonderreinigung-wien": {
    slug: "sonderreinigung-wien",
    seo: {
      title: "Sonderreinigung Wien | Professionelle Grund- & Spezialreinigung | Simba FM",
      description: "Professionelle Sonderreinigung in Wien ✓ Teppich- & Polsterreinigung ✓ Bauendreinigung ✓ Grundreinigung ✓ Härtefälle. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Sonderreinigung in Wien – wir lösen jeden Härtefall",
      subtitle: "Spezielle Herausforderungen erfordern professionelle Lösungen. Wir übernehmen dort, wo die normale Reinigung an ihre Grenzen stößt – in ganz Wien mit Spezial-Equipment.",
      description: "Wir reinigen dort, wo andere aufgeben. Unsere Sonderreinigung bringt den Glanz zurück – hart im Nehmen, sanft zur Oberfläche.",
      image: "/images/services/sonderreinigung.webp",
    },
    benefitsSection: {
      title: "Power & Präzision für Härtefälle",
      highlights: ["Werterhalt", "Tiefenrein", "Spezialisiert"],
      image: "/images/services/sonderreinigung-2.webp",
      benefits: [
        { title: "Lösungen für jeden Härtefall", desc: "Wir haben die passende Maschine für jeden Schmutz.", icon: "CheckCircle" },
        { title: "Werterhalt Ihrer Einrichtung", desc: "Regelmäßige Grundreinigung schont die Substanz.", icon: "ShieldCheck" },
        { title: "Entfernung hartnäckigster Flecken", desc: "Tiefenreinigung für Teppiche & Polster.", icon: "Droplets" },
        { title: "Moderne Spezialmaschinen", desc: "Zertifizierte Technik für Spitzenleistungen.", icon: "Settings" },
        { title: "Fachpersonal für Oberflächen", desc: "Wissen um Materialien & Wirkstoffe.", icon: "Award" },
      ]
    },
    content: {
      sections: [
        {
          title: "Wenn normales Putzen nicht mehr ausreicht",
          text: "Manche Verschmutzungen sitzen so tief, dass herkömmliche Methoden nicht mehr ausreichen. Ob vergraute Teppichböden, hartnäckiger Zementschleier nach dem Umbau oder Polstermöbel, die ihre Frische verloren haben – unsere Sonderreinigung in Wien bringt den Glanz zurück.\n\nAls erfahrener Fachbetrieb verfügen wir über einen umfangreichen Maschinenpark und das chemische Fachwissen, um auch schwierigste Aufgaben materialschonend zu lösen. Wir sorgen für Werterhalt und ein hygienisch einwandfreies Ergebnis in jedem Wiener Bezirk.",
          cta: { text: "Sonderfall besprechen & Angebot anfordern", link: "#kontakt" },
          uspList: [
            "Entfernung hartnäckigster Flecken",
            "Porentiefe Tiefenreinigung",
            "Einsatz von Spezialmaschinen",
            "Gezielte Materialschonung"
          ]
        },
        {
          title: "Warum Simba FM? Meisterhafte Sonderreinigung mit 10 Jahren Erfahrung",
          text: "In der Sonderreinigung trennt sich die Spreu vom Weizen. Als meistergeführte Reinigungsfirma in Wien setzen wir auf modernste Technologie und fundiertes Wissen über Oberflächen und Wirkstoffe.\n\nOb Teppich-Extraktion oder maschinelle Entschichtung von Hartböden – wir wissen, wie man Schmutz herausholt, ohne die wertvolle Bausubstanz oder Einrichtung zu schädigen.",
          image: "/images/services/sonderreinigung-2.webp"
        },
        {
          title: "Spezial-Lösungen für jeden Bereich",
          text: "Vom feinen Seidenteppich bis zur staubigen Großbaustelle – wir haben das Know-how für jede Sonderreinigung in Wien.",
          industries: [
            { title: "Baustellen", icon: "Building" },
            { title: "Polstermöbel", icon: "Sofa" },
            { title: "Hartböden", icon: "Lightbulb" },
            { title: "Wasserschäden", icon: "Droplets" },
            { title: "Teppichlandschaften", icon: "Shapes" },
            { title: "Härtefälle", icon: "ShieldCheck" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zur Sonderreinigung",
      subtitle: "Fachwissen & Technik.",
      items: [
        { question: "Was ist eine Sonderreinigung?", answer: "Arbeiten, die über die tägliche Reinigung hinausgehen, wie Bauendreinigung oder Teppich-Tiefenreinigung." },
        { question: "Entfernen Sie alte Flecken?", answer: "Ja, wir nutzen Spezialverfahren wie Sprühextraktion für oft verblüffende Ergebnisse." },
        { question: "Bieten Sie Bauendreinigung an?", answer: "Ja, wir entfernen Baustaub und Zementschleier zuverlässig für eine pünktliche Übergabe." }
      ]
    },
    internalLinks: ["unterhaltsreinigung-wien", "industriereinigung-wien", "entruempelungen-wien"]
  },
  "winterdienst-wien": {
    slug: "winterdienst-wien",
    seo: {
      title: "Winterdienst Wien | Schneeräumung & Streuung mit Haftung | Simba FM",
      description: "Zuverlässiger Winterdienst in Wien ✓ 24/7 Einsatzbereitschaft ✓ Volle Haftungsübernahme ✓ Schneeräumung & Splittstreuung. Jetzt Angebot anfordern!",
    },
    hero: {
      title: "Winterdienst in Wien – rechtssicher & zuverlässig durch den Frost",
      subtitle: "Sicherheit bei Eis und Schnee. Wir übernehmen die Räum- und Streupflicht für Ihre Liegenschaft in Wien – pünktlich, dokumentiert und mit voller Haftungsübernahme.",
      description: "Der Wiener Winter kann tückisch sein. Als Eigentümer oder Hausverwaltung tragen Sie eine große Verantwortung. Unser spezialisierter Winterdienst nimmt Ihnen diese Last ab.",
      image: "/images/services/winterdienst.webp",
    },
    benefitsSection: {
      title: "Sicherheit & Grip auf allen Wegen",
      highlights: ["Haftung", "24/7", "Rechtssicher"],
      image: "/images/services/winterdienst-2.webp",
      benefits: [
        { title: "Gesetzliche Haftungsübernahme", desc: "Wir übernehmen die volle rechtliche Verantwortung.", icon: "ShieldAlert" },
        { title: "24/7 Bereitschaft", desc: "Ständige Überwachung der Wetterlage.", icon: "Clock" },
        { title: "Modernster Räum-Fuhrpark", desc: "Effiziente Technik für jede Flächengröße.", icon: "Truck" },
        { title: "Einsatz-Dokumentation", desc: "Lückenloser Nachweis über alle Räumungen.", icon: "FileCheck" },
        { title: "Splittkehrung inkludiert", desc: "Gründliche Reinigung nach Saisonende.", icon: "CheckCircle" },
      ]
    },
    content: {
      sections: [
        {
          title: "Ihr Partner für sichere Wege im Wiener Winter",
          text: "Als Eigentümer oder Hausverwaltung tragen Sie eine große Verantwortung: Zwischen 6 und 22 Uhr müssen Gehsteige und Zugänge sicher begehbar sein (§ 93 StVO).\n\nUnser spezialisierter Winterdienst nimmt Ihnen diese Last und das damit verbundene Haftungsrisiko ab. Wir bieten Ihnen ein Rundum-Sorglos-Paket inklusive vollständiger Haftungsübernahme. Wenn es friert oder schneit, sind unsere Teams bereits in ganz Wien unterwegs, während Sie noch schlafen.",
          cta: { text: "Saison-Angebot für Ihre Liegenschaft anfordern", link: "#kontakt" },
          uspList: [
            "Volle Haftungsübernahme",
            "24/7 Alarmbereitschaft",
            "Echtzeit-Dokumentation",
            "Fester Pauschalpreis"
          ]
        },
        {
          title: "Warum Simba FM? Über 10 Jahre verlässlicher Winter-Service in Wien",
          text: "Wir setzen auf GPS-gestützte Routenplanung und digitale Einsatzprotokolle. Das bedeutet für Sie: maximale Transparenz und der rechtssichere Nachweis über unsere Einsätze. Wir warten nicht, bis der Schnee liegt, sondern streuen bei Glatteisgefahr bereits präventiv mit umweltschonenden Mitteln.",
          image: "/images/services/winterdienst-2.webp"
        },
        {
          title: "Sicher durch die Frostperiode",
          text: "Wir sorgen für freien Tritt auf Gehwegen, Parkplätzen und Einfahrten in ganz Wien.",
          industries: [
            { title: "Zinseisgebäude", icon: "Building2" },
            { title: "Hausverwaltungen", icon: "Building" },
            { title: "Gewerbeobjekte", icon: "Warehouse" },
            { title: "Parkplätze", icon: "Car" },
            { title: "Wohnhausanlagen", icon: "Home" },
            { title: "Einkaufszentren", icon: "Warehouse" }
          ]
        }
      ]
    },
    faq: {
      title: "FAQ zum Winterdienst",
      subtitle: "Rechtssicher durch den Winter.",
      items: [
        { question: "Wer haftet bei Unfällen?", answer: "Mit unserem Vertrag übertragen Sie die gesetzliche Räum- und Haftungspflicht rechtssicher an uns." },
        { question: "Wann geht die Saison?", answer: "Standardmäßig vom 1. November bis 15. April sind wir rund um die Uhr in Alarmbereitschaft." },
        { question: "Ist Splittreinigung dabei?", answer: "Ja, die Kehrung im Frühjahr ist in unseren Saisonpauschalen bereits enthalten." }
      ]
    },
    internalLinks: ["hausbetreuung-wien", "garagenreinigung-wien", "fassadenreinigung-wien"]
  }
,
};
