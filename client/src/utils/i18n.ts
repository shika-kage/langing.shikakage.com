import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const defaultLangCode = 'en';
const availableTranslations = [
    'en',
    'ru'
];

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

i18n.use(initReactI18next).init({
    fallbackLng: defaultLangCode,
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: enTranslation
        },
        ru: {
            translation: ruTranslation
        }
    }
});

export {
    i18n,
    defaultLangCode,
    availableTranslations
};