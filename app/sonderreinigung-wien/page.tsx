import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["sonderreinigung-wien"].seo);

export default function SonderreinigungPage() {
  const data = servicesData["sonderreinigung-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
