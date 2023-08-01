/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {'min':'360px', 'max':'600px'},
      // => @media (min-width: phone max 428) {...}
      'tablet': {'min':'768px', 'max':'820px'},
      // => @media (min-width: tablet) { ... }
      'laptop': {'min':'1024px','max':'1900px'},
      // => @media (min-width: laptop & desktop) { ... }
    },
    extend: {},
  },
  plugins: [],
}
