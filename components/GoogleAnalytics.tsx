'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const GA_ID = 'G-HL1B0KBPZ2';

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');

      if (!consent) {
        setEnabled(false);
        return;
      }

      try {
        const settings = JSON.parse(consent);
        setEnabled(!!settings.statistics);
      } catch {
        setEnabled(false);
      }
    };

    // Beim ersten Laden prüfen
    checkConsent();

    // Reagiert sofort auf Änderungen des Cookie-Banners
    window.addEventListener('cookie-consent-updated', checkConsent);

    return () => {
      window.removeEventListener('cookie-consent-updated', checkConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
