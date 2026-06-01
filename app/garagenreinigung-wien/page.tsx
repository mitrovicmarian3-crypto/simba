import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["garagenreinigung-wien"].seo);

export default function GaragenreinigungPage() {
  const data = servicesData["garagenreinigung-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
