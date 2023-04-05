/* class Cat {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}

let firstCat = new Cat('Charlie');
let secondCat = new Cat('Garry');
console.log(firstCat.name);

//Change properties runtime
console.log(secondCat);
secondCat.name = 'Garfield';
console.log(secondCat);

//Second example
let catNames = ['Navcho', 'Garry', 'Mishy', 'Zuza', 'Sisa'];

let cats = catNames.map(x => new Cat(x));
console.log(cats);

cats.forEach(x => x.makeSound()); */

//Static Method

class Cat {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}