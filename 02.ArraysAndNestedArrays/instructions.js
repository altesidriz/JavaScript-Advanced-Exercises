// // what we learn most importand parts typed here, cheatsheet

// //for of loop: is a iterration throug elements of and array
// const array1 = ['a', 'b', 'c'];

// // for (const element of array1) {
// //   console.log(element);
// // }

// // prototype.trim() -> clears white space after the logged text
// // let a = "dasd";
// // let b = "dasdasda ";
// // let result = a+b;
// //console.log(result.trim())

// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// //DESTRUCTING SYNTAXIS OF ARRAY

// const myArr = [10, 20, 30, 40, 50];
// //let firstEl = myArr[0];
// //let secondEl = myArr[1];
// const [firstEl, secondEl] = myArr; //destruction tying
// console.log(firstEl, secondEl);
// const [a, b, c, ...restofit] = myArr;  //-----------> this is rest operator
// console.log(a, b, c,restofit);
// console.log(...restofit);  //--------------------> this is spread operator

// ////////////////////////////////////////////////////////////////////////////
// //MUTATION OF AN ARRAY

// // array.pop();//takes the last element [1, 2, 3] pop ----> 3 ==> [1, 2]
// // array.push();//adds element at last  [1, 2]  3<-----push ==> [1, 2, 3]
// // array.shift();//takes from beginning
// // array.unshift();//adds to beggining 

// let array = [1, 2, 3, 4, 5, 6];

// array.splice(2, 1, 25, 35)
// let b = array.splice(2, 0, 25, 35)
//  console.log(b);

// const arr = [1, 7, 3, 2, 10]
//  arr.sort(a- b)
//  console.log(arr);

let arr2= ['Elisha','Mary','amber']
arr2.sort((a, b) => (a.localeCompare(b)))
console.log(arr2);


