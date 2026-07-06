'use client';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Simba Facility Management",
    "image": "https://simbafm.at/images/logos/logo.png",
    "@id": "https://simbafm.at",
    "url": "https://simbafm.at",
    "telephone": "+436601470316",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Herthergasse 37/15/1",
      "addressLocality": "Wien",
      "postalCode": "1120",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1812,
      "longitude": 16.3403
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/18H3sXqtJ3/",
      "https://www.instagram.com/simba_facility_management/",
      "https://www.linkedin.com/in/jasmina-marinkovic-0351842a2/",
      "https://www.tiktok.com/@sigmafacility"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
