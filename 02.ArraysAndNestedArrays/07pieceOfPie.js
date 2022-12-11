// function pieceOfPie(pies, flavour1, flavour2) {
//     let sliceStart = 0;
//     let sliceEnd = 0;

//     if(pies.includes(flavour1)&&pies.includes(flavour2)){
//         sliceStart = pies.indexOf(flavour1);
//         sliceEnd = pies.indexOf(flavour2);
//     }
//     let result = pies.slice(sliceStart,sliceEnd+1)
//     return result.join('\n');
// }

function pieceOfPie(pies, start, end){
    const startIndex = pies.indexOf(start);
    const endIndex = pies.indexOf(end)+1;

    console.log(pies.slice(startIndex, endIndex).join('\n'))
}


console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

// console.log('``````````````````````````````````````');
// pieceOfPie(['Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie')
