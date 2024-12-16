<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const radixColors = [
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'orange',
  'brown',
]

const randomColor = computed(() => {
  const index = Math.floor(Math.random() * radixColors.length)
  return radixColors[index]
})
</script>

<template>
  <div class="relative min-h-screen w-full">
    <div class="absolute right-4 top-4">
      <ToggleTheme />
    </div>

    <div class="absolute left-1/2 top-1/2 m-0 w-full text-center -translate-x-1/2 -translate-y-1/2">
      <h1 :class="`mb-4 text-4xl font-bold md:text-6xl text-${randomColor}-12`">
        {{ runtimeConfig.public.helloText }}
      </h1>
      <NuxtLink
        to="/"
        external
        class="text-lg text-gray-11 no-underline hover:text-gray-12 hover:underline hover:underline-offset-4"
      >
        refresh
      </NuxtLink>
    </div>
  </div>
</template>
