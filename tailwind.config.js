module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
        black: '#222',
        light: '#F7F8F9',
        grey: '#A3A5AB',
        accent: '#FF3E00',
        primary: '#3498DB',
        success: '#27AE60',
    }
},
  plugins: [],
}
