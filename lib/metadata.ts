import { Metadata } from 'next';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = 'Simba Facility Management / Gebäudereinigung Wien',
  description = 'Gebäudereinigung Wien vom Meisterbetrieb. Ihr Partner für Reinigungsfirma, Unterhaltsreinigung & Hausbetreuung. Professionell & zuverlässig. Jetzt Angebot anfordern!',
  image = '/images/logos/logo.png',
  canonical = '/',
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  let baseUrl: string;
  try {
    baseUrl = process.env.APP_URL || 'https://simbafm.at';
    // Ensure it's a valid URL with protocol
    if (!baseUrl.startsWith('http')) {
      baseUrl = `https://${baseUrl}`;
    }
    new URL(baseUrl);
  } catch (e) {
    baseUrl = 'https://simbafm.at';
  }
  const fullCanonical = `${baseUrl}${canonical}`;

  return {
    title: {
      default: title,
      template: `%s / Simba FM`,
    },
    description,
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
      shortcut: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: 'Simba Facility Management',
      images: [
        {
          url: image,
        },
      ],
      locale: 'de_AT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@simbafm',
    },
    alternates: {
      canonical: fullCanonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}
