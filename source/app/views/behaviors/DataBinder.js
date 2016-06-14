
define(function (require)
{
	//#region Browser Directives

	'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');
	var Stickit = require('backbone.stickit');

	//#endregion

    var DataBinder = Marionette.Behavior.extend(
	{

    	//#region Fields - Instance Member

    	//#endregion

    	//#region Hashes - Instance Member

    	ui:
		{
    	},

    	events:
		{
		},
		
		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
			Marionette.Behavior.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
    		Marionette.Behavior.prototype.initialize.call(this);
    	},

    	//#endregion

		//#region Functions - Instance Member - (behavior methods)

    	onDataBind: function()
    	{
    		if (this.view)
    		{
    			if (this.view.stickit)
    			{
    				this.view.stickit();
    			}
    		}
    	},

    	onDataUnbind: function()
    	{
    		if (this.view)
    		{
    			if (this.view.unstickit)
    			{
    				this.view.unstickit();
    			}
    		}
    	},

		onDestroy: function()
		{
			this.onDataUnbind();
		}

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers)

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

	window.Behaviors.DataBinder = DataBinder;

    return DataBinder;
});
