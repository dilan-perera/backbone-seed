
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports
		
	var $ = require('jquery');

	//#endregion
		
    var Route = 
    {

    	//#region Enumeration values

    	NONE: {
    		value: 0, name: 'None',
    		path: null, controller: null, action: null,
    		router: null, baseUrl: null,
    		viewName: null, viewPath: null
    	},

    	DEFAULT: {
    		value: 1, name: 'Default',
    		path: '', controller: 'Default', action: 'showDefault',
    		router: 'Default', baseUrl: '',
    		viewName: null, viewPath: null
    	},

    	DASHBOARD: {
    		value: 2, name: 'Dashboard',
    		path: 'dashboard', controller: 'Default', action: 'showDashboard',
    		router: 'Default', baseUrl: 'dashboard',
			viewName: 'DashboardView', viewPath: 'views/pages/dashboard/DashboardView'
    	},

    	FORM: {
    		value: 3, name: 'Form',
    		path: 'form', controller: 'Default', action: 'showForm',
    		router: 'Default', baseUrl: 'form',
			viewName: 'FormView', viewPath: 'views/pages/formview/FormView'
    	},

    	TABULAR: {
    		value: 4, name: 'Tabular',
    		path: 'tabular', controller: 'Default', action: 'showTabular',
    		router: 'Default', baseUrl: 'tabular',
			viewName: 'TabularView', viewPath: 'views/pages/tabularview/TabularView'
    	},

    	GLOBALIZATION: {
    		value: 5, name: 'Globalization',
    		path: 'globalization', controller: 'Default', action: 'showGlobalization',
    		router: 'Default', baseUrl: 'globalization',
			viewName: 'GlobalizationView', viewPath: 'views/pages/globalizationview/GlobalizationView'
    	},

    	//#endregion

    };

    Route.fromName = function(name)
    {
    	var route = null;

    	var normalizedKey = name.toUpperCase();

    	if (Route.hasOwnProperty(normalizedKey))
    	{
    		route = Route[normalizedKey];
    	}

    	return route;
    }

    Route.getUrl = function (route, data)
    {
    	var url = '';

    	var baseUrl = route.baseUrl;

    	//url += '#';

    	if (baseUrl)
    	{
    		url += baseUrl;
    	}

    	if (data)
    	{
    		var params = $.param(data);

    		if (params)
    		{
    			url += '?';
    			url += params;
    		}
    	}

    	return url;
    }

    Route = Object.freeze(Route);
	
    return Route;
});
