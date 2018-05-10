interface Callback {
  (data: any): void;
}

function getData(callback: Callback) {
  callback('Do something with data');
}

getData( (data) => console.log(data) ); // OK

getData("Do something else with data")
// error TS2345: Argument of type '"Do something else with data"' is not assignable to parameter of type 'Callback'