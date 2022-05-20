function initRssIframe(rssPageUrl, itemNum, numVerName) {
    var iframe = document.createElement('iframe');
    // iframe.src = window.location.origin.match('leizingyiu.net') ? location.protocol + rssPageUrl.match(/\/\/.*/g)[0] : 'http://localhost:4000/rssPage/index.html';
    iframe.src = location.protocol + rssPageUrl.match(/\/\/.*/g)[0];

    iframe.id = 'rssReader' + Math.floor(Math.random() * 100000);

    iframe.style.cssText = 'opacity:0;overflow:hidden;';
    iframe.frameborder = '0';
    iframe.width = iframe.height = 0;

    iframe.onload = function () {
        console.log('iframe.id:  ' + iframe.id);
        console.log('rssPageUrl' + rssPageUrl);
        document.getElementById(iframe.id).contentWindow.postMessage(numVerName + itemNum, iframe.src.match(/.*:[\/]{2}[^\/]+/)[0]);
    }
    document.getElementsByTagName('body')[0].appendChild(iframe);
}

function messageReader() {


    window.addEventListener('message', function (e) {
        var messageObj = {};
        try {
            messageObj = JSON.parse(e.data);
        } catch (err) {
            console.log(err);
            return;
        }

        console.log("messageObj: " + JSON.stringify(messageObj, ' ', 4));

        Object.keys(messageObj).map(function (k) {
            [...arguments].map(arg => arg(messageObj[k], k));
        });
    }, false);

}
