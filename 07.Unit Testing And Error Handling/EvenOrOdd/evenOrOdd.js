function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 1) {
        return "even";
    }

    return "odd";
}
isOddOrEven("a")

module.exports = { isOddOrEven }