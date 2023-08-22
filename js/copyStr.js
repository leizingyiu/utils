function copyStr(str) {
    var a = document.createElement("textarea");
    a.value = str;
    document.body.appendChild(a);
    a.select();
    document.execCommand("Copy");
    a.style.display = "none";
    window.alert(str + "内容已复制到剪贴板");
};
