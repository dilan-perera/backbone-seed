
define(function (require)
{

	//#region Imports

	var $ = require('jquery');

	//#endregion

	//#region Extensions

	//#region Extensions - (dot notation get/set)
	
	// http://stackoverflow.com/a/8052100
	// props to the author of the code at that location

	$.fn.getObject = function (instance, propertyString)
	{
		var result = null;

		var workingResult = instance;

		var arr = propertyString.split('.');

		while (arr.length && (workingResult = workingResult[arr.shift()]));

		if (workingResult != instance)
		{
			result = workingResult;
		}

		return result;
	};

	$.fn.setObject = function (instance, propertyString, value)
	{
		// TODO: implement
	};

	//#endregion

	//#region Extensions - (cookie management)

	// http://stackoverflow.com/a/1460174
	// http://www.quirksmode.org/js/cookies.html
	// props to the author of the code at those locations

	$.fn.setCookie = function (name, value, days)
	{
		var expires;

		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toGMTString();
		}
		else
		{
			expires = '';
		}

		document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + expires + '; path=/';
	}

	$.fn.readCookie = function (name)
	{
		var value = null;

		var nameEQ = encodeURIComponent(name) + '=';
		var ca = document.cookie.split(';');

		for (var i = 0; i < ca.length; i++)
		{
			var c = ca[i];

			while (c.charAt(0) === ' ')
			{
				c = c.substring(1, c.length);
			}

			if (c.indexOf(nameEQ) === 0)
			{
				value = decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
		}

		return value;
	}

	$.fn.deleteCookie = function (name)
	{
		createCookie(name, '', -1);

		var value = '';
		var days = -1;

		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

		var expires = '; expires=' + date.toGMTString();

		document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + expires + '; path=/';
	}

	//#endregion

	//#endregion

});