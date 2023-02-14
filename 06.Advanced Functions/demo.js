function printContext(){
    console.log(this);
}

// const obj = {
//     counter: 5,
//     printContext   
// }
// //obj.printContext();

// document.querySelector('button').addEventListener('click', printContext);//->> same reference obj.printContext

const obj = {
    counter: 5,
}
printContext.apply(obj);   