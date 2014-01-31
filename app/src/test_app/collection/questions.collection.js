define( function (require) {

    var config              = require('app/config');

    /** models */
    var QuestionModel        = require('../model/question.model');

    return Backbone.Collection.extend({
        model: QuestionModel,
        url: function () {
            return "https://api.stackexchange.com/2.1/questions/unanswered?order=desc&sort=activity&site=stackoverflow";
        },
        parse: function (data) {
            console.log(data);
            return data.items;
        }
    });
});