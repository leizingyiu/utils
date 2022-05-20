function clickAndDrag(dom, dragUrl, clickUrl) {
    dom.draggable = "true";
    var nonHref = "javascript:void 0;"
    dom.href = nonHref;
    var flag = 0;
    dom.addEventListener("mouseover", function () {
        this.href = dragUrl;
    }, false);
    dom.addEventListener("mouseout", function () {
        this.href = nonHref;
    }, false);
    dom.addEventListener("mousedown", function () {
        flag = 0;
    }, false)
    dom.addEventListener("mousemove", function () {
        flag = 1;
    }, false)
    dom.addEventListener("mouseup", function () {
        dom.href = nonHref;
        if (flag === 0) {
            openWin(clickUrl);
        }
    }, false)
}
function openWin(url, tar) {
    var a = document.createElement("a");
    a.href = url;
    a.target = tar ? tar : "_self";
    a.id = "openWin";
    document.getElementsByTagName('body')[0].append(a);
    document.getElementById("openWin").click();
    document.getElementById('openWin').remove();
}

/**clickAndDrag 点击与拖拽不同内容
 * clickAndDrag(obj, dragUrl, clickUrl)
 * dom:一个dom节点
 * dragUrl:拖拽的url
 * clickUrl:点击跳转的url
 *
 * by leizingyiu
 * read more visit leizingyiu.net
 */