export type ImageCodeReference = {
  code: string;
  page: string;
  pageHref: string;
  label: string;
  src: string;
  type?: 'image' | 'video';
};

export const IMAGE_CODE_REFERENCES: ImageCodeReference[] = [
  { code: 'LXA-HOME-01', page: 'Home', pageHref: '/', label: 'Hero image', src: '/image/hero.webp' },
  { code: 'LXA-HOME-02', page: 'Home', pageHref: '/', label: 'Capability tile: Fabric & Fabrication', src: '/image/01.webp' },
  { code: 'LXA-HOME-03', page: 'Home', pageHref: '/', label: 'Capability tile: Master Window Treatments', src: '/image/02.webp' },
  { code: 'LXA-HOME-04', page: 'Home', pageHref: '/', label: 'Capability tile: Bespoke Upholstery', src: '/image/03.webp' },
  { code: 'LXA-HOME-05', page: 'Home', pageHref: '/', label: 'Capability tile: Hardware & Artisanal Trimmings', src: '/image/04.webp' },
  { code: 'LXA-HOME-06', page: 'Home', pageHref: '/', label: 'Capability tile: Unified Supply Chain', src: '/image/05.webp' },
  { code: 'LXA-HOME-07', page: 'Home', pageHref: '/', label: 'Capability tile: Partner Excellence', src: '/image/06.webp' },
  { code: 'LXA-HOME-08', page: 'Home', pageHref: '/', label: 'Performance feature image', src: '/images/IMG-K.webp' },
  { code: 'LXA-HOME-09', page: 'Home', pageHref: '/', label: 'Final CTA image', src: '/images/IMG-H.webp' },

  { code: 'LXA-COL-01', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Hero image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-COL-02', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Introduction feature image', src: '/images/IMG-H.webp' },
  { code: 'LXA-COL-03', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: LuxAura Signature Series', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-COL-04', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: British Decorative Textiles', src: '/images/IMG-C.webp' },
  { code: 'LXA-COL-05', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: Pet-Friendly Upholstery Fabrics', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-COL-06', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: French Linen & Linen Blends', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-COL-07', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: Outdoor & Performance Fabrics', src: '/images/IMG-H.webp' },
  { code: 'LXA-COL-08', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Material direction: Commercial Value Directions', src: '/images/IMG-I.webp' },
  { code: 'LXA-COL-09', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Curtains & Sheers', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-COL-10', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Bespoke Cushions', src: '/images/IMG-D.webp' },
  { code: 'LXA-COL-11', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Upholstery & Slipcovers', src: '/images/IMG-G.webp' },
  { code: 'LXA-COL-12', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Ottomans & Bench Seats', src: '/images/IMG-J.webp' },
  { code: 'LXA-COL-13', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Table Linens & Soft Dining Pieces', src: '/images/IMG-K.webp' },
  { code: 'LXA-COL-14', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Made application: Specialty Textile Pieces', src: '/images/IMG-Hero.webp' },

  { code: 'LXA-WIN-01', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Hero image', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-WIN-02', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: S-Fold Systems', src: '/images/luxaura/vertical-sheer-pool.webp' },
  { code: 'LXA-WIN-03', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Pinch Pleat', src: '/images/IMG-F.webp' },
  { code: 'LXA-WIN-04', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Double Pinch Pleat', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-WIN-05', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Box Pleat', src: '/images/curtains-hero.webp' },
  { code: 'LXA-WIN-06', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Goblet & Decorative Pleat', src: '/images/IMG-C.webp' },
  { code: 'LXA-WIN-07', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Eyelet & Pole-Led Treatments', src: '/images/IMG-G.webp' },
  { code: 'LXA-WIN-08', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Tailored style: Layered Sheer + Drape Systems', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-WIN-09', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Garment-level craft feature image', src: '/images/IMG-C.webp' },
  { code: 'LXA-WIN-10', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Motorisation motion clip', src: '/videos/motorisation-demo.mp4', type: 'video' },
  { code: 'LXA-WIN-11', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Motorisation still image', src: '/images/IMG-I.webp' },

  { code: 'LXA-UPH-01', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Hero image', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-UPH-02', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Indoor Sofas & Sectionals', src: '/images/IMG-J.webp' },
  { code: 'LXA-UPH-03', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Bench & Banquette Seating', src: '/images/IMG-K.webp' },
  { code: 'LXA-UPH-04', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Loose Covers & Protective Layers', src: '/images/IMG-A.webp' },
  { code: 'LXA-UPH-05', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Outdoor Cushions & Alfresco Seating', src: '/images/IMG-Hero.webp' },
  { code: 'LXA-UPH-06', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Ottomans & Soft Forms', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-UPH-07', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Application: Cushions & Decorative Layers', src: '/images/IMG-D.webp' },
  { code: 'LXA-UPH-08', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Outdoor upholstery feature image', src: '/images/IMG-Hero.webp' },
  { code: 'LXA-UPH-09', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Sunbrella feature image', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-UPH-10', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Pet-friendly upholstery feature image', src: '/images/IMG-J.webp' },

  { code: 'LXA-TRM-01', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hero image', src: '/images/IMG-G.webp' },
  { code: 'LXA-TRM-02', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Architectural track systems', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-TRM-03', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Decorative poles and finials', src: '/images/IMG-G.webp' },
  { code: 'LXA-TRM-04', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Concealed track planning', src: '/images/IMG-I.webp' },
  { code: 'LXA-TRM-05', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Wide-opening and feature-window support', src: '/images/IMG-C.webp' },
  { code: 'LXA-TRM-06', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Bracket and support detail', src: '/images/IMG-F.webp' },
  { code: 'LXA-TRM-07', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Hardware gallery: Installed hardware resolution', src: '/images/luxaura/vertical-sheer-pool.webp' },
  { code: 'LXA-TRM-08', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Motorisation motion clip', src: '/videos/motorisation-demo.mp4', type: 'video' },
  { code: 'LXA-TRM-09', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Motorisation still image', src: '/images/IMG-I.webp' },
  { code: 'LXA-TRM-10', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Trimmings feature image', src: '/images/IMG-B.webp' },
  { code: 'LXA-TRM-11', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Trimming gallery: Braids and borders', src: '/images/IMG-B.webp' },
  { code: 'LXA-TRM-12', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Trimming gallery: Tassels and tiebacks', src: '/images/IMG-C.webp' },
  { code: 'LXA-TRM-13', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Trimming gallery: Contrast edge detailing', src: '/images/IMG-D.webp' },
  { code: 'LXA-TRM-14', page: 'Hardware & Trimmings', pageHref: '/trimmings', label: 'Trimming gallery: Soft furnishing trim carry-through', src: '/images/luxaura/upholstery-pillows.webp' },

  { code: 'LXA-ABOUT-01', page: 'About', pageHref: '/about', label: 'Hero image', src: '/images/about-hero.webp' },
  { code: 'LXA-CONTACT-01', page: 'Contact', pageHref: '/contact', label: 'Hero image', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-QUOTE-01', page: 'Project Brief', pageHref: '/quote', label: 'Hero image', src: '/images/IMG-I.webp' },
  { code: 'LXA-TRADE-01', page: 'Trade Portal Access', pageHref: '/trade-projects', label: 'Hero image', src: '/images/luxaura/vertical-sheer-pool.webp' },
  { code: 'LXA-FAQ-01', page: 'FAQ', pageHref: '/faq', label: 'Hero image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-PRIVACY-01', page: 'Privacy Policy', pageHref: '/privacy', label: 'Hero image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-TERMS-01', page: 'Terms of Service', pageHref: '/terms', label: 'Hero image', src: '/images/luxaura/hero-project.webp' },
];

export const IMAGE_CODE_GROUPS = Array.from(
  IMAGE_CODE_REFERENCES.reduce((map, item) => {
    const group = map.get(item.page) ?? [];
    group.push(item);
    map.set(item.page, group);
    return map;
  }, new Map<string, ImageCodeReference[]>())
).map(([page, items]) => ({
  page,
  pageHref: items[0]?.pageHref ?? '/',
  items,
}));
