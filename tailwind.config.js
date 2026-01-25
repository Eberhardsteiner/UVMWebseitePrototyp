/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6e9eb',
          100: '#b3bcc2',
          200: '#8a98a1',
          300: '#576b78',
          400: '#3d4f5c',
          500: '#001B2C', // Darkest navy blue (Culture) - Very dark
          600: '#001825',
          700: '#00141e',
          800: '#001017',
          900: '#000c11',
        },
        secondary: {
          50: '#f0f2f3',
          100: '#d4d9dc',
          200: '#b8c0c5',
          300: '#9ca7ae',
          400: '#808e97',
          500: '#3C4449', // Dark gray-blue (Competences) - Dark-medium
          600: '#2d3748',
          700: '#1a202c',
          800: '#171923',
          900: '#0f1117',
        },
        tertiary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#b8c2d1',
          500: '#8590A0', // Light blue-gray (Strategy) - Light (slightly darkened for contrast)
          600: '#94a3b8',
          700: '#718096',
          800: '#4a5568',
          900: '#2d3748',
        },
        quaternary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#6B7F95', // Medium blue-gray (Conduct) - Medium
          600: '#5b7282',
          700: '#486581',
          800: '#334e68',
          900: '#243b53',
        },
      },
    },
  },
  plugins: [],
};
