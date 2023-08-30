/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components"],
  theme: {
    extend: {
      colors:{
        'background':'#1e293b'

      },
      fontFamily:{
        Roboto:['Roboto, sans-serif']
      },
      container:{
        center:true
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

