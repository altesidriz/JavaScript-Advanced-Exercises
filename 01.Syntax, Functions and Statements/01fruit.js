function fruit(...params){
    let money = (params[1]*params[2]/1000).toFixed(2);
    console.log(`I need $${money} to buy ${(params[1]/1000).toFixed(2)} kilograms ${params[0]}.`);
}
fruit('apple', 1563, 2.35)