let [[year, month, day], [hour, min, sec]] = (new Date(Date.now())).toLocaleString().split(' ').map(a => {
    return a.split(a.match(/\D/).toString());
});