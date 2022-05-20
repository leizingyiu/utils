
var readmoreUrl = window.location.origin;
function readContent(max, readmoreUrl) {
    var rssArr = document.querySelectorAll('.container-fluid .row>div');
    max = max < rssArr.length ? max : rssArr.length;
    var contents = [...rssArr].map(function (r, idx) {
        var result = idx < (max - 1) ? {
            'innerText': r.querySelector('.overlay').innerText,
            'href': r.querySelector('a').getAttribute('href'),
            'data-preview': r.querySelector('img').getAttribute('src'),
        } : null;
        return result;
    }).filter(Boolean);
    let i = 0;
    while (contents.length < max) {
        if (i == 0) {
            contents.push({ 'innerText': 'readmore', 'href': readmoreUrl });
        } else {
            contents.push({ 'innerText': '', 'href': '' });
        };
        i = i + 1;
    }
    return contents;
}
function nameMessage(name, content) {
    var result = {};
    result[name] = [...content];
    return JSON.stringify(result, ' ', 4);
}

function messageSender(numVerName, messageKey) {
    window.addEventListener('message', function (e) {
        if (e.source != window.parent) return;
        if (e.data.indexOf(numVerName) != -1) {
            let n = e.data.match(/\d+/g)[0];
            let c = readContent(n);
            window.parent.postMessage(nameMessage(messageKey, c), '*');
        }
    }, false);
}