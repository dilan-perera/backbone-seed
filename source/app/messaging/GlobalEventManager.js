
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

	var Channel = require('messaging/Channel');
	var Globalizer = require('globalization/Globalizer');

	//#endregion

    var GlobalEventManager = Marionette.Object.extend({

    	//#region Fields - Instance Member

    	_appChannel: null,

		//#endregion

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function ()
    	{
			Marionette.Object.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (object lifecycle)

    	initialize: function()
    	{
    		this._appChannel = Backbone.Radio.channel(Channel.APPLICATION.name);
    		this._appChannel.reply(Channel.APPLICATION.Topics.CULTURE_CHANGE.name, this._onCultureChangeRequested, this);

    		Marionette.Object.prototype.initialize.call(this);
    	},

    	destroy: function()
    	{
    		Marionette.Object.prototype.destroy.call(this);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)
		
    	_onCultureChangeRequested: function (settings)
    	{
    		Globalizer.setCulture(settings.culture);
    		Globalizer.applyCulture();
    	}

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

    return GlobalEventManager;
});
