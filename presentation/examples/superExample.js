class Animal {
	constructor(name) {
		console.log('Animal constructor');
		this.name = name;
	}

	walk() {
		console.log("I walk: " + this.name);
	}
}

class Rabbit extends Animal {
	constructor(){
		super('Some name');
		console.log('Rabbit constructor')
	}
	walk() {
		super.walk();
		console.log("...and jump!");
	}
}

new Rabbit("Вася").walk();

//Animal constructor
//Rabbit constructor
//I walk: Some name
//...and jump!