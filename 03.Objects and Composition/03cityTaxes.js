function cityTaxes(name, population, treasury) {

    return obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            return obj[treasury] += Math.floor(obj[population] * obj['taxRate']);
        },
        applyGrowth: function applyGrowth(growth) {
            return obj[population] += Math.floor(obj[population] * (growth / 100));
        },
        applyRecession: function applyRecession(recesession) {
            return obj[population] -= Math.floor(obj[population] * (recesession / 100));
        }
    }
}
//cityTaxes();
// const city = 
//   cityTaxes('Tortuga',
//   70,
//   15000);
// console.log(city);

const city =
    cityTaxes('Tortuga',
        70253,
        15000);
city.collectTaxes();
console.log(city.treasury);
console.log(city.applyGrowth(5));
console.log(city.population);


