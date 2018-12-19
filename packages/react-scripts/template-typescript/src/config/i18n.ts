import i18next from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import { default as LngDetector, DetectorOptions } from 'i18next-browser-languagedetector'

// English
import en_common from '../i18n/en/common.json'

// Swedish
import sv_common from '../i18n/sv/common.json'

const options: DetectorOptions = {
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
  .use(reactI18nextModule)
  .use(LngDetector)
  .init(
  {
    interpolation: { escapeValue: false },
    fallbackLng: ['en', 'sv'],
    debug: true,
    defaultNS: 'common',
    detection: options,
    resources: {
      en: {
        common: en_common,
      },
      sv: {
        common: sv_common,
      },
    },
    react: {
      wait: true,
    },
  },
  (err) => {
    if (err) return console.log('something went wrong loading', err)
  }
)

export const instance = i18next
export default i18next
