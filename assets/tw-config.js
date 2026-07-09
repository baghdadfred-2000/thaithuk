/* SHARED TAILWIND CONFIG - load on every page AFTER the Tailwind CDN script.
   Street-neon palette: dark by default, hot pink/amber/cyan accents. */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream:   '#EFE9DC',
        night:   '#0A0A0F',
        ink:     '#1A1A20',
        hot:     '#FF2E63',
        gold:    '#FFB020',
        golddeep:'#D97706',
        teal:    '#0DB4C4',
        emerald2:'#7CB518',
        surface: '#F5EFE2',
        slate: {
          100: '#ECECF1', 200: '#D9D9E0', 300: '#C4C4CE', 400: '#9C9CA8',
          500: '#6E6E7A', 600: '#3A3A46', 700: '#23232D', 800: '#14141B',
          900: '#0F0F15'
        }
      },
      fontFamily: {
        serif: ['Oswald', '"Arial Narrow"', 'sans-serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(0,0,0,.45)',
        lift: '0 12px 32px -8px rgba(0,0,0,.6)',
        neon: '0 0 18px -2px rgba(255,46,99,.55)'
      }
    }
  }
};
