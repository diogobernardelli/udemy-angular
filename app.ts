class Spacecraft {
	constructor (public propulsor:string){}

	jumpIntoHyperspace(){
		console.log(`Entering hyperspace with ${this.propulsor}`);
	}
}

let ship = new Spacecraft("hyperdive");
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements ContainerShip {
	cargoContainer:number
	
	constructor() {
		super('hyperdrive')
		this.cargoContainer = 2
	}

	jumpIntoHyperspace() {
		if (Math.random() >= 0.5) {
			super.jumpIntoHyperspace()
		} else {
			console.log('Failed to jumpt into hyperspace')
		}
	}
}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace()

interface ContainerShip {
	cargoContainer: number
}

let goodForTheJob = (ship:ContainerShip) => ship.cargoContainer > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)