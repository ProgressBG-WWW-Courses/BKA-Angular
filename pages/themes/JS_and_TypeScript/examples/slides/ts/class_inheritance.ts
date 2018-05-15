class Person {
	name: string;

  constructor(public firstName: string, public surName: string) {
  	this.name = `${this.firstName} ${this.surName}`;
  }

  greet(){
  	console.log(`Hello, my name is ${this.name}.`)
  }
}

class Student extends Person{
	constructor(firstName: string, surName: string){super(firstName, surName)}

	greet(){
		// super.greet();
		console.log(`I'm late for school, so see you...`)
	}
}

let maria = new Person("Maria", "Popova");
let ivan = new Student("Ivan", "Ivanov");

maria.greet();
ivan.greet();