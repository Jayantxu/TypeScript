/**
* TypeScript 的类型兼容基于结构子类型
*/

// 如果 x 要兼容 y, 那么y 至少具有和 x相同的属性。

interface Named {
	name: string
}
let x: Named;
let y = {name: 'Alice', location: 'Seattle'};
x = y ;
console.log(x);
console.log(y);

// 检查函数参数也具有相同的规则
function greet(n: Named) {
	console.log('Hello' + n.name);
}
greet(y);



// 比较两个函数
let x1 = (a: number) => 0;
let y1 = (a: number, b: string) => 0;

y1 = x1;
// x 能赋值给 y, 因为 x 具备了 y 里能找到对应类型的参数。
// x = y; // error 因为 y 内 具备 x 中没有的参数， 所以无法进行赋值


// 可选参数 和 额外参数
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));


// 类
// 类的比较的时候,只有实例的成员会被比较，静态成员和构造函数不在比较范围内
class Animal {
	feet: number
	constructor(name: string, numFett: number){}
}
class Size {
	feet: number;
	constructor(name: string) {}
}
let aa: Animal;
let ss: Size;
aa = ss;
ss = aa;


// 泛型
interface Empty<T> {
}
let xxx1:  Empty<number>;
let yyy2: Empty<string>;
xxx1 = yyy2; 


interface Empty2<T> {
	data: T;
}
let xxx11:  Empty2<number>;
let yyy22: Empty2<string>;
// xxx11 = yyy22; // error because x and y are not compatible


