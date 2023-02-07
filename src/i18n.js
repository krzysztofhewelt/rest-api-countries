import { createI18n } from 'vue-i18n'
import eng from '@/locales/eng.json'
import pol from '@/locales/pol.json'
import store from '@/store'

const messages = {
  eng,
  pol
}

const i18n = createI18n({
  locale: store.state.locale.locale,
  fallbackLocale: 'eng',
  messages
})

export default i18n
