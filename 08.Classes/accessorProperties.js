/* class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    setDiameter(value){
        this.radius = value / 2;
    }
}

const c = new Circle(5);
console.log(c.getDiameter());

c.radius = 6;
console.log(c.getDiameter());

c.setDiameter(8);
console.log(c); */

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if(value < 0 ){ 
            throw new Error(`${value} is invalid value!`)
        }
        this.radius = value / 2;
    }
}

let circle = new Circle(2);
console.log(circle.diameter);
circle.radius = 3;
console.log(circle.diameter);
circle.diameter = 20;
console.log(circle.radius);
