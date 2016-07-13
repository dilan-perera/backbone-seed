
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

    var Globalizer = require('globalization/Globalizer');

	//#endregion

    var GlobalizingBehavior = Marionette.Behavior.extend(
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

    	onAttach: function()
    	{
 			this._globalize();
    	},
		
    	onCultureApply: function()
    	{
 			this._globalize();
    	},

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers)

		_globalize: function ()
		{
			var element = this.$el;

			if (element)
			{
				Globalizer.applyCulture(element);
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

	window.Behaviors.Globalize = GlobalizingBehavior;

    return GlobalizingBehavior;
});
