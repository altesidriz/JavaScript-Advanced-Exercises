class Person {

    constructor(firstName, lastName, age, city) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.city = city
    }
    static compareTo(a, b) {
        return a.age - b.age
    }
}

let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
let person2 = new Person('Bob', 'Marley', 39, 'nowomannocry@yahoo.com');
let person3 = new Person('James', 'Carther', 28, 'nowomannocry@yahoo.com');

let persons = [person1, person2, person3]
persons.sort(Person.compareTo)
console.log(persons);


