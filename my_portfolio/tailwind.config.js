/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'PlayFair' : ['Playfair Display', 'serif'],
        'Dancing' : ['Dancing Script' , 'cursive'],
        'Indie' : ['Indie Flower', 'cursive']
      }
    },
  },
  plugins: [],
}

