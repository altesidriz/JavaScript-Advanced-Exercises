function fromJSON(string){
let arr = JSON.parse(string);
console.log(arr)
}
fromJSON(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`)