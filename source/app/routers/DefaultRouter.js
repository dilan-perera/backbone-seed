
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var DefaultController = require('controllers/DefaultController');

	//#endregion

    var DefaultRouter = Marionette.AppRouter.extend({

		//#region Hashes - Instance Member

        appRoutes: {
            //'views/:pageName': 'showView',
            '': 'showDefault',
            'dashboard': 'showDashboard'
        },

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

        constructor: function (options) {
            this.options = options;

            Marionette.AppRouter.prototype.constructor.call(this);
        },

        initialize: function() {
            this.controller = new DefaultController(this.options);
        }

    	//#endregion

    	//#endregion

    });

    return DefaultRouter;
});