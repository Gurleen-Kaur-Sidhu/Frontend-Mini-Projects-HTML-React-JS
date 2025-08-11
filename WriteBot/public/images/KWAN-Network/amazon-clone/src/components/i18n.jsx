import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = ""; // Add ypur API key;
const loadPath = ``; // Add your loadpath;

i18next
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// The default language
		fallbackLng: "en",

		ns: ["default"],
		defaultNS: "default",

		// Tt shows the supported languages
		supportedLngs: ["en", "hi", "bn"],
		backend: {
			loadPath: loadPath,
		},
	});
