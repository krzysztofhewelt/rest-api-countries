const locale = {
  namespaced: true,

  state: {
    locale: localStorage.getItem('locale') || 'eng'
  },

  mutations: {
    SET_USER_LOCALE(state, locale) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },

  actions: {
    setUserLocale(context, locale) {
      context.commit('SET_USER_LOCALE', locale)
    }
  }
}

export default locale
