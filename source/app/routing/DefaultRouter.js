﻿
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var RoutingTable = require('routing/RoutingTable');
    var DefaultController = require('controllers/DefaultController');

	//#endregion

    var DefaultRouter = Marionette.AppRouter.extend({

		//#region Hashes - Instance Member

    	appRoutes:
		{
        },

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

        constructor: function (options) {
            this.options = options;

            this._setupController(DefaultController);

            Marionette.AppRouter.prototype.constructor.call(this);
        },

    	//#endregion

    	//#region Functions - Instance Member - (router lifecycle management)

        initialize: function ()
        {
        	debugger;
        },

    	//#endregion

    	//#region Functions - Instance Member - (route management)

        processNavigationRequest: function(route, data)
        {
        	debugger;
        	var url = RoutingTable.getUrl(route, data);

			//Backbone.history.navigate(url,{ trigger:true, replace: true })
        	this.navigate(url, { trigger: true });
        },

    	_setupController: function(ControllerType)
    	{
    		if (ControllerType)
    		{
    			this.controller = new ControllerType(this.options);

    			for (var routeKey in RoutingTable)
    			{
    				if (RoutingTable.hasOwnProperty(routeKey))
    				{
    					var route = RoutingTable[routeKey];

    					if (route)
    					{
    						if (ControllerType.NAME)
    						{
    							if (route.controller == ControllerType.NAME)
    							{
    								if (this.controller[route.action])
    								{
    									this.appRoute(route.path, route.action);
    								}
    							}
    						}
    					}
    				}
    			}
    		}
		}

    	//#endregion

    	//#endregion

    },
	{

    	//#region Constants - Static Member

        NAME: 'Default'

    	//#endregion

	});

    return DefaultRouter;
});