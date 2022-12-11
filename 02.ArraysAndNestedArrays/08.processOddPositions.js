function processOddPositions(numArr) {
    let result = [];

    for (let i = 0; i < numArr.length; i++) {
        if (i % 2 !== 0) {
            result.push(numArr[i] * 2);
        }
    }
    return (result.reverse().join(' '));
}
console.log(processOddPositions([10, 15, 20, 25]));

function processOddPositions2(nums){

    const odd = nums.filter((x,i)=> i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));

}
processOddPositions2([10, 15, 20, 25])

function processOddPositions3(nums){          // sgasten variant
    return (nums
        .filter((x,i)=> i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));

}
processOddPositions3([10, 15, 20, 25])