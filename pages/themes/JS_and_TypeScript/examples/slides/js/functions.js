// // positional parameters
// // x, y are positional parameters
// function sum(x,y){
//   return x+y;
// }

// // x, y are positional parameters
// var sum2 = function(x,y){
//   return x+y;
// }

// console.log( sum(2,3) );
// console.log( sum(40,2) );


// // default parameters
// var say_hello = function(name="Anonymous"){
// 	console.log(`Hello ${name}`);
// }

// name = "Ada"
// say_hello(name)
// say_hello()

// // Rest Parameter
// function sum(x,y, ...rest){
// 	let sum = x+y;
// 	for(n of rest){
// 		sum+= n
// 	}

//   return sum;
// };
// console.log( sum(1,2,3) );
// console.log( sum(1,2,3,4) );

// function as variable
var f = function(){return 5}

console.log( f() + 2 )