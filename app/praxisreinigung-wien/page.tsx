import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["praxisreinigung-wien"].seo);

export default function PraxisreinigungPage() {
  const data = servicesData["praxisreinigung-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
