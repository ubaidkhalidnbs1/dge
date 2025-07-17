import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE } from '@/constants/language';

import en from './locales/en.json';
import ar from './locales/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGE.EN]: { translation: en },
    [LANGUAGE.AR]: { translation: ar },
  },
  lng: LANGUAGE.EN,
  fallbackLng: LANGUAGE.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
