import { createI18n } from "vue-i18n/index";

const messages = {
  kz: {
    app_lang: "Қосымшаның тілі",
    russian: "Русский",
    kazakh: "Қазақша"
  },
  ru: {
    // profile page
    app_lang: "Язык приложения",
    russian: "Русский",
    kazakh: "Қазақша",

    // tourniquests page
    online: "Онлайн",
    offline: "Оффлайн",
    "not-connected": "Не подключен",
    "one-door": "Однодверный",
    "two-door": "Двухдверный",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  globalInjection: true,
  messages,
});

export default i18n;
