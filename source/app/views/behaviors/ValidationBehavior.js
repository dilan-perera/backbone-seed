
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
    var Validation = require('backbone-validation');

	//#endregion

	//http://jsfiddle.net/thedersen/udXL5/
	//http://jsfiddle.net/thedersen/c3kK2/

	// Extend the callbacks to work with Bootstrap, as used in this example
	// See: http://thedersen.com/projects/backbone-validation/#configuration/callbacks
    _.extend(Backbone.Validation.callbacks, {
    	valid: function (view, attr, selector)
    	{
    		var $el = view.$('[name=' + attr + ']'),
				$group = $el.closest('.form-group');

    		$group.removeClass('has-error');
    		$group.find('.help-block').html('').addClass('hidden');
    	},
    	invalid: function (view, attr, error, selector)
    	{
    		var $el = view.$('[name=' + attr + ']'),
				$group = $el.closest('.form-group');

    		$group.addClass('has-error');
    		$group.find('.help-block').html(error).removeClass('hidden');
    	}
    });

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
