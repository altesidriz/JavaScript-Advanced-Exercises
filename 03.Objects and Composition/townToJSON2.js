function jsonComparsion2(array){
    let result = [];
    class Town {
        constructor(town, latitude, longitude){
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }
    for (let index = 1; index < array.length; index++) {
        const element = array[index].split('|').map(t=>t.trim()).filter(x => x.length != 0);
        let townName = element[0];
        let latitude = Number(element[1]);
        let longitude = Number(element[2]);
        let myTown = new Town(townName, latitude, longitude)
        result.push(myTown)
    }
    return JSON.stringify(result)
}
console.log(jsonComparsion2(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))