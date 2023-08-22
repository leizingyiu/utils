function objToString(obj, tofixed = 2) {
    let str = '';
    if (obj instanceof Array) {
        return `[ ${obj.map(item => {
            if (item instanceof Object && !(item instanceof Function)) {
                return objToString(item);
            } else {
                let i = item;
                i = typeof i == 'number' && window.isNaN(i) == false ?
                    (String(i).indexOf('.') != -1 && String(i).split('.')[1].length > 2 ? i.toFixed(tofixed) : i) :
                    `"${i}"`;
                return i;
            }
        }).join(', ')} ]`
    } else if (obj instanceof Function) {
        return String(obj);
    } else if (obj instanceof Object) {
        Object.keys(obj).map(key => {
            let strk = '';
            if (obj[key] instanceof Array) {
                // strk = `[ ${obj[key].map(ak => {
                // }).join(', ')
                //     } ]`

                strk = objToString(obj[key]);

            } else if (obj[key] instanceof Object) {
                if (Object.keys(obj[key]).some(_key =>
                    Object.keys(obj[key]).join() == Object.keys(obj[key][_key]).join() &&
                    Object.keys(obj[key][_key]).join() == Object.keys(obj[key][_key][_key]).join()
                )) {
                    strk = '"error: Contains circular references"';
                } else {
                    strk = objToString(obj[key]);
                }
            } else {
                strk = obj[key];
                strk = typeof strk == 'number' && window.isNaN(strk) == false ?
                    (String(strk).indexOf('.') != -1 && String(strk).split('.')[1].length > 2 ? strk.toFixed(tofixed) : strk) :
                    `"${strk}"`;
            }
            str += '"' + key + '"' + ':' + strk + ', \n';
        });
        return `{${str.replace(/\n,\n/g, '\n').replace(/,\n}/g, '\n}').replace(/,[\s]*$/g, '')}}`;
    }
    return obj;
}