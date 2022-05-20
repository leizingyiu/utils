function randomSelectionBackgroundColor(hVar = Math.floor(Math.random() * 36) * 10,
    sVar = Math.random() * 20 + 70,
    lVar = Math.random() * 20 + 50,
    aVar = Math.random() * 0.2 + 0.2) {
    let style = document.createElement('style');
    let h = hVar + 'deg';
    let s = sVar + '%';
    let l = lVar + '%';
    let a = aVar;
    style.innerHTML = '::selection{background-color:hsla(' + h + ',' + s + ',' + l + ',' + a + ')!important;}';
    document.body.appendChild(style);
}

