export interface NavItem {
  name: string;
  href: string;
}

export const TRADE_PORTAL_ACCESS_HREF = '/trade-projects?intent=trade-access';
export const PROJECT_BRIEF_HREF = '/contact#project-enquiry';
export const TRADE_SUPPORT_HREF = '/contact#trade-desk';
export const REQUEST_CUSTOM_SUPPORT_HREF = '/contact#project-enquiry';
export const BRAND_SUPPORT_HREF = '/contact#project-enquiry';
export const CURTAIN_MEASUREMENT_GUIDE_HREF = '/curtain-measurement-guide';
export const REQUEST_CATALOGUE_HREF = TRADE_PORTAL_ACCESS_HREF;
export const REGISTER_TRADE_ACCOUNT_HREF = TRADE_PORTAL_ACCESS_HREF;
export const GET_QUOTE_HREF = PROJECT_BRIEF_HREF;

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Fabric & Fabrication', href: '/collections' },
  { name: 'Window Treatments', href: '/custom-curtains-sheers' },
  { name: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' },
  { name: 'Trimmings', href: '/decorative-trimmings' },
  { name: 'Project Support', href: '/project-support' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_CATEGORY_LINKS: NavItem[] = [...NAV_ITEMS];
