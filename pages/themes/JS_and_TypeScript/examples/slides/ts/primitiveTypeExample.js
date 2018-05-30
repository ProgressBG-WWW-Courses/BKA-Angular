var start = false;
var age = 16;
var userName = "Ada";
var dataList = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var anything = 42;
anything = "now I'm a string";
anything = false;
function showMessage(msg) {
    console.log(msg);
}
showMessage('Howdy!');
