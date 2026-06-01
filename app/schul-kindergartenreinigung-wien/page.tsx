import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

export const metadata = constructMetadata(servicesData["schul-kindergartenreinigung-wien"].seo);

export default function SchulReinigungPage() {
  const data = servicesData["schul-kindergartenreinigung-wien"];
  
  return (
    <ServicePageClient data={data} />
  );
}
