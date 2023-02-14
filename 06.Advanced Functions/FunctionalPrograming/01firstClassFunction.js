/* >First-class functions are treated like any other variable
        >>Passed as an argument
        >>Returned by another function
        >>Assigned as a value to a variable
 */
//Example:
function sayHello() {
    return "Hello, ";
}
function sayCool (){
    return "So cool is "
}

function greeting (helloMessage, name){
    return helloMessage() + name
}                   // as you see here helloMessage in func greeting refers to a function
                    // which afterwards comes as sayHello (and this function could be any other func)
                    // like counter func

console.log(greeting(sayHello, 'JavaScript!'));
console.log(greeting(sayCool, 'JavaScript!'));