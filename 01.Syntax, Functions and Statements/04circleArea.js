function circleArea (input){
    if(input === Number(input)){
        let area = Math.pow(input,2)*Math.PI
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}
circleArea(5)

function circleArea2 (input){
 let area = Math.pow(input,2)*Math.PI;

 input === Number(input) ? console.log(area.toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`); 
}
circleArea2(5)
