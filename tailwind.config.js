/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral-white" :"hsl(160, 5%, 78%)",
        "primary-light-green" :"hsl(145, 62%, 42%)",
        "bg-dark-blue" :"hsl(210, 82%, 4%)",
        "primary-light-blue" :"hsl(189, 58%, 53%)",
        "neutral-light-blue" :"hsl(217, 92%, 42%)",
        "primary-dark-green" :"hsl(185, 96%, 19%)",
        "neutral-dark-green" :"hsl(180, 64%, 2%)",
      },
    },
  },
  plugins: [],
}
