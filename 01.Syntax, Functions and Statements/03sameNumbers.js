function sameNumbers(number){
    let numberToString = number.toString();
    let firstDigit = numberToString[0];
    let isSame = true;
    let sumSameNumbers = 0;

    for(let i = 0; i < numberToString.length; i++){
        if(numberToString[i] !== firstDigit){
            isSame = false;
        }
        sumSameNumbers += Number(numberToString[i])
    }
    console.log(isSame);
    console.log(sumSameNumbers);
}
sameNumbers(2)