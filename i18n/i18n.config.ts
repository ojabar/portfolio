import fr from "./fr.js";
import en from "./en.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    fr,
  },
}));
