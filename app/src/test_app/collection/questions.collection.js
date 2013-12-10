define( function (require) {

    var config              = require('app/config');

    /** models */
    var QuestionModel        = require('../model/question.model');

    return Backbone.Collection.extend({
        model: QuestionModel,
        url: function () {
            return "https://api.stackoverflow.com/1.1/questions/no-answers?order=desc&sort=activity";
        },
        parse: function (data) {
            return data.questions;
        }
    });
});