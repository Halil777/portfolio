import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar section
      home: "Home",
      frontend: "Frontend developer",
      name: "H.Gayypov",
      about: "About",
      work: "Work",
      contact: "Contact",
      // Navbar section ends here ...
    },
  },
  ru: {
    translation: {
      // Navbar section starts here ...

      home: "Главная",
      frontend: "Фронтенд-разработчик",
      name: "Х.Гаипов",
      about: "Обо мне",
      work: "Работа",
      contact: "Контакт",

      // Navbar section ends here .....
    },
  },
  tm: {
    translation: {
      // Navbar section ends here .....

      home: "Baş sahypa",
      frontend: "Fontend Programmist",
      name: "H.Gaýypow",
      about: "Barada",
      work: "Işler",
      contact: "Habarlaşmak",

      // Navbar section ends here .....
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
