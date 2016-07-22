//#region Dependencies

/// <reference path="../../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

import ApplicationImport = require("Application");
import RouteImport = require("views/routing/Route");
import RouteDataImport = require("views/routing/RouteData");
import NavigatorImport = require("views/routing/Navigator");

//#endregion

//#region Aliases

import Application = ApplicationImport.BackboneSeed.Application;
import Route = RouteImport.BackboneSeed.Routing.Route;
import RouteData = RouteDataImport.BackboneSeed.Routing.RouteData;
import Navigator = NavigatorImport.BackboneSeed.Routing.Navigator;

//#endregion

export namespace BackboneSeed.Routing
{

    /**
     * Manages navigation operations.
     */
    export class NavigationManager
    {

        //#region Constants - Static Member

        public static get USE_ROUTER(): boolean { return false };

        //#endregion

        //#region Functions - Static Member

        //#region Functions - Static Member - (navigation)

        public static toDashboard(): void
        {
    	    NavigationManager.navigate(Route.DASHBOARD);
        }

        public static toForm(): void
        {
    	    NavigationManager.navigate(Route.FORM);
        }

        public static toTabular(): void
        {
    	    NavigationManager.navigate(Route.TABULAR);
        }

        public static toGlobalization(): void
        {
    	    NavigationManager.navigate(Route.GLOBALIZATION);
        }

        public static toRouteParamsView(data: RouteData): void
        {
    	    NavigationManager.navigate(Route.ROUTE_PARAMS, data);
        }

        //#endregion

        //#region Functions - Static Member - (helpers)

        private static navigate(route: Route, data?: RouteData): void
        {
            if (NavigationManager.USE_ROUTER)
            {
                if (window.Application)
                {
                    let application: Application = (window.Application as Application)
                    let navigator: Navigator = application as Navigator;

                    if (navigator)
                    {
                        navigator.navigate(route, data);
                    }
                }
            }
            else
            {
                let url = Route.toUrl(route, data);

                window.location.href = url;
            }
        }

        //#endregion

        //#endregion

    }

}
