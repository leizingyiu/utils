/*  typing() 是直接打字
    typingWithSpellingBrackets() 是先打拼音再显示中文
    文本格式如下
    [pinyin]拼音[hui]会[xian]先[chuxian]出现

    参数中填入需要打字的dom的cssSelector即可

    by leizingyiu
    https://github.com/leizingyiu/
*/
function typing(selector) {
    let dom = document.querySelector(selector);

    if ('undefined' == typeof i) { i = 1; }
    if ('undefined' == typeof timer) { timer = 0; }
    if ('undefined' == typeof str) {
        if (dom.innerText) {
            str = dom.innerText.replace(/\n/g, '➾');

        } else { str = ""; }
    }
    if ('undefined' == typeof typingHtml) { typingHtml = dom.innerHTML; }

    if (i <= str.length) {
        dom.innerHTML = str.slice(0, i++).replace(/➾/g, '<br>') + (Date.now() % 2 == 0 ? '|' : '');
        let ranTime = Math.random() * 249;
        var nextTyping = function () { typing(selector) };
        timer = setTimeout(nextTyping, ranTime);
    }
    else {
        /*dom.innerHTML = str.replace(/➾/g, '<br>');*/
        dom.innerHTML = typingHtml;
        clearTimeout(timer)
    }
    /**by leizingyiu 
     * read more visit leizingyiu.net
     */
};

function typingWithSpellingBrackets(selector) {
    let dom = document.querySelector(selector);

    if ('undefined' == typeof i) { i = 1; }
    if ('undefined' == typeof timer) { timer = 0; }
    if ('undefined' == typeof str) {
        if (dom.innerText) {
            str = dom.innerText.replace(/\n/g, '➾');
        } else { str = ""; }
    }
    if ('undefined' == typeof typingHtml) { typingHtml = dom.innerHTML; }

    if (i <= str.length) {
        dom.innerHTML = str.slice(0, i++).replace(/➾/g, '<br>').replace(/\[[^\]]*\]/g, '').replace(/\[/g, '') + (Date.now() % 2 == 0 ? '|' : ' ');
        let ranTime = Math.random() * 199;
        var nextTyping = function () { typingWithSpellingBrackets(selector) };
        timer = setTimeout(nextTyping, ranTime);
    }
    else {
        /*dom.innerHTML = str.replace(/➾/g, '<br>');*/
        dom.innerHTML = typingHtml;
        dom.innerText = dom.innerText.replace(/\[[^\]]*\]/g, '');
        clearTimeout(timer)
    }
    /**by leizingyiu 
     * read more visit leizingyiu.net
     */
};
