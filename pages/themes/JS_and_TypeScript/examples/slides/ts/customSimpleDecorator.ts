// create a decorator
function logDecor(target, name, descriptor){
	// return function(){
	// 	console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
	// 	target()
	// 	console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	// }
	console.dir(target)
}

//decorate the method:
class Person {
	userName = ""
	constructor(userName) {
		this.userName = userName;
	}

	@logDecor
	greet(){
		console.log(`Hi, I'm ${this.userName}`)
	}
}

