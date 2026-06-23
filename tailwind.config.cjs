module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ECE1CD',
        primary: '#E5AD66',
        secondary: '#90552B',
        accent: '#75713C',
        heading: '#5A401E',
        surface: '#F6E5D7',
        muted: '#7A6E4B'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
