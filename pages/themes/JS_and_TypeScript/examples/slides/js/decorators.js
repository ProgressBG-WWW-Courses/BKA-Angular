// create a decorator
function logDecor(f,name){
	return function(){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		f(name)
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

//a function, to be decorated:
function f(name){
	console.log(`Howdy ${name}!`);
}
// decorate the function:
f = logDecor(f,"Ada")

// use the decorated function
f()