import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt 3 Blogger',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                // { src: 'https://awesome-lib.js' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
            ],
            // please note that this is an area that is likely to change
            style: [
                // <style type="text/css">:root { color: red }</style>
                // { children: ':root { color: red }', type: 'text/css' }
            ]
        }
    },
    css: ["~/assets/css/styles.css"],
    buildModules: ['@nuxtjs/tailwindcss'],
    modules: [
        '@nuxt/content'
      ],
    publicRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      },
      privateRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      },
})
