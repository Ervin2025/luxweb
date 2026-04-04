export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luxaura.com.au',
  name: 'LuxAura',
  description:
    'Australian family-owned wholesale supplier for designers, retailers, project teams and commercial clients, combining global fabric sourcing, integrated fabrication and efficient delivery.',
} as const;

export const CONTACT_INFO = {
  phone: '0450 871 699',
  email: 'service@luxaura.com.au',
  address: {
    city: 'Sydney',
    region: 'NSW',
    country: 'Australia',
  },
  hours: 'Trade consultations by appointment',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/LuxAuraLiving/',
  instagram: 'https://www.instagram.com/qiu.louis/',
  whatsapp:
    'https://wa.me/61450871699?text=Hello%20LuxAura%2C%20I%20need%20trade%20support%20for%20a%20fabric%20or%20fabrication%20project.',
} as const;
