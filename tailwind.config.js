module.exports = {
  purge: ['./src/App.js', './src/component/Footer.js', './src/component/NavBar2.js' , './src/pages/Home.js' , './src/component/Project.js', './src/component/Skill.js'],
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
