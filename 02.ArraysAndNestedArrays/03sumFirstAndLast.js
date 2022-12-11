 function sum(array){
    let a = [...array].shift();
    let b = [...array].pop();
    let result = Number(a)+ Number(b);
    console.log(result);
}
sum([2, 3, 4, 5]);