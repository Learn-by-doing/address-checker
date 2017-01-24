document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#button-scan").addEventListener("touchend", function() {
		navigator.notification.alert(
			'the App is working!',  // message
			null,         			// callback
			'Address checker',            // title
			'Ok'                  // buttonName
		);
	}, false);
	document.querySelector("#exit-app").addEventListener("touchend", function() {
		navigator.app.exitApp();
	}, false);

	resultDiv = document.querySelector("#results");
}
