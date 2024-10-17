//complete this code
   class Animal {
	    constructor(species){
		this._species=species
			get species(){
				return this._species;
			}

			makeSound(){
				console.log(`the ${this.species} makes a sound`);
			}
	}
}

class Cat extends Animal {
	constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
	constructor(soecies){
		super(species);
	}
	bark(){
		console.log("woof");
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
