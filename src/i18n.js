import i18n from "i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import translationEs from "../public/locales/es/translation.json"
import translationEn from "../public/locales/en/translation.json"

const resources = {
    en: {
        translation: translationEn
    },
    es: {
        translation: translationEs
    }
}

i18n
    .use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLang: 'es',
        debug: true,
        interporlation: {
            escapeValue: false,
        },
    });

export default i18n;