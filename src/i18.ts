import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './language/english/en.json';
import spanish from './language/spanish/sp.json';
import china from './language/china/ch.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: english },
      es: { common: spanish },
      zh:{common:china}
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
