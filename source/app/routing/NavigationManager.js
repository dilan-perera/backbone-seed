
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var RoutingTable = require('routing/RoutingTable');

	//#endregion
		
    var NavigationManager = function ()
    {
    }
		
	//#region Constants Member

    NavigationManager.USE_ROUTER = true;

	//#endregion

	//#region Functions - Static Member

    //#region Functions - Static Member - (routes)

    NavigationManager.toDashboard = function()
    {
    	NavigationManager.navigate(RoutingTable.DASHBOARD);
    }

    NavigationManager.toForm = function(id)
    {
    	var data = {
    		id: id
    	};

    	NavigationManager.navigate(RoutingTable.FORM, data);
    }

    NavigationManager.toTabular = function()
    {
    	NavigationManager.navigate(RoutingTable.TABULAR);
    }

    //#endregion

    //#region Functions - Static Member - (helpers)

	NavigationManager.navigate = function(route, data)
	{
		if (NavigationManager.USE_ROUTER)
		{
			if (window.application)
			{
				window.application.navigate(route, data);
			}
		}
		else
		{
			var url = RoutingTable.getUrl(route, data);

			document.location = url;
		}
	}
	
    //#endregion

    //#endregion
	
    return NavigationManager;
});
