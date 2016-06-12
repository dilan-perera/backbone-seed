
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var Marionette = require('backbone-marionette');

	//#endregion
		
    //#region Functions - Instance Member

    //#region Functions - Instance Member - (constructors)

    function EventManager(view)
    {
    	this._view = null;

    	if (view)
    	{
    		this._view = view;
    	}
    }

	//#endregion

	//#region Functions - Instance Member - (event management services)

    EventManager.prototype.destroy = function()
    {
    	if (this._view.model)
    	{
    		this._view.model.off(null, null, this);
    		this._view.model = null;
    	}

    	this._view.remove();
    	this._view.unbind();
    	this._view.undelegateEvents();

    	this._view.$el.remove();
    	this._view.$el.unbind();

    	this._view.$el.empty();
    }

	//#endregion

	//#endregion

    return EventManager;
});
