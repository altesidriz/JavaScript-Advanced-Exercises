function biggerHalf(numbers) {
    let result = [];
    numbers.sort((a, b) => a - b);
    let division = Math.floor(numbers.length / 2);
    return numbers.slice(division).join('\n')
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log('`````````````````````');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6])); 