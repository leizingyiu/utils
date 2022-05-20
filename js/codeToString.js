function codeToString(codeStr) {
    if (codeStr == "" || codeStr == undefined) {
        return
    }
    var jsCode2jsStrReplace = {
        单引号: ["'", "\\'"],
        双引号: ['"', '\\"'],
        反斜杠: ['\\\\', '\\\\'],
        换行符: ['\\n', '\\n'],
        回车符: ['\\r', '\\r'],
        制表符: ['\\t', '\\t'],
        退格符: ['\\f', '\\b'],
        换页符: ['\\f', '\\f']
    };
    var result = "",
        txtMatch, reg;
    for (var i = codeStr.length - 1; i >= 0; i--) {
        for (var x in jsCode2jsStrReplace) {
            reg = eval("/" + jsCode2jsStrReplace[x][0] + "/");
            txtMatch = codeStr[i].match(reg);
            if (txtMatch != null) {
                break;
            }
        }
        if (txtMatch != null) {
            result = jsCode2jsStrReplace[x][1] + result;
        } else {
            result = codeStr[i] + result;
        }
    }
    return result;
    /**by leizingyiu 
    * read more visit leizingyiu.net
     */
}