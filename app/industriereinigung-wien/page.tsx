import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["industriereinigung-wien"].seo);

export default function IndustriereinigungPage() {
  const data = servicesData["industriereinigung-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
