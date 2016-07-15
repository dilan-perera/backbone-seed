
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

	//#endregion

    var MaterializingBehavior = Marionette.Behavior.extend(
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

		//#region Functions - Instance Member - (callbacks)

		onAttach: function ()
		{
			this._materialize();
		},
		
    	//#endregion
		
    	//#region Functions - Instance Member - (helpers)

		_materialize: function ()
		{
			if (this.$el)
			{
				if (componentHandler)
				{
					componentHandler.upgradeElement(this.$el);
				}
			}
		}

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

	window.Behaviors.Materialize = MaterializingBehavior;

    return MaterializingBehavior;
});
