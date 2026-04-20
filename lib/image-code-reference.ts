import { getReplacementImageSrc } from '@/lib/image-replacements';
import { COLLECTION_ITEMS } from '@/lib/site-data';

export type ImageCodeReference = {
  code: string;
  page: string;
  pageHref: string;
  label: string;
  src: string;
  type?: 'image' | 'video';
};

const CATALOG_EXPLORER_REFERENCES: ImageCodeReference[] = COLLECTION_ITEMS.flatMap(item => {
  const baseCode = item.imageCodeBase ?? 'LXA-CAT-00';

  return [
    {
      code: `${baseCode}-CARD`,
      page: 'Catalog Explorer',
      pageHref: '/image-codes',
      label: `Library card image: ${item.title}`,
      src: item.image,
    },
    {
      code: `${baseCode}-DETAIL`,
      page: 'Catalog Explorer',
      pageHref: '/image-codes',
      label: `Zoom panel image: ${item.title}`,
      src: item.image,
    },
  ];
});

const BASE_IMAGE_CODE_REFERENCES: ImageCodeReference[] = [
  { code: 'LXA-HOME-01', page: 'Home', pageHref: '/', label: 'Hero image', src: '/image/hero.webp' },
  { code: 'LXA-HOME-02', page: 'Home', pageHref: '/', label: 'Capability tile: Fabric & Fabrication', src: '/image/01.webp' },
  { code: 'LXA-HOME-03', page: 'Home', pageHref: '/', label: 'Capability tile: Master Window Treatments', src: '/image/02.webp' },
  { code: 'LXA-HOME-04', page: 'Home', pageHref: '/', label: 'Capability tile: Bespoke Upholstery', src: '/image/03.webp' },
  { code: 'LXA-HOME-05', page: 'Home', pageHref: '/', label: 'Capability tile: Trimmings & Decorative Detail', src: '/image/04.webp' },
  { code: 'LXA-HOME-06', page: 'Home', pageHref: '/', label: 'Capability tile: Hardware & Motorisation', src: '/image/05.webp' },
  { code: 'LXA-HOME-07', page: 'Home', pageHref: '/', label: 'Capability tile: Project Support', src: '/image/06.webp' },
  { code: 'LXA-HOME-08', page: 'Home', pageHref: '/', label: 'Unified supply chain feature image', src: '/images/IMG-I.webp' },
  { code: 'LXA-HOME-09', page: 'Home', pageHref: '/', label: 'Flagship strength teaser: Roman Blinds', src: '/images/luxaura/roman-blind-lounge.webp' },
  { code: 'LXA-HOME-10', page: 'Home', pageHref: '/', label: 'Flagship strength teaser: Signature Linen', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-HOME-11', page: 'Home', pageHref: '/', label: 'Final CTA image', src: '/images/IMG-H.webp' },

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
  { code: 'LXA-COL-15', page: 'Fabric & Fabrication', pageHref: '/collections#signature-linen', label: 'Signature linen feature image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-COL-16', page: 'Fabric & Fabrication', pageHref: '/collections#signature-linen', label: 'Signature linen support image: Roman blind application', src: '/images/luxaura/roman-blind-lounge.webp' },
  { code: 'LXA-COL-17', page: 'Fabric & Fabrication', pageHref: '/collections#signature-linen', label: 'Signature linen support image: upholstery texture detail', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-COL-18', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Performance material direction feature image', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-COL-19', page: 'Fabric & Fabrication', pageHref: '/collections', label: 'Sunbrella outdoor fabric solutions feature image', src: '/images/IMG-Hero.webp' },

  { code: 'LXA-WIN-01', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Hero image', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-WIN-02', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: S Fold', src: '/images/luxaura/window-styles/s-fold.webp' },
  { code: 'LXA-WIN-03', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: Double Pinch Pleat', src: '/images/luxaura/window-styles/double-pinch-pleat.webp' },
  { code: 'LXA-WIN-04', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: Single Pleat', src: '/images/luxaura/window-styles/single-pleat.webp' },
  { code: 'LXA-WIN-05', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: Box Pleat', src: '/images/luxaura/window-styles/box-pleat.webp' },
  { code: 'LXA-WIN-06', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: Eyelet', src: '/images/luxaura/window-styles/eyelet.webp' },
  { code: 'LXA-WIN-07', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#curtain-styles', label: 'Curtain style: Pencil Pleat', src: '/images/luxaura/window-styles/pencil-pleat.webp' },
  { code: 'LXA-WIN-08', page: 'Window Treatments', pageHref: '/custom-curtains-sheers', label: 'Master craft and finishing feature image', src: '/images/IMG-C.webp' },
  { code: 'LXA-WIN-09', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#motorised-curtain-systems', label: 'Motorised curtain systems motion clip', src: '/videos/motorisation-demo.mp4', type: 'video' },
  { code: 'LXA-WIN-10', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#motorised-curtain-systems', label: 'Motorised curtain system still image', src: '/images/IMG-I.webp' },
  { code: 'LXA-WIN-11', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#motorised-curtain-systems', label: 'Motorised and layered window application support image', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-WIN-12', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#roman-blinds', label: 'Roman blind specialist feature image', src: '/images/luxaura/roman-blind-lounge.webp' },
  { code: 'LXA-WIN-23', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#roman-blinds', label: 'Roman blind application image: flat Roman blind installation', src: '/images/luxaura/roman-blind-lounge.webp' },
  { code: 'LXA-WIN-13', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#roman-blinds', label: 'Roman blind detail image: linen fold and stack detail', src: '/images/luxaura/roman-blind-lounge.webp' },
  { code: 'LXA-WIN-14', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#roman-blinds', label: 'Roman blind support image: linen material direction', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-WIN-15', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: concealed ceiling track', src: '/images/luxaura/window-track/concealed-ceiling-track.webp' },
  { code: 'LXA-WIN-16', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: wall-mounted system', src: '/images/luxaura/window-track/wall-mounted-system.webp' },
  { code: 'LXA-WIN-17', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: double track installation', src: '/images/luxaura/window-track/double-track-system.webp' },
  { code: 'LXA-WIN-18', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: curved and custom condition', src: '/images/luxaura/window-track/curved-custom-track.webp' },
  { code: 'LXA-WIN-19', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: hardware detail close-up', src: '/images/luxaura/window-track/track-detail.webp' },
  { code: 'LXA-WIN-20', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#hardware-motorisation', label: 'Track systems image: installed curtain application', src: '/images/luxaura/window-track/installed-track-with-curtain.webp' },
  { code: 'LXA-WIN-21', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#performance-function', label: 'Performance and function feature image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-WIN-22', page: 'Window Treatments', pageHref: '/custom-curtains-sheers#designed-for-large-windows', label: 'Large windows feature image', src: '/images/luxaura/window-styles/large-windows.webp' },

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
  { code: 'LXA-UPH-14', page: 'Bespoke Upholstery', pageHref: '/cushions-soft-furnishings', label: 'Indoor upholstery support image: residential seating direction', src: '/images/IMG-J.webp' },

  { code: 'LXA-DTR-01', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Hero image', src: '/images/IMG-B.webp' },
  { code: 'LXA-DTR-02', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection feature image', src: '/images/IMG-B.webp' },
  { code: 'LXA-DTR-03', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection border detail', src: '/images/IMG-D.webp' },
  { code: 'LXA-DTR-04', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection tassel detail', src: '/images/IMG-C.webp' },
  { code: 'LXA-DTR-05', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection upholstery trim detail', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-DTR-06', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection tailored trim detail', src: '/images/IMG-H.webp' },
  { code: 'LXA-DTR-07', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Latest collection soft detail close-up', src: '/images/IMG-J.webp' },
  { code: 'LXA-DTR-08', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Application image: On Drapery', src: '/images/IMG-B.webp' },
  { code: 'LXA-DTR-09', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Application image: On Upholstery', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-DTR-10', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Application image: On Cushions & Bedding', src: '/images/IMG-D.webp' },
  { code: 'LXA-DTR-11', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Application image: On Feature Pieces', src: '/images/IMG-C.webp' },
  { code: 'LXA-DTR-12', page: 'Trimmings', pageHref: '/decorative-trimmings', label: 'Creative development feature image', src: '/images/IMG-H.webp' },

  { code: 'LXA-ABOUT-01', page: 'About', pageHref: '/about', label: 'Hero image', src: '/images/about-hero.webp' },
  { code: 'LXA-PS-01', page: 'Project Support', pageHref: '/project-support', label: 'Hero image', src: '/images/IMG-I.webp' },
  { code: 'LXA-PS-02', page: 'Project Support', pageHref: '/project-support', label: 'Client pathway image: Designers, Builders & Developers', src: '/images/IMG-I.webp' },
  { code: 'LXA-PS-03', page: 'Project Support', pageHref: '/project-support', label: 'Client pathway image: Stylists', src: '/images/luxaura/upholstery-pillows.webp' },
  { code: 'LXA-PS-04', page: 'Project Support', pageHref: '/project-support', label: 'Client pathway image: Hospitality and commercial spaces', src: '/images/IMG-K.webp' },
  { code: 'LXA-PS-05', page: 'Project Support', pageHref: '/project-support', label: 'Hospitality feature image', src: '/images/IMG-K.webp' },
  { code: 'LXA-PS-06', page: 'Project Support', pageHref: '/project-support', label: 'Support editorial image: Material direction and scheme review', src: '/images/about-hero.webp' },
  { code: 'LXA-PS-07', page: 'Project Support', pageHref: '/project-support', label: 'Support editorial image: Specification clarity and project alignment', src: '/images/luxaura/hero-project.webp' },
  { code: 'LXA-PS-12', page: 'Project Support', pageHref: '/project-support', label: 'Client pathway image: Retailers and brand partners', src: '/images/IMG-B.webp' },
  { code: 'LXA-PS-13', page: 'Project Support', pageHref: '/project-support', label: 'Client pathway image: Hospitality and short-stay operators', src: '/images/IMG-K.webp' },
  { code: 'LXA-PS-14', page: 'Project Support', pageHref: '/project-support', label: 'Support editorial image: procurement and delivery coordination', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-TRADE-01', page: 'Trade Account', pageHref: '/trade-projects', label: 'Hero image', src: '/images/luxaura/vertical-sheer-pool.webp' },
  { code: 'LXA-PRIVACY-01', page: 'Privacy Policy', pageHref: '/privacy', label: 'Hero image', src: '/images/luxaura/beach-sheer.webp' },
  { code: 'LXA-TERMS-01', page: 'Terms of Service', pageHref: '/terms', label: 'Hero image', src: '/images/luxaura/hero-project.webp' },
  ...CATALOG_EXPLORER_REFERENCES,
];

export const IMAGE_CODE_REFERENCES: ImageCodeReference[] = BASE_IMAGE_CODE_REFERENCES.map(item =>
  item.type === 'video'
    ? item
    : {
        ...item,
        src: getReplacementImageSrc(item.code, item.src),
      }
);

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
