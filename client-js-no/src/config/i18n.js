import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "hu",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: function (value, format, lng) {
        if (value instanceof Date) {
          const res = value.toLocaleDateString(lng, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });

          return res;
        }
        return value;
      },
    },
    load: "languageOnly",
    whitelist: ["hu", "en"],
    nonExplicitWhitelist: true,
    detection: { checkWhitelist: true },
  });

const language =
  window?.navigator?.userLanguage?.substr(0, 2).toLowerCase() ||
  window?.navigator?.language?.substr(0, 2).toLowerCase() ||
  process?.env?.REACT_APP_DEFAULT_LANG ||
  "hu";

i18n.changeLanguage(language);

export default i18n;
