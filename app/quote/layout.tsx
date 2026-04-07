import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Enquiry Redirect | LuxAura',
  description:
    'Legacy project brief route redirected to the LuxAura About & Trade Desk enquiry page.',
  keywords:
    'LuxAura project enquiry redirect',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
