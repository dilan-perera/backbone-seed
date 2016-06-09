
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone-marionette');

    var ContentRegion = require('regions/ContentRegion');
    var SidebarRegion = require('regions/SidebarRegion');
    var LayoutRegion = require('regions/LayoutRegion');

	//#endregion

    var DefaultController = Marionette.Controller.extend({
		
    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

        constructor: function (options) {
            this.options = options;

            Marionette.Controller.prototype.constructor.call(this);
        },

		//#endregion

    	//#region Functions - Instance Member - (router lifecycle management)

        initialize: function () {

            this.options.regionManager = new Marionette.RegionManager({
                regions: {
                    header: '#header',
                    content: {
                        selector: "#content",
                        regionClass: ContentRegion
                    },
                    sidebar: {
                        selector: "#sidebar",
                        regionClass: SidebarRegion
                    },
                    layout: {
                        selector: "#layout",
                        regionClass: LayoutRegion
                    },
                    footer: '#footer',
                    notification: {
                        selector: "#notification"
                        //regionClass: NotifyRegion
                    },
                    dialog: {
                        selector: "#dialog"
                        //regionClass: DialogRegion
                    }
                }
            });

            var initialData = this.getOption('initialData');

            this.showDefault(initialData);
        },

    	//#endregion

    	//#region Functions - Instance Member - (routing)

        showDefault: function (options) {
            //var layout = this.getOption('layout');
            //layout.triggerMethod('show:blog:list');
        },

        showDashboard: function () {
            //var layout = this.getOption('layout');
            //layout.triggerMethod('show:blog:entry', entry);
        },

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

        showView: function (viewName, options, isSubView) {
            if (!(this.options.content)) {
                this.options.content = this.options.regionManager.get('content');
            }

            require(viewName, function (View) {
                var view = new View(options);

                if (isSubView)
                {
                    this.options.content.showChild(view);
                }
                else
                {
                    this.options.content.show(view);
                }
            });
        }

    	//#endregion

    	//#endregion

    },
    {

    	//#region Constants - Static Member

        DEFAULT_VIEW_NAME: ''

    	//#endregion

    });

    return DefaultController;
});




