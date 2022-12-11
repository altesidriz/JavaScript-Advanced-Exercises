function largestNumber (...params){
    let arr = [...params]    
    arr.sort((a,b) => a-b);
   let largestNum = arr.pop()
   console.log(`The largest number is ${largestNum}.`);
}
largestNumber(5, -3, 16)

function secondSolution (...params){
    console.log(Math.max(...params));
}
secondSolution(5, -3, 16)