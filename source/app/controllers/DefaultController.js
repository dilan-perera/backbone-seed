
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var DefaultLayout = require('layouts/DefaultLayout');

	//#endregion

    var DefaultController = Marionette.Controller.extend({
		
    	//#region Fields - Instance Member

		layout: null,

    	//#endregion

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

		constructor: function (options)
		{
        	this.options = options;

            Marionette.Controller.prototype.constructor.call(this);
        },

		//#endregion

    	//#region Functions - Instance Member - (router lifecycle management)

        initialize: function ()
        {
        	this.layout = new DefaultLayout();
        },

    	//#endregion

    	//#region Functions - Instance Member - (routing)

        showDefault: function (options)
        {
        	this._showView('show:default', options);
        },

        showDashboard: function ()
        {
        	this._showView('show:dashboard', {});
        },

        showForm: function ()
        {
        	this._showView('show:form', {});
        },

        showGlobalization: function ()
        {
        	this._showView('show:globalization', {});
        },

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

        _showView: function (viewEvent, options)
        {
        	this.layout.triggerMethod(viewEvent);
        }

    	//#endregion

    	//#endregion

    },
    {

    	//#region Constants - Static Member

        NAME: 'Default'

    	//#endregion

    });

    return DefaultController;
});




