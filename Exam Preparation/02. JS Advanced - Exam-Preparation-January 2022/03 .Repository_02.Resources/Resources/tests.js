let { expect } = require('chai');
let { Repository } = require("./solution.js");

describe("Repository Test", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    //Initialize the repository
    // let repository = new Repository(properties);
    // Add two entities
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    
    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe("Initialization", function () {
        it("Should add props property on init", function () {
            let repository = new Repository(properties);
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
        });

        it("Should have property data on init", function () {
            let repository = new Repository(properties);
            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
        })
    });

    describe('Add etity', function () {
        it('Should return incremented id if valid entity', function () {
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });
        it('Should store valid entity in data map', function () {
            let repository = new Repository(properties);
            repository.add(entity);
            expect(repository.data.get(0)).not.to.be.undefined;
            // expect(repository.data.get(0)).to.deep.equal(entity);
            expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
            expect(repository.data.get(0)).to.have.property('age').that.equals(22);
        })
        it('Should throw error if property is missing', function () {
            let entity = {
                name: "Pesho",
                age: 22,
            };

            let repository = new Repository(properties);
            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`);
        });
        it('Should throw error if type of property is incorrect', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            };

            let repository = new Repository(properties);
            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is not of correct type!`);
        })
    });

    describe("Get count", function () {
        it('Should return number of valid entities', function () {
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            expect(repository.count).is.equal(3)
        });
        it('Should return zero if no added entities', () => {
            let repository = new Repository(properties);
            //repository.add(entity);
            expect(repository.count).is.equal(0);
        })
    });

    describe("Get ID", function(){
        it('Should return entity by id', ()=>{
            let repository = new Repository(properties);
            repository.add(entity);
            expect(repository.getId(0)).to.deep.equal(clonedEntity);
        });
        it('Should throw error when no id is found', ()=>{
            let repository = new Repository(properties);
            expect(()=>repository.getId(1)).to.throw(Error, `Entity with id: 1 does not exist!`);
        });
    });

    describe("Update", function(){
        it("Should update a valid entity with another", function(){
            let newEntity = {
                name: "Pesho",
                age: 32,
                birthday: new Date(1998, 0, 7)
            };
            let repo = new Repository(properties);
            repo.add(entity);
            repo.update(0, newEntity);
            expect(repo.getId(0).age).to.equal(32);
        });
        it("Should throw error if entity not exist ", function(){
            let repo = new Repository(properties);

            expect(()=>repo.update(2, entity).to.throw(Error , `Entity with id: 2 does not exist!`));
        })
    });
});
