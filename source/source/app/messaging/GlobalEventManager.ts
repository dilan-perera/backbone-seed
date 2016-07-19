//#region Dependencies

/// <reference path="../../_references.ts"/>

//#endregion

//#region Imports

import $ = require("jquery");
import Backbone = require("backbone");
import Marionette = require("backbone.marionette");

//import ChannelImport = require("messaging/Channel");

//#endregion

//#region Aliases

//import Channel = ChannelImport.BackboneSeed.Routing.Channel;

//#endregion

export namespace BackboneSeed.Messaging
{

    /**
     * Manages events of global scope, within the application.
     */
    export class GlobalEventManager extends Marionette.Object
    {

        //#region Fields - Instance Member

        private appChannel: Backbone.Radio.Channel = null;

        //#endregion

        //#region Functions - Instance Member

        //#region Functions - Instance Member - (GlobalEventManager Members)

        //#region Functions - Instance Member - (GlobalEventManager Members) - (constructors)

        /**
         * Creates and initializes a new instance of the
         * GlobalEventManager class.
         */
        constructor()
        {
            super();
        }

        //#endregion

        //#region Functions - Instance Member - (GlobalEventManager Members) - (object lifecycle)

        public initialize(): void
        {
            /*
            this.appChannel = Backbone.Radio.channel(Channel.APPLICATION.name);
            this.appChannel.reply(Channel.APPLICATION.Topics.CULTURE_CHANGE.name, this.onCultureChangeRequested, this);
            */
            super.initialize();
        }

        public destroy(): void
        {
            super.destroy();
        }

        //#endregion

    	//#region Functions - Instance Member - (GlobalEventManager Members) - (callbacks)

        private onCultureChangeRequested(settings: any): void
        {
            /*
    		var oldCulture = Globalizer.getCulture();
    		var newCulture = settings.culture;

    		Globalizer.setCulture(newCulture);

    		try
    		{
    			this._appChannel.request(Channel.APPLICATION.Topics.CULTURE_CHANGED.name,
					{
						oldCulture: oldCulture,
						newCulture: newCulture
					});
    		}
    		catch (ex)
    		{
				// NOTE: sink exception - as failure in event handlers might prevent culture being applied 
    		}

    		Globalizer.applyCulture();
            */
        }

        //#endregion

        //#endregion

        //#endregion

    }

}
