
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var Service = require('app/services/Service');

	//#endregion

    var SampleService = Service.extend({

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function ()
    	{
			Service.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (object lifecycle)

    	initialize: function()
    	{
    		Service.prototype.initialize.call(this);
    	},

    	destroy: function()
    	{
    		Service.prototype.destroy.call(this);
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

    return SampleService;
});
