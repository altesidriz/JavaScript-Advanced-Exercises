function smallestTwoNumbers(numbers) {

    numbers.sort((a, b) => a - b).splice(2)
    console.log(numbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
smallestTwoNumbers([3, 0, 10, 4, 7, 3])

function second(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < arr[i + 1]) {
            result.unshift(arr[i]);
        }else{
            result.push(arr[i]);
        }
        while (result.lenght <= 2) {
            return result;
        }
    }
    console.log(result.join(' '));
}
second([30, 15, 50, 5])