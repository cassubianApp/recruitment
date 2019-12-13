import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',

    resources: {
        en: {
          translation: {
            hello: 'Hello.',
            home: 'Home',
            profile: 'Profile',
            messages: 'Messages',
            editProfile: 'Edit Profile',
            name: 'Name',
            surname: 'Surname',
            save: 'save',
            saveUserAlert: 'user was saved',
          },
        },
        pl: {
          translation: {
            hello: 'Witaj.',
            home: 'Ekran startowy',
            profile: 'Profil',
            messages: 'Wiadomości',
            editProfile: 'Edytuj Profil',
            name: 'Imię',
            surname: 'Nazwisko',
            save: 'zapisz',
            saveUserAlert: 'uzytkownik został zapisany',
          },
        },
      },

    debug: true,
    initImmediate: false,
    preload: ["en", "pl"],
    fallbackLng: "pl",
    lng: "pl"
  });

export default i18next;