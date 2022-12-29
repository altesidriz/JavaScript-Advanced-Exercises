function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            result.treasury += Math.floor(result.population * result.taxRate);
        },
        applyGrowth(percent) { 
            result.population += Math.floor(result.population * percent / 100);
         },
        applyRecession(percent) {
            result.treasury -= Math.floor(result.treasury * percent / 100);
        },

    };
    return result;

}
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

const myFn = city.applyRecession
myFn(10);
console.log(city.treasury);

const city2 = cityTaxes('Santo Domingo', 12000, 100000);
const fn2 = city2.collectTaxes;
fn2();
console.log(city2.treasury);







// function createRect(width, height) {
//     const rect = { width, height };
//     rect.getArea = () => {
//       return rect.width * rect.height;
//     };
//     return rect;
//   }
// createRect(2,5);
// console.log(createRect(2,5));