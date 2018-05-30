class Person {
  // public parameters in a constructor is a shorthand to automatically create properties with that name.
  constructor(public firstName: string, public surName: string) {
    this.name = `${this.firstName} ${this.surName}`
  }
}

class Dog {
  constructor(public name: string){}
}

interface IGreet{
  name: string;
}
function greet(greeter: IGreet) {
    return `Hi, i'm ${greeter.name}!`;
}

let maria = new Person("Maria", "Popova");
let pluto = new Dog("Pluto");