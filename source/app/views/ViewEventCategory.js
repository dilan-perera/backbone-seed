
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports
		
	var $ = require('jquery');

	//#endregion
		
    var ViewEventCategory = 
    {

    	//#region Enumeration values

    	NONE: {
    		value: 0, name: 'None'
    	},

    	DATABINDING: {
    		value: 1000, name: 'data',
    		Events: {
    			BIND: { value: 1001, name: 'data:bind' },
    			UNBIND: { value: 1002, name: 'data:unbind' }
    		}
    	},

    	NOTIFY: {
    		value: 2000, name: 'notify',
    		Events: {
    			SUCCESS: { value: 2001, name: 'notify:success' },
    			INFORMATION: { value: 2001, name: 'notify:information' },
    			WARNING: { value: 2001, name: 'notify:warning' },
    			ERROR: { value: 2002, name: 'notify:error' }
    		}
    	},
		
    	CULTURE: {
    		value: 3000, name: 'culture',
    		Events: {
    			APPLY: { value: 3001, name: 'culture:apply' },
    			CHANGE: { value: 3002, name: 'culture:change' }
    		}
    	},

    	//#endregion

    };

    ViewEventCategory.fromName = function(name)
    {
    	var viewEventCategory = null;

    	var normalizedKey = viewEventCategory.toUpperCase();

    	if (ViewEventCategory.hasOwnProperty(normalizedKey))
    	{
    		viewEventCategory = ViewEventCategory[normalizedKey];
    	}

    	return viewEventCategory;
    }

    ViewEventCategory = Object.freeze(ViewEventCategory);
	
    return ViewEventCategory;
});
