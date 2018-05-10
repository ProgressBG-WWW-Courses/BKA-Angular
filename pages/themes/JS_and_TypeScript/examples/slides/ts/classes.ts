class Person {
  // class properties
  firstName = "";
  surName = "";

  // the class constructor
  constructor(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
  }

  // class methods
  name() {
    return `${this.firstName} ${this.surName}`;
  }

  greet() {
    return `Hi, i'm ${this.name()}!`;
  }
}

maria = new Person("Maria", "Popova")
ivan = new Person("Ivan", "Ivanov")

maria.greet()