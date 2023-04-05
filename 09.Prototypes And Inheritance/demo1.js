'use strict';

const obj = {
    name: 'peter',
    age: 23
}

//Object.seal(obj);

let lastName = 'jackson'

Object. defineProperty(obj, 'lastName', {
    get() { return this._lastName},
    set(value) {
        if(typeof value != 'string'){
            throw new TypeError('last name must be a string');
        }
        this._lastName = value;
    },
    enumerable: true,
    configurable: true
});

console.log(obj.lastName); 

obj.lastName = 'johnson';

console.log(obj); 
