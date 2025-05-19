/* eslint-disable eol-last */
// import * as Localization from "expo-localization"
import en from './locales/en.json';
import vi from './locales/vi.json';
import i18n from 'i18next';


i18n.init({
	resources: {
		en: { translation: en },
		vi: { translation: vi },
	},
	fallbackLng: 'vi', // Default language if translation not found
	interpolation: {
		escapeValue: false, // React already protects against XSS
	},
});

export default i18n;