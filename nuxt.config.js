export default {
  target: 'server',

  publicRuntimeConfig: {
    appName: 'Nusountara'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nusountara – Music Expedition',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Get your dancing shoes ready and join us in our music expedition, as we explore and unhide destinations and local talents throughout Indonesia.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/swiper.css',
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '~/plugins/smooth-corners.js',
      mode: 'client'
    },
    {
      src: '~/plugins/cash.js',
      mode: 'client'
    },
    {
      src: '~/plugins/global.js',
      mode: 'client'
    },
    {
      src: '~/plugins/anime.js',
      mode: 'client'
    },
    {
      src: '~/plugins/toasts.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-awesome-swiper.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-clickaway.js',
      mode: 'client'
    },
    {
      src: '~/plugins/scrollToTopIfCurrentPageIs.js',
      mode: 'client'
    },
    {
      src: '~/plugins/dropdown.js',
      mode: 'client'
    },
    // {
    //   src: '~/plugins/buttons.js',
    //   mode: 'client'
    // },
    // {
    //   src: '~/plugins/collapsible.js',
    //   mode: 'client'
    // },
    {
      src: '~/plugins/tooltip.js',
      mode: 'client'
    },
    {
      src: '~/plugins/materialbox.js',
      mode: 'client'
    },
    {
      src: '~/plugins/disqus.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-social-sharing.js',
      mode: 'client'
    },
    {
      src: '~/plugins/formatDate.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    'v-wave/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Nusountara',
      short_name: 'Nusountara',
      lang: 'en'
    },
    meta: {
      name: 'Nusountara',
      ogTitle: 'Nusountara – Music Expedition',
      ogDescription: 'Get your dancing shoes ready and join us in our music expedition, as we explore and unhide destinations and local talents throughout Indonesia.'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
