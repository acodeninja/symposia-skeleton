require.config({
    basePath: '.',
    packages: [
        'app/src/test_app'
    ],
    shim: {
        'backbone'          : ['underscore'],
        'dist/vendor'       : ['jquery'],
        'app/main'          : ['dist/vendor','json','backbone']
    },
    paths: {
        text                : 'vendor/requirejs-plugins/lib/text',
        json                : 'vendor/requirejs-plugins/src/json',
        symposia            : 'vendor/symposia/dist/symposia',
        underscore          : 'vendor/lodash/dist/lodash.min',
        backbone            : 'vendor/backbone-amd/backbone',
        jquery              : 'vendor/jquery/jquery'
    }
});

require(['app/main']);
