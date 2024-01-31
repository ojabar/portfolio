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
        black1: "#121212",
      }),
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        "josefin-slab": "var(--font-josefin-slab)",
        literata: "var(--font-literata)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1574px",
        xsMax: { max: "639.98px" },
        smMax: { max: "767.98px" },
        mdMax: { max: "991.98px" },
        lgMax: { max: "1279.98px" },
        xlMax: { max: "1573.98px" },
      },
    },
  },
  plugins: [],
};
