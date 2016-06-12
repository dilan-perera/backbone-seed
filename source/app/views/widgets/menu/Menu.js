
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var ViewTemplate = require('text!views/widgets/menu/main.tmpl');
    var EventManager = require('views/EventManager');
    var RoutingTable = require('routing/RoutingTable');
    var NavigationManager = require('routing/NavigationManager');

	//#endregion

    var Menu = Marionette.View.extend({

    	//#region Fields - Instance Member

		_viewTemplate: ViewTemplate,
    	_eventManager: null,

    	//#endregion

		//#region Hashes - Instance Member

    	ui:
		{
			'items': '[data-route]'
    	},

    	events:
		{
			'click @ui.items': '_onItemClicked'
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
			Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)
		
    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
    		this._eventManager = new EventManager(this);

    		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
			this.$el.html(this.template());

    		Marionette.View.prototype.render.call(this);

    		return this;
    	},

    	close: function ()
    	{
    		Marionette.View.prototype.destroy.call(this);

    		this._eventManager.destroy();
    	},

    	template: function()
    	{
    		return this._viewTemplate;
		},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#region Functions - Instance Member - (callbacks) - (UI event handlers)

    	_onItemClicked: function (e)
    	{
    		e.preventDefault();

    		var element = $(e.currentTarget);
    		var routeName = element.attr('data-route');
    		var route = RoutingTable.fromName(routeName);
			
    		NavigationManager.navigate(route);
    	}

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)

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

    return Menu;
});
