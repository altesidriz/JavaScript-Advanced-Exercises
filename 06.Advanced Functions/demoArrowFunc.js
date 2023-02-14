const func = () => console.log(this);
const obj = {
    name: 'Peter',
    func
}

obj.func()