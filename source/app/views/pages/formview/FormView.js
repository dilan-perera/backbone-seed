
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

    var ViewTemplate = require('text!views/pages/formview/main.tmpl');
    var Route = require('routing/Route');
    var NavigationManager = require('routing/NavigationManager');
    var Channel = require('messaging/Channel');
    var ViewEventCategory = require('views/ViewEventCategory');
    var DataBinder = require('views/behaviors/DataBinder');
    var EventCleaner = require('views/behaviors/EventCleaner');
    var Notifier = require('views/behaviors/Notifier');
    var Validator = require('views/behaviors/Validator');
    var SampleService = require('services/SampleService');

	//#endregion

    var FormView = Marionette.View.extend({

    	//#region Fields - Instance Member

    	_viewTemplate: ViewTemplate,
		_appChannel: Backbone.Radio.channel(Channel.APPLICATION.name),
    	_sampleService: null,

    	//#endregion

    	//#region Hashes - Instance Member

    	ui:
		{
			'inputName': '#inputName',
			'acceptFormActionButton': '#acceptFormActionButton'
    	},

    	events:
		{
			'click @ui.acceptFormActionButton': '_onAcceptClicked'
		},

    	bindings:
		{
			'#inputName': 'name',
			'#inputEmail': 'email',
			'#inputAge': 'age'
		},

    	behaviors:
		{
			Notifier: {},
			DataBinder: {},
			Validator: {},
			EventCleaner: {}
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
    		this._sampleService = new SampleService();

    		this._setupServiceListeners();

			Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)

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

			Marionette.View.prototype.render.call(this);

			this._attemptDataLoad();

    		return this;
    	},

    	onDestroy: function ()
    	{
    		this._sampleService.destroy();
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
    		this._attemptDataSave();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (services)

    	_onDataRetrievalSuccess: function(data)
    	{
			var dataModel = new Backbone.Model(data);

    		this.model = dataModel;

    		this.triggerMethod(ViewEventCategory.DATABINDING.Events.BIND.name);
    		this.triggerMethod(ViewEventCategory.NOTIFY.Events.SUCCESS.name, 'Success!');
    	},

    	_onDataRetrievalFailure: function(ex)
    	{
    		// TODO: show error message
    		this.triggerMethod(ViewEventCategory.NOTIFY.Events.ERROR.name, 'Fail!');
    	},

    	_onDataSaveSuccess: function(data)
    	{
    		// TODO: show success message
    		this.triggerMethod(ViewEventCategory.NOTIFY.Events.SUCCESS.name, 'Success!');
    	},

    	_onDataSaveFailure: function(ex)
    	{
    		// TODO: show error message
    		this.triggerMethod(ViewEventCategory.NOTIFY.Events.ERROR.name, 'Fail!');
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	//#region Functions - Instance Member - (helpers) - (view management)

    	_setTitle: function()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.TITLE_CHANGE.name, { title: 'Data Form' });
    	},

    	_notifyNavigationCompletion: function()
    	{
    		this._appChannel.request(Channel.APPLICATION.Topics.VIEW_CHANGED.name, { route: Route.FORM });
    	},

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (data binding)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (service operations)

    	_setupServiceListeners: function()
    	{
    		this._sampleService.on('dataRetrievalSuccessful', $.proxy(this._onDataRetrievalSuccess, this));
    		this._sampleService.on('dataRetrievalFailed', $.proxy(this._onDataRetrievalFailure, this));
    		this._sampleService.on('dataSaveSuccessful', $.proxy(this._onDataSaveSuccess, this));
    		this._sampleService.on('dataSaveFailed', $.proxy(this._onDataSaveFailure, this));
    	},

    	_attemptDataLoad: function()
    	{
    		var request = {};

    		this._sampleService.getData(request);
    	},

    	_attemptDataSave: function()
    	{
    		var request = {};

    		this._sampleService.saveData(request);
    	},

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

    return FormView;
});
