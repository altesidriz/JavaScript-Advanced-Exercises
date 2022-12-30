function heroicInventory(input){

    let obj = {};
    let jsonArr =[];
    let jsonFormat = "";
    for(let element of input){
        [name, level, items] = element.split(' / ');
        level=Number(level);
        items = items ? items.split(', '):[];
        jsonArr.push({name, level, items});
    }
    console.log(JSON.stringify(jsonArr));
//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
