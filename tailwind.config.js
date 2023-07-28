/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f00751", 
        secondary: "888888"
      },
      fontFamily: {
        lemonada: ['Lemonada', 'cursive'],
        comfortaa: ['Comfortaa', 'cursive']
      },
      screens: {
        
      },
      backgroundColor: {
        primary: "#f00751", 
      }
    },
  },
  plugins: [require("daisyui")],
}

