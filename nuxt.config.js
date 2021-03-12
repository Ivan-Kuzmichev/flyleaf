const config = {
    dev: process.env.NODE_ENV !== 'production',

    head: {
        titleTemplate: '%s - flyleaf',
        title: 'flyleaf',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [],
    },

    css: ['~/assets/styles/index.scss'],

    plugins: [],

    components: true,

    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/color-mode',
    ],

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
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

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://flyleafapi.piserver.ga/',
            },
        },
        authenticationType: 'Bearer',
    },

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

if (config.dev) {
    config.plugins.push('~/plugins/mocks.ts');
} else {
    config.modules.push('@nuxtjs/sentry');

    config.sentry = {
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
    };

    config.head.script.push({
        async: true,
        defer: true,
        'data-website-id': 'f7bbb9c0-bb40-4408-9304-499162139899',
        src: 'https://umami.piserver.ga/umami.js',
    });
}

export default config;
