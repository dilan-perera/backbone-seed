
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
    var Marionette = require('backbone.marionette');

	//#endregion

    var SidebarRegion = Marionette.Region.extend({

    	//#region Fields - Instance Member

    	el: '#sidebarRegion'
      
    	//#endregion

    });

    return SidebarRegion;
});
