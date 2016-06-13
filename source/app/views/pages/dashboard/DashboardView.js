
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

    var ViewTemplate = require('text!views/pages/dashboard/main.tmpl');
    var Route = require('routing/Route');
    var NavigationManager = require('routing/NavigationManager');
    var Channel = require('messaging/Channel');
    var EventManager = require('views/EventManager');

	//#endregion

    var DashboardView = Marionette.View.extend({

    	//#region Fields - Instance Member

		_viewTemplate: ViewTemplate,
    	_eventManager: null,
		_appChannel: Backbone.Radio.channel(Channel.APPLICATION.name),

    	//#endregion

		//#region Hashes - Instance Member

    	ui: {
    	},

    	events:
		{
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
			Marionette.View.apply(this, arguments);
    	},

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

			this._setTitle();
			this._notifyNavigationCompletion();

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

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)
		
    	_setTitle: function()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.TITLE_CHANGE.name, { title: 'Dashboard' });
    	},

    	_notifyNavigationCompletion: function()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.VIEW_CHANGED.name, { route: Route.DASHBOARD });
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

    return DashboardView;
});
