
function addStyle(style_sheet_id, style_text) {
    if (document.getElementById(style_sheet_id)) {
        document.getElementById(style_sheet_id).innerText = style_text;
    } else {
        let style = document.createElement('style');
        style.innerText = style_text;
        style.id = style_sheet_id;
        document.body.appendChild(style);
    }
}
function removeStyle() {
    let result = false;
    [...arguments].map(selector => {
        if (document.querySelectorAll(selector).length > 0) {
            [...document.querySelectorAll(selector)].map(d => {
                d.parentElement.removeChild(d);
            });
            result = true;
        }
    });
    return result;
}

function addStyleWithParentClass(style_sheet_id, style_text_class, style_text) {

    const styleText = style_text.replace(/([^\}]+)(?=\{)/g, function () {
        let l = arguments[0].split(/[,\n\r]/);
        l = !l ? [arguments[0]] : l.filter(_l => _l.length > 0);
        return l.map(_l => `.${style_text_class} ` + _l).join(',\n');
    }).replace(/ +/g, ' ');
    addStyle(style_sheet_id, styleText);

}