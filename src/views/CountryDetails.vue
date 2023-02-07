<template>
  <ButtonBack />

  <div class="text-3xl font-bold dark:text-white" v-if="loading">
    {{ $t('countries.loadingCountry') }}
  </div>

  <div
    class="text-3xl font-bold dark:text-white"
    v-if="!loading && !getCountryDetails"
  >
    {{ $t('countries.noCountry') }}
  </div>

  <div
    class="mx-auto flex w-fit flex-col items-start gap-4 md:flex-row md:justify-between md:gap-10"
    v-if="!loading && getCountryDetails"
  >
    <div
      class="rounded-md bg-white p-5 drop-shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      <img
        :src="getCountryDetails.flags.png"
        :alt="getCountryDetails.flags.alt"
        class="h-64 w-96 rounded-md"
      />
      <h1 class="py-3 text-center text-3xl font-bold dark:text-white">
        {{ printCountryNameInLocalizationLang() }}
      </h1>
      <h3 class="text-center text-xl dark:text-white">
        {{
          $t(`searchFilter.regions.${getCountryDetails.region.toLowerCase()}`)
        }}
      </h3>
      <div
        class="mt-4 flex items-center justify-between gap-4 divide-x divide-slate-300 dark:text-white"
      >
        <div class="w-full text-center">
          <div class="font-bold">
            {{ $t('countries.information.population') }}
          </div>
          <div>{{ $n(getCountryDetails.population) }}</div>
        </div>
        <div class="w-full text-center">
          <div class="font-bold">{{ $t('countries.information.area') }}</div>
          <div>{{ $n(getCountryDetails.area) }} km<sup>2</sup></div>
        </div>
      </div>
    </div>
    <div
      class="w-full divide-y divide-slate-300 rounded-md bg-white drop-shadow-md dark:bg-gray-700 dark:text-white md:w-96"
    >
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.officialName') }}</div>
        <div class="text-right">{{ getCountryDetails.name.official }}</div>
      </div>
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.subregion') }}</div>
        <div>{{ getCountryDetails.subregion }}</div>
      </div>
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.capital') }}</div>
        <div>{{ getCountryDetails.capital.join(', ') }}</div>
      </div>
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.languages') }}</div>
        <div>{{ Object?.values(getCountryDetails.languages).join(', ') }}</div>
      </div>
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.currencies') }}</div>
        <div class="text-right">
          <div v-for="(currency, key) in getAllCurrencies()" :key="key">
            {{ currency.name }}
          </div>
        </div>
      </div>
      <div
        class="flex justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div>{{ $t('countries.information.locationOnTheMap') }}</div>
        <div>
          <a
            :href="getCountryDetails.maps.googleMaps"
            target="_blank"
            class="font-bold transition ease-in-out hover:underline focus:outline-none focus:ring-4 focus:ring-blue-500"
            >{{ $t('system.show') }}</a
          >
        </div>
      </div>
      <div
        class="flex flex-col justify-between p-3"
        v-if="getCountryDetails.borders"
      >
        <div class="mb-4">
          {{ $t('countries.information.borderCountries') }}
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            @click="this.getCountry(border)"
            class="border-bg-white w-fit border-2 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-500"
            v-for="(border, key) in getCountryDetails.borders"
            :key="key"
          >
            {{ border }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ButtonBack from '@/components/ButtonBack.vue'

export default {
  name: 'CountryView',
  components: {
    ButtonBack
  },

  computed: {
    ...mapGetters('country', ['getCountryDetails']),
    ...mapState('country', ['loading'])
  },

  methods: {
    ...mapActions('country', ['getCountryByCode']),

    printCountryNameInLocalizationLang() {
      const locale = this.$i18n.locale

      if (locale === 'eng') {
        return this.getCountryDetails.name.common
      } else {
        return this.getCountryDetails.translations[locale].common
      }
    },

    getAllCurrencies() {
      return Object?.values(this.getCountryDetails.currencies)
    },

    getCountry(code) {
      this.getCountryByCode({
        searchString: code
      })
    }
  },

  created() {
    this.getCountry(this.$route.params.countryCode)
  }
}
</script>
