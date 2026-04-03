import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import { buildBusinessMetadata } from '@/lib/business-pages';

export const metadata = buildBusinessMetadata('outdoor-solutions');

export default function OutdoorSolutionsPage() {
  return <BusinessPageTemplate slug="outdoor-solutions" />;
}
