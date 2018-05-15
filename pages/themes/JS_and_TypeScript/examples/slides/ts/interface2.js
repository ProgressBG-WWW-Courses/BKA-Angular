function getData(callback) {
    callback('Do something with data');
}
getData(function (data) { return console.log(data); });
// Do something with data
getData("Do something else with data");
