import { createStore } from 'vuex'
import locale from '@/store/modules/locale'
import systemTheme from '@/store/modules/systemTheme'
import country from '@/store/modules/country'

const store = createStore({
  modules: {
    locale,
    systemTheme,
    country
  }
})
export default store
