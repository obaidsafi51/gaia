/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        "fade-out": "fade-out 1.5s ease-in-out forwards",
        backgroundTransition: "backgroundTransition 3s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "50%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "100%",
          },
          "50%": {
            opacity: "50%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        backgroundTransition: {
          "0%": {
            background: "var(--primary-color)",
          },
          "100%": {
            background: "var(--background)",
          },
        },
      },
    },
  },
  plugins: [],
};
