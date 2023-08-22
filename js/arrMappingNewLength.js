function arrMappingNewLength(arr, newLength) {
    let result = [...new Array(newLength)].map((i, idx) => idx);

    result = result.map(i => {
        let idx = i / (newLength - 1) * (arr.length - 1),
            before = Math.floor(idx),
            after = Math.ceil(idx),
            precent = (idx - before);
        return arr[before] + (arr[after] - arr[before]) * precent;
    });
    return result;
}
// by leizingyiu