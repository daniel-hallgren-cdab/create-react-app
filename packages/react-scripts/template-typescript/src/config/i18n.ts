// import * as i18n from 'i18next'
import { default as i18n } from 'i18next'
import { default as LngDetector } from 'i18next-browser-languagedetector'

// English
import en_common from '../i18n/en/common.json'

// Swedish
import sv_common from '../i18n/sv/common.json'

const options: i18n.DetectionPluginOptions = {
  // order and from where user language should be detected
  order: ['localStorage', 'navigator', 'htmlTag'],

  // keys or params to lookup language from
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage'],

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
}

const instance = i18n.use(LngDetector).init(
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
  (err, t) => {
    if (err) return console.log('something went wrong loading', err)
    t('key')
  }
)

export default instance
