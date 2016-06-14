
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
	var Notification = require('views/widgets/notification/Notification');

	//#endregion

    var NotifyingBehavior = Marionette.Behavior.extend(
	{

    	//#region Fields - Instance Member

    	//#endregion

    	//#region Hashes - Instance Member

    	ui:
		{
    	},

    	events:
		{
		},
		
		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
			Marionette.Behavior.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
    		Marionette.Behavior.prototype.initialize.call(this);
    	},

    	//#endregion

		//#region Functions - Instance Member - (callbacks)

		onNotifySuccess: function (message, title)
		{
			this._notifySuccess(message, title);
		},

		onNotifyInformation: function (message, title)
		{
			this._notifyInformation(message, title);
		},

		onNotifyWarning: function (message, title)
		{
			this._notifyWarning(message, title);
		},

		onNotifyError: function (message, title)
		{
			this._notifyError(message, title);
		},

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers)

		_notifySuccess: function (message, title)
		{
			Notification.showSuccess(message, title);
		},

		_notifyInformation: function (message, title)
		{
			Notification.showInformation(message, title);
		},

		_notifyWarning: function (message, title)
		{
			Notification.showWarning(message, title);
		},

		_notifyError: function (message, title)
		{
			Notification.showError(message, title);
		}

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

	window.Behaviors.Notify = NotifyingBehavior;

    return NotifyingBehavior;
});
