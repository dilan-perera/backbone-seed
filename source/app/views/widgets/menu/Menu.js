
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
    var Radio = require('backbone.radio');

    var ViewTemplate = require('text!views/widgets/menu/main.tmpl');
    var Route = require('routing/Route');
    var NavigationManager = require('routing/NavigationManager');
    var Channel = require('messaging/Channel');

	//#endregion

    var Menu = Marionette.View.extend({

    	//#region Fields - Instance Member

		_viewTemplate: ViewTemplate,
    	_appChannel: Backbone.Radio.channel(Channel.APPLICATION.name),

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
    		this._appChannel.reply(Channel.APPLICATION.Topics.VIEW_CHANGED.name, this._onViewChanged, this);

    		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
			this.$el.html(this.template());
    		this.bindUIElements();

			this._setupMenuSelection(Menu.DEFAULT_ROUTE);

    		Marionette.View.prototype.render.call(this);

    		return this;
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
    		var routeName = element.data('route');
    		var route = Route.fromName(routeName);
			
    		this._navigate(route);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	_onViewChanged: function(data)
    	{
    		if (data)
    		{
    			if (data.route)
    			{
    				this._onNavigationComplete(data.route);
    			}
    		}
    	},

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)
		
    	_navigate: function(route)
    	{
    		NavigationManager.navigate(route);
    	},

    	_onNavigationComplete: function(route)
    	{
    		this._setupMenuSelection(route);
    	},

    	_setupMenuSelection: function(route)
    	{
    		this._clearMenuSelection();
    		this._highlightSelection(route);
    	},

    	_clearMenuSelection: function()
    	{
    		var items = this.ui.items;

    		$.each(items, function (index, item)
    		{
    			var itemElement = $(item);

				itemElement.parent().removeClass(Menu.SELECTED_STYLE_NAME);
    		});
    	},

    	_highlightSelection: function(route)
    	{
    		var items = this.ui.items;

    		$.each(items, function (index, item)
    		{
    			var itemElement = $(item);

    			if (itemElement.data('route') == route.name)
    			{
    				itemElement.parent().addClass(Menu.SELECTED_STYLE_NAME);
    			}
    		});
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

		DEFAULT_ROUTE: Route.DASHBOARD,
		SELECTED_STYLE_NAME: 'active'

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

    return Menu;
});
