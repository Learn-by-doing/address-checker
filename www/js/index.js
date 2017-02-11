document.addEventListener("deviceready", init, false);

function init() {
	document.querySelector("#exit-app").addEventListener("touchend", exitApp, false);
	document.querySelector("#button-open").addEventListener("touchend", openNav, false);
	document.querySelector("#button-close").addEventListener("touchend", closeNav, false);
	document.querySelector("#about").addEventListener("touchend", about, false);
	document.querySelector("#button-scan").addEventListener("touchend", scan, false);

}