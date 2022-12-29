// function townPopulation(array) {
//     let result = {}
//     array.forEach(element => {
//         let token = element.split(' <-> ');
//         let city = token[0];
//         let population = Number(token[1]);
//         if (result[city] == undefined) {
//             result[city] = population;
//         } else {
//             result[city] += population;
//         }
//     });
//     for (let town in result){
//         console.log(`${town} : ${result[town]}`);
//     }
// }
// // townPopulation(['Sofia <-> 1200000',
// // 'Montana <-> 20000',
// // 'New York <-> 10000000',
// // 'Washington <-> 2345000',
// // 'Las Vegas <-> 1000000'])

// townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']
// )



function townPopulation2(list) {
    const result = {};
    for (const el of list) {
        const tokens = el.split(' <-> ');
        let name = tokens[0];
        let pop = Number(tokens[1]);

        if (result[name] != undefined) {
            pop += result[name] // pop = pop + result[name];
        }
        
        result[name] = pop;
    }
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}
townPopulation2(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)