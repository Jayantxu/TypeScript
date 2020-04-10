/**
* 泛型
*/
// 定义泛型, T 获取用户传入的类型,之后就可以使用这个类型
function identity<T>(arg: T): T {
	return arg;
}


// 使用泛型
let output = identity<string>('myString');
let output2 = identity('myString2');


// 使用泛型变量
function identity2<T>(arg: T): T {
	return arg;
}


// 泛型接口
interface GenericIdentityFn {
	<T>(arg: T): T;
}
function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity3;

// OR
interface GenericIdentityFn2<T> {
	(arg: T): T;
}
function identity5<T>(arg: T): T {
	return arg;
}
let myIdentity2: GenericIdentityFn2<string> = identity5;


// 泛型类
class GenericIdentityFn3<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericIdentityFn3<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


// 泛型约束，
// 因为传入的 T 可能有很多类型，不一定拥有.length 属性

// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }


interface Lengthwise {
	length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
Error 
	return arg;
}


