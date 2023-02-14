function solve(){
    let users = [
        {name: 'Tim', age: 25},
        {name: 'Sam', age: 30},
        {name: 'Bill', age: 20},
    ]

    getName = (user) => user.name; //take this row as you see in the bracets of map function
    userNames = users.map(getName);// users.map(user => user.name)// this name comes from obj users 
    console.log(userNames);

    function getAge(blahblah) { // i named it blahblah to see that it is just a parameter u use for implementing
        return blahblah.age
    };
    userAge = users.map(getAge);
    console.log(userAge);

}
solve();