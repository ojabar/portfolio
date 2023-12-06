/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: () => ({
        primary: "var(--color-primary)",
        "white-text": "var(--color-white-text)",
        dark: "var(--color-dark)",
        tdark: "var(--color-tdark)",
        blue2: "var(--color-blue2)",
      }),
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
    },
  },
  plugins: [],
};
