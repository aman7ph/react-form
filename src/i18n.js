import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    returnObjects: true,
    whitelist: ['en', 'amh'], // add language codes that you want.
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      checkWhiteList: true,
    },
  });
i18n.changeLanguage('amh');
export default i18n;
