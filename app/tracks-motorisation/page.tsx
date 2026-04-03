import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import { buildBusinessMetadata } from '@/lib/business-pages';

export const metadata = buildBusinessMetadata('tracks-motorisation');

export default function TracksMotorisationPage() {
  return <BusinessPageTemplate slug="tracks-motorisation" />;
}
