export default {
    target: 'static',
    head: {
        title: 'Jam',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    build: {
      extractCSS: true
    },
    css: [
      'normalize.css/normalize.css',
      'assets/scss/main.scss'
    ],
    modules: [
      '@nuxtjs/axios'
    ],
    axios: {
      baseURL: process.env.API_URL,
    }
}