/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "brand-primary": "hsl(30, 38%, 92%)",
        "brand-secondary": "hsl(158, 36%, 37%)",
        "brand-secondary-hover": "hsl(157.9,42.2%,17.6%)",
        "neutral-primary": "hsl(0, 0%, 100%)",
      },
      textColor: {
        "brand-primary": "hsl(158, 36%, 37%)",
        "neutral-primary": "hsl(228, 12%, 48%)",
        "neutral-secondary": "hsl(212, 21%, 14%)",
        "onbrand-primary": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        paragraph: "14px",
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        category: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        priceTag: ["Fraunces", "serif"],
      },
      fontWeightCustom: {
        regular: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
