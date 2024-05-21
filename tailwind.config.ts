import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [
          '40px',
          {
            letterSpacing: '-0.02em',
            fontWeight: 700,
          },
        ],
        h2: [
          '30px',
          {
            letterSpacing: '-0.02em',
            fontWeight: 700,
          },
        ],
        h3: [
          '24px',
          {
            letterSpacing: '-0.02em',
            fontWeight: 700,
          },
        ],
        subtitle: [
          '24px',
          {
            fontWeight: 500,
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '1.4em',
            fontWeight: 500,
          },
        ],
        bold: [
          '16px',
          {
            fontWeight: 700,
          },
        ],
        small: [
          '14px',
          {
            lineHeight: '1.4em',
            fontWeight: 500,
          },
        ],
        pretitle: [
          '12px',
          {
            fontWeight: 700,
            letterSpacing: '0.03em',
          },
        ],
        button: [
          '16px',
          {
            letterSpacing: '0.04em',
            fontWeight: 700,
          },
        ],
        link: [
          '16px',
          {
            fontWeight: 700,
          },
        ],
      },
      colors: {
        primary: {
          100: '#ED4B9E',
          75: '#ED4B9EBF',
          50: '#ED4B9E80',
          25: '#ED4B9E40',
        },
        secondary: {
          100: '#4B4DED',
          75: '#4B4DEDBF',
          50: '#4B4DED80',
          25: '#4B4DED40',
        },
        dark: {
          100: '#0E0E2C',
          75: '#0E0E2CBF',
          50: '#0E0E2C80',
          25: '#0E0E2C40',
        },
        success: {
          100: '#31D0AA',
          75: '#31D0AABF',
          50: '#31D0AA80',
          25: '#31D0AA40',
        },
        slate: '#4A4A68',
        lightslate: '#8C8CA1',
        accent: '#ECF1F4',
        light: '#FAFCFE',
      },
    },
  },
  plugins: [],
};
export default config;
