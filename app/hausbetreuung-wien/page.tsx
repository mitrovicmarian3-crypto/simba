import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ServicePageClient } from '@/components/ServicePageClient';
import { servicesData } from '@/lib/services-data';

const SERVICE_ID = "hausbetreuung-wien";
const data = servicesData[SERVICE_ID];

export const metadata = constructMetadata({
  title: data.seo.title,
  description: data.seo.description,
  canonical: `/${SERVICE_ID}`,
});

export default function HausbetreuungPage() {
  return <ServicePageClient data={data} />;
}
