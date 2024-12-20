/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'display': ['Clash Display', 'sans-serif'],
      },
      colors: {
        'midnight': '#0F172A',
        'cosmic': '#1E293B',
        'stardust': 'rgba(255, 255, 255, 0.03)',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(to right, #4F46E5, #7C3AED)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        'gradient-success': 'linear-gradient(to right, #10B981, #14B8A6)',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
}
