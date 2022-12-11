function greatestCommonDivisor(a, b) {
    let greatestNum = 0;

    if(a > b){
        greatestNum = a;
    }else{
        greatestNum = b;
    }
    
    for(i = greatestNum; i >= 0; i--){
        if(a % i === 0 && b % i === 0){
            console.log(i);
            break;
        }
    }  
}
greatestCommonDivisor(2154, 458)