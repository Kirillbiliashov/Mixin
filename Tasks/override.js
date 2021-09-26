'use strict'

const object = {
    name: 'Jason',
    city: 'Los Angeles',
    born: 1970,
    age() {
        const currYear = 2021
        return `${this.name} is ${currYear - this.born} years old`
    }
}

const extend = (obj, ...mixes) => {
    mixes.map(mix => {
        for (const method of mix) {
          const methodKeys = Object.keys(method);
          const methodName = methodKeys.pop();
          const override = method.override;
          if (!obj[methodName] || override === true) obj[methodName] = method[methodName]; 
        }
    })
}

const mix2 = [
    {
      override: true,
      toString() {
        return `${this.name} - ${this.city} - ${this.born}`;
      }
    },
    {
      override: false,
      age() {
        const year = new Date().getFullYear();
        const born = new Date(this.born).getFullYear();
        return year - born;
      }
    }
  ];

  extend(object, mix2);

 