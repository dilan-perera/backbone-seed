
define(function (require) {
    'use strict';

    var exports = require('exports');
    var module = require('module');

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var ContentContainer = new Backbone.View.extend({

        show: function(view)
        {
            // TODO: invoke base
        },

        showChild: function(view)
        {

        }
    });

    exports.ContentContainer = ContentContainer;
});
