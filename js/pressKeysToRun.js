function pressKeysToRun(keys2Prs, callback) {
    var i = 0;
    window.addEventListener("keypress", function (e) {
        e = e || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == keys2Prs.charCodeAt(i)) {
            if (i == keys2Prs.length - 1) {
                callback();
                i = 0;
            } else {
                i++;
            }

        } else {
            i = 0;
        }
    });
    /**by leizingyiu 
     * read more visit leizingyiu.net
     */
}
