var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
        this.name = this.firstName + " " + this.surName;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + this.name + ".");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, surName) {
        return _super.call(this, firstName, surName) || this;
    }
    Student.prototype.greet = function () {
        // super.greet();
        console.log("I'm late for school, so see you...");
    };
    return Student;
}(Person));
var maria = new Person("Maria", "Popova");
var ivan = new Student("Ivan", "Ivanov");
maria.greet();
ivan.greet();
