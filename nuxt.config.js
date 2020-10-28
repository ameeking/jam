import data from './static/MOCK_DATA.json'

let dynamicRoutes = () => {
 return new Promise(resolve => {
   resolve(data.map(el => `/product/${el.id}`))
 })
}

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
    generate: {
      routes: dynamicRoutes
    },
    css: [
      'normalize.css/normalize.css'
    ]
}