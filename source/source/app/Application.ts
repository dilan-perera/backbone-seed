//#region Dependencies

/// <reference path="../_references.ts"/>
/// <reference path="routing/NavigableRouter.ts"/>
/// <reference path="routing/DefaultRouter.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

import RouteImport = require("routing/Route");
import NavigableRouterImport = require("routing/NavigableRouter");
import DefaultRouterImport = require("routing/DefaultRouter");

//#endregion

//#region Aliases

import Route = RouteImport.BackboneSeed.Routing.Route;
import NavigableRouter = NavigableRouterImport.BackboneSeed.Routing.NavigableRouter;
import DefaultRouter = DefaultRouterImport.BackboneSeed.Routing.DefaultRouter;

//#endregion

export namespace BackboneSeed
{

    /**
     * The application.
     */
    export class Application extends Marionette.Application
    {

        //#region Constants

        /**
         * A value specifying whether the HTML5 pushState() feature should be used.
         * @returns A boolean value.
         */
        public static get USE_PUSH_STATE(): boolean { return false; };

        //#endregion

        //#region Fields - Instance Member

        private globalEventManager: any;
        private options: any;

        //#endregion

        //#region Hashes - Instance Member

        private routers: { [id: string] : NavigableRouter } = {};

        //#endregion

        //#region Functions - Instance Member

        //#region Functions - Instance Member - (Application Members)

        //#region Functions - Instance Member - (Application Members) - (constructors)

        /**
         * Creates and initializes a new instance of the
         * Application class.
         * @param {any} options? The options with which the instance is to be created (optional).
         */
        constructor(options?: any)
        {
            super(options);

            this.options = options;
        }

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (application lifecycle)
        
        public onStart()
        {
        	require(["messaging/GlobalEventManager"],
				$.proxy(this.onGlobalEventManagerLoaded, this));
        }

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (callbacks)

        //#region Functions - Instance Member - (Application Members) - (callbacks) - (UI event handlers)

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (callbacks) - (other)
        
        private onGlobalEventManagerLoaded(GlobalEventManagerImport: any): void
        {
			this.globalEventManager = new GlobalEventManagerImport();

			this.boot();
        }

        //#endregion

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (helpers)

        //#region Functions - Instance Member - (Application Members) - (helpers) - (view management)

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (helpers) - (data binding)

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (helpers) - (service invocations)

        //#endregion

        //#region Functions - Instance Member - (Application Members) - (helpers) - (other)

        /**
         * Navigates to the specified route, with the given data.
         * @param {any} route The route to be navigated to.
         * @param {any} data The data to be used in routing (optional).
         */
        public navigate(route: any, data?: any): void
        {
        	let router: NavigableRouter = this.routers[route.router];

        	if (router) 
        	{
        		if (router.processNavigationRequest)
        		{
        			router.processNavigationRequest(route, data);
        		}
        	}
        }

        /**
         * Boots the application.
         */
        private boot(): void
        {
            // TODO: setup behaviors hash in that namespace, to be lazy loaded
        	// window.Behaviors = {};

        	this.routers[DefaultRouter.NAME] = new DefaultRouter({
        		pushState: Application.USE_PUSH_STATE,
        		initialData: this.options.initialData
        	});
			
        	if (Backbone.history)
            {
                if (Backbone.History.started)
                {
                    let historyOptions: Backbone.HistoryOptions = {
                        pushState: Application.USE_PUSH_STATE
                    };

                    Backbone.history.start(historyOptions);
                }
        	}
        }

        //#endregion

        //#endregion

        //#endregion

        //#endregion

    }

}
