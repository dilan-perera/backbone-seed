
define(function (require)
{
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports
		
	var $ = require('jquery');

	//#endregion
		
    var Channel = 
    {

    	//#region Enumeration values

    	NONE: {
    		value: 0, name: 'None'
    	},

    	DEFAULT: {
    		value: 1000, name: 'Default',
    		Topics: {

    		}
    	},

    	COMMON: {
    		value: 2000, name: 'Common',
    		Topics: {

    		}
    	},

    	APPLICATION: {
    		value: 3000, name: 'Application',
    		Topics: {
    			TITLE_CHANGE: { value: 3001, name: 'change:title' },
    			VIEW_CHANGED: { value: 3002, name: 'changed:view' },
    			CULTURE_CHANGE: { value: 3003, name: 'change:culture' }
    		}
    	}

    	//#endregion

    };

    Channel.fromName = function(name)
    {
    	var channel = null;

    	var normalizedKey = channel.toUpperCase();

    	if (Channel.hasOwnProperty(normalizedKey))
    	{
    		channel = Channel[normalizedKey];
    	}

    	return channel;
    }

    Channel = Object.freeze(Channel);
	
    return Channel;
});
