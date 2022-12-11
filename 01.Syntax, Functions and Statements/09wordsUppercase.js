function wordsUppercase(text){

    let allLowerCase = text.toLowerCase();
    let outputText = '';
    let outputArr = [];

    for(i = 0; i < allLowerCase.length; i++){
        let chCode = allLowerCase.charCodeAt(i);
        if(chCode >= 97 && chCode <= 122){
            outputText += String.fromCharCode(chCode).toUpperCase();
        }else{
            outputArr.push(outputText);
            outputText = '';
        }
    } 
    
    if(outputText){
        outputArr.push(outputText)
    }
    const result = outputArr.filter(x => x.length > 0);
    console.log(result.join(', '));
}
wordsUppercase('Hi, how are you?')
console.log('*******************************************');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')
wordsUppercase('hello')

function regExpSolution(text){
    return text.match(/\w+/g).join(', ').toUpperCase();
}