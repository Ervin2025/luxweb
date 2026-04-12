export type FormIntent = 'trade-access' | 'project-enquiry';

export const FORM_INTENT_OPTIONS: Array<{
  value: FormIntent;
  label: string;
  description: string;
}> = [
  {
    value: 'trade-access',
    label: 'Trade Account',
    description: 'Apply for pricing access, product resources and ongoing account support.',
  },
  {
    value: 'project-enquiry',
    label: 'Project Enquiry',
    description: 'Submit a project enquiry for sourcing, fabrication and furnishing support. No ABN is required.',
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
  'Interior Designer',
  'Stylist / Decorator',
  'Builder / Developer',
  'Retailer / Brand',
  'Hospitality / Short-Stay Operator',
  'Private Client (Project-Led)',
  'Other',
] as const;

export const PROJECT_TYPE_OPTIONS = [
  'Residential',
  'Multi-Residential',
  'Hospitality',
  'Retail / Commercial',
  'Styling / Visual Merchandising',
  'Product / Collection Development',
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
  'Hardware / Motorisation',
  'Project Support',
  'Custom Development',
  'Procurement / Fulfilment',
] as const;
