
define(function (require)
{
	//#region Browser Directives

	'use strict';

	//#endregion

	//#region Imports

	var material = require('material');

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
		debugger;
		Notification._checkedConfigure();

		let content = Notification._getContent(message, title);

		let data = {
			message: content,
		};

		notification.MaterialSnackbar.showSnackbar(data);
	}

	Notification.showInformation = function (message, title)
	{
		Notification._checkedConfigure();

		let content = Notification._getContent(message, title);

		let data = {
			message: content,
		};

		notification.MaterialSnackbar.showSnackbar(data);
	}

	Notification.showWarning = function (message, title)
	{
		Notification._checkedConfigure();

		let content = Notification._getContent(message, title);

		let data = {
			message: content,
		};

		notification.MaterialSnackbar.showSnackbar(data);
	}

	Notification.showError = function (message, title)
	{
		Notification._checkedConfigure();

		let content = Notification._getContent(message, title);

		let data = {
			message: content,
		};

		notification.MaterialSnackbar.showSnackbar(data);
	}
	
	//#endregion

	//#region Functions - Static Member - (helpers)
	
	Notification._getContent = function (message, title)
	{
		let content = '';

		if (title)
		{
			content = title;

			content += '\n\n';
		}

		if (message)
		{
			content += message;
		}

		return content;
	}

	Notification._checkedConfigure = function ()
	{
		if (!(Notification._isConfigured))
		{
			Notification._configure();
		}
	}

	Notification._configure = function ()
	{
		let notification = $('#notification');

		componentHandler.upgradeElement(notification[0]);

		Notification._isConfigured = true;
	}

	//#endregion

	//#endregion
	
	return Notification;
});
