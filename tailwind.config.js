/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: ['./*.html'], 
  content: [
    "./node_modules/flowbite/**/*.js"
],
  theme: {
  screens:{
      cp: '320px',    
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl:'1536px',
    },
    extend: {},
      colors:{},

      fontFamily:{
        sans: ["Euclid Circular"]
      },
    }
  
  }
 


