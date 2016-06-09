﻿'use strict';

require(['config'], function () {

    require([
        'require-domReady',
        'jquery',
        'underscore',
        'backbone',
        'backbone-marionette',
        'bootstrap',
        'Application'
    ], function (
        domReady,
        $,
        _,
        Backbone,
        Marionette,
        Bootstrap,
        Application)
    {
    	var initializer = function() {
    		var args = {
    			initialData: window.initialData
    		};

    		var application = new Application(args);

    		application.start();
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