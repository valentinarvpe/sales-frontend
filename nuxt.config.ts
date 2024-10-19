import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxtjs/google-fonts',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  googleFonts: {
    families: {
      Lexend: [100, 300, 700],
      Roboto: [400, 700]
    },
    display: 'swap', // Opcional: ayuda a mejorar la carga de las fuentes
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }, 

  css: [
    '@/assets/styles/main.css', // Archivo CSS global
  ],
  

  compatibilityDate: '2024-10-16',
})