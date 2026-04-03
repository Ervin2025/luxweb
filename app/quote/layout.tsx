import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Quote | Wholesale Fabric & Fabrication Brief',
  description:
    'Submit a Luxaura project quote request for fabric sourcing, Roman blinds, upholstery, trimmings and rods.',
  keywords:
    'project quote fabric, wholesale fabric quote Sydney, Roman blind quote, curtain manufacturing quote',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
