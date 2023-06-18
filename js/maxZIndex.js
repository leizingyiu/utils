function maxZIndex() {
    return [...document.body.querySelectorAll('*')]
        .map(__DOM__ => window.getComputedStyle(__DOM__).zIndex)
        .filter(z => isFinite(z))
        .reduce(
            (num1, num2) => { return num1 > num2 ? num1 : num2 },
            0
        );
}