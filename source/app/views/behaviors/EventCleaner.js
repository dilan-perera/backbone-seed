
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

    var EventCleaner = Marionette.Behavior.extend(
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

    	onDestroy: function()
    	{
    		if (this.view)
    		{
    			if (this.view.model)
    			{
    				this.view.model.off(null, null, this);
    				this.view.model = null;
    			}

    			this.view.remove();
    			this.view.unbind();
    			this.view.undelegateEvents();

    			this.view.$el.remove();
    			this.view.$el.unbind();

    			this.view.$el.empty();
    		}
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

	window.Behaviors.EventCleaner = EventCleaner;

    return EventCleaner;
});
