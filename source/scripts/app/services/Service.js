
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

	//#endregion

    var Service = Marionette.Object.extend({

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function ()
    	{
			Marionette.Object.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (object lifecycle)

    	initialize: function()
    	{
    		Marionette.Object.prototype.initialize.call(this);
    	},

    	destroy: function()
    	{
    		Marionette.Object.prototype.destroy.call(this);
    	}

    	//#endregion

    	//#region Functions - Instance Member - (services)

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

    return Service;
});
