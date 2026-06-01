'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Hier Ihre Facebook Pixel ID eintragen
    const FB_PIXEL_ID = '966605765955748'; 

    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FB_PIXEL_ID);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
}
