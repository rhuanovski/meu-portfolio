export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f3ff",
          100: "#ede8ff",
          200: "#dbd1ff",
          300: "#c0aaff",
          400: "#a07aff",
          500: "#7c4dff",
          600: "#6837f2",
          700: "#5329c2",
          800: "#43239a",
          900: "#391f7d",
        },
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
/*
      keyframes: {
        glow: {
          "0%, 100%": { opacity: .55, transform: "scale(1)" },
          "50%":      { opacity: .95, transform: "scale(1.03)" },
        },
      },
      animation: {
        glow: "glow 6s ease-in-out infinite",
      },
*/
    },
  },
  plugins: [],
};

