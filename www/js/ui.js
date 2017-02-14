function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function exitApp() {
	navigator.app.exitApp();
}

function about() {
	alert(
	"This app only checks the amount of BTC in a paper wallet."
	)
}
