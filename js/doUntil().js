
max = 500; m = 0;
waitTime = 2000;

main = () => { document.querySelector('.next-page').scrollIntoView(); };
boo = !!(document.querySelectorAll('.next-page').length > 0);

function run(boo, fn, max, waitTime, m) {
    console.log(m, boo, fn, max, waitTime);
    if (boo == true && m < max) {
        m = m + 1;
        fn();
        setTimeout(() => { run(boo, fn, max, waitTime, m) }, waitTime);
    }
}

run(
    !!(document.querySelectorAll('.next-page').length > 0),
    () => { document.querySelector('.next-page').scrollIntoView(); }
    , max = 500, waitTime = 2000, m = 0)