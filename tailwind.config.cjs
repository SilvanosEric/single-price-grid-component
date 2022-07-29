/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-cyan": "hsl(179, 62%, 43%)",
        "p-bright-yellow": "hsl(71, 73%, 54%)",
        "n-light-gray": "hsl(204, 43%, 93%)",
        "n-grayish-blue": "hsl(218, 22%, 67%)",
      },
      fontSize: {
        body: "16px",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
