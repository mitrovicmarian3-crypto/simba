import { constructMetadata } from '@/lib/metadata';
import { UeberUnsClient } from '@/components/UeberUnsClient';

export const metadata = constructMetadata({
  title: 'Über uns | Simba Facility Management Wien',
  description: 'Erfahren Sie mehr über Simba Facility Management - Ihr meistergeführter Partner für Gebäudereinigung in Wien. Qualität, Vertrauen und Handschlagqualität.',
  canonical: '/ueber-uns',
});

export default function UeberUnsPage() {
  return <UeberUnsClient />;
}
