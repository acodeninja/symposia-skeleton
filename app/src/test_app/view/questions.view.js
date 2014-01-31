define( function (require) {

    var config              = require('app/config');

    /** templates */
    var __questionsTemplate = require('text!../template/questions.template.html');

    return Backbone.View.extend({
        className: '',
        template: __questionsTemplate,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.empty();
            this.$el.html(_.template(this.template, { questions: this.collection.toJSON() }));
            return this;
        }
    });

});