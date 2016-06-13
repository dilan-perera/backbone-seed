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
        'bootstrap',
        'Application'
    ], function (
        domReady,
        text,
        i18n,
        $,
        _,
        Backbone,
        Marionette,
        Radio,
        Bootstrap,
        Application)
    {
    	var initializer = function() {
    		var args = {
    			initialData: window.initialData
    		};

    		var application = new Application(args);

    		window.application = application;

    		window.application.start();
    	};

    	require(['bootstrap'], function ()
    	{
    		require(['bootstrap-material-design'], function ()
    		{
    			domReady(function ()
    			{
    				$(document).ready(function ()
    				{
    					initializer();
    				});
    			});
    		});
    	});
    });
});