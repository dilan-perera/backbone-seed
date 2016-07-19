//#region Dependencies

/// <reference path="../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

//import Route = require("routing/Route");
import NavigableRouterImport = require("routing/NavigableRouter");

//#endregion

//#region Aliases

import NavigableRouter = NavigableRouterImport.BackboneSeed.Routing.NavigableRouter;

//#endregion

export namespace BackboneSeed.Routing
{

    /**
     * The default implementation of a router in the solution.
     */
    export class DefaultRouter extends Marionette.AppRouter implements NavigableRouter
    {

        //#region Constants

        /**
         * The name of the router.
         */
        public static get NAME(): string { return "Default" };

        //#endregion

        //#region Functions - Instance Member

        //#region Functions - Instance Member - (NavigableRouter Members)

        /**
         * Processes a navigation request, for the specified route, with the given data.
         * @param {any} route The route to be navigated to.
         * @param {any} data The data to be used in routing (optional).
         */
        public processNavigationRequest(route: any, data?: any): void
        {
        }

        //#endregion

        //#region Functions - Instance Member - (DefaultRouter Members)

        //#region Functions - Instance Member - (DefaultRouter Members) - (constructors)

        /**
         * Creates and initializes a new instance of the
         * DefaultRouter class.
         * @param {any} options? The options with which the instance is to be created (optional).
         */
        constructor(options?: any)
        {
            super(options);
        }

        //#endregion

        //#endregion

        //#endregion

    }

}
