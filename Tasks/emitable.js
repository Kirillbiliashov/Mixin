'use strict'

const emitable = (obj, events = {}) => Object.defineProperties(obj, {
  on: {
      value: (name, fn) => {
    const event = events[name] || [];
    events[name] = event;
    event.push(fn);
  }
  },
  emit: {
      value: (name, ...data) => {
    const event = events[name];
    if (event) {
      for (const fn of event) {
        fn(...data);
      }
    }
  }
  }
});

const Rect = class {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    toString() {
      return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
    }
    
    move(x, y) {
        this.x += x;
        this.y += y;
        this.emit('moved', x, y);
    }
  };

  const rect = emitable(new Rect(10, 20, 30, 40));
  rect.on('moved', (x, y) => {
      console.log(`moved by x: ${x}, y: ${y}`);
  })
  rect.move(5, 10);
