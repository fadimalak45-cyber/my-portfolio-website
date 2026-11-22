/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: 'var(--color-bg)',
          'bg-alt': 'var(--color-bg-alt)',
          card: 'var(--color-card)',
          border: 'var(--color-border)',
          'border-hover': 'var(--color-border-hover)',
          ink: 'var(--color-ink)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
        widest: '0.12em',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      maxWidth: {
        editorial: '1200px',
      },
    },
  },
  plugins: [],
};
