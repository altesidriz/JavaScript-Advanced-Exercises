function negativePositiveNumbers(nums) {
    const newArray = []
    for (element of nums) {
        if(element < 0){
            newArray.unshift(element)
        }else{
            newArray.push(element)
        }
    }
    for(element of newArray){
        console.log(element);  //--------> console.log(newArry.join('\n')) ---->can do it in this way too:)
    }
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

