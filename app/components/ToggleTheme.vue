<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="h-8 w-8 flex items-center justify-center rounded-md transition-colors duration-200 hover:bg-gray-4"
    :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <Icon
      :name="colorMode.value === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'"
      class="text-lg text-gray-11 hover:text-gray-12"
    />
  </button>
</template>

<style scoped></style>
