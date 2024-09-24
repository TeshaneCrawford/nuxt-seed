// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/fonts', '@unocss/nuxt', '@vueuse/nuxt'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [{ name: 'description', content: 'Nuxt Seed' }],
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      helloText: 'Hello from the Edge 👋'
    }
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single'
      }
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      // svgLoader({
      //   defaultImport: 'url',
      // }),
    ],
  },

  css: ['@unocss/reset/tailwind.css', '@/assets/styles/root.scss'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    componentIslands: true,
    headNext: true,
    viewTransition: true
  },
})