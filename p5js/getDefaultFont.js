function getDefaultFont() {
    let style = window.getComputedStyle(drawingContext.canvas);
    var defaultFont = style.getPropertyValue('font-family');
    return defaultFont;
}
// by leizingyiu