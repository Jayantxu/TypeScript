/**
* basic Type Test
*/

let isDone: boolean = false;
let isDoneTrue: Boolean = true;
// let isDone: boolean = 'Jayant'; // error


let decimal: Number = 4;
// let decimal: Number = false; // error


let userName: String = 'Jayant';
let longText: String = `Hello, my name is ${ userName }`
let longTexthasNumber: String = `Hello, my name is ${ decimal }`


let listArr: number[] = [1,2,3];
// let listArr: String[] = [1,2,3]; // error
let numberArr: Array<number> = [1,2,3,4];


let xTuple: [string, number];
xTuple = ['Jayant', 2];
// xTuple = [2, 'Jayant'] // error
// xTuple[3] = 'Xu' // error

// 枚举
// enum Color {Red, Green, Blur};
// let c:Color = Color.Green;
enum Color {'Jayat', 'Xu'};
let c:Color = Color['Jayat'];
let d:Color = Color['Xu'];
console.log(c); // 0
console.log(d); // 1


// Any - noSure Type
let noSure:any = 4;
console.log(noSure);
noSure = 'test';
console.log(noSure);
let listAnyArr: any = ['Jayat', 1, false];



// Void
function warnUser(): void {
	console.log('no value return');
}
// function warnString(): String {
//	 return false; // erro
// }


// null & undefined
let nu: null = null;
let un: undefined = undefined;


// Object
// declare function resolveObject(o: Object | null) { // error
// 	 console.log(o);
// }
// resolveObject('Jayat');


