function demo(){
let array1 = [1, 2, 3, 4];
let reducer = (accumulator, currentValue) => accumulator+currentValue;
console.log(array1.reduce(reducer, 2));
}
demo()