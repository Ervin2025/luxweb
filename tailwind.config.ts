import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A32',
          dark: '#162C25',
        },
        neutral: {
          50: '#F7F2E8',
          100: '#E7DDCB',
          800: '#2D2A26',
          900: '#171816',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
