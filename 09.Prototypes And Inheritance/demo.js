'use strict';

const obj = {
    name: 'peter',
    age: 23
}

Object.defineProperty(obj, 'name', {
    enumerable: true,
    writable: false
})
obj.name = 'viktor'// can't change when writable is false

console.log(Object.keys(obj));
for (const key in obj) {
    console.log(key);
    //console.log(obj[key]);
}
//console.log(obj.name);
console.log(JSON.stringify(obj));
console.log(Object.getOwnPropertyDescriptors(obj)); 