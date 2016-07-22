
/**
 * Defines a bootable application.
 */
interface BootableApplication
{

    //#region Functions - Instance Member

    /**
     * Starts the application.
     * @param {any} options? The options to be used in initializing the application (optional).
     */
    start(options?: any): void

    //#endregion

}
