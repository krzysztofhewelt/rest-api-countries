<script>
import TheNavbar from '@/components/TheNavbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'ButtonChangeTheme',
  components: { TheNavbar },
  computed: {
    ...mapState('systemTheme', ['colorTheme'])
  },

  created() {
    if (this.colorTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }
}
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main class="min-h-[calc(100vh-82px)] bg-gray-100 p-10 dark:bg-gray-900">
    <RouterView />
  </main>
</template>
