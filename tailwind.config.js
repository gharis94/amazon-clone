/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        amazonblue:{
          light:'#232F3E',
          dark:'#131921'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ], 
}
