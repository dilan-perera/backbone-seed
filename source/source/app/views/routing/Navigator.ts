//#region Dependencies

/// <reference path="../../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

import RouteImport = require("views/routing/Route");
import RouteDataImport = require("views/routing/RouteData");

//#endregion

//#region Aliases

import Route = RouteImport.BackboneSeed.Routing.Route;
import RouteData = RouteDataImport.BackboneSeed.Routing.RouteData;

//#endregion

export namespace BackboneSeed.Routing
{

    /**
     * Defines the functionality of a navigable router.
     */
    export interface Navigator
    {

        //#region Functions - Instance Member

        /**
         * Navigates to the specified route, with the given data.
         * @param {any} route The route to be navigated to.
         * @param {any} data The data to be used in routing (optional).
         */
        navigate(route: Route, data?: RouteData): void

        //#endregion

    }

}
