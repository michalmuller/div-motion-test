module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}', './atoms/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1160px',
        '2xl': '1160px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1240px',
      '2xl': '1560px',
    },
    extend: {
      fontSize:{
        '6xl': '3.5rem',
        '4.5xl': '2.75rem',
        '3xl': '1.75rem'
      },
      colors:{
        blue:{
          900: '#191626',
          700: '#2A263F'
        },
        brand:{
          purple: '#8C74EB',
          blue: '#5F77E9',
          turquoise: '#4994E9'
        },
        gray:{
          50: '#F9F8FB', 
          100: '#F4F3F6',
          500: '#BEBBC8',
          700: '#464450'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
