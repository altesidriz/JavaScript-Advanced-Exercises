function jsonCompartion(arr) {
    let obj = {};

    let name = arr.shift().split(' ').filter(x => x != '|');
    //console.log(name);

    for (let i = 0; i < arr.length; i++) {
        let info = arr[i].split(' ').filter(e => e != '|');
        //console.log(info);
        for (let j = 0; j < info.length; j++) {

           obj[name[j]] = info[j]
        }
        console.log(JSON.stringify(obj));
    }

}
jsonCompartion(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)