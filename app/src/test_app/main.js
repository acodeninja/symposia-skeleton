define(function(require) {

    var config               = require('app/config');

    var QuestionsCollection  = require('./collection/questions.collection'),
        QuestionsView        = require('./view/questions.view');

    var __errorTemplate      = require('text!./template/error.template.html');

    return function (sandbox) {
        var questionsCollection,
            questionsView;

        return {
            init: function () {
                questionsCollection = new QuestionsCollection();
                
                questionsCollection.fetch({
                    success: this.showQuestions.bind(this),
                    error: this.showError.bind(this)
                });
            },
            render: function () {
                
            },
            showQuestions: function (collection) {
                questionsView = new QuestionsView({
                    collection: collection,
                    el: sandbox.getElement()
                });
            },
            showError: function (collection, ajax) {
                var $element = sandbox.getElement(),
                    renderedError = _.template(__errorTemplate, ajax);

                $element.html(renderedError);
            },
            destroy: function () {

            }
        };
    };
});