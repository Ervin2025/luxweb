export type FormIntent = 'trade-access' | 'project-enquiry' | 'catalogue-request';

export const FORM_INTENT_OPTIONS: Array<{
  value: FormIntent;
  label: string;
  description: string;
}> = [
  {
    value: 'trade-access',
    label: 'Register trade account',
    description: 'Apply for pricing access, product resources and long-term account support.',
  },
  {
    value: 'project-enquiry',
    label: 'Project enquiry',
    description: 'Discuss an active project, required products and fabrication needs.',
  },
];

export const TRADE_PROJECT_BUSINESS_TYPES = [
  'Interior designer',
  'Curtain or soft-furnishing retailer',
  'Builder, developer or project team',
  'Short-stay or hotel owner',
  'Commercial project owner',
  'Architect or specification team',
  'Independent partner or new business entrant',
  'Key account or multi-site buyer',
  'Other',
] as const;

export const TRADE_PROJECT_FOCUS_OPTIONS = [
  'Fabric & Fabrication',
  'Window treatments',
  'Bespoke upholstery',
  'Trimmings',
  'Mixed project package',
] as const;

export const PROJECT_CLIENT_TYPE_OPTIONS = [
  'Designer',
  'Stylist',
  'Builder',
  'Developer',
  'Hospitality / Short-Stay Operator',
  'Homeowner',
  'Other',
] as const;

export const PROJECT_TYPE_OPTIONS = [
  'Residential',
  'Multi-Residential',
  'Hospitality',
  'Short-Stay',
  'Retail / Lifestyle Commercial',
  'Display Suite',
  'Other',
] as const;

export const PROJECT_STAGE_OPTIONS = [
  'Early Concept',
  'Design Development',
  'Specification Stage',
  'Procurement Stage',
  'Pre-Installation',
  'Refresh / Upgrade',
] as const;

export const PROJECT_SERVICE_OPTIONS = [
  'Fabric & Fabrication',
  'Window Treatments',
  'Bespoke Upholstery',
  'Trimmings',
  'Project Support',
  'Site Measure / Specification Support',
] as const;
