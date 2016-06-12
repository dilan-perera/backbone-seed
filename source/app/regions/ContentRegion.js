
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var exports = require('exports');
    var module = require('module');
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');
    var Stickit = require('backbone-stickit');

	//#endregion

    var ContentRegion = Marionette.Region.extend({

    	//#region Fields - Instance Member

    	el: '#contentRegion'
      
    	//#endregion

    });

    return ContentRegion;
});
