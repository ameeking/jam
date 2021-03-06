import path from 'path'
import fs from 'fs'

export default {
    target: 'static',
    publicRuntimeConfig: {
      baseURL: process.env.BASE_URL,
      apiURL: process.env.API_URL,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    },
    plugins: [
      '~/plugins/repository.js',
    ],
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
      '@nuxtjs/axios',
      '@nuxtjs/proxy',
    ],
    axios: {
      proxy: true
    },
    proxy: {
      '/jsonapi/node/': process.env.API_URL
    }
}