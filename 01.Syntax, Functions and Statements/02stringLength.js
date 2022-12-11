function stringLength(s1,s2,s3){
    let sumLength = s1.length + s2.length + s3.length;
    let avgSum = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(avgSum);
}
stringLength('pasta', '5', '22.3')