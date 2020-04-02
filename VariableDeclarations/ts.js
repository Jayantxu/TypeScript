/**
* How to Use
* npm install -g typescript
* cmd tsc ts.ts
*/

/**
* basic Type Test
*/
var isDone = false;
var isDoneTrue = true;
// let isDone: boolean = 'Jayant'; // error
var decimal = 4;
// let decimal: Number = false; // error
var userName = 'Jayant';
var longText = "Hello, my name is " + userName;
var longTexthasNumber = "Hello, my name is " + decimal;
var listArr = [1, 2, 3];
// let listArr: String[] = [1,2,3]; // error
var numberArr = [1, 2, 3, 4];
var xTuple;
xTuple = ['Jayant', 2];
// xTuple = [2, 'Jayant'] // error
// xTuple[3] = 'Xu' // error
// 枚举
// enum Color {Red, Green, Blur};
// let c:Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Jayat"] = 0] = "Jayat";
    Color[Color["Xu"] = 1] = "Xu";
})(Color || (Color = {}));
;
var c = Color['Jayat'];
var d = Color['Xu'];
console.log(c); // 0
console.log(d); // 1
// Any - noSure Type
var noSure = 4;
console.log(noSure);
noSure = 'test';
console.log(noSure);
var listAnyArr = ['Jayat', 1, false];
// Void
function warnUser() {
    console.log('no value return');
}
// function warnString(): String {
//	 return false; // erro
// }
// null & undefined
var nu = null;
var un = undefined;
// Object
// declare function resolveObject(o: Object | null) { // error
// 	 console.log(o);
// }
// resolveObject('Jayat');
