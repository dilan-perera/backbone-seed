
define(function (require)
{
	//#region Browser Directives

	'use strict';

	//#endregion

	//#region Imports

	var toastr = require('toastr');

	//#endregion

	var Notification = function ()
	{
	}

	//#region Constants - Static Member

	//#endregion

	//#region Fields - Static Member

	Notification._isConfigured = false;

	//#endregion

	//#region Functions - Static Member

	//#region Functions - Static Member - (routes)

	Notification.showSuccess = function (message, title)
	{
		Notification._checkedConfigure();

		toastr.success(message, title);
	}

	Notification.showInformation = function (message, title)
	{
		toastr.info(message, title);
	}

	Notification.showWarning = function (message, title)
	{
		toastr.warning(message, title);
	}

	Notification.showError = function (message, title)
	{
		toastr.error(message, title);
	}
	
	//#endregion

	//#region Functions - Static Member - (helpers)
	
	Notification._checkedConfigure = function ()
	{
		if (!(Notification._isConfigured))
		{
			Notification._configure();
		}
	}

	Notification._configure = function ()
	{
		toastr.options = Notification._getDefaultConfiguration();

		Notification._isConfigured = true;
	}

	Notification._getDefaultConfiguration = function ()
	{
		return {
			//containerId: 'notification',
			positionClass: 'toast-bottom-center',
			//showMethod: 'slideUp',
			//hideMethod: 'slideDown'
			/*
			toastClass: 'alert',
			iconClasses: {
				error: 'alert-error',
				info: 'alert-info',
				success: 'alert-success',
				warning: 'alert-warning'
			*/
		};
	}

	//#endregion

	//#endregion

	Notification._checkedConfigure();

	return Notification;
});
