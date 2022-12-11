function biggestElement(array){
    let maxNumber = [];
    for (let row of array){
        for (let col in row){
        maxNumber.push(row[col]);
    }
}
console.log(Math.max(...maxNumber));
}
biggestElement([[20, 50, 10],
                [8, 33, 145]])

