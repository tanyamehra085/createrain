import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './language/english/en.json';
import hindi from './language/hindi/hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: english },
      hi: { common: hindi }
    },
    fallbackLng: 'en',
    lng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    ns: ['common'],
    defaultNS: 'common'
  });

export default i18n;
