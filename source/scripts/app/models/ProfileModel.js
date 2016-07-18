
define(function (require)
{
	//#region Browser Directives

	'use strict';

	//#endregion

	//#region Imports

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var BackboneNested = require('backbone.nested-model');
	var Validation = require('backbone-validation');

	//#endregion

	var ProfileModel = Backbone.NestedModel.extend({

		//#region Fields - Instance Member

		//#endregion

		//#region Hashes - Instance Member

		defaults: function()
		{
			return {
				'name': '',
				'email': '',
				'age': 0
			};
		},

		events:
		{
		},

		validation: function ()
		{
			return {
				name:
				{
					required: true
				},
				email: 
				{
					required: true,
					pattern: 'email'
				},
				age: 
				{
					required: false,
					range: [18, 100]
				}
			}
		},
		
		//#endregion
		
		//#region Functions - Instance Member

		//#region Functions - Instance Member - (constructors)

		constructor: function()
		{
			Backbone.NestedModel.apply(this, arguments);
		},

		//#endregion

		//#region Functions - Instance Member - (getters/setters)

		//#endregion

		//#region Functions - Instance Member - (model lifecycle)

		initialize: function()
		{
			Backbone.NestedModel.prototype.initialize.call(this);
		},
		
		//#endregion

		//#region Functions - Instance Member - (callbacks)

		//#region Functions - Instance Member - (callbacks) - (model event handlers)

		getName: function()
		{
			return this.get('name');
		},

		setName: function(value)
		{
			this.set('name', value);
		},
		
		getEmail: function()
		{
			return this.get('email');
		},

		setEmail: function(value)
		{
			this.set('email', value);
		},
		
		getAge: function()
		{
			return this.get('age');
		},

		setAge: function(value)
		{
			this.set('age', value);
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

	return ProfileModel;
});
