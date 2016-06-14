﻿
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
    var Radio = require('backbone.radio');

    var Channel = require('messaging/Channel');

	//#endregion

    var Header = Marionette.View.extend({

    	//#region Fields - Instance Member

		el: '#header',
		_appChannel: Backbone.Radio.channel(Channel.APPLICATION.name),

    	//#endregion

		//#region Hashes - Instance Member

    	ui:
		{
			'viewTitle': '#viewTitle',
			'offcanvasToggleButton': '[data-toggle=offcanvas]',
			'offcanvasRow': '.row-offcanvas'
    	},

    	events:
		{
			'click @ui.offcanvasToggleButton': '_onOffCanvasMenuToggled'
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
			Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
    		this._appChannel.reply(Channel.APPLICATION.Topics.TITLE_CHANGE.name, this._onTitleChangeRequested, this);

    		this.render();

    		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
    		Marionette.View.prototype.render.call(this);

    		this.bindUIElements();

    		return this;
    	},

    	template: function()
    	{
    		return this._viewTemplate;
		},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#region Functions - Instance Member - (callbacks) - (UI event handlers)

    	_onOffCanvasMenuToggled: function(e)
    	{
			this.ui.offcanvasRow.toggleClass('active');
    	},

    	_onTitleChangeRequested: function(request)
    	{
    		if (request)
    		{
    			if (request.useDistinctTitles)
    			{
    				if (request.title)
    				{
    					this.ui.viewTitle.text(request.title);
					}

    				if (request.windowTitle)
    				{
    					document.title = request.windowTitle;
    				}
    			}
				else
    			{
    				if (request.title)
    				{
    					this.ui.viewTitle.text(request.title);
    					document.title = request.title;
					}
    			}
    		}
    	}

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (data binding)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (service invocations)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (other)

    	//#endregion

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

	//#region Module Prototypes

	//#endregion

    return Header;
});
