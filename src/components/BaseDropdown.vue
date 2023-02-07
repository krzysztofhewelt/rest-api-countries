<template>
  <div class="relative">
    <button
      id="states-button"
      data-dropdown-toggle="dropdown-states"
      class="z-10 inline-flex w-full flex-shrink-0 items-center justify-between gap-2 rounded-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-500 transition ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 md:min-w-[150px]"
      type="button"
      @click="openDropdown"
      v-click-outside="closeDropdown"
    >
      <slot name="selected-item" />
      <IconChevronDown v-if="!dropdown" />
      <IconChevronUp v-if="dropdown" />
    </button>
    <Transition name="fade" mode="out-in">
      <div
        id="dropdown-states"
        class="absolute right-0 z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        v-if="dropdown"
      >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <slot />
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script>
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronUp from '@/components/icons/IconChevronUp.vue'

export default {
  name: 'BaseDropdown',
  components: {
    IconChevronUp,
    IconChevronDown
  },

  data() {
    return {
      dropdown: false
    }
  },

  methods: {
    openDropdown() {
      this.dropdown = true
    },

    closeDropdown() {
      this.dropdown = false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
