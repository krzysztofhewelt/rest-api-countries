<template>
  <button
    class="flex items-center gap-2 whitespace-nowrap fill-transparent font-medium transition transition ease-in-out ease-in-out hover:cursor-pointer hover:fill-black focus:outline-none focus:ring-4 focus:ring-blue-500 dark:text-white"
    @click="switchTheme"
  >
    <IconDarkMode v-show="colorTheme === 'light'" />
    <IconLightMode v-show="colorTheme === 'dark'" />
    {{ colorTheme === 'dark' ? $t('system.lightMode') : $t('system.darkMode') }}
  </button>
</template>

<script>
import IconDarkMode from '@/components/icons/IconDarkMode.vue'
import IconLightMode from '@/components/icons/IconLightMode.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ButtonChangeTheme',
  components: {
    IconLightMode,
    IconDarkMode
  },
  computed: {
    ...mapState('systemTheme', ['colorTheme'])
  },
  methods: {
    ...mapActions('systemTheme', ['switchTheme'])
  }
}
</script>
