function openWin(url, tar) {
	var a = document.createElement("a");
	a.href = url;
	a.target = tar ? tar : "_self";
	a.id = "openWin";
	document.getElementsByTagName('body')[0].append(a);
	document.getElementById("openWin").click();
	document.getElementById('openWin').remove();
}
