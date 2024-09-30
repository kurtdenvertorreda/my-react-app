module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensures unused styles are purged
  darkMode: false, // Set to 'media' or 'class' if needed
  theme: {
    extend: {}, // Extend the default theme here
  },
  variants: {
    extend: {}, // Extend variants if necessary
  },
  plugins: [], // Add Tailwind CSS plugins here
}
