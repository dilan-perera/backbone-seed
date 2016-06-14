
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

    var Notifier = Marionette.Behavior.extend(
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

		//#region Functions - Instance Member - (behavior methods)

		onNotifySuccess: function (message, title)
		{
			debugger;
			Notification.showSuccess(message, title);
		},

		onNotifyInformation: function (message, title)
		{
			Notification.showInformation(message, title);
		},

		onNotifyWarning: function (message, title)
		{
			Notification.showWarning(message, title);
		},

		onNotifyError: function (message, title)
		{
			Notification.showError(message, title);
		}

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers)

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

	window.Behaviors.Notifier = Notifier;

    return Notifier;
});
