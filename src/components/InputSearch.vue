<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 dark:text-white"
    >
      <IconSearch class="h-5 w-5" />
    </div>
    <input
      class="block h-full w-full w-full rounded-md border-gray-300 pl-10 transition ease-in-out focus:ring-4 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm md:w-96"
      type="text"
      :placeholder="$t('searchFilter.searchByCountries')"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'SearchInput',
  components: { IconSearch },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>
