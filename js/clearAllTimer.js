function clearAllTimer() {
    [...new Array(setTimeout(';'))].map((n, idx) => idx).map(i => clearTimeout(i));
}
/**
 * # clearAllTimer 清除所有定时器
 * 直接使用即可，无需参数。
 *
 * by leizingyiu
 * read more visit leizingyiu.net
 */
