range = (min = 0, max = 10, step = 1) => [...new Array(Math.floor((max + step - min) / step))].map((n, idx) => idx * step + min);
{
    let min = 10;
    let max = 50;
    let step = 7;
    console.log(range(min, max, step));
    /**by leizingyiu 
    * read more visit leizingyiu.net
    */
}