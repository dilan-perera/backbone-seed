
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
    		var oldCulture = Globalizer.getCulture();
    		var newCulture = settings.culture;

    		Globalizer.setCulture(newCulture);

    		try
    		{
    			this._appChannel.request(Channel.APPLICATION.Topics.CULTURE_CHANGED.name,
					{
						oldCulture: oldCulture,
						newCulture: newCulture
					});
    		}
    		catch (ex)
    		{
				// NOTE: sink exception - as failure in event handlers might prevent culture being applied 
    		}

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
