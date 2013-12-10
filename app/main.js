define( function (require) {

    var symposia        = require('symposia');

    var config          = require('app/config');

    require('app/routes/root');

    if (config.debug) {
        symposia.bus.addWireTap( function (data, event) {
            console.log("MSG: Channel: "+ event.channel +" Topic: "+ event.topic + " Timestamp: "+ event.timeStap);
            console.log(data);
        });
    }

    $(document).ready(function () {
        var sandbox         = symposia.sandbox.create();
    });

    symposia.router.parse(document.location.pathname);

});