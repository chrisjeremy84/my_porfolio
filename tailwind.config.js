module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],  
    roboto: ['Roboto Slab', 'serif']
  },
  variants: {
    extend: {
      boxSizing: ['hover', 'focus'],
  
    },
  
  },
  plugins: [],
}
