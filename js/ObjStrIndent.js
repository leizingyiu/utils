function ObjStrIndent(str, n = 1) {
    return str.replace(/[\}\{]/g, function (k, idx, sentence) {
        let beforeStr = sentence.slice(0, idx),
            beforeLeft = beforeStr.match(/\{/g),
            beforeRight = beforeStr.match(/\}/g);
        beforeLeft = beforeLeft ? beforeLeft.length : 0,
            beforeRight = beforeRight ? beforeRight.length : 0;
        let spaceNum = beforeLeft - beforeRight - 1;

        switch (k) {
            case '{':
                return '\n' + [...new Array((spaceNum + 1) * n)].join(' ') + '{';
                break;
            case '}':
                return '\n' + [...new Array((spaceNum) * n)].join(' ') + '}';
                break;
        }
    }).replace(/^\s*\n\s*/, '');
}