'use strict';

function scalable(image) {
  image.scale = () => console.log('Image scaled');
}

function lazy(behavior) {
  let scale = image.scale;
  image.scale = () => setImmediate(() => scale());
}

let image = {};

console.log('Mixin scalable() adds method: scale');
scalable(image);
console.log('Before scale');
image.scale();
console.log('After scale\n');

console.log('Mixin lazy() adds lazy behavior');
lazy(image);
console.log('Before scale');
image.scale();
console.log('After scale');
