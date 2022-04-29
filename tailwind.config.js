module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1240px',
      },
      fontSize:{
        '6xl': '3.5rem',
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
          700: '#39364A'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
