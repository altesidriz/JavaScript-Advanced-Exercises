function ObjectAndCompositions () {

    let myObj ={
        name :'Altes',
        city: 'Silistra',
        age: 32,
    }

    let newObj = Object.assign({}, myObj); // copy of an object
    let newObj2 = {...myObj}; // another way of copiing an obj , examples>>>>

    newObj.name = 'Elisha';
    newObj2.age = 31;


    //Associative arrays==object 'dictionary'

    for (const entries in myObj) { 
        let entries = Object.entries(myObj);
        console.log(entries);
    };
    let keys = Object.keys(myObj);
    let values = Object.values(myObj);



}
ObjectAndCompositions ()