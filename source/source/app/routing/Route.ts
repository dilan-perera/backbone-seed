//#region Dependencies

/// <reference path="../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

import RoutingSpecificationImport = require("routing/RoutingSpecification");

//#endregion

//#region Aliases

import RoutingSpecification = RoutingSpecificationImport.BackboneSeed.Routing.RoutingSpecification;

//#endregion

export namespace BackboneSeed.Routing
{

    /**
     * Contains routing information.
     */
    export class Route implements RoutingSpecification
    {

    	//#region Properties - Static Member

        /**
         * No route specified.
         * @returns A routing specification.
         */
        public static get NONE(): Route
        {
            return new Route(
                0, "None",
                null, null, null,
                null, null,
                null, null);
        }

        /**
         * The default route.
         * @returns A routing specification.
         */
        public static get DEFAULT(): Route
        {
            return new Route(
                1, "Default",
                "", "Default", "showDefault",
                "Default", "",
                null, null);
        }

        /**
         * The route to the Dashboard View.
         * @returns A routing specification.
         */
        public static get DASHBOARD(): Route
        {
            return new Route(
                2, "Dashboard",
                "dashboard", "Default", "showDashboard",
                "Default", "dashboard",
                "DashboardView", "views/pages/dashboard/DashboardView");
        }

        /**
         * The route to the Form View.
         * @returns A routing specification.
         */
        public static get FORM(): Route
        {
            return new Route(
                3, "Form",
                "form", "Default", "showForm",
                "Default", "form",
                "FormView", "views/pages/formview/FormView");
        }

        /**
         * The route to the Tabular View.
         * @returns A routing specification.
         */
        public static get TABULAR(): Route
        {
            return new Route(
                4, "Tabular",
                "tabular", "Default", "showTabular",
                "Default", "tabular",
                "TabularView", "views/pages/tabularview/TabularView");
        }

        /**
         * The route to the Globalization View.
         * @returns A routing specification.
         */
        public static get GLOBALIZATION(): Route
        {
            return new Route(
                5, "Globalization",
                "globalization", "Default", "showGlobalization",
                "Default", "globalization",
                "GlobalizationView", "views/pages/globalizationview/GlobalizationView");
        }

    	//#endregion

        //#region Fields - Instance Member
        
        private valueField: number = 0;

        private nameField: string = "";

        private pathField: string = "";

        private controllerField: string = "";

        private actionField: string = "";

        private routerField: string = "";

        private baseUrlField: string = "";

        private viewNameField: string = "";

        private viewPathField: string = "";

        //#endregion

        //#region Properties - Instance Member

        //#region Properties - Instance Member - RoutingSpecification Members

        /**
         * Gets the (unique) identifier of the route.
         */
        get value(): number
        {
            return this.valueField;
        }

        /**
         * Gets the name of the route.
         */
        get name(): string
        {
            return this.nameField;
        }

        /**
         * Gets the path of the route.
         */
        get path(): string
        {
            return this.pathField;
        }

        /**
         * Gets the controller to which the router will delegate
         */
        get controller(): string
        {
            return this.controllerField;
        }
        
        /**
         * Gets the action to be performed on the controller.
         */
        get action(): string
        {
            return this.actionField;
        }
        
        /**
         * Gets the router handling the route.
         */
        get router(): string
        {
            return this.routerField;
        }
        
        /**
         * Gets the base URL of the path.
         */
        get baseUrl(): string
        {
            return this.baseUrlField;
        }
        
        /**
         * Gets the name of the view.
         */
        get viewName(): string
        {
            return this.viewNameField;
        }
        
        /**
         * Gets the path of the view.
         */
        get viewPath(): string
        {
            return this.viewPathField;
        }

        //#endregion

        //#endregion

        //#region Functions - Instance Member

        //#region Functions - Instance Member - (Route Members)

        //#region Functions - Instance Member - (Route Members) - (constructors)

        /**
         * Creates and initializes a new instance of the
         * Route class.
         * @param {number} value The (unique) identifier of the route.
         * @param {string} name The name of the route.
         * @param {string} path The path of the route.
         * @param {string} controller The controller to which the router will delegate.
         * @param {string} action The action to be performed on the controller.
         * @param {string} router The router handling the route.
         * @param {string} baseUrl The base URL of the path.
         * @param {string} viewName The name of the view.
         * @param {string} viewPath The path of the view.
         */
        constructor(value: number, name: string, path: string, controller: string, action: string,
            router: string, baseUrl: string, viewName: string, viewPath: string)
        {
            this.valueField = value;
            this.nameField = name;
            this.pathField = path;
            this.controllerField = controller;
            this.actionField = action;
            this.routerField = router;
            this.baseUrlField = baseUrl;
            this.viewNameField = viewName;
            this.viewPathField = viewPath;
        }

        //#endregion

        //#endregion

        //#endregion

    }

}
