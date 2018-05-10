// create a decorator
function logDecor(f,name){
	return function(){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		f(name)
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

//decorate the function:
@logDecor(f,"Ada")
function f(name){
	console.log(`Howdy ${name}!`);
}
// use the decorated function
f()