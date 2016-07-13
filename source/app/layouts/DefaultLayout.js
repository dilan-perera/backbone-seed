
define(function (require) {
	//#region Browser Directives

    'use strict';

	//#endregion

	//#region Imports

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var Route = require('routing/Route');
    var Header = require('views/widgets/header/Header');
    var Content = require('views/widgets/content/Content');
    var Footer = require('views/widgets/footer/Footer');
    var ContentRegion = require('regions/ContentRegion');
    var SidebarRegion = require('regions/SidebarRegion');

	//#endregion

    var DefaultLayout = Marionette.LayoutView.extend({
		
    	//#region Fields - Instance Member

		_header: null,
		_content: null,
		_footer: null,
		_sidebarView: null,
    	_contentView: null,

		//#endregion

    	//#region Functions - Instance Member

    	//#region Functions - Instance Member - (constructors)

    	constructor: function (options)
    	{
            this.options = options;

            Marionette.LayoutView.prototype.constructor.call(this);
        },

		//#endregion

    	//#region Functions - Instance Member - (constructors)

        _getSidebarRegion: function()
        {
        	return this.getRegion('sidebar');
        },

        _getContentRegion: function()
        {
        	return this.getRegion('content');
        },

    	//#endregion

    	//#region Functions - Instance Member - (router lifecycle management)

        initialize: function ()
        {
        	this._header = new Header();
        	this._content = new Content();
        	this._footer = new Footer();

        	this.addRegion('sidebar', {
        		regionClass: SidebarRegion
        	});

        	this.addRegion('content', {
        		regionClass: ContentRegion
        	});
        },

    	//#endregion

    	//#region Functions - Instance Member - (layout events)

        onShowDefault: function (initialData)
        {
        	this._showView(
				Route.DASHBOARD.viewPath,
				initialData,
				'views/widgets/menu/Menu',
				initialData);
        },

        onShowDashboard: function(initialData)
        {
        	this._showView(
				Route.DASHBOARD.viewPath,
				initialData,
				'views/widgets/menu/Menu',
				initialData);
        },

        onShowForm: function(initialData)
        {
        	this._showView(
				Route.FORM.viewPath,
				initialData,
				'views/widgets/menu/Menu',
				initialData);
        },

        onShowGlobalization: function(initialData)
        {
        	this._showView(
				Route.GLOBALIZATION.viewPath,
				initialData,
				'views/widgets/menu/Menu',
				initialData);
        },

    	//#endregion

    	//#region Functions - Instance Member - (helpers)

    	_showView: function(contentViewPath, contentOptions, sidebarViewPath, sidebarOptions)
    	{
    		var thisScope = this;

    		var regionViewLoader = function (region, View, options)
    		{
    			var view = null;

    			if (options)
    			{
    				view = new View(options);
    			}
    			else
    			{
    				view = new View();
    			}

    			if (view != null)
    			{
    				region.show(view);
    			}

    			return view;
    		}

    		if ((sidebarViewPath) && (contentViewPath))
    		{
    			require([sidebarViewPath, contentViewPath],
					function (SidebarView, ContentView)
					{
    					var sidebarRegion = thisScope._getSidebarRegion();
    					var contentRegion = thisScope._getContentRegion();

						if (thisScope._sidebarView == null)
						{
							thisScope._sidebarView = regionViewLoader(sidebarRegion, SidebarView, sidebarOptions);
						}

						if (thisScope._contentView)
						{
							//thisScope._contentView.close();
						}

						thisScope._contentView = regionViewLoader(contentRegion, ContentView, contentOptions);
					});
    		}
			else if (contentViewPath)
    		{
				require([contentViewPath],
					function (ContentView)
					{
						var contentRegion = thisScope._getContentRegion();

						if (thisScope._contentView)
						{
							thisScope._contentView.close();
						}

						thisScope._contentView = regionViewLoader(contentRegion, ContentView, contentOptions);
					});
    		}
			else if (contentView)
			{
				require([sidebarViewPath],
					function (SidebarView)
					{
						var sidebarRegion = thisScope._getSidebarRegion();

						if (this._sidebarView == null)
						{
							thisScope._sidebarView = regionViewLoader(sidebarRegion, SidebarView, sidebarOptions);
						}
					});
    		}
		}

    	//#endregion

    	//#endregion

    },
    {

    	//#region Constants - Static Member

    	//#endregion

    });

    return DefaultLayout;
});




