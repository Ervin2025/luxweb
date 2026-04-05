import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Brief | Fabric & Fabrication Intake',
  description:
    'Submit a LuxAura project brief for fabric sourcing, window treatments, upholstery, hardware and coordinated soft-furnishing delivery.',
  keywords:
    'project brief fabric, textile sourcing Sydney, Roman blind fabrication brief, upholstery project enquiry',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
