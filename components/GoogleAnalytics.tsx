'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) return;

    const settings = JSON.parse(consent);

    if (!settings.statistics) return;
  }, []);

  const consent =
    typeof window !== 'undefined'
      ? localStorage.getItem('cookie-consent')
      : null;

  if (!consent) return null;

  const settings = JSON.parse(consent);

  if (!settings.statistics) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HL1B0KBPZ2"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HL1B0KBPZ2');
        `}
      </Script>
    </>
  );
}
