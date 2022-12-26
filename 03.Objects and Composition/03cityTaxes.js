// function cityTaxes(name, population, treasury) {

//     return obj = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes: function collectTaxes() {
//             return obj[treasury] += Math.floor(obj[population] * obj['taxRate']);
//         },
//         applyGrowth: function applyGrowth(growth) {
//             return obj[population] += Math.floor(obj[population] * (growth / 100));
//         },
//         applyRecession: function applyRecession(recesession) {
//             return obj[population] -= Math.floor(obj[population] * (recesession / 100));
//         }
//     }
// }
// //cityTaxes();
// // const city = 
// //   cityTaxes('Tortuga',
// //   70,
// //   15000);
// // console.log(city);

// const city =
//     cityTaxes('Tortuga',
//         70253,
//         15000);
// city.collectTaxes();
// console.log(city.treasury);
// console.log(city.applyGrowth(5));
// console.log(city.population);

function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) { 
            this.population += Math.floor(this.population * percent / 100);
         },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },

    };
    return result;

}
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);




