'use strict'

const wrapper = fn => (...args) => {
    console.log('Starting wrapping...');
    console.log('Before call: ', args);
    const res = fn(...args);
    console.log('After call: ', res);
    console.log('Wrapping ended.');
    return fn(...args);
  };

const wrap = (obj, ...fns) => {
    const keys = Object.keys(obj);
    fns.map(fn => {
        for (const key of keys) {
            if (key === fn) obj[key] = wrapper(obj[key])
        }
    })
}

const obj = {
    calculateSum: (...args) => {
        return args.reduce((a, b) => a + b);
    }
}
wrap(obj, 'calculateSum');
console.log(obj.calculateSum(3, 4, 5, 11));