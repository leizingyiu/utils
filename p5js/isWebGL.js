function isWebGL(drawingTarget = window) {
    return String(drawingTarget.drawingContext.constructor).toLowerCase().indexOf('webgl') != -1;
}
// by leizingyiu