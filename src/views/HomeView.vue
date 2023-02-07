<template>
  <div class="mb-5 flex flex-col justify-between gap-4 md:flex-row">
    <SearchInput v-model="searchInput" @input="searchCountries" />
    <BaseDropdown>
      <template #selected-item>{{ getRegionTranslation() }}</template>
      <template #default>
        <BaseDropdownItem
          @click="changeFilter(region)"
          v-for="(region, key) in regions"
          :key="key"
        >
          {{ $t(`searchFilter.regions.${region}`) }}
        </BaseDropdownItem>
      </template>
    </BaseDropdown>
  </div>
  <div class="text-3xl font-bold dark:text-white" v-if="loading">
    {{ $t('countries.loadingCountries') }}
  </div>
  <div class="grid grid-cols-1 gap-14 lg:grid-cols-4" v-if="!loading">
    <div
      class="col-span-full text-3xl font-bold dark:text-white"
      v-if="
        getCountriesByRegionAndNameAsc(filter) &&
        getCountriesByRegionAndNameAsc(filter).length === 0
      "
    >
      {{ $t('countries.noCountries') }}
    </div>
    <template
      v-for="country in getCountriesByRegionAndNameAsc(filter)"
      :key="country.name.common"
    >
      <router-link
        class="focus:outline-none focus:ring-4 focus:ring-blue-500 transition ease-in-out"
        :to="{
          name: 'CountryDetails',
          params: { countryCode: country.cca3 }
        }"
      >
        <CountryCard :country="country" />
      </router-link>
    </template>
  </div>
</template>

<script>
import SearchInput from '@/components/InputSearch.vue'
import CountryCard from '@/components/CountryCard.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import _ from 'lodash'
import BaseDropdownItem from '@/components/BaseDropdownItem.vue'
import BaseDropdown from '@/components/BaseDropdown.vue'

export default {
  name: 'HomeView',
  components: {
    BaseDropdown,
    BaseDropdownItem,
    CountryCard,
    SearchInput
  },

  data() {
    return {
      searchInput: '',
      filter: '',
      regions: ['all', 'africa', 'americas', 'asia', 'europe', 'oceania']
    }
  },

  computed: {
    ...mapState('country', ['loading', 'countries']),
    ...mapGetters('country', ['getCountriesByRegionAndNameAsc'])
  },

  methods: {
    ...mapActions('country', ['getCountriesByName', 'getAllCountries']),

    searchCountries: _.debounce(function (search) {
      if (!search.target.value) {
        this.searchInput = ''
        this.getAllCountries()
      } else {
        this.searchInput = search.target.value
        this.getCountriesByName({
          searchString: encodeURIComponent(search.target.value)
        })
      }
    }, 500),

    changeFilter(filter) {
      this.filter = filter === 'all' ? '' : filter
    },

    getRegionTranslation() {
      return this.filter === ''
        ? this.$t('searchFilter.filterByRegion')
        : this.$t(`searchFilter.regions.${this.filter}`)
    }
  },

  created() {
    this.getAllCountries()
  }
}
</script>
