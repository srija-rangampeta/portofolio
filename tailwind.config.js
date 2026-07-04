/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        'neutral-background': '#0F172A',
        'neutral-surface': '#1E293B',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        'text-onPrimary': '#0F172A',
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Inter Tight', 'sans-serif'],
      },
      spacing: {
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '24px',
        full: '9999px',
      },
      boxShadow: {
        cta: '0 4px 20px rgba(99, 102, 241, 0.5)',
        card: '0 20px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
