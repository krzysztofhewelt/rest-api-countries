import axios from 'axios'

const country = {
  namespaced: true,

  state: {
    loading: false,
    countries: []
  },

  mutations: {
    GET_COUNTRIES(state, countries) {
      state.countries = countries
    },

    SET_LOADING(state, loading) {
      state.loading = loading
    }
  },

  actions: {
    async getCountriesByName({ commit }, { searchString = '' }) {
      commit('SET_LOADING', true)

      await axios
        .get('https://restcountries.com/v3.1/translation/' + searchString)
        .then((response) => {
          commit('GET_COUNTRIES', response.data)
        })
        .catch(() => {
          commit('GET_COUNTRIES', [])
          commit('SET_LOADING', false)
        })

      commit('SET_LOADING', false)
    },

    async getCountryByCode({ commit }, { searchString = '' }) {
      commit('SET_LOADING', true)

      await axios
        .get('https://restcountries.com/v3.1/alpha/' + searchString)
        .then((response) => {
          commit('GET_COUNTRIES', response.data)
        })
        .catch(() => {
          commit('GET_COUNTRIES', [])
          commit('SET_LOADING', false)
        })

      commit('SET_LOADING', false)
    },

    async getAllCountries({ commit }) {
      commit('SET_LOADING', true)

      await axios
        .get('https://restcountries.com/v3.1/all')
        .then((response) => {
          commit('GET_COUNTRIES', response.data)
        })
        .catch(() => {
          commit('GET_COUNTRIES', [])
          commit('SET_LOADING', false)
        })

      commit('SET_LOADING', false)
    }
  },

  getters: {
    getCountriesByRegionAndNameAsc: (state) => (region) => {
      return (
        state.countries &&
        state.countries
          .filter((item) => item.region.toLowerCase().includes(region))
          .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      )
    },

    getCountryDetails(state) {
      return state.countries && state.countries[0]
    }
  }
}

export default country
