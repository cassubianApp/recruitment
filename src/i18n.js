import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//langs
import Pl from "../langs/pl";
import En from "../langs/en";

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',

    resources: {
        en: {
          translation: En,
        },
        pl: {
          translation: Pl,
        },
      },

    debug: true,
    initImmediate: false,
    preload: ["en", "pl"],
    fallbackLng: "pl",
    lng: "pl"
  });

export default i18next;