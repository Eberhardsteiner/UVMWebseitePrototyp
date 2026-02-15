/** @type {import('tailwindcss').Config} */
// Typography: use only Tailwind font-size scale (text-xs → text-9xl). Roles: caption=xs, secondary=sm, body=base, lead=lg, h4=xl, h3=2xl, h2=3xl md:4xl, h1=4xl md:5xl (hero + lg:6xl).
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4f6',
          100: '#b3dfe4',
          200: '#8acdd4',
          300: '#5ab5c0',
          400: '#3d9ba8',
          500: '#004D5F', // Rich teal (Culture) - Deeper, more saturated turquoise base
          600: '#003f4f',
          700: '#00313f',
          800: '#00232f',
          900: '#00151f',
        },
        secondary: {
          50: '#f0f5f7',
          100: '#d4e4ea',
          200: '#b8d3dd',
          300: '#9cc2d0',
          400: '#80b1c3',
          500: '#2D5A6B', // Teal-blue (Competences) - More vibrant secondary turquoise
          600: '#254b5a',
          700: '#1d3c49',
          800: '#152d38',
          900: '#0d1e27',
        },
        tertiary: {
          50: '#f0f8fa',
          100: '#d9ecf0',
          200: '#c2e0e6',
          300: '#a5d0d9',
          400: '#88c0cc',
          500: '#5FA3B5', // Soft turquoise (Strategy) - Lighter, fresher turquoise tone
          600: '#518a99',
          700: '#41717d',
          800: '#315861',
          900: '#213f45',
        },
        quaternary: {
          50: '#f0f7f9',
          100: '#d9e9ed',
          200: '#c2dbe1',
          300: '#a5c9d1',
          400: '#88b7c1',
          500: '#4A8FA0', // Medium teal (Conduct) - Balanced, modern mid-tone turquoise
          600: '#3f7a88',
          700: '#346570',
          800: '#295058',
          900: '#1e3b40',
        },
      },
    },
  },
  plugins: [],
};
