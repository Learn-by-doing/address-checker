document.addEventListener("deviceready", init, false);

function init() {
	document.querySelector("#button-scan").addEventListener("touchend", scan, false);
	document.querySelector("#exit-app").addEventListener("touchend", function() {
		navigator.app.exitApp();
	}, false);
}

app.initialize();
