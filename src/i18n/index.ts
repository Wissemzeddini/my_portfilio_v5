import { createI18n } from 'vue-i18n';
import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';

const messages = {
  en,
  fr,
  ar
};

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale
  messages
});

export default i18n;
