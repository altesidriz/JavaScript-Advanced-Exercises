function calorieObject(arr){
    let obj = {};

    // for (let index = 0; index < arr.length; index += 2){
    //     let product = arr[index];
    //     let calories = arr[index + 1];
    //     obj[product] = Number(calories);
    // }

    while(arr.length !== 0){
        let product = arr.shift();
        let calories = arr.shift();
        obj[product] = Number(calories);
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']