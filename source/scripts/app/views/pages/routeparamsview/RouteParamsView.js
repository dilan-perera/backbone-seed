
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

    var ViewTemplate = require('text!views/pages/routeparamsview/main.tmpl');
    var NavigationManager = require('routing/NavigationManager');

	//#endregion

    var RouteParamsView = Marionette.View.extend({

    	//#region Fields - Instance Member

        _viewTemplate: ViewTemplate,
        _name: null,

    	//#endregion

		//#region Hashes - Instance Member

		ui:
		{
		    'paramContent': '#paramContent'
    	},

    	events:
		{
		},

    	bindings:
		{
		},

    	behaviors:
		{
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function(options)
    	{
    	    if (options)
    	    {
    	        this._name = options.name;
    	    }

			Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
     		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
    	    Marionette.View.prototype.render.call(this);

    	    this.$el.html(this.template());
    	    this.bindUIElements();

    	    this._displayParam();

    		return this;
    	},
		
    	template: function()
    	{
    		return this._viewTemplate;
		},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#region Functions - Instance Member - (callbacks) - (UI event handlers)

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

        //#region Functions - Instance Member - (helpers) - (view management)

        _displayParam: function()
        {
            if (this._name)
    	    {
    	        this.ui.paramContent.text(this._name);
    	    }
        }

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (data binding)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (service invocations)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (other)

    	//#endregion

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

    return RouteParamsView;
});
