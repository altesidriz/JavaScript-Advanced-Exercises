// function storeCatalogue(input){
//     input.sort();
//     let obj = {};
//     let dictionary = {}
//     for (const element of input) {
//         let product = element.split(' : ')[0];
//         let price = element.split(' : ')[1];
//         let firstDigit = element.split('')[0];
//         obj[product] = price
//         dictionary[firstDigit] = obj;
//         //console.log(firstDigit);
//         //console.log(element);
//     }
//     console.log(dictionary);
// }

function storeCatalogue(arr){
    let obj = {};

    //{ letter (A, B, C): {product: price}}

    for (const line of arr) {
        let [product, price] = line.split(' : ');
        let letter = product[0];
        if(!obj.hasOwnProperty(letter)){
            obj[letter] = {};
        }
        //obj[letter] = {product: price}
        obj[letter][product]=price;

    }
    let sortedLetters = Object.keys(obj).sort((a,b)=> a.localeCompare(b))
    // console.log(sortedLetters);

    for(const letter of sortedLetters){
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b));
        for(const product of sortedProducts){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


)