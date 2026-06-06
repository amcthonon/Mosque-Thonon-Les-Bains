/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🔵 Bleu principal #346D9B
        primary: {
          50:  '#eaf1f7',
          100: '#c5d8e6',
          200: '#9fbed4',
          300: '#79a4c2',
          400: '#538bb0',
          500: '#346D9B',
          600: '#2b5b80',
          700: '#224866',
          800: '#19364d',
          900: '#102433',
        },
        // 🔷 Bleu foncé #115581 (remplace "gold" = accents/titres/CTA)
        gold: {
          50:  '#e7eef4',
          100: '#bccfde',
          200: '#90b0c8',
          300: '#6491b2',
          400: '#38729c',
          500: '#115581',
          600: '#0e466b',
          700: '#0b3754',
          800: '#08283d',
          900: '#051926',
        },
        // 🟦 Bleu-gris #628896 (remplace "terracotta")
        terracotta: {
          50:  '#eef2f4',
          100: '#ced8dd',
          200: '#aebec6',
          300: '#8ea4af',
          400: '#6e8a98',
          500: '#628896',
          600: '#4f6e7a',
          700: '#3c545e',
          800: '#293a41',
          900: '#162025',
        },
        // 🌊 Bleu clair #53A1BD (remplace "emerald")
        emerald: {
          50:  '#ecf5f8',
          100: '#c8e2eb',
          200: '#a4cfde',
          300: '#80bcd1',
          400: '#5ca9c4',
          500: '#53A1BD',
          600: '#42869e',
          700: '#326b7f',
          800: '#225060',
          900: '#113541',
        },
        ivory:    '#FBFEFE',
        cream:    '#FFFDF4',
        dark:     '#000000',
        midnight: '#115581',
        // Bonus utiles
        sand:     '#E4EDE8',
        steel:    '#9EAAB2',
        mist:     '#BEC1C6',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      backgroundImage: {
        // 🎨 Motifs en bleu #346D9B au lieu d'or
        'geometric-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23346D9B' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'star-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23346D9B' fill-opacity='0.06'%3E%3Cpath d='M40 0l6.32 17.32L64.64 15.36 52.68 33.68 70 40l-17.32 6.32 1.96 18.32L40 52.68 25.36 64.64l1.96-18.32L10 40l17.32-6.32L25.36 15.36l18.32 1.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          // 💡 Glow en bleu maintenant
          '0%, 100%': { boxShadow: '0 0 5px rgba(52, 109, 155, 0.3)' },
          '50%':      { boxShadow: '0 0 20px rgba(52, 109, 155, 0.6)' },
        },
      },
      borderRadius: {
        'arch': '50% 50% 0 0',
      },
    },
  },
  plugins: [],
}
