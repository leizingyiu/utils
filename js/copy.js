
function copyStr(str) {
	var a = document.createElement("textarea");
	a.value = str;
	document.body.appendChild(a);
	a.select();
	document.execCommand("Copy");
	a.className = "oInput";
	a.style.display = "none";
	alert(str + "内容已复制到剪贴板")
}