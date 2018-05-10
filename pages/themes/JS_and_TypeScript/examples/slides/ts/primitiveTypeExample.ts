let start: boolean = false;
let age: number = 16;
let userName: string = "Ada";
let dataList: number[] = [1, 2, 3];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

let anything: any = 42;
anything = "now I'm a string";
anything = false;

function showMessage(msg: string): void {
  console.log(msg);
}
showMessage('Howdy!');