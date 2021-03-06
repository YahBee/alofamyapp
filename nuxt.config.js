module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    vendor: ['vuetify'],
    vendor: ['firebase'],
    vendor: ['vue-i18n'],
    vendor: ['vue-moment'],
    vendor: ['vue2-filters'],
    // vendor: ['vue-notifications'],
    extractCSS: true,
    router: {
    middleware: 'i18n'
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  },
    /*
  ** Load Vuetify into the app
  */
  plugins: ['~/plugins/vuetify', '~/plugins/i18n.js','~/plugins/vue2Filters.js','~/plugins/vueMoments.js'],
  // plugins: ['~/plugins/fireauth'],
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/css/app.styl'],
  modules: ['@nuxtjs/pwa'],
  modules: ['nuxt-google-maps-module'],
  generate: {
    routes: ['/', '/en', '/en/profile','/profile']
  }
}


