define(function (require) {

    var TestApplication       = require('app/src/test_app');

    var symposia            = require('symposia'),
        _routes             = require('app/config').routes;

    var sandbox             = symposia.sandbox.create();

    symposia.router.addRoute(_routes.home, function () {
        symposia.modules.create({
            'test_app': {
                creator: TestApplication
            }
        }).startAll();
    });

});