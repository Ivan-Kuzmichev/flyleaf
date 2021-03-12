import ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';
import path from 'path';

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - nuxt-v2',
        title: 'nuxt-v2',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/styles/index.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/mocks.ts'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/color-mode',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
        '@nuxtjs/sentry',
        'nuxt-i18n',
        '@nuxtjs/svg-sprite',
    ],

    svgSprite: {
        input: '~/assets/svg/',
    },

    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'en',
        strategy: 'prefix',
        vueI18n: {
            fallbackLocale: 'en',
        },
        vueI18nLoader: true,
    },

    sentry: {
        dsn:
            'https://9fb8776b183948f4a00a717b756fef78@o321964.ingest.sentry.io/5593085',
        tracing: {
            tracesSampleRate: 1.0,
            vueOptions: {
                tracing: true,
                tracingOptions: {
                    hooks: ['mount', 'update'],
                    timeout: 2000,
                    trackComponents: true,
                },
            },
            browserOptions: {},
        },
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://flyleafapi.piserver.ga/',
            },
        },
        authenticationType: 'Bearer',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        postcss: {
            plugins: {
                'postcss-normalize': true,
                'postcss-preset-env': {
                    stage: 0,
                },
            },
        },
    },

    server: {
        port: 5000,
    },
};
