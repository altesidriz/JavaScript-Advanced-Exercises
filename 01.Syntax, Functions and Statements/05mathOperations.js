// function mathOperations(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '*': result = num1 * num2; break;
//         case '/': result = num1 / num2; break;
//         case '%': result = num1 % num2; break;
//         case '**': result = Math.pow(num1, num2); break;
//     }
//     console.log(result);
// }
// mathOperations(3, 5.5, '*')

// function secondSolve(x, y, func) {
//     return func(x, y);
// }
// console.log(secondSolve(3, 5.5, (x, y) => x + y));
// console.log(secondSolve(x, y, (x, y) => x - y));
// console.log(secondSolve(x, y, (x, y) => x * y));
// console.log(secondSolve(x, y, (x, y) => x / y));
// console.log(secondSolve(x, y, (x, y) => x % y));
// console.log(secondSolve(x, y, (x, y) => x ** y));

function solve(a, b, operator) {

    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }

    console.log(operations[operator](a,b))

}
solve(3, 3, '*')