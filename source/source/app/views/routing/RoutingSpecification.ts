//#region Dependencies

/// <reference path="../../../_references.ts"/>

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
     * Defines the functionality of a routing specification.
     */
    export interface RoutingSpecification
    {

        //#region Properties - Instance Member
        
        /**
         * Gets the (unique) identifier of the route.
         */
        value: number;

        /**
         * Gets the name of the route.
         */
        name: string;

        /**
         * Gets the path of the route.
         */
        path: string;

        /**
         * Gets the controller to which the router will delegate
         */
        controller: string;
        
        /**
         * Gets the action to be performed on the controller.
         */
        action: string;
        
        /**
         * Gets the router handling the route.
         */
        router: string;
        
        /**
         * Gets the base URL of the path.
         */
        baseUrl: string;
        
        /**
         * Gets the name of the view.
         */
        viewName: string;
        
        /**
         * Gets the path of the view.
         */
        viewPath: string;

        //#endregion

    }

}
