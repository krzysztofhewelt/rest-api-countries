<template>
  <div
    class="rounded-md bg-white drop-shadow-md dark:bg-gray-700 dark:text-white"
  >
    <v-lazy-image
      :src="country.flags.png"
      :alt="country.flags.alt"
      class="h-56 w-full rounded-t-md"
    />
    <div class="p-5">
      <h1 class="mb-4 text-xl font-bold">
        {{ printCountryNameInLocalizationLang() }}
      </h1>
      <p>
        <span class="font-bold">{{
          $t('countries.information.population')
        }}</span>
        {{ $n(country.population) }}
      </p>
      <p>
        <span class="font-bold">{{ $t('countries.information.region') }}</span>
        {{ $t(`searchFilter.regions.${country.region.toLowerCase()}`) }}
      </p>
      <p>
        <span class="font-bold">{{
          $tc(
            'countries.information.capital',
            (country.capital && country.capital.length) || 0
          )
        }}</span>
        {{ country.capital && country.capital.join(', ') }}
      </p>
    </div>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  name: 'CountryCard',

  components: {
    VLazyImage
  },

  props: {
    country: {
      type: Object,
      default: null
    }
  },

  methods: {
    printCountryNameInLocalizationLang() {
      const locale = this.$i18n.locale

      if (locale === 'eng') {
        return this.country.name.common
      } else {
        return this.country.translations[locale].common
      }
    }
  }
}
</script>
