
const APP_DEFAULT_CULTURE = 'en';

define(['require',
	'text!globalization/res/' + APP_DEFAULT_CULTURE + '.json'],
	function (require,
		AppDefaultCulture)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var DefaultCulture = AppDefaultCulture;

    const COOKIE_NAME = 'BackboneSeed_Culture';

	//#endregion

	var Globalizer = {

    	//#region Functions - Instance Member

    	_currentCulture: APP_DEFAULT_CULTURE,

    	//#endregion

    	//#region Hashes - Instance Member

    	cultures:
		{

		},

    	//#endregion

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function ()
    	{
			Marionette.Object.apply(this, arguments);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (getters/setters)

    	getCulture: function()
    	{
    		return this._currentCulture;
    	},

    	setCulture: function(culture)
    	{
    		if (Globalizer.MUST_USE_ASYNC_CULTURE_CHANGE)
    		{
				// TODO: implement
    		}
    		else
    		{
    			var cultureContainer = this._getCultureContainer(culture);

    			if (cultureContainer != null)
    			{
    				this._currentCulture = culture;

    				this._saveCulturePreference();

    				if (Globalizer.MUST_AUTO_APPLY_CULTURE_ON_CHANGE)
    				{
    					this._applyCulture(this._currentCulture, null);
    				}
    			}
    		}
    	},

    	getLanguage: function()
    	{
    		var container = null;

    		if (this.cultures[this._currentCulture] != null)
    		{
    			let cultureContent = this.cultures[this._currentCulture];

    			if (cultureContent != null)
    			{
    				container = cultureContent.resource.lang;
    			}
    		}

    		return container;
    	},

    	//#endregion

    	//#region Functions - Instance Member - (object lifecycle)

    	initialize: function()
    	{
    		this.cultures[APP_DEFAULT_CULTURE] = JSON.parse(DefaultCulture);

    		Marionette.Object.prototype.initialize.call(this);

    		this._loadCulturePreference();
    	},

    	destroy: function()
    	{
    		this._saveCulturePreference();

    		Marionette.Object.prototype.destroy.call(this);
    	},

    	//#endregion

    	//#region Functions - Instance Member - (globalization)
		
    	applyCulture: function(target)
    	{
    		this._applyCulture(this._currentCulture, target);
    	},

    	getString: function(key, culture)
    	{
    		let text = '';

    		let resourceKey = key;
    		let validatedCulture = this._getValidatedCulture(culture);

    		text = this._getValue(resourceKey, validatedCulture, Globalizer.SECTION_LANG_STRING);

    		if (!(text))
    		{
    			text = '';
    		}

    		return text;
    	},

    	saveCulturePreference: function()
    	{
    		this._saveCulturePreference();
    	},

    	//#endregion

    	//#region Functions - Instance Member - (helpers)
		
    	_loadCulturePreference: function(cookieName)
		{
    		var validatedCookieName = this._getValidatedCookieName(cookieName);

    		var culture = $.fn.readCookie(validatedCookieName);
			
    		if (culture)
    		{
				// NOTE: special case, due to value being returned from the $.fn.readCookie call
    			if (culture == 'null')
    			{
    				culture = APP_DEFAULT_CULTURE;
    			}
    		}
    		else
			{
    			culture = APP_DEFAULT_CULTURE;
    		}
    		
    		this.setCulture(culture);
    	},
		
    	_saveCulturePreference: function(cookieName)
    	{
    		var validatedCookieName = this._getValidatedCookieName(cookieName);

    		$.fn.setCookie(validatedCookieName, this._currentCulture);
    	},

    	_getValidatedCookieName: function(cookieName)
    	{
    		var validatedCookieName = COOKIE_NAME;

    		if (cookieName)
    		{
    			validatedCookieName = cookieName;
    		}

    		return validatedCookieName;
    	},
		
    	_getValidatedCulture: function(culture)
    	{
    		var validatedCulture = this._currentCulture;

    		if (culture)
    		{
    			validatedCulture = culture;
    		}

    		return validatedCulture;
    	},

    	_getCultureContainer: function(culture)
    	{
    		var cultureContainer = null;

    		var validatedCulture = this._getValidatedCulture(culture);

    		if (!(this.cultures[validatedCulture]))
    		{
    			this.cultures[validatedCulture] = this._downloadCultureResourcePack(culture);
    		}

    		cultureContainer = this.cultures[validatedCulture];

    		return cultureContainer;
    	},

    	_downloadCultureResourcePack: function(culture)
    	{
    		var resource = null;

    		var ajaxSettings = {
    			type: 'GET',
    			url: 'app/globalization/res/' + culture + '.json' + '?' + 'v=' + VERSION,
    			async: false
    		};

			$.ajax(ajaxSettings).success(function (data, textStatus, jqXHR)
			{
				resource = jqXHR.responseJSON;
			});

    		return resource;
    	},
		
    	_getValue: function(resourceKey, culture, type)
    	{
    		var value = '';

    		var validatedCulture = this._getValidatedCulture(culture);
    		var cultureContainer = this._getCultureContainer(culture);

    		if (type)
    		{
    			switch (type)
    			{
    				case Globalizer.SECTION_LANG_STRING:
    					cultureContainer = cultureContainer.resource.lang.strings;
    					break;
    				default:
    					cultureContainer = cultureContainer.resource.lang.strings;
    					break;
    			}
    		}
    		else
    		{
    			cultureContainer = cultureContainer.resource.lang.strings;
    		}

    		if (cultureContainer)
    		{
    			value = $.fn.getObject(cultureContainer, resourceKey);
    		}

    		return value;
    	},

    	_applyCulture: function(culture, target)
    	{
    		var targetElement = null;

    		if (target)
    		{
    			targetElement = $(target);
    		}
    		else
    		{
    			targetElement = $(document);
    		}

    		// apply to text
    		this._processResourceType(targetElement, Globalizer.DATA_ATTRIBUTE_TEXT, culture, null, $.proxy(this._setText, this));
			
    		// apply to HTML
    		this._processResourceType(targetElement, Globalizer.DATA_ATTRIBUTE_HTML, culture, null, $.proxy(this._setHtml, this));

    		// apply to placeholders
    		this._processResourceType(targetElement, Globalizer.DATA_ATTRIBUTE_PLACEHOLDER, culture, null, $.proxy(this._setWatermark, this));

    		// apply to tooltips
    		this._processResourceType(targetElement, Globalizer.DATA_ATTRIBUTE_TOOLTIP, culture, null, $.proxy(this._setTooltip, this));

    		// apply to values
    		this._processResourceType(targetElement, Globalizer.DATA_ATTRIBUTE_VALUE, culture, null, $.proxy(this._setValue, this));		
    	},

    	_processResourceType: function(targetElement, attributeSelector, culture, section, callback)
    	{
    		var thisScope = this;

    		targetElement.find('[' + attributeSelector + ']').each(function (index, element)
    		{
    			var el = $(element);

    			let key = el.attr(attributeSelector);

    			if (key)
    			{
    				let value = thisScope._getValue(key, culture, Globalizer.SECTION_LANG_STRING);

    				if (!(value))
    				{
    					value = '';
    				}

    				if (callback)
    				{
    					callback(el, value);
    				}
				}
			});
    	},
				
    	_setValue: function(element, value)
    	{
    		element.val(value);
    	},
				
    	_setHtml: function(element, value)
    	{
    		element.html(value);
    	},

    	_setText: function(element, value)
    	{
    		element.text(value);
    	},
		
    	_setTooltip: function(element, value)
    	{
    		element.attr('title', value);
    	},

    	_setWatermark: function(element, value)
    	{
    		element.attr('placeholder', value);
    	}

    	//#endregion

    	//#endregion

    }

    Globalizer.DEFAULT_CULTURE = APP_DEFAULT_CULTURE;
    Globalizer.MUST_USE_ASYNC_CULTURE_CHANGE = false;
    Globalizer.MUST_AUTO_APPLY_CULTURE_ON_CHANGE = false;
    Globalizer.SECTION_LANG_STRING = 'l.s';
    Globalizer.DATA_ATTRIBUTE_TEXT = 'data-i18n-t';
    Globalizer.DATA_ATTRIBUTE_VALUE = 'data-i18n-v';
    Globalizer.DATA_ATTRIBUTE_HTML = 'data-i18n-h';
    Globalizer.DATA_ATTRIBUTE_TOOLTIP = 'data-i18n-tt';
    Globalizer.DATA_ATTRIBUTE_PLACEHOLDER = 'data-i18n-ph';

    var GlobalizerWrapper = Marionette.Object.extend(Globalizer);

    if (!(window.Singletons))
    {
    	window.Singletons = {};
    }

    if (!(window.Singletons.Globalizer))
    {
    	window.Singletons.Globalizer = new GlobalizerWrapper();
	}

	// ensure singleton instance is returned
    return window.Singletons.Globalizer;
});
