// function carFactory(input) {
//     let engineModify = {};
//     if (input.power <= 90) {
//         engineModify = {
//             power: 90,
//             volume: 1800
//         }
//     } else if (input.power <= 120) {
//         engineModify = {
//             power: 120,
//             volume: 2400
//         }
//     } else {
//         engineModify = {
//             power: 200,
//             volume: 3500
//         }
//     }


//     let wheelRound = Math.floor(input.wheelsize);

//     if (wheelRound % 2 == 0) {
//             wheelRound -= 1;
//     }


//     return myObject = {
//         model: input.model,
//         engine: engineModify,
//         color: {
//             type: input.carriage,
//             color: input.color
//         },
//         wheels: [wheelRound, wheelRound, wheelRound, wheelRound],
//     }
// }
// let input = {
//     model: 'Ferrari',
//     power: 200,
//     color: 'red',
//     carriage: 'coupe',
//     wheelsize: 21
// };
// console.log(carFactory(input))

function carFactory(wantedCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }]
    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;
     let myArr = engines.filter(e => e.power >= wantedCar.power);
     console.log(myArr);
    return {
        model: wantedCar.model,
        engine: myArr[0] , // arr[0]
        carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

console.log(carFactory({model: 'Opel Vectra',
power: 130,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 
}
));
