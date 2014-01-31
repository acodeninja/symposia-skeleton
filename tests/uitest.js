casper.start('http://localhost:8000', function() {
    var page = this;
    casper.test.begin("Title Test", 1, function(test) {
        test.assert((page.getTitle() === "Symposia Skeleton Application"));
        test.done();
    });
});

casper.run();