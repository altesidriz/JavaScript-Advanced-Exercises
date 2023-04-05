class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];

    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantNameAA, quantity) {

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        const plant = this.plants.find(p => p.plantName == plantNameAA);

        if (plant == undefined) {
            throw new Error(`There is no ${plantNameAA} in the garden.`)
        }
        // if(!this.plants.includes(plantName)){
        //     throw new Error(`There is no ${plantName} in the garden.`)
        // }

        if (plant.ripe) {

            throw new Error(`The ${plantNameAA} is already ripe.`)
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantNameAA} has successfully ripened.`
        } else {
            return `${quantity} ${plantNameAA}s has successfully ripened.`
        }

    }
    harvestPlant(plantNameBB) {
        const plantIndex = this.plants.findIndex(p => p.plantName == plantNameBB);
        if (plantIndex == -1) {
            throw new Error(`There is no ${plantNameBB} in the garden.`);
        }
        const plant = this.plants[plantIndex];

        if (plant.ripe == false) {
            throw new Error(`The ${plantNameBB} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantNameBB,
            quantity: plant.quantity
        });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantNameBB} has been successfully harvested.`
    }
    generateReport() {
        const plantAsString = this.plants.map(p => p.plantName).sort((a,b) => a.localeCompare(b));
        const plantsRow = `Plants in the garden: ${plantAsString.join(', ')}`;

        let storageRow = `Plants in storage: The storage is empty.`;

        if(this.storage.length > 0) {

            const storageAsString = this.storage.map(s => `${s.plantNameBB} (${s.quantity})`);
            storageRow = `Plants in storage: ${storageAsString.join(', ')}`
        }

        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantsRow,
            storageRow
        ].join('\n')
    }
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


