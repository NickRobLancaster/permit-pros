// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@formkit/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/icon",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
