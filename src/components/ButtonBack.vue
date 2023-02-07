<template>
  <router-link
    class="mb-10 flex w-fit items-center gap-2 rounded-md bg-white py-2 px-5 font-bold drop-shadow-md transition ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    to="/"
  >
    <IconArrowLeft />
    {{ $t('system.back') }}
  </router-link>
</template>

<script>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

export default {
  name: 'ButtonBack',
  components: { IconArrowLeft }
}
</script>
