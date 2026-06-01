import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["winterdienst-wien"].seo);

export default function WinterdienstPage() {
  const data = servicesData["winterdienst-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
