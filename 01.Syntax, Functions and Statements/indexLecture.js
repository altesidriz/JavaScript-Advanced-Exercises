// //---------------------------------------Functions------------------------
// // Function declaration >>>>  Can be accepted in all scoupe
// function result(a, b) {
//     return a + b;
// }
// let print = result(5, 6);
// console.log(print);

// // Function expression >>>>    Can not be accessbefore initialization
// let result1 = function (a, b) {
//     return a / b;
// }
// let print1 = result1(5, 6)
// console.log(Math.floor(print1));

// // Arrow funtion (Lambda Function) >>>>       Can not be accessbefore initialization
// let result2 = (a, b) => {
//     return a * b;
// }
// let print2 = result2(5, 6)
// console.log(print2);

// let result2 = (a, b) => a ** b;
// let print3 = result2(5, 6);
// console.log(print3);
// console.log(result2(3,4)) 
//-----------------------Object Methods and Standart Library --------------------

//~~~~~~~~Math,Number,Date,RegExp,JSON~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String >>>> STRING
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  >>>>> NUMBER
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date >>>> DATE
//

let myString = 'Hello Java Script !';
console.log(myString.toLowerCase());

//--------------------------------------------------
let cat = {
    name: 'Imane',
    meow: function () {
        console.log(`${this.name}: Meow!`);
    }
}
cat.meow();

function printStars(count = 5) {
    for (i = 1; i <= count; i++) {
        console.log("*".repeat(count));
    }
}
printStars(7)