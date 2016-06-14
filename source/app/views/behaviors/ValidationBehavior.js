
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
    var BSValidator = require('bootstrap-validator');

	//#endregion

    var ValidationBehavior = Marionette.Behavior.extend(
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

    	onRender: function()
    	{
    		var validationOptions = {};

    		if (this.view.validation)
    		{
    			validationOptions = this.view.validation;
    		}

    		this.view.$el.find('form').validator(validationOptions);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

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

	window.Behaviors.Validation = ValidationBehavior;

    return ValidationBehavior;
});
