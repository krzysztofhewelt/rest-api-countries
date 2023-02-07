<template>
  <div
    class="flex w-full flex-col items-center justify-between gap-4 border-y-zinc-200 bg-white py-5 px-10 shadow-md dark:bg-gray-700 sm:flex-row"
  >
    <router-link
      to="/"
      class="text-xl font-bold transition ease-in-out hover:cursor-pointer hover:underline focus:outline-none focus:ring-4 focus:ring-blue-500 dark:text-white"
      >{{ $t('system.title') }}
    </router-link>

    <div class="flex gap-5">
      <BaseDropdown>
        <template #selected-item>{{ $t(`locale.${$i18n.locale}`) }}</template>
        <template #default>
          <BaseDropdownItem
            @click="changeLanguage(locale)"
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
          >
            {{ $t(`locale.${locale}`) }}
          </BaseDropdownItem>
        </template>
      </BaseDropdown>

      <ButtonChangeTheme />
    </div>
  </div>
</template>

<script>
import ButtonChangeTheme from '@/components/ButtonChangeTheme.vue'
import BaseDropdown from '@/components/BaseDropdown.vue'
import BaseDropdownItem from '@/components/BaseDropdownItem.vue'
import { mapActions } from 'vuex'

export default {
  name: 'TheNavbar',
  components: {
    BaseDropdownItem,
    BaseDropdown,
    ButtonChangeTheme
  },

  methods: {
    ...mapActions('locale', ['setUserLocale']),

    changeLanguage(language) {
      this.$i18n.locale = language
      this.setUserLocale(language)
    }
  }
}
</script>
