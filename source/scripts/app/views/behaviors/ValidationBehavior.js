
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
	
    _.extend(Backbone.Validation.callbacks, {
    	valid: function (view, attr, selector)
    	{
    		var $el = view.$('[name=' + attr + ']');

    		// TODO: implement
    	},
    	invalid: function (view, attr, error, selector)
    	{
    		var $el = view.$('[name=' + attr + ']');

			// TODO: implement
    	}
    });

    var ValidationBehavior = Marionette.Behavior.extend(
	{

    	//#region Fields - Instance Member

    	//#endregion

    	//#region Hashes - Instance Member
				
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

    	onAttach: function()
    	{
    		this._bind();
    	},

    	onDestroy: function ()
    	{
    		this._unbind();
    	},
		
    	onValidate: function()
    	{
    		this._validate();
    	},

    	onValidationBind: function()
    	{
    		this._bind();
    	},
		
    	onValidationUnbind: function()
    	{
    		this._unbind();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#endregion
		
		//#region Functions - Instance Member - (helpers)

    	_bind: function()
    	{
    		if (this.view)
    		{
    			if (this.view.model)
    			{
    				try
    				{
    					Backbone.Validation.unbind(this.view);
    				}
    				catch (ex)
    				{
						// NOTE: sink exception
    				}

    				let options = {
    					forceUpdate: true
    				};

					Backbone.Validation.bind(this.view, options);
    			}
    		}
    	},

    	_validate: function()
    	{
    		if (this.view)
    		{
    			if (this.view.model)
    			{
    				this.model.isValid({ validate: true });
    			}
    		}
    	},

    	_unbind: function()
    	{
    		if (this.view)
    		{
    			try
    			{
    				Backbone.Validation.unbind(this.view);
    			}
    			catch (ex)
    			{
					// NOTE: sink exception
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

	window.Behaviors.Validation = ValidationBehavior;

    return ValidationBehavior;
});
