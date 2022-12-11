function agregateElements(array){
    let sum = 0;
    let inverse = 0; 
    let concat = ''; 
    for(let element of array){
        sum += element;
        inverse += (1/element);
        concat += element;  
    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);

}
agregateElements([2, 4, 8, 16])