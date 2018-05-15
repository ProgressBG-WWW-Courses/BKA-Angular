// create a decorator
function logDecor(target){
	console.log(target)
	return function(){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		target()
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

@logDecor()
function greet(){
	console.log(`Hi, I'm ${this.userName}`)
}