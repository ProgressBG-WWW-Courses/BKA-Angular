var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// create a decorator
function logDecor(target, name, descriptor) {
    // return function(){
    // 	console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
    // 	target()
    // 	console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
    // }
    console.dir(target);
}
//decorate the method:
var Person = /** @class */ (function () {
    function Person(userName) {
        this.userName = "";
        this.userName = userName;
    }
    Person.prototype.greet = function () {
        console.log("Hi, I'm " + this.userName);
    };
    __decorate([
        logDecor
    ], Person.prototype, "greet");
    return Person;
}());
