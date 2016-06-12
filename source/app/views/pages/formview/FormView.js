
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var ViewTemplate = require('text!views/pages/formview/main.tmpl');
    var EventManager = require('views/EventManager');
    var NavigationManager = require('routing/NavigationManager');
    var SampleService = require('services/SampleService');

	//#endregion

    var FormView = Marionette.View.extend({

    	//#region Fields - Instance Member

    	_viewTemplate: ViewTemplate,
    	_eventManager: null,
    	_sampleService: null,

    	//#endregion

    	//#region Hashes - Instance Member

    	ui:
		{
			'acceptFormActionButton': '#acceptFormActionButton'
    	},

    	events:
		{
			'click @ui.acceptFormActionButton': '_onAcceptClicked'
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
    		this._sampleService = new SampleService();

    		this._sampleService.on('dataSaveSuccessful', $.proxy(this._onDataSaveSuccess, this));
    		this._sampleService.on('dataSaveFailed', $.proxy(this._onDataSaveFailure, this));

			Marionette.View.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (view lifecycle)

    	initialize: function()
    	{
    		this._eventManager = new EventManager(this);

    		Marionette.View.prototype.initialize.call(this);
    	},

    	render: function ()
    	{
			this.$el.html(this.template());

    		Marionette.View.prototype.render.call(this);

    		return this;
    	},

    	close: function ()
    	{
    		Marionette.View.prototype.destroy.call(this);

    		this._sampleService.destroy();
    		this._eventManager.destroy();
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
    		debugger;
    		this._attemptDataSave();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (services)

    	_onDataSaveSuccess: function(data)
    	{
    		// TODO: show success message
     		alert('Success!');
   		},

    	_onDataSaveFailure: function(ex)
    	{
    		// TODO: show error message
    		alert('Error!');
    	},

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

    	_attemptDataSave: function()
    	{
    		var request = {};

    		this._sampleService.saveData(request);
		}

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
