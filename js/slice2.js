Array.prototype.slice2 = function (start, end) {
    return this.filter((i, idx) => (idx >= start && (idx) < end) ||
        ((start < end) ^ (!(idx < start) || !(idx >= end))));
}

let n = 10,
    arr = [...new Array(n)].map((i, idx) => idx),
    start = 9,
    end = 6,
    _arr = arr.slice2(start, end),
    __arr = arr.slice(start, end);
console.log(arr, _arr, __arr);