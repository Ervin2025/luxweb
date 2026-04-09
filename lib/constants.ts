export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luxaura.com.au',
  name: 'LuxAura',
  description:
    'Sydney-based, design-aware soft-furnishing and project-support partner for sourcing, fabrication and coordinated delivery.',
} as const;

export const CONTACT_INFO = {
  phone: '0450 871 699',
  internationalPhone: '+61450871699',
  email: 'service@luxaura.com.au',
  address: {
    line1: '4 Wilfred Avenue',
    city: 'Chatswood',
    region: 'NSW',
    country: 'Australia',
    display: '4 Wilfred Avenue, Chatswood NSW',
  },
  hours: 'Trade support by appointment',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/LuxAuraLiving/',
  instagram: 'https://www.instagram.com/qiu.louis/',
  whatsapp:
    'https://wa.me/61450871699?text=Hello%20LuxAura%2C%20I%20need%20trade%20support%20for%20a%20fabric%20or%20fabrication%20project.',
} as const;
