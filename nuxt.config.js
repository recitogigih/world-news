
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'StyleSheet', href:'//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', height:'10px' },
  /*
  ** Global CSS
  */
  css: [
    {src:'~/assets/theme.scss', lang:'scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/vue-material'},
    {src:'~/plugins/axios'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  env:{
    NEWS_API_KEY:"d58d33fd99cd446a863a486ff940b681"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

