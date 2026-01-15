export default {
  plugins: {
    'postcss-import': {
      filter: (path) => {
        // Ignore JavaScript files
        return !path.endsWith('.js') && !path.includes('tailwindcss/lib');
      }
    },
    tailwindcss: {},
    autoprefixer: {},
  }
}