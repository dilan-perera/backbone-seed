
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var Marionette = require('backbone.marionette');

	//#endregion
		
    //#region Functions - Instance Member

    //#region Functions - Instance Member - (constructors)

    function ViewManager(view)
    {
    	this._view = null;

    	if (view)
    	{
    		this._view = view;
    	}
    }

	//#endregion

	//#region Functions - Instance Member - (view management services)

    ViewManager.prototype.getUI = function(key)
    {
    	var result = null;

		if (this._view.ui)
		{
    		if (this._view.ui[key])
    		{
    			var selector = this._view.ui[key];

    			result = this.getElement(selector);
    		}
		}

    	return result;
    }

    ViewManager.prototype.getElement = function(selector)
    {
    	return this._view.$el.find(selector);
    }

	//#endregion

	//#endregion

    return ViewManager;
});
