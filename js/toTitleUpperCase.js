
export const toTitleUpperCase = str => str.replace(/\S+/g, (word, idx, sentence) => ['the', 'a', 'an'].indexOf(word) != -1 ? word : word.toLowerCase().replace(/^[a-zA-Z]/, letter => letter.toUpperCase()));
String.prototype.toTitleUpperCase = function () {
    return this.replace(/\S+/g, (word, idx, sentence) => ['the', 'a', 'an'].indexOf(word) != -1 ? word : word.toLowerCase().replace(/^[a-zA-Z]/, letter => letter.toUpperCase()));
}
console.log('The quick brown fox jumps over the lazy dog', ' => ', 'The quick brown fox jumps over the lazy dog'.toTitleUpperCase());