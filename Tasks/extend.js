
const extend = (obj, ...objects) => {
    objects.map(object => {
        const keys = Object.keys(object);
        for (const key of keys) {
            if (!obj[key]) obj[key] = object[key];
        }
    })
}

const obj = {
    a: 5,
    b: 6,
    c: 7
}
const obj1 = {
    a: 11,
    d: 4
}
const obj2 = {
    c: 44,
    e: 10
}
extend(obj, obj1, obj2);
console.log(obj);