// default parameters
var say_hello = function (name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello " + name);
};
var userName = "Ada";
say_hello(userName);
say_hello();
