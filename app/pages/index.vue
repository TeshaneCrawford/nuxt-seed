<script setup>
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div class="absolute left-1/2 top-1/2 m-0 w-full text-center -translate-x-1/2 -translate-y-1/2">
    <h1 class="text-4xl text-tomato-12 font-bold md:text-6xl">
      {{ runtimeConfig.public.helloText }}
    </h1>
    <NuxtLink to="/" external class="text-lg text-gray-11 no-underline hover:text-gray-12 hover:underline">
      refresh
    </NuxtLink>
  </div>
</template>
