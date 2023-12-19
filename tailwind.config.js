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
        tlight: "var(--color-tlight)",
        blue2: "var(--color-blue2)",
        yellow2: "var(--color-yellow2)",
        black2: "var(--color-black2)",
      }),
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1536px",
        xsMax: { max: "639.98px" },
        smMax: { max: "767.98px" },
        mdMax: { max: "991.98px" },
        lgMax: { max: "1279.98px" },
        xlMax: { max: "1535.98px" },
      },
    },
  },
  plugins: [],
};
