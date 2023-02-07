<template>
  <li>
    <button
      type="button"
      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <slot />
    </button>
  </li>
</template>

<script>
export default {
  name: 'BaseDropdownItem'
}
</script>
