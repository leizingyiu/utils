// Created: 2023/02/17 01:16
// Last modified: "2023/03/07 09:09:34"

var words = "包 条 个 袋 杯 枚 颗 罐 公斤 斤 两 盒 桶 只 支"
    .split(/\s{1,}/)
    .filter((a) => Boolean(a)),
    wordsRegStr = words.map((word) => `${word}`).join("|"),
    wordsReg = new RegExp(
        "\\d[\\d\\.]*s*(" +
        wordsRegStr + ")\\s*([\\*x]\\d{1,})*(" + wordsRegStr + ')*', 'g'
    ),
    textReplaceReg = /(\([^\)]*\))|(\[[^\]]*\])|(「[^」]*」)|(（[^）]*）)/g,
    priceReg = /\d[\d.]*\s*(?=元)/,
    gramReg = /\d[\d.]*\s*(((千*克){1,})|(((kg)|(KG)|(Kg)|(g)|(G)){1,}))\s*([\*x]\d{1,})*/,
    volReg = /\d[\d.]*\s*(((毫*升){1,})|((L)|(ml)|(ML){1,}))\s[*x]([\*x]\d{1,})*/;

const standardUnits = {
    'g': { reg:/(g)|(kg)/,targetUnit: 'kg', k: 1000 },
    'l': {targetUnit} }

function unitPrice(text, price) {
    let nonResult = '--';
    text = typeof text == 'undefined' ? '' : text, price = typeof price == 'undefined' ? 0 : price;
    if (text == '' || price == 0) { return nonResult; }

    let gram = text.match(gramReg), vol = text.match(volReg),
        otherUnit = text.match(wordsReg), priceText = "";

    console.log(price, gram, vol, otherUnit, wordsReg);

    if (price == 0 || (gram == null && vol == null && otherUnit == null)) {
        priceText = nonResult;
    } else {
        price = Number(price);


        [gram, vol].filter(u => u != null).map(u => {
            let _unit = '';
            let _u = Number(eval(u[0]
                .replace(/x/, '*')
                .replace(/[克gG升lL]/g, function () {
                    _unit = arguments[0]; return '';
                })
                .replace(/[毫mM]/, "/1000")
                .replace(/[kK千]/, "*1000")));
            let _price = price / _u;
            priceText += (priceText.length > 1 ? '|' : '') + _price.toFixed(2) + '/' + _unit;
        })


        if (otherUnit != null) {
            otherUnit.map(un => {
                console.log(un, wordsReg);
                let splitReg = new RegExp('(\\d*[\\d.]*)\\s*(' + wordsRegStr + ')\\s*([\*x]\\d*[\d.]*)(' + wordsRegStr + '*)', 'g');
                let n1 = '', n2 = '', u1 = '', u2 = '';
                un.replace(splitReg, function () {
                    console.log('unite---', arguments);
                    n1 = arguments[1], n2 = arguments.length >= 3 ? arguments[3] : '1',
                        n2 = n2.replace(/[\*x]/g, '');
                    n1 = Number(n1), n2 = Number(n2);

                    u1 = arguments.length >= 2 ? arguments[2] : '',
                        u2 = arguments.length >= 4 ? arguments[4] : '';

                    console.log(n1, u1, n2, u2);
                    return true;
                });

                [u1, u2].filter(u => '斤两'.indexOf(u) != -1).map(u => {
                    let k = 1; if (u == '两') { k = 10; }
                    priceText += (priceText == '' ? '' : '|') + (price / (n1 * n2) * 2 * k).toFixed(2) + '/kg';
                });

                priceText += (priceText == '' ? '' : '|') + (price / (n1 * n2)).toFixed(2) + '/' + u1;
                priceText += (priceText == '' ? '' : '|') + (price / (n2)).toFixed(2) + '/' + u2;
                console.log(n1, n2, u1, u2);

            });
        }

        if (priceText == "") {
            priceText += "___";
        }
    }
    console.log(priceText);
    return priceText;
}

