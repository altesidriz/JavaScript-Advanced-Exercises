function lowestPrice(inputArray){
let output = {};
inputArray.forEach(element => {
 let [city, product, price] = element.split(' | ');
 let numParsedPrice = Number(price);

 if(output[product]){
    if(output[product].price > numParsedPrice){
        output[product].price = numParsedPrice;
        output[product].city = city;
    }
 }else{
    output[product] = {
        city,
        price: numParsedPrice
    }
 }
});

    for (const key in output) {
       console.log(`${key} -> ${output[key].price} (${output[key].city}) `);
    }
}
lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)