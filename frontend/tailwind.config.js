/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFF9F2", // warm light background
          primary: "#FFCC66", // playful amber (Snapchat-like warmth)
          secondary: "#F6A6B2", // soft pink accent
          accent: "#7DD3FC", // sky accent
          ink: "#1F2937", // slate-800 for text
        }
      },
      boxShadow: {
        warm: "0 10px 25px -10px rgba(255, 204, 102, 0.45)",
      },
      fontFamily: {
        display: ["ui-rounded", "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
