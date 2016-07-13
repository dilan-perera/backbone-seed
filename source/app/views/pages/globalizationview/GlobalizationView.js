
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

    var ViewTemplate = require('text!views/pages/globalizationview/main.tmpl');
    var Route = require('routing/Route');
    var NavigationManager = require('routing/NavigationManager');
    var Channel = require('messaging/Channel');
    var Globalizer = require('globalization/Globalizer');
    var ViewEventCategory = require('views/ViewEventCategory');
    var DataBindingBehavior = require('views/behaviors/DataBindingBehavior');
    var EventCleanupBehavior = require('views/behaviors/EventCleanupBehavior');
    var GlobalizingBehavior = require('views/behaviors/GlobalizingBehavior');
    var NotifyingBehavior = require('views/behaviors/NotifyingBehavior');

	//#endregion

    var GlobalizationView = Marionette.View.extend({

    	//#region Fields - Instance Member

		_viewTemplate: ViewTemplate,
		_appChannel: Backbone.Radio.channel(Channel.APPLICATION.name),

    	//#endregion

		//#region Hashes - Instance Member

		ui:
		{
			'cultureSelectionDataField': '#cultureSelectionDataField',
			'appNameCaptionField': '#appNameCaptionField',
			'acceptFormActionButton': '#acceptFormActionButton'
    	},

    	events:
		{
			'click @ui.acceptFormActionButton': '_onAcceptClicked'
		},

    	bindings:
		{
		},

    	behaviors:
		{
			Globalize: {},
			Notify: {},
			DataBinding: {},
			EventCleanup: {}
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
    		Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
     		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
    		this.$el.html(this.template());
    		this.bindUIElements();

    		this._setTitle();
    		this._notifyNavigationCompletion();
    		this._initializeCulture();
			
    		Marionette.View.prototype.render.call(this);

    		return this;
    	},
		
    	template: function()
    	{
    		return this._viewTemplate;
		},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#region Functions - Instance Member - (callbacks) - (UI event handlers)

    	_onAcceptClicked: function(e)
    	{
    		this._applyCulture();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)

    	_setTitle: function ()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.TITLE_CHANGE.name, { title: 'Views.Globalization.Title' });
    	},

    	_notifyNavigationCompletion: function ()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.VIEW_CHANGED.name, { route: Route.GLOBALIZATION });
    	},

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (data binding)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (service invocations)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (other)

    	_initializeCulture: function()
    	{
    		this.ui.cultureSelectionDataField.val(Globalizer.getCulture());
    	},

    	_applyCulture: function()
    	{
    		var culture = this.ui.cultureSelectionDataField.val();

    		this._appChannel.request(Channel.APPLICATION.Topics.CULTURE_CHANGE.name, { culture: culture });

    		//this.triggerMethod(ViewEventCategory.CULTURE.Events.APPLY.name, culture);
    	}

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

    return GlobalizationView;
});
