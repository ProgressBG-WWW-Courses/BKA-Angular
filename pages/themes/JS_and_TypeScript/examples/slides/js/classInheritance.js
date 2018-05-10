class Person {
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

class Student extends Person {
  constructor(firstName, surName, course){
    // use the parent constructor
    super(firstName, surName);
    // add other specific to Student values:
    this.course = course;
  }

  // extend the greet functionality
  greet(){
    return `${super.greet()} and I'm studing ${this.course}!`
  }
}

maria = new Student("Maria", "Popova", "React")
ivan = new Student("Ivan", "Ivanov", "Angular")

console.log( maria.greet() );
console.log( ivan.greet() );