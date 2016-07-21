
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
    var DataTables = require('datatables.net');

    var ViewTemplate = require('text!views/pages/tabularview/main.tmpl');
    var Route = require('routing/Route');
    var NavigationManager = require('routing/NavigationManager');
    var Channel = require('messaging/Channel');
    var ViewEventCategory = require('views/ViewEventCategory');
    var DataBindingBehavior = require('views/behaviors/DataBindingBehavior');
    var EventCleanupBehavior = require('views/behaviors/EventCleanupBehavior');
    var NotifyingBehavior = require('views/behaviors/NotifyingBehavior');
    var ValidationBehavior = require('views/behaviors/ValidationBehavior');
    var SampleService = require('services/SampleService');

	//#endregion

    var TabularView = Marionette.View.extend({

    	//#region Fields - Instance Member

        _viewTemplate: ViewTemplate,
        _sampleDataTable: null,
        _sampleService: null,
        _sampleDataTablesResponseCallback: null,

    	//#endregion

		//#region Hashes - Instance Member

		ui:
        {
            "sampleTable": "#sampleTable"
    	},

    	events:
		{
		},

		//#endregion
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function()
    	{
    		this._sampleService = new SampleService();

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
    	    Marionette.View.prototype.render.call(this);

    	    this.$el.html(this.template());
    		this.bindUIElements();

    		this._setupServiceListeners();
    	    this._setupSampleDataTable();
    	    this._loadSampleTabularData();

    		return this;
    	},

    	template: function()
    	{
    		return this._viewTemplate;
		},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks)

    	//#region Functions - Instance Member - (callbacks) - (UI event handlers)

    	onDestroy: function ()
    	{
    		this._sampleService.destroy();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (callbacks) - (other)

    	//#endregion

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

        //#region Functions - Instance Member - (helpers) - (view management)

        _setupSampleDataTable: function()
        {
            var dataRetrievalCallback = $.proxy(this._onSampleTabularDataRequired, this);

            this._sampleDataTable = this.ui.sampleTable.DataTable({
                "serverSide": true,
                "deferLoading": true,
                "ajax": dataRetrievalCallback
            });
        },

    	_loadSampleTabularData: function()
    	{
    	    this._sampleDataTable.ajax.reload();
    	},

        _onSampleTabularDataRequired: function(data, callback, settings)
        {
            this._sampleDataTablesResponseCallback = callback;

            // NOTE: https://datatables.net/reference/option/ajax.data

            var extendedData = $.extend({}, data, 
                {
                    "itemX": "y"
                });

            this._sampleService.getSampleTabularData(extendedData);
        },

        _onSampleTabularDataRetrievalSuccess: function(data)
        {
            if (this._sampleDataTablesResponseCallback)
            {
                this._sampleDataTablesResponseCallback(data);
            }
        },

        _onSampleTabularDataRetrievalFailure: function(ex)
        {
            this.triggerMethod(ViewEventCategory.NOTIFY.Events.ERROR.name, 'Fail!');
        },

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (data binding)

    	//#endregion
		
    	//#region Functions - Instance Member - (helpers) - (service invocations)

    	_setupServiceListeners: function()
    	{
    		this._sampleService.on('sampleTabularDataRetrievalSuccessful', $.proxy(this._onSampleTabularDataRetrievalSuccess, this));
    		this._sampleService.on('sampleTabularDataRetrievalFailed', $.proxy(this._onSampleTabularDataRetrievalFailure, this));
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

    return TabularView;
});
