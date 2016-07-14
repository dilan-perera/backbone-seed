'use strict';

require(['config'], function () {

    require([
        'domReady',
        'text',
        'i18n',
        'jquery',
        'underscore',
        'backbone',
        'backbone.marionette',
        'backbone.radio-shim',
        'bootstrap'
    ], function (
        domReady,
        text,
        i18n,
        $,
        _,
        Backbone,
        Marionette,
        Radio,
        Bootstrap)
    {
    	require(['jquery-extensions', 'bootstrap'], function ()
    	{
    		require(['bootstrap-material-design'], function ()
    		{
    			domReady(function ()
    			{
    				$(document).ready(function ()
    				{
    					require(['Application'], function (Application)
    					{
    						var args = {
    							initialData: window.initialData
    						};

    						var application = new Application(args);

    						window.application = application;

    						window.application.start();
    					});
    				});
    			});
    		});
    	});
    });
});