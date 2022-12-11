function squareOfStars(count = 5) {
    let symbol = '*';
    for (i = 1; i <= count; i++) {
        console.log(symbol.concat(' ').repeat(count));
    }
}
squareOfStars(5)

function printStars(count = 5) {
    for (i = 1; i <= count; i++) {
        console.log("* ".repeat(count));
    }
}
printStars(7)