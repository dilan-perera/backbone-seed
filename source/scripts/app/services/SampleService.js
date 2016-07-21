
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

    var Service = require('services/Service');

	//#endregion

    var SampleService = Service.extend({

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function ()
    	{
			Service.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (object lifecycle)

    	initialize: function()
    	{
    		Service.prototype.initialize.call(this);
    	},

    	destroy: function()
    	{
    		Service.prototype.destroy.call(this);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (services)
		
    	getData: function(request)
    	{
    		var successCallback = $.proxy(this._onDataRetrievalSuccessful, this);
    		var failureCallback = $.proxy(this._onDataRetrievalFailure, this);

    		$.ajax({
    			url: '/data/person.json',
				method: 'GET',
			}).done(successCallback).fail(failureCallback);			
    	},

    	_onDataRetrievalSuccessful: function(data, textStatus, jqXHR)
    	{
			this.triggerMethod('dataRetrievalSuccessful', data);
    	},

    	_onDataRetrievalFailure: function(jqXHR, textStatus, errorThrown)
    	{
    		var ex = null;

			// TODO: get exception data

    		this.triggerMethod('dataRetrievalFailed', ex);
    	},

    	saveData: function(request)
    	{
    		var successCallback = $.proxy(this._onDataSaveSuccessful, this);
    		var failureCallback = $.proxy(this._onDataSaveFailure, this);

    		$.ajax({
    			url: '/Services/AdminService/saveData',
				method: 'POST',
			}).done(successCallback).fail(failureCallback);			
    	},

    	_onDataSaveSuccessful: function(data, textStatus, jqXHR)
    	{
			this.triggerMethod('dataSaveSuccessful', data);
    	},

    	_onDataSaveFailure: function(jqXHR, textStatus, errorThrown)
    	{
    		var ex = null;

			// TODO: get exception data

    		this.triggerMethod('dataSaveFailed', ex);
    	},

        getSampleTabularData: function(request)
    	{
    		var successCallback = $.proxy(this._onSampleTabularDataSaveSuccessful, this);
    		var failureCallback = $.proxy(this._onSampleTabularDataSaveFailure, this);

            $.ajax({
    			url: '/Services/AdminService/getSampleTabularData',
    			method: 'POST',
    			contentType: 'application/json; charset=utf-8',
    			dataType: 'json',
                data: JSON.stringify(request)
			}).done(successCallback).fail(failureCallback);			
    	},

    	_onSampleTabularDataSaveSuccessful: function(data, textStatus, jqXHR)
    	{
			this.triggerMethod('sampleTabularDataRetrievalSuccessful', data);
    	},

    	_onSampleTabularDataSaveFailure: function(jqXHR, textStatus, errorThrown)
    	{
    		var ex = null;

			// TODO: get exception data

    		this.triggerMethod('sampleTabularDataRetrievalFailed', ex);
    	}

    	//#endregion

    	//#endregion

    },
	{
		
    	//#region Constants - Static Member

		//#endregion

	});

    return SampleService;
});
