
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

	var Route = require('routing/Route');
	var DefaultRouter = require('routing/DefaultRouter');
	var GlobalEventManager = null;

	//#endregion

	var Application = Marionette.Application.extend({

		_globalEventManager: null,

		routers:
		{
		},

		constructor: function (options)
		{
			this.options = options;

			Marionette.Application.prototype.constructor.call(this);
		},

		initialize: function ()
		{
		},

		onStart: function ()
		{
			var thisScope = this;

			require(['messaging/GlobalEventManager'],
				function (GlobalEventManagerType)
				{
					GlobalEventManager = GlobalEventManagerType;

					thisScope._globalEventManager = new GlobalEventManager();

					thisScope._boot();
				});
		},

		_boot: function ()
		{
			window.Behaviors = {};

			this.routers[DefaultRouter.NAME] = new DefaultRouter({
				pushState: Application.USE_PUSH_STATE,
				initialData: this.options.initialData
			});

			if (Backbone.history)
			{
				if (!(Backbone.history.started))
				{
					Backbone.history.start({ pushState: Application.USE_PUSH_STATE });
				}
			}
		},

		navigate: function (route, data)
		{
			var router = this.routers[route.router];

			if (router)
			{
				if (router.processNavigationRequest)
				{
					router.processNavigationRequest(route, data);
				}
			}
		}

	},
	{
		USE_PUSH_STATE: false
	});

	Marionette.Behaviors.behaviorsLookup = function ()
	{
		return window.Behaviors;
	}

	return Application;
});
