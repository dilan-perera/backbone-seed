//#region Dependencies

/// <reference path="../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

//#endregion

//#region Aliases

//#endregion

export namespace BackboneSeed.Routing
{

    /**
     * Defines the functionality of a navigable router.
     */
    export interface NavigableRouter
    {

        //#region Functions - Instance Member

        /**
         * Processes a navigation request, for the specified route, with the given data.
         * @param {any} route The route to be navigated to.
         * @param {any} data The data to be used in routing.
         */
        processNavigationRequest(route: any, data?: any) : void

        //#endregion

    }

}
