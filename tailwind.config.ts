import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom theme colors for light mode
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f8fafc',
          text: '#1f2937',
          'text-secondary': '#6b7280',
          border: '#e5e7eb',
        },
        // Enhanced dark mode colors
        dark: {
          bg: '#111827',
          'bg-secondary': '#1f2937',
          text: '#f9fafb',
          'text-secondary': '#d1d5db',
          border: '#374151',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
