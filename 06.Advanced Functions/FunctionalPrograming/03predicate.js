/* Predicates 
    >> Any function that returns a bool based on evaluation of the truth of an assertion 
    >> Predicates are often found in the form of callbacks
*/
function solve(arr) {

    let found = arr.find(isFound);

    function isFound(element) {
        return element > 10; //returns True or false
        }

    console.log(found);
}
solve([5, 12, 7])