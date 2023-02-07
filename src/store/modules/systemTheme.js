const systemTheme = {
  namespaced: true,

  state: {
    colorTheme: localStorage.getItem('colorTheme') || 'light'
  },

  mutations: {
    SWITCH_THEME(state) {
      if (state.colorTheme === 'light') state.colorTheme = 'dark'
      else state.colorTheme = 'light'

      localStorage.setItem('colorTheme', state.colorTheme)
    }
  },

  actions: {
    switchTheme({ commit, state }) {
      commit('SWITCH_THEME')

      if (state.colorTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}

export default systemTheme
