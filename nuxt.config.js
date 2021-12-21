import Constants from './data/Constants'
import Secret from './data/Secret'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Discortics™',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@sweetalert2/theme-dark/dark.css',
    './assets/transition.css',
    './static/css/main.css',
    './static/css/cards.css',
    './assets/toast.css',
    'aos/dist/aos.css',
  ],

  // SSR
  ssr: false,

  // Loading Bar
  loading: {
    color: '#25d5e4',
    height: '2px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tooltip.js',
    '~/plugins/api.js',
    '~/plugins/swal.js',
    '~/plugins/chart.js',
    '~/plugins/lodash.js',
    '~/plugins/vue-awesome-swiper.js',
    {
      src: '~/plugins/aos.js',
      mode: 'client'
    },
    { 
      src: '~/plugins/vue-toastify.js', 
      mode: 'client' 
    },
    { 
      src: '~/plugins/vs-alert',
       mode: 'client' 
     }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // Proxy
  proxy: {
    '/api': { target: 'http://api.discortics.com', changeOrigin: true, pathRewrite: {'/api/': '/'} },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Toast module configuration
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'invite',
        message: 'Invite Bot',
        options: {
          className: 'bg-discortics-dashboard',
          type: 'info',
          duration: 10000,
          action : [
            {
                text : 'Admin Permissions',
                push : {
                  name : Constants.Invite_Admin,
                  dontClose : true
                 }
            },
            {
                text : 'Normal Permissions',
                push : {
                  name : Constants.Invite_Normal,
                  dontClose : true
                 }
            }
        ]
        }, 
      },
      {
        name: 'comm-error',
        message: 'Unable to contact Discortics',
        options: {
          type: 'error'
        }
      },
      {
        name: 'embedLimit',
        message: 'Total text must be less than 6000 characters.',
        options: {
          type: 'error',
          duration: 5000,
          class: "rounded-xl"
        }
      },
      {
        name: 'error',
        message: 'An unknown error occured',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Auth module configuration
  auth: {
    token: {
      global: false,
    },
//    plugins: [ '~/plugins/auth.js' ],
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      home: '/refresh'
    },
    resetOnError: true,
    rewriteRedirects: false,
    strategies: {
      discordapp: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://discord.com/api/oauth2/authorize',
          token: 'https://discord.com/api/oauth2/token',
          userInfo: 'https://discord.com/api/users/@me'
        },
        clientId: Secret.clientID,
        codeChallengeMethod: "",
        responseType: 'token',
        scope: "identify guilds",
        autoLogout: "true",
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    }
  }
}
