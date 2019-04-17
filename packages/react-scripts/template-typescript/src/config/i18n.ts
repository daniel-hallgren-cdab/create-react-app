import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LngDetector from 'i18next-browser-languagedetector'

// English
import en_common from '../i18n/en/common.json'
import en_error from '../i18n/en/error.json'
import en_start from '../i18n/en/start.json'

// Swedish
import sv_common from '../i18n/sv/common.json'
import sv_error from '../i18n/sv/error.json'
import sv_start from '../i18n/sv/start.json'

const options = {
  // order and from where user language should be detected
  order: ['localStorage', 'navigator', 'htmlTag'],

  // keys or params to lookup language from
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage'],

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
}

i18next
  .use(LngDetector)
  .use(initReactI18next)
  .init(
  {
    debug: process.env.REACT_APP_I18NEXT_DEBUG === 'true',

    fallbackLng: ['sv', 'en'],
    lng: 'sv',

    interpolation: { escapeValue: false },
    defaultNS: 'common',
    detection: options,

    resources: {
      en: {
        common: en_common,
        error: en_error,
        start: en_start,
      },
      sv: {
        common: sv_common,
        error: sv_error,
        start: sv_start,
      },
    },
    react: {
      wait: true,
    },
  },
  (err) => {
    if (err) return console.log('Something went wrong loading the translations', err)
  }
)

export const instance = i18next
export default i18next
