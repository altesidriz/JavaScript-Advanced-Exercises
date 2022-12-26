// const myMap = {
//     'John': '0225978899746',
//     'Anna': '02259332224746',
//     'Jenifer': '02259332746'
// };

// for(const key in myMap){
//     console.log(key);
// }

// const phonebook = { 'Tim': '555-111',
//                     'Bill': '555-333',
//                     'Peter': '555-777' };
// const keys = Object.keys(phonebook);
// const values = Object.values(phonebook);
// console.log(keys);
// console.log(values);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//              Methods and Context
// const person = {
//     name: 'Peter',
//     age: 23,
//     sayHi: function(message){
//         console.log(`${message}`);
//     }
// }
//person.sayHi('Hello World');

// sorting helper
// const compareNumbers = {
//     ascending: (a, b) => a - b,
//     descending: (a, b) => b - a
//   };
//   console.log(compareNumbers.descending(5,8,2,9));

let count = 5;
const parser = {
    increment() { count++; },
    decrement() { count--; },
    reset( ) { count = 0; },
    default() { 
        count = 'same digit';
        console.log('error case'); }
};

// const action = parser['increment'];
// if(typeof action == 'function'){
//     action();
// }else{
//     //default case
// }
// also can type is as ternary operator
const command = 'inssscrement';
parser[command] ? parser['increment']() : parser.default();
//parser['increment']();

console.log(count);

function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth() { },
        applyRecession() { },
    };
    return result;

}
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();

