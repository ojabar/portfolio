// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: ["en", "fr"], 
    defaultLocale: "en",
  },
});
