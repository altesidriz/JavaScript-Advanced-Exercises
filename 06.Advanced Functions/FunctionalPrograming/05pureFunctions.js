console.log(`Eaxmple for a function with side-effect`)
let counter = 0;
function increment(n) {
    return counter += n;
}
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));

console.log(`__________________________________________________`);

console.log(`Example for pure function`)
function pureIncrement(count, n){
    count += n;
    return count;
}
console.log(pureIncrement(0, 1));
console.log(pureIncrement(0, 1));
console.log(pureIncrement(0, 1));