export type PriceBand = '$' | '$$' | '$$$';
export type CatalogCategory = 'Fabrics' | 'Trimmings' | 'Rods';
export type FormIntent = 'trade-access' | 'project-enquiry' | 'catalogue-request';
export type BusinessPageSlug =
  | 'wholesale-fabrics'
  | 'custom-curtains-sheers'
  | 'cushions-soft-furnishings'
  | 'trimmings'
  | 'blinds-solutions'
  | 'tracks-motorisation'
  | 'outdoor-solutions';

export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface OfferItem {
  title: string;
  description: string;
  bullets?: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ApplicationItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface BusinessPageConfig {
  slug: BusinessPageSlug;
  pageTitle: string;
  breadcrumbLabel: string;
  metadataTitle: string;
  metadataDescription: string;
  metadataKeywords: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    stats?: StatItem[];
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
  overview: {
    title: string;
    description: string;
    supportingPoints?: string[];
  };
  offerSection: {
    title: string;
    description: string;
    items: OfferItem[];
  };
  whySection: {
    title: string;
    description: string;
    items: BenefitItem[];
  };
  applicationsSection: {
    title: string;
    description: string;
    items: ApplicationItem[];
  };
  performanceSection?: {
    title: string;
    description: string;
    items: string[];
  };
  oneStopSection: {
    title: string;
    description: string;
    items: string[];
  };
  relatedSection: {
    title: string;
    description: string;
    items: RelatedLink[];
  };
  ctaSection: {
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
  faqItems: FaqItem[];
}

export interface ThankYouContent {
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface CatalogItem {
  id: string;
  title: string;
  brand: string;
  origin: string;
  material: string;
  priceBand: PriceBand;
  usages: string[];
  category: CatalogCategory;
  description: string;
  detailFocus: string;
  image: string;
}

export const REQUEST_CATALOGUE_HREF = '/trade-projects?intent=trade-access';
export const REGISTER_TRADE_ACCOUNT_HREF = REQUEST_CATALOGUE_HREF;
export const GET_QUOTE_HREF = '/quote';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Fabric&Fabrication', href: '/collections' },
  { name: 'Window Treatments', href: '/custom-curtains-sheers' },
  { name: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' },
  { name: 'Hardware & Trimmings', href: '/trimmings' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_CATEGORY_LINKS: NavItem[] = [
  { name: 'Fabrics', href: '/wholesale-fabrics' },
  { name: 'Window Treatments', href: '/custom-curtains-sheers' },
  { name: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' },
  { name: 'Hardware & Trimmings', href: '/trimmings' },
  { name: 'Tracks & Motorisation', href: '/tracks-motorisation' },
  { name: 'Outdoor Solutions', href: '/outdoor-solutions' },
];

export const HOME_HERO_STATS: StatItem[] = [
  {
    value: 'Thousands of Premium Fabrics & Trimmings',
    label: 'An international resource library for complete soft-furnishing briefs',
  },
  {
    value: 'Bespoke Global Manufacturing',
    label: 'From simple elegance to the most complex custom designer requirements',
  },
  {
    value: '100% Best-Price Guarantee',
    label: 'Seamless workflow, master craftsmanship and price confidence in one offer',
  },
];

export const HOME_VALUE_POINTS: BenefitItem[] = [
  {
    title: 'Australian family-owned foundation',
    description:
      'LuxAura is built as an Australian family-owned business, giving clients continuity, practical accountability and a more dependable long-term relationship.',
  },
  {
    title: 'Australian design understanding',
    description:
      'The offer is shaped by Australian interiors, local market expectations and real project use, while still drawing from LuxAura-branded fabrics, established imported collections and globally selected high-quality materials.',
  },
  {
    title: 'From fabric to finished soft furnishings',
    description:
      'LuxAura does not stop at fabric supply. Selected materials can move straight into curtains, indoor and outdoor furniture, sofas, cushions, sofa throws, ottomans, table runners, aprons, gloves and other custom pieces.',
  },
  {
    title: 'Lowest price guarantee',
    description:
      'Efficient management, quantity purchasing and coordinated making support a lowest price guarantee while maintaining quality and customisation.',
  },
];

export const HOME_CATEGORY_LINKS: Array<
  BenefitItem & { eyebrow: string; href: string; image: string }
> = [
  {
    eyebrow: 'Fabrics & Fabrication',
    title: 'Fabrics & Expert Fabrication',
    description:
      'Access our global library of premium indoor, outdoor and performance fabrics, available by the metre or crafted into bespoke soft furnishings, from signature cushions and ottomans to precision-fitted sofa covers.',
    href: '/collections',
    image: '/images/luxaura/beach-sheer.webp',
  },
  {
    eyebrow: 'Window Treatments',
    title: 'Bespoke Window Treatments',
    description:
      'Total solutions for drapery and sheers, with master craftsmanship across heading styles including modern S-Fold, classic Pinch Pleat and precision-engineered Roman blinds.',
    href: '/custom-curtains-sheers',
    image: '/images/luxaura/hero-project.webp',
  },
  {
    eyebrow: 'Bespoke Upholstery',
    title: 'Custom Indoor & Outdoor Upholstery',
    description:
      'High-efficiency manufacturing for custom lounges, chairs and dining seating, featuring USA Sunbrella plus specialist pet-friendly fabrics that are water-repellent, stain-resistant and OEKO-TEX certified.',
    href: '/cushions-soft-furnishings',
    image: '/images/luxaura/upholstery-pillows.webp',
  },
  {
    eyebrow: 'Hardware & Trimmings',
    title: 'Hardware & Artisanal Trimmings',
    description:
      'Premium silent curtain tracks and motorised smart systems, paired with 1,000s of intricate trims, braids and passementerie from Dongli Art Textile for a more differentiated luxury finish.',
    href: '/trimmings',
    image: '/images/IMG-D.webp',
  },
  {
    eyebrow: 'Supply & Quality',
    title: 'High-Efficiency Supply & Premium Quality',
    description:
      'Our Source to Sydney model supports rapid production through our global factory, with master craftsmanship on every piece for designer-grade quality delivered with consistency and speed.',
    href: '/about',
    image: '/images/IMG-I.webp',
  },
  {
    eyebrow: 'Partnership',
    title: 'Trusted Partner & Best Price Guarantee',
    description:
      'Collaborating with designers, builders, developers and homeowners, we use our direct factory connection to back every quote with a lowest-price guarantee without compromising quality.',
    href: '/trade-projects',
    image: '/images/about-hero.webp',
  },
];

export const HOME_WHY_CHOOSE_ITEMS: BenefitItem[] = [
  {
    title: 'Fabric plus finished products',
    description:
      'Clients do not need to split fabric sourcing from curtains, upholstery, cushions, trims and hardware.',
  },
  {
    title: 'Global fabric reach',
    description:
      'The collection spans British, European and curated Asian sourcing to balance luxury, performance and budget.',
  },
  {
    title: 'Pet-friendly and performance options',
    description:
      'FibreGuard and hard-wearing constructions support family homes, rental properties and commercial interiors.',
  },
  {
    title: 'Friendly project pricing',
    description:
      'Quality and commercial realism stay together through efficient management and quantity purchasing.',
  },
  {
    title: 'Family-owned Australian business',
    description:
      'The brand story is grounded in long-term relationships, practical accountability and Australian market understanding.',
  },
  {
    title: 'Sydney-based project support',
    description:
      'Local communication helps reduce delays, manage design intent and keep project teams aligned.',
  },
];

export const HOME_CHALLENGE_SOLUTIONS = [
  {
    problem: 'Managing multiple suppliers for one interior package',
    solution: 'One coordinated source for fabrics, trims, tracks, blinds and fabrication support',
  },
  {
    problem: 'Inconsistent quality across project categories',
    solution: 'Controlled sourcing plus clear manufacturing standards through a single workflow',
  },
  {
    problem: 'Long lead times and fragmented communication',
    solution: 'Sydney support combined with a practical trade process from brief through delivery',
  },
  {
    problem: 'Limited customisation and hard-to-source performance fabrics',
    solution: 'Custom make-up, pet-friendly options and a broad global collection curated for real use',
  },
];

export const HOME_FABRIC_COLLECTIONS: OfferItem[] = [
  {
    title: 'LuxAura Signature Series',
    description:
      'LuxAura’s own branded fabric ranges give the business a clearer point of difference and more direct control over style, quality and commercial positioning.',
    bullets: ['Own-brand identity', 'Flexible specification coverage', 'Designed to sit confidently beside imported collections'],
  },
  {
    title: 'Prestigious Textiles',
    description:
      'A British collection known for decorative confidence, premium drapery character and specification-ready palettes.',
    bullets: ['UK-led range', 'Luxury decorative direction', 'Popular with interior designers'],
  },
  {
    title: 'Mobus',
    description:
      'A bestselling British furniture fabric collection that combines refined upholstery texture with practical daily-living performance.',
    bullets: ['Spill-Safe protection', 'OEKO-TEX certified', 'A strong choice for Australian pet-friendly homes'],
  },
  {
    title: 'FibreGuard',
    description:
      'High-performance fabric stories for stain resistance, easy maintenance and family or commercial use.',
    bullets: ['Pet-friendly', 'Easy-clean', 'Performance-led upholstery and drapery'],
  },
  {
    title: 'Sunbrella Outdoor Fabrics',
    description:
      'A world-leading outdoor fabric with a 5-year warranty, built for furniture and cushions facing Australia’s strong UV conditions.',
    bullets: ['5-year warranty', 'Built to solve harsh Australian UV exposure', 'Trusted for bespoke exterior upholstery'],
  },
  {
    title: 'European Linen and Curated Asia',
    description:
      'Natural linen libraries and value-conscious Asian collections give LuxAura a complete price and style spectrum.',
    bullets: ['French-origin 100% linen and linen-cotton blends', 'Commercially smart Asian sourcing', 'High quality with cost control'],
  },
];

export const HOME_PROCESS_STEPS: Array<{ title: string; description: string }> = [
  {
    title: 'Project brief',
    description:
      'We start with the room type, intended finish, performance needs and project timeline.',
  },
  {
    title: 'Collections and category alignment',
    description:
      'Fabrics, fabrication, window treatments, bespoke upholstery and hardware directions are shortlisted against the brief.',
  },
  {
    title: 'Quote and sampling',
    description:
      'Clients can request pricing direction, account registration support and samples before production decisions are finalised.',
  },
  {
    title: 'Processing and specialty sewing',
    description:
      'Integrated fabrication, upholstery processing, specialty sewing and installation-ready preparation are managed through one workflow.',
  },
  {
    title: 'Efficient delivery',
    description:
      'Final selections move through project coordination, dispatch planning and efficient handover support.',
  },
];

export const HOME_AUDIENCES: string[] = [
  'Interior designers seeking one partner for sourcing and fabrication',
  'Curtain retailers wanting broader supply depth and local support',
  'Project teams, builders and developers who need efficient project procurement',
  'Short-stay accommodation owners furnishing Airbnb and holiday properties',
  'Commercial venues, hospitality spaces and display suites balancing design and durability',
  'Key accounts and larger buyers needing dependable supply continuity',
];

export const ABOUT_PILLARS: BenefitItem[] = [
  {
    title: 'Family-owned and relationship-led',
    description:
      'LuxAura is an Australian family-owned business built on continuity, trust and practical service.',
  },
  {
    title: 'One-stop project thinking',
    description:
      'Fabric selection, trims, hardware, fabrication and delivery support stay connected in one process.',
  },
  {
    title: 'Sydney-based support with global reach',
    description:
      'Local guidance is matched with global sourcing across premium and commercially sensitive projects.',
  },
];

export const TRADE_PROJECT_PARTNERS: string[] = [
  'Interior designers',
  'Builders, developers and project teams',
  'Short-stay and hotel owners',
  'Commercial project owners',
  'Curtain and soft-furnishing retailers',
  'Independent partners and new business entrants',
  'Larger repeat buyers',
];

export const TRADE_PROJECT_BENEFITS: BenefitItem[] = [
  {
    title: 'Access to a global collection',
    description:
      'Clients can access British, European and curated Asian collections through one relationship.',
  },
  {
    title: 'Lowest price guarantee and project quoting',
    description:
      'The team supports quotes, registration and category coordination with a lowest price guarantee.',
  },
  {
    title: 'Pet-friendly and performance-led options',
    description:
      'Projects can be specified for family life, rental durability and commercial wear without starting from scratch.',
  },
  {
    title: 'Partner resources and custom manufacturing',
    description:
      'Approved accounts can access custom manufacturing support, product resources and dedicated partner pricing where relevant.',
  },
];

export const TRADE_PROJECT_PROCESS: Array<{ title: string; description: string }> = [
  {
    title: 'Enquiry and intent',
    description:
      'Choose between trade registration and an active project enquiry.',
  },
  {
    title: 'Product and category alignment',
    description:
      'The team aligns collections, performance needs and related categories to the brief.',
  },
  {
    title: 'Quote, samples and approvals',
    description:
      'Samples, pricing and approvals are handled before work moves ahead.',
  },
  {
    title: 'Making, supply and delivery support',
    description:
      'Once approved, LuxAura coordinates supply, making and handover support.',
  },
];

export const TRADE_PROJECT_FAQ: FaqItem[] = [
  {
    question: 'Who should apply for trade access?',
    answer:
      'Trade access is for designers, retailers, builders, project owners, accommodation operators, commercial buyers and prospective partners.',
  },
  {
    question: 'Do I need to register before ordering?',
    answer:
      'Registering is the best first step for pricing, ongoing support and product resources. You can also send a project enquiry if the brief is already active.',
  },
  {
    question: 'Can I apply as a partner if I am entering the industry?',
    answer:
      'Yes. If you are interested in entering the industry as a partner, you can apply for dedicated pricing and resource support through the trade account path.',
  },
];

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
];

export const TRADE_PROJECT_FOCUS_OPTIONS = [
  'Fabrics',
  'Window treatments',
  'Bespoke upholstery',
  'Hardware and trimmings',
  'Tracks and motorisation',
  'Outdoor solutions',
  'Mixed project package',
];

export const QUOTE_PRODUCT_OPTIONS = [
  'Fabrics',
  'Window treatments',
  'Bespoke upholstery',
  'Hardware and trimmings',
  'Tracks and motorisation',
  'Outdoor solutions',
  'Mixed package',
];

export const QUOTE_BRAND_OPTIONS = [
  'Prestigious Textiles',
  'Mobus',
  'FibreGuard',
  'European Linen Collection',
  'Curated Asia Collection',
  'Need recommendation',
];

export const QUOTE_USAGE_OPTIONS = [
  'Curtains and sheers',
  'Roman blinds',
  'Upholstery',
  'Pet-friendly family use',
  'Outdoor use',
  'Hospitality or commercial',
  'Mixed usage',
];

export const CONTACT_INTEREST_OPTIONS = [
  'Fabrics',
  'Window treatments',
  'Bespoke upholstery',
  'Hardware and trimmings',
  'Tracks and motorisation',
  'Outdoor solutions',
  'Trade account / project quote',
];

export const WHOLESALE_RESOURCE_PACKS: RelatedLink[] = [
  {
    title: 'Register Trade Account',
    description:
      'Open a trade account to access best pricing, product resources and a clearer supply workflow.',
    href: REQUEST_CATALOGUE_HREF,
  },
  {
    title: 'Sample and Swatch Support',
    description:
      'Use the trade and projects workflow to request targeted sample packs for active briefs.',
    href: '/trade-projects?intent=project-enquiry',
  },
  {
    title: 'Project Quote Preparation',
    description:
      'Move from material selection into a coordinated quote covering fabrics, trims and related fabrication.',
    href: GET_QUOTE_HREF,
  },
];

export const BUSINESS_PAGE_CONFIGS: Record<BusinessPageSlug, BusinessPageConfig> = {
  'wholesale-fabrics': {
    slug: 'wholesale-fabrics',
    pageTitle: 'Fabrics',
    breadcrumbLabel: 'Fabrics',
    metadataTitle: 'Fabrics | Sydney Trade Fabric Supplier',
    metadataDescription:
      'Source trade fabrics in Sydney through LuxAura, with British, European and curated Asian collections for design and project clients.',
    metadataKeywords:
      'wholesale fabrics Sydney, trade fabric supplier, Prestigious Textiles Australia, FibreGuard supplier Australia, European linen supplier',
    hero: {
      eyebrow: 'Fabrics',
      title: 'Global fabric sourcing for trade and project clients',
      description:
        'LuxAura supplies a broad fabric library for Australian designers, retailers and project buyers, balancing luxury, performance and value.',
      imageSrc: '/images/luxaura/beach-sheer.webp',
      imageAlt: 'LuxAura wholesale drapery fabric selection',
      stats: [
        { value: 'UK + Europe + Asia', label: 'A sourcing mix built for style and pricing flexibility' },
        { value: 'Pet-Friendly Options', label: 'Performance stories available for real-life use' },
        { value: 'Sydney Guidance', label: 'Local support for samples, quotes and specification help' },
      ],
      primaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
      secondaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
    },
    overview: {
      title: 'A complete fabric supply layer for Australian interiors',
      description:
        "Wholesale fabrics sit at the centre of LuxAura's offer, giving clients premium sourcing, performance options and commercially realistic choice through one partner.",
      supportingPoints: [
        'Prestigious Textiles, Mobus and FibreGuard in one sourcing conversation',
        'European linen and linen-cotton options for natural texture and elevated drape',
        'Curated Asian collections for cost-effective project coverage',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The library covers decorative, performance and project-led requirements without forcing every brief into the same price point.',
      items: [
        {
          title: 'Prestigious Textiles and premium British sourcing',
          description:
            'Decorative fabrics for drapery, Roman blinds and polished interior schemes.',
          bullets: ['Luxury directional styling', 'Specification-ready palettes', 'Residential and boutique commercial fit'],
        },
        {
          title: 'Mobus and textural soft furnishing fabrics',
          description:
            'A bestselling British furniture fabric collection with strong upholstery character, practical Spill-Safe performance and everyday family appeal.',
          bullets: ['Spill-Safe protection', 'OEKO-TEX certified', 'A strong fit for Australian pet-friendly homes'],
        },
        {
          title: 'FibreGuard performance collections',
          description:
            'Easy-clean, pet-friendly and hard-wearing stories suited to family homes, rentals and hospitality use.',
          bullets: ['Performance focus', 'Pet-friendly solutions', 'Commercial practicality'],
        },
        {
          title: 'European linen and curated Asian collections',
          description:
            'Natural linen luxury and commercially smart Asian sourcing combine to support value through to high-end projects.',
          bullets: ['100% linen and linen-cotton blends', 'High quality at competitive pricing', 'Flexible sourcing architecture'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'Fabric sourcing works best when it stays connected to pricing, local support and downstream making.',
      items: [
        {
          title: 'One-stop supplier',
          description:
            'Fabric selection can move directly into trims, rods, curtains, blinds and soft furnishings without changing supplier.',
        },
        {
          title: 'Sydney-based support',
          description:
            'Clients get a local team for collection guidance, sample direction and project follow-through.',
        },
        {
          title: 'Performance plus decorative range',
          description:
            'Luxury drapery, tactile upholstery and pet-friendly performance options live side by side.',
        },
        {
          title: 'Competitive trade positioning',
          description:
            'The mix of premium and cost-effective sourcing helps teams manage quality and budget together.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications',
      description:
        'The same fabric library supports more than one downstream outcome.',
      items: [
        {
          title: 'Curtains and sheers',
          description: 'Decorative and practical fabric stories for layered, blackout or sheer treatments.',
        },
        {
          title: 'Roman blinds',
          description: 'Structured compositions and lining-ready options for tailored fold control.',
        },
        {
          title: 'Cushions and upholstery',
          description: 'Performance and decorative selections for seating, bed styling and accent pieces.',
        },
        {
          title: 'Commercial and hospitality interiors',
          description: 'Hard-wearing and cost-balanced sourcing for projects with volume and durability needs.',
        },
      ],
    },
    performanceSection: {
      title: 'Performance and pet-friendly capability',
      description:
        'Real-world performance matters across homes, rentals and hospitality environments.',
      items: [
        'Stain-resistant and easy-clean fabric options',
        'Durable constructions for repeated use',
        'Suitable stories for pets, children and rental turnover',
        'Fabric guidance that balances appearance with practical upkeep',
      ],
    },
    oneStopSection: {
      title: 'One-stop from sourcing to finished outcome',
      description:
        'Fabric selection does not stop at swatches. LuxAura helps clients carry choices through related products and making support.',
      items: [
        'Collection guidance and product matching',
        'Sample and trade account support for decision making',
        'Coordination with curtains, soft furnishings, trims and hardware',
        'Project quoting that reflects the full package, not isolated products',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Wholesale fabrics become more useful when the next category is already connected.',
      items: [
        {
          title: 'Window Treatments',
          description: 'Turn selected fabrics into tailored drapery, blinds and layered window packages.',
          href: '/custom-curtains-sheers',
        },
        {
          title: 'Bespoke Upholstery',
          description: 'Extend fabric direction into sofas, armchairs, cushions and upholstery-led accents.',
          href: '/cushions-soft-furnishings',
        },
        {
          title: 'Trade Account',
          description: 'Move from material selection into wholesale access, project quoting and ongoing support.',
          href: '/trade-projects',
        },
      ],
    },
    ctaSection: {
      title: 'Request fabrics, samples or project support',
      description:
        'Use LuxAura when you need range, practical support and a clearer path to fabrication.',
      primaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
      secondaryCta: { label: 'Start A Quote', href: GET_QUOTE_HREF },
    },
    faqItems: [
      {
        question: 'Can LuxAura help with both premium and value-focused sourcing?',
        answer:
          'Yes. The collection spans premium European brands and commercially smart Asian options so projects can scale by budget without losing coherence.',
      },
      {
        question: 'Do you offer pet-friendly and easy-clean fabric options?',
        answer:
          'Yes. LuxAura includes performance-led options such as FibreGuard for family, rental and commercial use.',
      },
      {
        question: 'Can I request samples before asking for a full quote?',
        answer:
          'Yes. The trade account workflow supports sample requests and early-stage project discussions before full quoting.',
      },
    ],
  },
  'custom-curtains-sheers': {
    slug: 'custom-curtains-sheers',
    pageTitle: 'Window Treatments',
    breadcrumbLabel: 'Window Treatments',
    metadataTitle: 'Window Treatments | Factory Direct Curtains and Roman Blinds Sydney',
    metadataDescription:
      'LuxAura delivers factory-direct window treatments across Roman blinds, S-Fold drapes, bespoke curtains and layered systems in Sydney.',
    metadataKeywords:
      'Custom Roman Blinds Sydney, Factory Direct Curtains, S-Fold Drapes, Bespoke Window Treatments, Trimming Integration',
    hero: {
      eyebrow: 'Window Treatments',
      title: 'Custom window treatments from soft drapery to shutters and smart control',
      description:
        'LuxAura covers S-Fold sheers, tailored drapery, Roman blinds, roller systems, shutters and motorisation-ready solutions through one trade workflow.',
      imageSrc: '/images/luxaura/hero-project.webp',
      imageAlt: 'LuxAura window treatments including curtains, blinds and shutters',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
    },
    overview: {
      title: 'One category, multiple treatment types and one coordinated supply path',
      description:
        'LuxAura helps clients compare drapery, blinds, shutters and motorised systems against light control, privacy, insulation and design intent.',
      supportingPoints: [
        'S-Fold, pinch pleat, pencil pleat, eyelet and box pleat curtains',
        'Roller, Roman, Venetian, honeycomb, vertical and panel glide blinds',
        'Plantation, PVC, timber and aluminium shutters with smart-control planning',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The offer is organised around the main product families Australian clients compare most often.',
      items: [
        {
          title: 'Curtains and sheers',
          description:
            'Made-to-measure drapery across S-Fold, pinch pleat, pencil pleat, eyelet, box pleat, sheer and blockout directions.',
          bullets: ['Soft decorative movement', 'Blackout, sheer and layered combinations', 'Premium tailored headings and finishes'],
        },
        {
          title: 'Indoor blinds',
          description:
            'Functional blind systems including single and double rollers, Roman blinds, Venetian options, honeycomb blinds, vertical blinds and panel glide systems.',
          bullets: ['Stronger control over privacy and light', 'Practical room-by-room specification', 'Suitable for sliding doors, bedrooms and compact openings'],
        },
        {
          title: 'Shutters',
          description:
            'Plantation shutters in PVC, timber or aluminium, with bi-fold and sliding formats for larger openings and higher-value interiors.',
          bullets: ['Architectural visual impact', 'Easy maintenance options', 'Strong fit for kitchens, bathrooms and statement rooms'],
        },
        {
          title: 'Motorisation and custom-made support',
          description:
            'LuxAura can connect fabric and treatment selection with motorisation, premium components, on-site measuring and professional installation support.',
          bullets: ['Remote, app and voice-control readiness', 'Premium details such as FibreGuard, Coats thread and YKK zips', 'Design, measuring and installation workflow'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'The category works best when style, function and installation stay connected.',
      items: [
        {
          title: 'Broader treatment coverage',
          description:
            'Clients can compare curtains, blinds and shutters inside one conversation instead of splitting advice across multiple suppliers.',
        },
        {
          title: 'Fabric and hardware in one workflow',
          description:
            'Soft drapery, track systems, trims, shutters and motorisation can be planned with fewer disconnects.',
        },
        {
          title: 'Room-specific performance thinking',
          description:
            'The recommendation can shift based on insulation, privacy, blackout need, moisture exposure, pets or sliding-door practicality.',
        },
        {
          title: 'Custom-made delivery',
          description:
            'Measure, make-up detail and installation support help the final treatment feel intentional rather than off-the-shelf.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'Different treatment types suit different rooms, openings and priorities.',
      items: [
        {
          title: 'Living rooms and large glazing',
          description: 'S-Fold sheers, layered drapery, panel glides and statement shutters for broad openings and softer room atmosphere.',
        },
        {
          title: 'Bedrooms and media spaces',
          description: 'Blockout curtains, double rollers and more controlled treatments for sleep quality, privacy and glare management.',
        },
        {
          title: 'Wet areas and practical zones',
          description: 'PVC shutters, composite Venetians and moisture-tolerant options for kitchens, bathrooms and utility spaces.',
        },
        {
          title: 'Hospitality and commercial settings',
          description: 'Roman blinds, roller systems, shutters and durable drapery packages for accommodation, offices and public-facing rooms.',
        },
      ],
    },
    performanceSection: {
      title: 'Performance, comfort and smart-control benefits',
      description:
        'The right treatment has to do more than look good. It needs to manage the room well every day.',
      items: [
        'Light control from sheer filtering through to full blackout solutions',
        'Insulation and comfort support through honeycomb, lined drapery and more enclosed systems',
        'Moisture-aware and easy-care choices for kitchens, bathrooms and family spaces',
        'Motorisation-ready planning for remote, app, Alexa or Google Home control',
      ],
    },
    oneStopSection: {
      title: 'One-stop from style selection to measuring, making and installation',
      description:
        'Window treatments are easier to specify when fabric, system type, controls and installation are considered together.',
      items: [
        'Compare curtains, blinds and shutters against the same room brief',
        'Pair premium fabrics with the right headings, linings and hardware',
        'Coordinate tracks, rods, motorisation and detailing in one quote path',
        'Support custom-made measuring and professional installation',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Window treatments are stronger when the adjacent categories are already connected.',
      items: [
        {
          title: 'Tracks & Motorisation',
          description: 'Add manual or smart-controlled systems for larger openings and smoother operation.',
          href: '/tracks-motorisation',
        },
        {
          title: 'Hardware & Trimmings',
          description: 'Refine drapery and soft treatment finishes with borders, piping and decorative detail.',
          href: '/trimmings',
        },
        {
          title: 'Fabrics & Fabrication',
          description: 'Explore the broader fabric and sewn-soft-furnishing library behind the treatment selection.',
          href: '/collections',
        },
      ],
    },
    ctaSection: {
      title: 'Start a window treatment conversation with the full room in mind',
      description:
        'Use LuxAura when the brief needs a clearer decision across curtains, blinds, shutters and motorisation.',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Can LuxAura handle difficult curtain and Roman blind briefs?',
        answer:
          'Yes. Complex headings, trim integration, layered systems and performance lining requirements are all part of the fabrication scope.',
      },
      {
        question: 'Do you quote both homes and larger projects?',
        answer:
          'Yes. LuxAura supports private homes, boutique accommodation, hospitality sites and wider commercial work.',
      },
      {
        question: 'Can motorisation be included from the start?',
        answer:
          'Yes. Manual and motorised systems can be planned together so tracks, controls and fabrication are aligned early.',
      },
    ],
  },
  'cushions-soft-furnishings': {
    slug: 'cushions-soft-furnishings',
    pageTitle: 'Bespoke Upholstery',
    breadcrumbLabel: 'Bespoke Upholstery',
    metadataTitle: 'Bespoke Upholstery | Custom Sofas, Chairs and Outdoor Pieces',
    metadataDescription:
      'LuxAura delivers bespoke upholstery across custom sofas, chairs and outdoor furniture through one coordinated service.',
    metadataKeywords:
      'bespoke upholstery Sydney, custom sofa manufacturer, custom armchair upholstery, Sunbrella outdoor furniture, wholesale upholstery supplier',
    hero: {
      eyebrow: 'Bespoke Upholstery',
      title: 'Custom upholstery from fabric selection through to finished delivery',
      description:
        'LuxAura handles bespoke upholstery from fabric selection through processing, tailored making and efficient delivery.',
      imageSrc: '/images/luxaura/upholstery-pillows.webp',
      imageAlt: 'LuxAura bespoke upholstery and custom furniture softening',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
    },
    overview: {
      title: 'A full upholstery workflow rather than a decorative add-on service',
      description:
        'This category is built around true bespoke upholstery, with the fabric library, processing knowledge and sewing control needed to deliver finished pieces.',
      supportingPoints: [
        'Custom sofas, armchairs and upholstered seating pieces',
        'Indoor and outdoor upholstery, including Sunbrella with a 5-year warranty',
        'From fabric selection to processing, completion and dispatch in one path',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The upholstery offer is built around finished furniture and seating outcomes.',
      items: [
        {
          title: 'Custom sofas',
          description:
            'Bespoke sofa making and re-covering support for interiors that need the right fabric, scale, comfort and finish.',
          bullets: ['Custom sizes and silhouettes', 'Fabric matched to use and wear', 'Suitable for residential and hospitality settings'],
        },
        {
          title: 'Single chairs and accent seating',
          description:
            'Custom upholstered armchairs and occasional chairs that bring a more resolved textile language into the room.',
          bullets: ['Feature chair upholstery', 'Dining and lounge applications', 'Decorative and durable fabric options'],
        },
        {
          title: 'Outdoor furniture upholstery',
          description:
            'Outdoor seating and furniture softening with climate-aware fabric direction, including Sunbrella to handle Australia’s strong UV and fading pressure.',
          bullets: ['Sunbrella with a 5-year warranty', 'Better fit for patios and exterior seating', 'Made for repeat use and UV-heavy conditions'],
        },
        {
          title: 'Coordinated finishing details',
          description:
            'Piping, trim direction, zipper quality and seam detailing can be aligned with the wider LuxAura textile story.',
          bullets: ['Trim and piping alignment', 'Coats thread and YKK zip level detailing', 'Cleaner fit and finish control'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'Bespoke upholstery becomes more reliable when sourcing, fabrication and dispatch sit inside one workflow.',
      items: [
        {
          title: 'One-stop upholstery workflow',
          description:
            'Fabric selection, upholstery making, finishing and dispatch stay connected instead of being fragmented across separate suppliers.',
        },
        {
          title: 'Australian design judgement',
          description:
            'The team can match upholstery recommendations to how Australian homes, hospitality settings and commercial spaces are actually used.',
        },
        {
          title: 'Indoor and outdoor capability',
          description:
            'The service is not limited to indoor upholstery and can extend into performance-minded outdoor furniture applications.',
        },
        {
          title: 'Preferred wholesale support',
          description:
            'Designers, retailers and project teams can use LuxAura as a dependable upholstery partner across repeat projects and larger accounts.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'The upholstery category is suited to both statement pieces and practical project seating.',
      items: [
        {
          title: 'Residential living rooms',
          description: 'Custom sofas, armchairs and upholstered feature pieces for homes that need tailored comfort and finish.',
        },
        {
          title: 'Display suites and styling projects',
          description: 'Furniture softening that helps interiors feel more complete, resolved and sale-ready.',
        },
        {
          title: 'Hospitality and boutique accommodation',
          description: 'Durable upholstered seating packages for guest-facing spaces that still need a premium look.',
        },
        {
          title: 'Outdoor seating zones',
          description: 'Sunbrella-led outdoor furniture upholstery for terraces, balconies and exterior hospitality settings facing strong UV.',
        },
      ],
    },
    performanceSection: {
      title: 'Performance, pet-friendly and outdoor-ready choices',
      description:
        'Upholstery needs to survive real use, especially in family, hospitality and outdoor settings.',
      items: [
        'Easy-clean and harder-wearing fabrics for daily seating use',
        'Pet-friendly upholstery stories for sofa covers, cushions and protectors',
        'Sunbrella and other practical options for exterior furniture applications in strong Australian UV',
        'Fabric guidance shaped by wear, cleaning needs and delivery expectations',
      ],
    },
    oneStopSection: {
      title: 'One-stop from choosing the cloth to completing the piece',
      description:
        'The upholstery service moves through a clear production chain, so clients do not have to separately manage sourcing, making and handover.',
      items: [
        'Select the right fabric for the furniture type and usage level',
        'Coordinate processing, upholstery making and specialty sewing details',
        'Align indoor, outdoor and decorative finishing decisions in one quote path',
        'Dispatch completed items through a more efficient delivery workflow',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Upholstery performs best when the surrounding textile categories are already aligned.',
      items: [
        {
          title: 'Fabrics & Fabrication',
          description: 'Browse the premium and performance fabric sources behind bespoke upholstery selections.',
          href: '/collections',
        },
        {
          title: 'Hardware & Trimmings',
          description: 'Use trims, piping and finishing details to sharpen the final upholstery outcome.',
          href: '/trimmings',
        },
        {
          title: 'Window Treatments',
          description: 'Keep upholstery aligned with curtains and other room-wide textile decisions.',
          href: '/custom-curtains-sheers',
        },
      ],
    },
    ctaSection: {
      title: 'Discuss a bespoke upholstery brief from fabric to finished piece',
      description:
        'Bring LuxAura in when sofas, seating or outdoor furniture need custom fabric direction and reliable delivery support.',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Does LuxAura handle custom sofas and single chairs?',
        answer:
          'Yes. The upholstery offer covers custom sofas, single chairs and other upholstered seating that needs tailored fabric and making control.',
      },
      {
        question: 'Can you do outdoor upholstery as well?',
        answer:
          'Yes. Outdoor furniture upholstery can be supported, including Sunbrella-based applications with a 5-year warranty for demanding outdoor use.',
      },
      {
        question: 'Is the service only about choosing fabric?',
        answer:
          'No. LuxAura positions bespoke upholstery as a full workflow covering fabric selection, processing, making, finishing and dispatch.',
      },
    ],
  },
  trimmings: {
    slug: 'trimmings',
    pageTitle: 'Hardware & Trimmings',
    breadcrumbLabel: 'Hardware & Trimmings',
    metadataTitle: 'Hardware & Trimmings | Premium Tracks, Motorisation and Bespoke Detail',
    metadataDescription:
      'LuxAura combines premium aluminium tracks, motorised systems and decorative trims for curtains, cushions and bespoke soft furnishings.',
    metadataKeywords:
      'curtain tracks Sydney, motorised curtain systems, premium curtain hardware, decorative trimmings, passementerie supplier Australia',
    hero: {
      eyebrow: 'Hardware & Trimmings',
      title: 'Premium curtain hardware and decorative detailing in one category',
      description:
        'LuxAura combines premium curtain tracks, motorised hardware and thousands of trims so clients can resolve both function and finish together.',
      imageSrc: '/images/IMG-D.webp',
      imageAlt: 'LuxAura curtain hardware and trimming references',
      primaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
      secondaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
    },
    overview: {
      title: 'One page for the hardware that makes it work and the trims that make it special',
      description:
        'This category brings together two parts of the package that are often split apart: operating hardware and decorative finishing.',
      supportingPoints: [
        'Premium aluminium curtain track systems, including motorised options',
        'Thousands of trimming and lace directions for curtains, cushions and soft furnishings',
        'Hardware and decorative detailing selected inside the same project conversation',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'It covers both operating hardware and decorative detailing.',
      items: [
        {
          title: 'Premium aluminium curtain tracks',
          description:
            'Track systems designed for cleaner movement, stronger reliability and more polished presentation across residential and project work.',
          bullets: ['High-quality aluminium profiles', 'Suitable for large or layered curtains', 'A stronger system base for custom drapery'],
        },
        {
          title: 'Motorised hardware options',
          description:
            'Electric track systems can be incorporated where convenience, larger spans or premium user experience are part of the brief.',
          bullets: ['Motorised curtain operation', 'Works with premium track systems', 'Useful for higher-end and harder-to-reach openings'],
        },
        {
          title: 'Thousands of trims, laces and decorative edges',
          description:
            'A broad trimming library supports both restrained and highly decorative textile design across multiple product types.',
          bullets: ['Borders, laces, tassels and edging options', 'Suitable for curtains, cushions and soft furnishings', 'Large design library for varied interior styles'],
        },
        {
          title: 'Design-led trim application',
          description:
            'The team helps clients match trim scale, texture and detail style to the selected fabric and finished product purpose.',
          bullets: ['Curtain leading edges and borders', 'Piping and accent lines for upholstery and cushions', 'Soft furnishing detail that looks intentionally designed'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'Hardware and decorative trim are strongest when they are coordinated early.',
      items: [
        {
          title: 'Function and decoration together',
          description:
            'Clients can resolve how the treatment operates and how it is finished within the same supply path.',
        },
        {
          title: 'Premium system quality',
          description:
            'High-quality track hardware helps the made curtain perform better, especially on larger or more premium projects.',
        },
        {
          title: 'Large decorative library',
          description:
            'Thousands of trim directions give designers and stylists more freedom to personalise curtains, cushions and soft products.',
        },
        {
          title: 'Project-ready coordination',
          description:
            'Hardware, motorisation and trimming detail can all be captured inside the same trade quote and making workflow.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'The category supports both operation and visual finish across multiple product types.',
      items: [
        {
          title: 'Curtains and sheers',
          description: 'Track systems, motorisation and decorative leading-edge detail for made drapery packages.',
        },
        {
          title: 'Roman blinds and window soft furnishings',
          description: 'Structured trim application and clean operating support for more refined blind and treatment profiles.',
        },
        {
          title: 'Cushions, upholstery and soft furnishings',
          description: 'Piping, laces and decorative edge control for upholstered pieces, cushions and related textile products.',
        },
        {
          title: 'Display suites, hospitality and premium residential work',
          description: 'Projects that need both polished operation and a stronger finishing layer across the final scheme.',
        },
      ],
    },
    performanceSection: {
      title: 'Operational value and design resolution',
      description:
        'Hardware needs to perform cleanly, and trims need to add value without looking arbitrary.',
      items: [
        'Smoother operation and stronger support through better track systems',
        'Motorised options where convenience and premium experience matter',
        'Decorative finish that differentiates custom-made textile packages',
        'Guidance on when to keep the trim restrained and when to make it expressive',
      ],
    },
    oneStopSection: {
      title: 'One-stop from operating system to decorative edge detail',
      description:
        'The category works best when hardware and decorative finish are specified inside one package.',
      items: [
        'Match track quality and motorisation to the curtain or treatment type',
        'Select trims and laces against the same fabric and upholstery direction',
        'Include hardware and decorative detailing in the same quote path',
        'Keep manufacturing, finishing and installation decisions aligned from the start',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Hardware and trims usually connect directly into one of these adjoining categories.',
      items: [
        {
          title: 'Window Treatments',
          description: 'Apply premium track systems and decorative finishing directly to drapery and window packages.',
          href: '/custom-curtains-sheers',
        },
        {
          title: 'Bespoke Upholstery',
          description: 'Use trims and finishing detail to sharpen custom sofas, chairs and upholstery pieces.',
          href: '/cushions-soft-furnishings',
        },
        {
          title: 'Fabrics & Fabrication',
          description: 'Start with the fabric story before resolving the hardware and decorative detailing layer.',
          href: '/collections',
        },
      ],
    },
    ctaSection: {
      title: 'Request hardware and trimming direction for the full package',
      description:
        'Use LuxAura when the brief needs reliable hardware, motorised options and richer decorative detail in one workflow.',
      primaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Can tracks, motors and trims all be quoted together?',
        answer:
          'Yes. LuxAura can combine hardware, motorisation and decorative trims into one coordinated quote.',
      },
      {
        question: 'Do you only supply trims, or can you also sew them into finished products?',
        answer:
          'We do both. The factory can integrate trims into curtains, Roman blinds, cushions and upholstery pieces.',
      },
      {
        question: 'How do you help match trims to fabric properly?',
        answer:
          'We look at texture, weight and shrinkage response so the selected trim holds its line and stays balanced after cleaning and use.',
      },
    ],
  },
  'blinds-solutions': {
    slug: 'blinds-solutions',
    pageTitle: 'Blinds Solutions',
    breadcrumbLabel: 'Blinds Solutions',
    metadataTitle: 'Blinds Solutions | Custom Blind Supply Sydney',
    metadataDescription:
      'LuxAura supplies custom blind solutions for residential, retail and commercial interiors, including roller, Roman and Venetian options.',
    metadataKeywords:
      'custom blinds supplier Sydney, Roman blinds specialist, roller blinds trade, blind solutions Australia',
    hero: {
      eyebrow: 'Blinds Solutions',
      title: 'Custom blind packages for practical and design-led interiors',
      description:
        'LuxAura supplies blind solutions for projects that need privacy, light control and a cleaner architectural finish, while staying connected to curtains and system support.',
      imageSrc: '/images/luxaura/roman-blind-lounge.webp',
      imageAlt: 'LuxAura blind solutions',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    overview: {
      title: 'Blind solutions that work on their own or as part of a larger scheme',
      description:
        'LuxAura positions blinds as part of a whole room package. The category supports design direction, practical control and system integration rather than a simple off-the-shelf blind sale.',
      supportingPoints: [
        'Roller, Roman and Venetian blind directions',
        'Custom sizing and practical specification',
        'Alignment with curtains, sheers and tracks where needed',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The blind offer is built around the main solution types trade clients most often need to specify.',
      items: [
        {
          title: 'Roller blinds',
          description: 'Simple and effective blind packages for privacy, light control and modern interiors.',
          bullets: ['Light filtering and blackout options', 'Clean profile', 'Suitable across project types'],
        },
        {
          title: 'Roman blinds',
          description: 'A softer blind solution that pairs well with decorative textiles and tailored rooms.',
          bullets: ['Structured fold profile', 'Fabric-driven finish', 'Strong fit with luxury interiors'],
        },
        {
          title: 'Venetian and shading options',
          description:
            'Practical blind formats for clients who need directional light management and a more architectural look.',
          bullets: ['Sun control', 'Layering flexibility', 'Residential and commercial fit'],
        },
        {
          title: 'Integrated window packages',
          description:
            'Blinds can be specified alongside curtains, sheers and motorisation-ready systems.',
          bullets: ['Window package coordination', 'Tracks and controls support', 'Trade-friendly specification'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'Blind solutions are more useful when they connect to the broader supply and styling strategy.',
      items: [
        {
          title: 'One-stop window thinking',
          description:
            'Blinds do not need to be sourced separately from curtains, sheers and system components.',
        },
        {
          title: 'Roman blind and textile expertise',
          description:
            'The textile background of the business strengthens blind packages that rely on fabric and soft detail.',
        },
        {
          title: 'Practical performance focus',
          description:
            'Blind recommendations are framed around privacy, sun control and day-to-day usability.',
        },
        {
          title: 'Trade-ready flexibility',
          description:
            'The category supports homes, display suites, retail and commercial interiors with clear specification support.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'Blind solutions can support multiple space types without losing design coherence.',
      items: [
        {
          title: 'Residential interiors',
          description: 'Privacy, sun control and clean-lined window solutions for homes and apartments.',
        },
        {
          title: 'Display suites',
          description: 'Neat and dependable systems for staged interiors and presentation spaces.',
        },
        {
          title: 'Retail environments',
          description: 'Blinds for light management, visibility control and practical operation.',
        },
        {
          title: 'Commercial projects',
          description: 'Functional shading and privacy solutions that can sit within a broader package.',
        },
      ],
    },
    performanceSection: {
      title: 'Performance and practical benefits',
      description:
        'Blind decisions are often driven by real-life performance rather than appearance alone.',
      items: [
        'Light filtering, blackout and sun-screening options',
        'Privacy support for homes and commercial interiors',
        'Low-maintenance choices where practical upkeep matters',
        'Ability to pair blinds with curtains for layered control',
      ],
    },
    oneStopSection: {
      title: 'One-stop blind, curtain and system coordination',
      description:
        'Blinds work best when they are planned with the rest of the room package, not after it.',
      items: [
        'Blind selection aligned with curtain and sheer packages',
        'Track and motorisation compatibility where needed',
        'Fabric and finish coordination for Roman blind solutions',
        'Quote support that captures the full window strategy',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Blinds most often connect to these neighbouring categories.',
      items: [
        {
          title: 'Tracks & Motorisation',
          description: 'Add system logic for large openings and smoother day-to-day operation.',
          href: '/tracks-motorisation',
        },
        {
          title: 'Window Treatments',
          description: 'Layer blinds with soft window treatments for more complete light control.',
          href: '/custom-curtains-sheers',
        },
        {
          title: 'Trade Account',
          description: 'Coordinate specification, trade account support and multi-category project quotes.',
          href: '/trade-projects',
        },
      ],
    },
    ctaSection: {
      title: 'Discuss a blind package or layered window solution',
      description:
        'Use LuxAura when you need practical blind performance with the option to integrate curtains, systems and broader project support.',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Do you supply Roman blinds as well as roller blinds?',
        answer:
          'Yes. LuxAura supports both Roman blind solutions and more streamlined formats such as roller blinds, depending on the room and design direction.',
      },
      {
        question: 'Can blinds be specified together with curtains?',
        answer:
          'Yes. Blind packages can be planned alongside curtains and sheers for layered privacy and light control.',
      },
      {
        question: 'Are blind solutions suitable for commercial and display-suite projects?',
        answer:
          'Yes. The category supports residential, retail, display-suite and commercial use cases.',
      },
      {
        question: 'Do you also help with tracks or motorised operation?',
        answer:
          'Yes. Clients can continue into tracks and motorisation support when the project requires it.',
      },
    ],
  },
  'tracks-motorisation': {
    slug: 'tracks-motorisation',
    pageTitle: 'Tracks & Motorisation',
    breadcrumbLabel: 'Tracks & Motorisation',
    metadataTitle: 'Tracks & Motorisation | Curtain System Supply',
    metadataDescription:
      'LuxAura supplies curtain tracks and motorisation-ready systems for custom drapery and project interiors.',
    metadataKeywords:
      'curtain tracks supplier, motorised curtains Sydney, curtain system supply, tracks and motorisation',
    hero: {
      eyebrow: 'Tracks & Motorisation',
      title: 'Manual and motorised systems for smooth, project-ready operation',
      description:
        'LuxAura supports the system side of curtains and window soft furnishings with track and motorisation-ready solutions.',
      imageSrc: '/images/carousel/09-Curtain-Track.webp',
      imageAlt: 'LuxAura track and motorisation system',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    overview: {
      title: 'A curtain package is only as strong as the system behind it',
      description:
        'Tracks and motorisation matter for operation, visual neatness and long-term user satisfaction. LuxAura treats them as part of the package, not a late add-on.',
      supportingPoints: [
        'Manual tracks and motorisation-ready pathways',
        'Suitable for large openings and layered curtains',
        'System choices aligned with the selected curtain package',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The tracks and motorisation category supports both simpler residential schemes and more demanding project conditions.',
      items: [
        {
          title: 'Manual track systems',
          description: 'Reliable and clean-lined systems for everyday curtain operation.',
          bullets: ['Smooth movement', 'Neat appearance', 'Practical across many project types'],
        },
        {
          title: 'Motorisation-ready solutions',
          description:
            'Prepared pathways for projects that require convenience, scale or a more premium operating experience.',
          bullets: ['Suitable for large spans', 'Future-facing specification', 'Comfort and convenience'],
        },
        {
          title: 'Large opening support',
          description:
            'System direction for wide expanses and rooms where operating quality is especially visible.',
          bullets: ['Project-ready spans', 'Consistent movement', 'Clean integration with drapery'],
        },
        {
          title: 'System coordination',
          description:
            'Tracks and controls are matched to curtains, sheers and blind packages to avoid specification gaps.',
          bullets: ['Curtain compatibility', 'Window package alignment', 'Single supplier coordination'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'System supply is most useful when it stays close to the soft furnishing decision.',
      items: [
        {
          title: 'Integrated curtain and system planning',
          description:
            'Track decisions are made with the selected curtain package, not after fabric and make-up are already locked.',
        },
        {
          title: 'Smooth operation focus',
          description:
            'The system category is approached with function and user experience in mind, not just hardware supply.',
        },
        {
          title: 'Project practicality',
          description:
            'Suitable for homes, display suites and larger project openings where operation quality is highly visible.',
        },
        {
          title: 'One-stop supplier logic',
          description:
            'Clients can keep fabrics, curtains, systems and quote support within the same business relationship.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'Tracks and motorisation matter wherever curtain operation needs to feel reliable and considered.',
      items: [
        {
          title: 'Large residential openings',
          description: 'Curtain systems for wider spans and frequent day-to-day use.',
        },
        {
          title: 'Display suites and premium homes',
          description: 'System choices that complement more polished and controlled interior packages.',
        },
        {
          title: 'Commercial and hospitality interiors',
          description: 'Functional systems for project environments that need durability and consistency.',
        },
        {
          title: 'Layered curtain schemes',
          description: 'Tracks prepared to support sheer and blockout combinations in one room.',
        },
      ],
    },
    performanceSection: {
      title: 'Practical system benefits',
      description:
        'The right system decision improves more than movement alone.',
      items: [
        'Smoother curtain operation over time',
        'Better support for large spans and heavier make-ups',
        'Cleaner coordination with decorative curtain packages',
        'Preparedness for more premium automation expectations',
      ],
    },
    oneStopSection: {
      title: 'One-stop from fabric brief to operating system',
      description:
        'When systems are integrated with the textile package early, the result is more coherent and easier to deliver.',
      items: [
        'Track choices aligned with curtain type and fullness',
        'System direction included in broader quote support',
        'Less fragmentation between hardware and soft furnishings',
        'Sydney-based communication for specification clarification',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Tracks and motorisation sit most naturally alongside these categories.',
      items: [
        {
          title: 'Window Treatments',
          description: 'System supply is usually driven by the drapery package it needs to support.',
          href: '/custom-curtains-sheers',
        },
        {
          title: 'Fabrics',
          description: 'Coordinate system direction with the fabric choices driving the wider window package.',
          href: '/wholesale-fabrics',
        },
        {
          title: 'Trade Account',
          description: 'Bring systems into a full trade enquiry, account discussion or project quote.',
          href: '/trade-projects',
        },
      ],
    },
    ctaSection: {
      title: 'Request system support for your next window package',
      description:
        'LuxAura helps clients carry curtains and window treatments through the hardware decisions that make them work well.',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Do you support both manual and motorised systems?',
        answer:
          'Yes. LuxAura can support standard manual track directions as well as pathways for motorisation-ready solutions.',
      },
      {
        question: 'Can track decisions be made together with curtain selection?',
        answer:
          'Yes. Track and motorisation support is intended to sit alongside curtain specification, not after it.',
      },
      {
        question: 'Are these systems suitable for large openings?',
        answer:
          'Yes. Larger spans are one of the main reasons clients involve LuxAura early in the system discussion.',
      },
    ],
  },
  'outdoor-solutions': {
    slug: 'outdoor-solutions',
    pageTitle: 'Outdoor Solutions',
    breadcrumbLabel: 'Outdoor Solutions',
    metadataTitle: 'Outdoor Solutions | Outdoor Cushions and Soft Furnishings',
    metadataDescription:
      'LuxAura supplies outdoor cushions and soft furnishing solutions designed for durability, comfort and Australian weather.',
    metadataKeywords:
      'outdoor cushions supplier, outdoor soft furnishings, UV resistant textiles, outdoor project fabrics',
    hero: {
      eyebrow: 'Outdoor Solutions',
      title: 'Outdoor cushions and soft furnishings built for Australian conditions',
      description:
        'LuxAura supports outdoor living and project environments with soft furnishings that balance durability, comfort and finish.',
      imageSrc: '/images/IMG-Hero.webp',
      imageAlt: 'Outdoor soft furnishing inspiration',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    overview: {
      title: 'Performance-led outdoor soft furnishings',
      description:
        'Outdoor products are specified for exposure, maintenance and repeated use, with the same design attention used indoors.',
      supportingPoints: [
        'Outdoor cushions, bench pads and relaxed seating accents',
        'Suitable for residential terraces, poolside zones and hospitality settings',
        'Durable textile direction with practical upkeep in mind',
      ],
    },
    offerSection: {
      title: 'What we offer',
      description:
        'The outdoor range focuses on core soft furnishing products for exterior and semi-exterior spaces.',
      items: [
        {
          title: 'Outdoor cushions',
          description: 'Decorative and comfort-focused cushions for exterior seating zones.',
          bullets: ['Relaxed styling', 'Coordinated textile direction', 'Residential and hospitality fit'],
        },
        {
          title: 'Bench and banquette pads',
          description:
            'Softening and comfort layers for built-in or freestanding outdoor seating.',
          bullets: ['Custom sizing', 'Outdoor-ready material direction', 'More usable seating zones'],
        },
        {
          title: 'Poolside and terrace accents',
          description: 'Textile accessories that make outdoor areas feel more complete and considered.',
          bullets: ['Comfort plus styling', 'Suitable for luxury or relaxed spaces', 'Project package compatibility'],
        },
        {
          title: 'Coordinated outdoor textile packages',
          description:
            'Outdoor products can be aligned with wider residential or hospitality furnishing schemes.',
          bullets: ['Visual consistency', 'Practical product selection', 'Trade quote support'],
        },
      ],
    },
    whySection: {
      title: 'Why LuxAura',
      description:
        'Outdoor soft furnishings need to work harder than indoor accessories, especially in Australian climates.',
      items: [
        {
          title: 'Durability-led thinking',
          description:
            'Materials are considered through the lens of wear, exposure and regular use.',
        },
        {
          title: 'Design continuity',
          description:
            'Outdoor areas can feel connected to the rest of the project rather than like a separate afterthought.',
        },
        {
          title: 'One-stop coordination',
          description:
            'Outdoor soft furnishings can sit within the same broader material and project conversation as indoor products.',
        },
        {
          title: 'Trade and hospitality relevance',
          description:
            'The category supports family homes, terraces, hospitality settings and project presentation needs.',
        },
      ],
    },
    applicationsSection: {
      title: 'Applications and use cases',
      description:
        'Outdoor solutions are designed for spaces where performance and presentation need to meet.',
      items: [
        {
          title: 'Outdoor residential areas',
          description: 'Cushions and soft furnishing layers for terraces, balconies and family entertaining zones.',
        },
        {
          title: 'Poolside and resort-style spaces',
          description: 'Comfort-focused products that help outdoor areas feel polished and usable.',
        },
        {
          title: 'Hospitality exteriors',
          description: 'Soft furnishings that support dining, lounge and guest-facing outdoor spaces.',
        },
        {
          title: 'Commercial outdoor settings',
          description: 'Project-friendly textile packages for shared spaces and high-visibility zones.',
        },
      ],
    },
    performanceSection: {
      title: 'Outdoor performance priorities',
      description:
        'This category is built around practical durability, not decoration alone.',
      items: [
        'UV-aware and weather-conscious material direction',
        'Easy-care thinking for real maintenance conditions',
        'Durable textile options for repeated use',
        'Comfort and finish without ignoring outdoor wear',
      ],
    },
    oneStopSection: {
      title: 'One-stop indoor and outdoor coordination',
      description:
        'Outdoor products can stay connected to the same textile and project conversation as the rest of the property.',
      items: [
        'Outdoor soft furnishings aligned with interior fabric direction',
        'Trade quoting that reflects outdoor products alongside broader packages',
        'Sydney support for project coordination and product selection',
        'A single supplier relationship across multiple furnishing categories',
      ],
    },
    relatedSection: {
      title: 'Related services',
      description:
        'Outdoor solutions connect naturally to these broader supply areas.',
      items: [
        {
          title: 'Fabrics',
          description: 'Start with performance-led textile direction for exterior use and related schemes.',
          href: '/wholesale-fabrics',
        },
        {
          title: 'Bespoke Upholstery',
          description: 'Extend furniture and soft-furnishing thinking from indoor spaces into outdoor zones.',
          href: '/cushions-soft-furnishings',
        },
        {
          title: 'Trade Account',
          description: 'Bring outdoor requirements into the same trade or project workflow as the rest of the brief.',
          href: '/trade-projects',
        },
      ],
    },
    ctaSection: {
      title: 'Discuss an outdoor soft furnishing package',
      description:
        'Bring LuxAura in when exterior comfort and textile durability need to work together.',
      primaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
      secondaryCta: { label: 'Trade Account', href: '/trade-projects' },
    },
    faqItems: [
      {
        question: 'Do you supply outdoor cushions for residential projects?',
        answer:
          'Yes. LuxAura supports outdoor cushion and soft furnishing packages for terraces, balconies, poolside zones and broader residential schemes.',
      },
      {
        question: 'Are outdoor products suitable for hospitality use?',
        answer:
          'Yes. The category is designed with durability and repeated use in mind, making it relevant for hospitality and guest-facing environments.',
      },
      {
        question: 'Can outdoor products be coordinated with indoor furnishing schemes?',
        answer:
          'Yes. LuxAura aims to keep the textile story coherent across indoor and outdoor zones wherever practical.',
      },
    ],
  },
};

export const FAQ_GROUPS: Array<{ title: string; href: string; items: FaqItem[] }> = [
  {
    title: 'Fabrics',
    href: '/wholesale-fabrics',
    items: BUSINESS_PAGE_CONFIGS['wholesale-fabrics'].faqItems,
  },
  {
    title: 'Window Treatments',
    href: '/custom-curtains-sheers',
    items: BUSINESS_PAGE_CONFIGS['custom-curtains-sheers'].faqItems,
  },
  {
    title: 'Bespoke Upholstery',
    href: '/cushions-soft-furnishings',
    items: BUSINESS_PAGE_CONFIGS['cushions-soft-furnishings'].faqItems,
  },
  {
    title: 'Hardware & Trimmings',
    href: '/trimmings',
    items: BUSINESS_PAGE_CONFIGS.trimmings.faqItems,
  },
  {
    title: 'Tracks & Motorisation',
    href: '/tracks-motorisation',
    items: BUSINESS_PAGE_CONFIGS['tracks-motorisation'].faqItems,
  },
  {
    title: 'Outdoor Solutions',
    href: '/outdoor-solutions',
    items: BUSINESS_PAGE_CONFIGS['outdoor-solutions'].faqItems,
  },
  {
    title: 'Trade Account',
    href: '/trade-projects',
    items: TRADE_PROJECT_FAQ,
  },
];

export const THANK_YOU_VARIANTS: Record<
  'trade-projects' | 'quote' | 'contact',
  ThankYouContent
> = {
  'trade-projects': {
    title: 'Your trade or project request is with the LuxAura team',
    description:
      'We will review the enquiry type, business details and product focus, then come back with the right next step for wholesale access or project coordination.',
    primaryCta: { label: 'Browse Fabrics', href: '/wholesale-fabrics' },
    secondaryCta: { label: 'View Trade Portal Preview', href: '/trade/login' },
  },
  quote: {
    title: 'Your quote request has been submitted',
    description:
      'The brief is now in the LuxAura workflow for product alignment, pricing review and any follow-up needed on fabrication or category coordination.',
    primaryCta: { label: 'Open Trade Account', href: '/trade-projects' },
    secondaryCta: { label: 'Contact LuxAura', href: '/contact' },
  },
  contact: {
    title: 'Your enquiry has been sent to the trade desk',
    description:
      'A team member will review the enquiry category and respond with the most relevant support path for sourcing, quoting, trims, systems or workshop collaboration.',
    primaryCta: { label: 'Register Trade Account', href: REQUEST_CATALOGUE_HREF },
    secondaryCta: { label: 'Get Quote', href: GET_QUOTE_HREF },
  },
};

export const COLLECTION_ITEMS: CatalogItem[] = [
  {
    id: 'prestigious-atelier',
    title: 'Atelier Linen Weave',
    brand: 'Prestigious Textiles',
    origin: 'UK',
    material: 'Linen Blend',
    priceBand: '$$$',
    usages: ['Curtains & Sheers', 'Roman Blinds'],
    category: 'Fabrics',
    description: 'Tailored decorative weave for layered drapery schemes and elevated Roman blind work.',
    detailFocus: 'Visible slub texture with soft structure for premium fold behaviour.',
    image: '/images/luxaura/hero-project.webp',
  },
  {
    id: 'mobus-texture',
    title: 'Mobus Studio Texture',
    brand: 'Mobus',
    origin: 'Europe',
    material: 'Textured Blend',
    priceBand: '$$$',
    usages: ['Curtains & Sheers', 'Upholstery'],
    category: 'Fabrics',
    description: 'European decorative texture designed for interiors that need depth without visual heaviness.',
    detailFocus: 'Textural face and tonal movement reward close inspection.',
    image: '/images/luxaura/beach-sheer.webp',
  },
  {
    id: 'fibreguard-harbour',
    title: 'Harbour Performance Chenille',
    brand: 'FibreGuard',
    origin: 'Europe',
    material: 'Performance Blend',
    priceBand: '$$$',
    usages: ['Pet-friendly', 'Upholstery'],
    category: 'Fabrics',
    description: 'Performance upholstery fabric built for family living, hospitality wear and easy maintenance.',
    detailFocus: 'Dense pile with easy-clean confidence for touch-heavy settings.',
    image: '/images/luxaura/upholstery-pillows.webp',
  },
  {
    id: 'linen-pure',
    title: 'Pure European Linen',
    brand: 'European Linen',
    origin: 'Europe',
    material: '100% Linen',
    priceBand: '$$$',
    usages: ['Curtains & Sheers', 'Roman Blinds'],
    category: 'Fabrics',
    description: 'Natural luxury linen for softly structured drapery and tactile blind applications.',
    detailFocus: 'Clean woven irregularity creates a natural premium finish.',
    image: '/images/luxaura/roman-blind-lounge.webp',
  },
  {
    id: 'linen-cotton',
    title: 'Studio Linen Cotton',
    brand: 'European Linen',
    origin: 'Europe',
    material: 'Linen-Cotton Blend',
    priceBand: '$$',
    usages: ['Roman Blinds', 'Curtains & Sheers'],
    category: 'Fabrics',
    description: 'Balanced linen-cotton composition for structure, softness and practical fabrication.',
    detailFocus: 'Tighter weave helps hold crisp Roman blind profiles.',
    image: '/images/IMG-I.webp',
  },
  {
    id: 'asia-contract-sheer',
    title: 'Contract Sheer Select',
    brand: 'Curated Asia',
    origin: 'Asia',
    material: 'Polyester Blend',
    priceBand: '$',
    usages: ['Curtains & Sheers', 'Commercial'],
    category: 'Fabrics',
    description: 'Cost-effective sheer developed for broad coverage projects that still need polish.',
    detailFocus: 'Light diffusion and repeatable project-friendly construction.',
    image: '/images/luxaura/vertical-sheer-pool.webp',
  },
  {
    id: 'asia-velvet',
    title: 'Project Velvet',
    brand: 'Curated Asia',
    origin: 'Asia',
    material: 'Velvet Blend',
    priceBand: '$$',
    usages: ['Upholstery', 'Curtains & Sheers'],
    category: 'Fabrics',
    description: 'A value-conscious velvet story for cushions, bedheads and statement drapery accents.',
    detailFocus: 'Directional pile creates a strong close-up visual read.',
    image: '/images/IMG-O4.webp',
  },
  {
    id: 'outdoor-weave',
    title: 'Outdoor Terrace Weave',
    brand: 'Curated Asia',
    origin: 'Asia',
    material: 'Solution Dyed Blend',
    priceBand: '$$',
    usages: ['Outdoor', 'Upholstery'],
    category: 'Fabrics',
    description: 'Project-ready performance textile for covered outdoor zones and durable soft furnishing.',
    detailFocus: 'Tight technical yarns suited to sun-exposed applications.',
    image: '/images/IMG-Hero.webp',
  },
  {
    id: 'trim-lace',
    title: 'Scallop Lace Edge',
    brand: 'LuxAura Accessories',
    origin: 'Global',
    material: 'Decorative Trim',
    priceBand: '$',
    usages: ['Curtains & Sheers'],
    category: 'Trimmings',
    description: 'An accessory reference for soft decorative edging and bespoke drapery finishes.',
    detailFocus: 'Fine edge detailing intended for high-resolution zoom review.',
    image: '/images/IMG-C.webp',
  },
  {
    id: 'trim-passementerie',
    title: 'Passementerie Border',
    brand: 'LuxAura Accessories',
    origin: 'Global',
    material: 'Braided Trim',
    priceBand: '$$',
    usages: ['Curtains & Sheers', 'Roman Blinds'],
    category: 'Trimmings',
    description: 'Decorative braid for luxury edging, leading edges and Roman blind border treatments.',
    detailFocus: 'Braided texture supports stitch-by-stitch inspection.',
    image: '/images/IMG-D.webp',
  },
  {
    id: 'rod-brass',
    title: 'Brushed Brass Rod Set',
    brand: 'LuxAura Accessories',
    origin: 'Global',
    material: 'Metal',
    priceBand: '$$',
    usages: ['Curtains & Sheers'],
    category: 'Rods',
    description: 'Warm metal hardware family for premium residential and boutique hospitality schemes.',
    detailFocus: 'Finish consistency and bracket detailing benefit from zoom review.',
    image: '/images/IMG-K.webp',
  },
  {
    id: 'rod-track',
    title: 'Architectural Track Profile',
    brand: 'LuxAura Accessories',
    origin: 'Global',
    material: 'Powdercoated Alloy',
    priceBand: '$$$',
    usages: ['Commercial', 'Curtains & Sheers'],
    category: 'Rods',
    description: 'Clean profile hardware for wave drapery and longer commercial spans.',
    detailFocus: 'Track geometry and hardware joins are visible at close range.',
    image: '/images/carousel/09-Curtain-Track.webp',
  },
];
