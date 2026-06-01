// Force rebuild
import { HomeClient } from "@/components/HomeClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: 'Gebäudereinigung Wien - Simba Facility Management Reinigungsfirma',
  description: 'Gebäudereinigung Wien vom Meisterbetrieb. Ihr Experte für Unterhaltsreinigung, Hausbetreuung & Sonderreinigung. Zuverlässig & professionell. Jetzt Angebot anfordern.',
  canonical: '/',
});

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "Simba Facility Management",
    "image": "https://simbafm.at/wp-content/uploads/2024/11/LOGO_-1024x1024-1.png",
    "@id": "https://simbafm.at",
    "url": "https://simbafm.at",
    "telephone": "+436601470316",
    "email": "simbafacility@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Herthergasse 37/17/1",
      "addressLocality": "Wien",
      "postalCode": "1120",
      "addressCountry": "AT"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Wien"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10"
    },
    "award": [
      "Staatlich geprüfter Meisterbetrieb",
      "HACCP zertifiziert",
      "ANKÖ Führungsbestätigung"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
