// function lastKNumbersSequence(n, k){
//     let start = 0;
//     let end = k;
//     let sum = 0;
//     let container = [1];

//     for (let i = 1; i < n; i++){
//        let result = container.slice(start,end)
//        result.forEach(x => sum +=x);
//        container.push(sum);
//        start++;
//        end++;
//        console.log(result);
//     }

// container.push(2,3,4,5,6);
// let result = container.slice(1,4);
// result.forEach(x => sum += x);
// console.log(sum);

// }
// lastKNumbersSequence(6, 3)

function demo(n, k) {
    let start = 0;
    let end = k;
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let result = arr.slice(start, end);
        result.forEach(x => sum += x)
        arr.push(sum);
        if (i >= k) {
            start++;
        }
        end++;
    }
    return arr;
}
demo(8, 2)