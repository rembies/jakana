/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        92: "23rem",       
        100: "25rem",     
        112: "28rem",      
        122: "31rem",
        132: "34rem",
        142: "37rem",
        152: "40rem",
        162: "43rem",
        172: "46rem",
      },
    },
  },
  plugins: [],
};
